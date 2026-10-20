import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const fail = (message) => { throw new Error(message); };
const check = (condition, message) => { if (!condition) fail(message); };

const nav = read('lib/content.ts');
const headerNav = [...nav.matchAll(/\{ href: '([^']+)', label: '([^']+)' \}/g)].slice(-3).map((match) => [match[1], match[2]]);
check(JSON.stringify(headerNav) === JSON.stringify([['/', 'Home'], ['/services', 'Services'], ['/contact-us', 'Contact Us']]), 'Primary navigation contract changed');

const siteChrome = read('components/SiteChrome.tsx');
check((siteChrome.match(/<Attribution/g) || []).length === 2, 'Header and footer attribution must both remain present');
check(siteChrome.includes('Skip to main content'), 'Skip link missing');

const appFiles = [];
function collect(dir) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(rel);
    else if (/\.(ts|tsx|js|mjs)$/.test(entry.name)) appFiles.push(rel);
  }
}
collect('app');
const onceHubFiles = appFiles.filter((file) => /<iframe[^>]+(?:oncehub|scheduleonce)|go\.oncehub\.com/i.test(read(file)));
check(JSON.stringify(onceHubFiles) === JSON.stringify(['app/thank-you/page.tsx']), `OnceHub must exist only on thank-you; found ${onceHubFiles.join(', ')}`);
const thankYou = read('app/thank-you/page.tsx');
check(thankYou.includes('href={bookingUrl}') && thankYou.includes('src={bookingUrl}'), 'OnceHub fallback and iframe must share the exact configured destination');
check(thankYou.indexOf('href={bookingUrl}') < thankYou.indexOf('src={bookingUrl}'), 'OnceHub fallback link must precede the iframe');

const form = read('components/LeadForm.tsx');
const fields = [...form.matchAll(/name="([^"]+)"/g)].map((match) => match[1]);
const expectedFields = ['first_name', 'last_name', 'email', 'phone_country', 'phone', 'company', 'company_website', 'company_size', 'positions_to_fill', 'referral_source', 'message', 'source', 'website_url'];
check(JSON.stringify(fields) === JSON.stringify(expectedFields), 'Lead field names or order changed');
check(form.includes('.trackLead({'), 'Acknowledged-lead ACR event missing');
const trackedLeadBlock = form.match(/acrTracker\?\.trackLead\(\{([\s\S]*?)\n\s*\}\);/)?.[1] || '';
check(trackedLeadBlock && !trackedLeadBlock.includes('message'), 'Free-text message must not enter browser analytics');
check(!form.includes('onSubmit={submit}') && form.includes('type="button"'), 'Form must avoid the tracker native-submit scanner');
check(form.includes("result.status !== 'delivered'"), 'Client must require confirmed first-party delivery');
check(form.includes('window.acrTracker?.flush()'), 'Tracker flush after delivery missing');
check(form.includes("fetch('/api/submit-lead'"), 'First-party validation endpoint missing');

const config = read('public/acr-config.js');
check(config.includes("siteId: 'clinical-care-coordinator'"), 'ACR site ID changed');
check(config.includes("endpoint: '/ingest/track'"), 'ACR proxy endpoint changed');
const proxy = read('app/ingest/track/route.ts');
check(proxy.includes("payload.site_id !== SITE_ID"), 'ACR site envelope validation missing');
check(proxy.includes('MAX_BATCH_ITEMS = 200'), 'ACR replay capacity must match tracker backlog contract');
check(!proxy.includes('allowedEvents'), 'Do not constrain extensible ACR event names');

const leadApi = read('app/api/submit-lead/route.ts');
check(!leadApi.includes('ACR_LEAD_ENDPOINT'), 'Do not invent a second lead delivery endpoint');
check(leadApi.includes("x-requested-with") && leadApi.includes('isSameOrigin'), 'Lead endpoint request guards missing');
check(leadApi.includes("status: 'delivered'"), 'Lead endpoint must claim success only after confirmed server delivery');
check(leadApi.includes('sendLeadFallbackToMattermost') && leadApi.includes('if (!delivery.delivered)'), 'Lead endpoint must fail closed when delivery is unavailable');
const delivery = read('lib/lead-fallback-mattermost.ts');
check(delivery.includes('SITE_MATTERMOST_FALLBACK_WEBHOOK_URL'), 'Documented site delivery configuration missing');
check(delivery.includes("reason: 'not_configured'") && delivery.includes('response.ok ? { delivered: true }'), 'Delivery adapter must distinguish confirmed delivery from unavailable or rejected delivery');
check(!delivery.includes('ACR_HEALTH_URL'), 'Free-text delivery must not depend on analytics health');

const services = read('lib/site.ts');
check((services.match(/slug: '/g) || []).length === 6, 'Exactly six service records are required');
const servicePage = read('app/services/[slug]/page.tsx');
check(!/['"]provider['"]?\s*:/.test(servicePage), 'Unsupported Service provider relationship returned');

const reviews = JSON.parse(read('app/data/review-provenance.json'));
check(reviews.records.length === 10, 'Exactly ten sourced reviews are required');
check(reviews.source && reviews.verifiedOn, 'Review provenance is incomplete');

const curated = read('lib/curated-content.ts');
check((curated.match(/indexable: true/g) || []).length === 11, 'Curated indexable article count changed');
for (const match of curated.matchAll(/thumbnail: '([^']+)'/g)) {
  check(fs.existsSync(path.join(root, 'public', match[1].replace(/^\//, ''))), `Missing editorial asset ${match[1]}`);
}

const layout = read('app/layout.tsx');
check(layout.includes('acrtracking.stealthagents.us/v1/tracker.js'), 'Central tracker script missing');
check(!/modal|popup/i.test(siteChrome + read('components/Marketing.tsx')), 'Timed modal or popup marker returned');

console.log(JSON.stringify({ status: 'passed', services: 6, reviews: 10, indexableArticles: 11, retainedLeadFields: expectedFields.length, onceHubRoute: onceHubFiles[0] }));

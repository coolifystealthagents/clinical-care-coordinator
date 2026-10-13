#!/usr/bin/env python3
import json,hashlib
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[2];DATA=json.loads((ROOT/'publishing/2026-10-12/release-data.json').read_text());OUT=ROOT/'public/thumbnails/october-12';OUT.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf'
def font(p,s):
 try:return ImageFont.truetype(p,s)
 except:return ImageFont.load_default()
def wrap(d,text,f,w):
 lines=[];line=''
 for word in text.split():
  test=(line+' '+word).strip()
  if d.textbbox((0,0),test,font=f)[2]<=w:line=test
  else:lines.append(line);line=word
 if line:lines.append(line)
 return lines
def make(item,i,kind):
 palettes=[((245,242,237),(70,107,88),(216,165,142)),((247,244,240),(99,75,99),(203,184,201)),((242,246,243),(48,91,77),(191,139,113)),((249,245,238),(76,105,123),(216,165,142))]
 bg,primary,accent=palettes[i%4];im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im);seed=int(hashlib.sha256(item['slug'].encode()).hexdigest()[:8],16)
 d.rectangle((0,0,18,630),fill=accent);d.rounded_rectangle((705,70,1125,555),34,fill=(255,255,255),outline=primary,width=5)
 for n in range(5):
  y=135+n*78;w=230+((seed>>(n*4))&110);d.rounded_rectangle((760,y,760+w,y+38),12,fill=[primary,accent,(203,184,201)][n%3]);d.ellipse((1060,y,1098,y+38),fill=bg,outline=primary,width=3)
 d.text((70,70),'RESEARCH BRIEF' if kind=='research' else 'CARE OPERATIONS GUIDE',font=font(bold,22),fill=primary)
 size=48
 while size>31:
  f=font(bold,size);lines=wrap(d,item['title'],f,560)
  if len(lines)<=4:break
  size-=2
 y=140
 for line in lines:d.text((70,y),line,font=f,fill=(38,50,45));y+=size+11
 d.text((70,520),'CLINICAL CARE COORDINATOR',font=font(bold,21),fill=primary);d.text((70,560),'2026-10-12',font=font(regular,18),fill=(92,98,94))
 return im
for i,item in enumerate(DATA['blogs']):make(item,i,'blog').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)
for i,item in enumerate(DATA['research']):make(item,i+12,'research').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)

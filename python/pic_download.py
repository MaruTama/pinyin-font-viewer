# -*- coding: utf-8 -*-
import os
import json
import requests

# json 読み込み
f = open('pinyin-fonts.json', 'r')
json_dict = json.load(f)
# print(json_dict)

# 千图网
qtw_fonts = json_dict["fonts"]["千图网"]
# 找字网
zzw_fonts = json_dict["fonts"]["找字网"]
# 绿斗堂字体网
ldtztw_fonts = json_dict["fonts"]["绿斗堂字体网"]


def download_img(img):
    r = requests.get(img)
    # プロトコル削除
    img = img.replace('http://','').replace('https://','')
    # 出力ファイル名 /で区切る
    output = os.path.join('img',*img.split('/'))
    outdir = os.path.dirname(output)
    if not os.path.isdir(outdir):
        os.makedirs(outdir)
    with open(output, 'wb') as f:
        f.write(r.content)

if __name__ == '__main__':
    print(len(zzw_fonts))
    for font in zzw_fonts:
        download_img(font["img_link"])

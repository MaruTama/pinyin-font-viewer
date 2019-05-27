'''
このスクリプトはフォントの画像を取得するスクレイピングをする
pyenv shell 3.5.0 2.7.14
python imges_name_getter.py
'''
import json
import requests
from bs4 import BeautifulSoup

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


# 千图网
for font in qtw_fonts:
    html = requests.get(font["url"])
    #HTMLパース用のオブジェクトを作成します。
    soup = BeautifulSoup(html.text,"html.parser")
    #画像の「show-area-pic」要素を抽出します。
    img = soup.find_all('img', class_="show-area-pic")
    print("https:{}".format(img[0]["src"]))
    font["img_link"] = "https:{}".format(img[0]["src"])

# 找字网
# for font in zzw_fonts:
#     html = requests.get(font["url"])
#     #HTMLパース用のオブジェクトを作成します。
#     soup = BeautifulSoup(html.text,"html.parser")
#     # 入れ子の画像要素を取得する
#     # https://stackoverflow.com/questions/23837056/beautiful-soup-searching-for-a-nested-pattern
#     img = soup.select('div.fonimg > img')
#     print("http://www.zhaozi.cn{}".format(img[0]["src"]))
#     font["img_link"] = "http://www.zhaozi.cn{}".format(img[0]["src"])

# 绿斗堂字体网
# for font in ldtztw_fonts:
#     html = requests.get(font["url"])
#     #HTMLパース用のオブジェクトを作成します。
#     soup = BeautifulSoup(html.text,"html.parser")
#     #画像の「show-area-pic」要素を抽出します。
#     img = soup.find_all('img', class_="ziti_banner")
#     # print(img)
#     print("http://m.lvdoutang.com{}".format(img[0]["src"]))
#     font["img_link"] = "http://m.lvdoutang.com{}".format(img[0]["src"])

# json.dump関数でファイルに書き込む
f = open('pinyin-fonts-new.json', 'w')
json.dump(json_dict, f, ensure_ascii=False)

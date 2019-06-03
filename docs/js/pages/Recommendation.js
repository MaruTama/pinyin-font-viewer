import React, { Component } from 'react';
import Code from 'react-code-prettify';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const codeExe = `$ fontforge -script build.pe`

    const codeCute = `#!/usr/local/bin/fontforge -script

# パラメータ
baibai  = "aabaibaishengpizi.ttf"
azuki   = "azuki.ttf"
azuki_s = "azuki_small.ttf"

# 漢字を aabaibaishengpizi の大きさに合わせる
Open(azuki)
# 範囲選択(ひらがな・カタカナ、漢字)
Select(0u4E00, 0uFF9F, 0u3041, 0u30FE)
# これは一つづつの指定できる
# SelectAllInstancesOf(0u56E3, 0u56EE)
# 文字の太さを考えると、これくらいが丁度いい
Scale(80,75)
Move(0, -110)
Generate(azuki_s)
Close()

# 足りないフォントをあずきフォントから補完する
Open(baibai)
# 英字、ギリシャ文字、ひらがな・カタカナ
Select(0u0020, 0u007E, 0u0390, 0u03CE, 0u0401, 0u0451, 0u3041, 0u30FE)
# 選択中のすべてのグリフを消去します。
Clear()
# 合成する(空のグリフだけマージされる)
MergeFonts(azuki_s)
# 生成
Generate(baibai:r + "-marge.ttf")
Close()`

    const codeCool = `#!/usr/local/bin/fontforge -script

# パラメータ
# Aa氧气少女拼音体
yangqi  = "aayangqishaonvpyt.ttf"
# 英椎行書
acgyosyo = "acgyosyo.ttf"
acgyosyo_s = "acgyosyo_small.ttf"


# 漢字を aabaibaishengpizi の大きさに合わせる
Open(acgyosyo)
# 範囲選択(ひらがな・カタカナ、漢字)
Select(0u3041, 0u30FE, 0u4E00, 0uFF9F )
Scale(75,85)
Move(0, -140)
Generate(acgyosyo_s)
Close()

# 足りないフォントを英椎行書フォントから補完する
Open(yangqi)
# ギリシャ、キリル、平仮名
Select(0u0391, 0u0401, 0u0410, 0u0451, 0u3041, 0u30FE)
# 選択中のすべてのグリフを消去します。
Clear()
# 合成する(空のグリフだけマージされる)
MergeFonts(acgyosyo_s)
# 生成
Generate(yangqi:r + "-marge.ttf")
Close()
`

    const codeMing = `#!/usr/local/bin/fontforge -script

# パラメータ
# AR StdKaiSHYL1 Md カッコ内の名前はGUI版で開いたときに出てくる
stdKaiSHYL1 = "1465803963432.TTC(AR StdKaiSHYL1 Md)"
# 义启粗楷体拼音版
yiQiCuKaiTiPinYinBan = "义启粗楷体拼音版.ttf"
# 华文楷体
huaWenKaiTi  = "华文楷体.ttf"

# 足りないフォントを補完する
Open(stdKaiSHYL1,1)
# 合成する(空のグリフだけマージされる)
# 义启粗楷体拼音版を合成
MergeFonts(yiQiCuKaiTiPinYinBan,1)
# 変更した箇所を選択する
SelectChanged()
# 义启粗楷体拼音版 の位置を他のフォントと揃える
Scale(420, 420)
Move(0, 440)
# 中央寄せ
CenterInWidth()
# 選択中のすべてのグリフの幅を推測, SetWidthはうまく動作しない
AutoWidth(48)
# 华文楷体を合成
MergeFonts(huaWenKaiTi,1)
SelectChanged()
# 华文楷体 の位置を他のフォントと揃える
Move(0, 100)
# 生成
Generate(stdKaiSHYL1:r + "-marge.ttf")
Close()
`

    const codeGothic = `#!/usr/local/bin/fontforge -script

# パラメータ
# AR HeiSHYL1 Bd
heiSHYL1 = "1465803465595.TTC(AR HeiSHYL1 Bd)"
# 中黑拼音体
zhongHeiPinYinTi  = "A033-中黑拼音体.ttf"
zhongHeiPinYinTi_small = "A033-中黑拼音体_small.ttf"
# 源真ゴシック
genShin  = "GenShinGothic-Monospace-Medium.ttf"


# 中黑拼音体 の大きさを他のフォントと揃える
# 1 はfstypeの設定(フィールドが変更を禁止)に無関係にフォントを操作する.
Open(zhongHeiPinYinTi,1)
SelectAll()
Scale(55, 55)
Move(0, -380)
# 中央寄せ
CenterInWidth()
# 選択中のすべてのグリフの幅を推測, SetWidthはうまく動作しない
AutoWidth(32)
SetOS2Value("FSType", 0)
Generate(zhongHeiPinYinTi_small)
Close()

# 足りないフォントを補完する
Open(heiSHYL1,1)
# # 合成する(空のグリフだけマージされる)
MergeFonts(zhongHeiPinYinTi_small,1)
MergeFonts(genShin,1)
SetOS2Value("FSType", 0)
# # 生成
Generate(heiSHYL1:r + "-marge.ttf")
Close()
`

    const codeTeng = `#!/usr/local/bin/fontforge -script

# パラメータ
# 印品简篆拼音体
yinPinJianZhuanPinYinTi = "印品简篆拼音体.ttf"
# 楽院篆書教
gakuInTenSho  = "楽院篆書教.TTF"
gakuInTenSho_small  = "楽院篆書教_small.ttf"
# 华康新篆体
HuaKangXinZhuanTi  = "HuaKangXinZhuanTi-1.ttc(DFNewChuan-B5)"
HuaKangXinZhuanTi_small  = "HuaKangXinZhuanTi_small.ttf"


# 华康新篆体 の大きさを他のフォントと揃える
Open(HuaKangXinZhuanTi,1)
# 漢字を選択, ALLにするとおかしくなる
Select(0u0001, 0uFFFF)
Scale(25, 20)
Move(0, -260)
Generate(HuaKangXinZhuanTi_small)
Close()

# 楽院篆書教 の大きさを他のフォントと揃える
Open(gakuInTenSho,1)
# 漢字を選択
Select(0u0001, 0uFFFF)
Scale(18, 18)
Move(0, -320)
Generate(gakuInTenSho_small)
Close()


# 足りないフォントを補完する
Open(yinPinJianZhuanPinYinTi,1)
# # 合成する(空のグリフだけマージされる)
MergeFonts(HuaKangXinZhuanTi_small,1)
# 変更した箇所を選択する
SelectChanged()
# 中央寄せ
CenterInWidth()
# 選択中のすべてのグリフの幅を推測, SetWidthはうまく動作しない
AutoWidth(64)
MergeFonts(gakuInTenSho_small,1)
SelectChanged()
CenterInWidth()
AutoWidth(64)
# 生成
Generate(yinPinJianZhuanPinYinTi:r + "-marge.ttf")
Close()
`

    return (
      <div className="page">

        <p>拼音フォントと日本語フォントの組み合わせを個人的に考えてみました。<br />
        「かわいい手書き」「かっこいい手書き」「楷体（明朝系）」「黑体（角ゴシック体）」「篆書体」の 5 種類です。<br />
        <a href="https://fontforge.github.io/en-US/"> fontforge </a> というフォントの編集ツールをインストールしてください。
        ※細かな文字詰めはしていないのでご了承下さい。</p>

        <p>スクリプトを<b> build.pe </b>として保存後、以下のコマンドで実行すると、合成されます。</p>
        <Code
          codeString={codeExe}
          language="shell"
         />

        <p>&nbsp;</p>
        <h1>かわいい手書き</h1>

        <p><img class="font-img" src="./images/font_sample0.png" alt="Aa拜拜生僻字+あずきフォント" /></p>
        <p>手書きのフォントで可愛らしい印象</p>
        <ul>
          <li><a href="http://m.lvdoutang.com/show/3615.html">Aa拜拜生僻字　=>簡体字・繁体字</a></li>
          <li><a href="http://azukifont.com/font/azuki.html">あずきフォント　=>日文</a></li>
        </ul>

        <Code
          codeString={codeCute}
          language="javascript"
         />

        <p>&nbsp;</p>
        <h1>かっこいい手書き</h1>
        <p><img class="font-img" src="./images/font_sample1.png" alt="Aa氧气少女拼音体+英椎行書" /></p>
        <p>行楷書体、かっこいい手書きの印象</p>
        <ul>
          <li><a href="http://www.lvdoutang.com/show/4195.html">Aa氧气少女拼音体　=>簡体字・繁体字</a></li>
          <li><a href="https://www.ac-font.com/jp/detail_jb_006.php">英椎行書　=>日文</a></li>
        </ul>

        <Code
          codeString={codeCool}
          language="javascript"
         />

        <p>&nbsp;</p>
        <h1>楷体（明朝系）</h1>
        <p><img class="font-img" src="./images/font_sample2.png" alt="义启粗楷体拼音版+华文楷体+AR StdKaiSHYL1 Md (文鼎拼音字型)" /></p>
        <p>ピンインの雰囲気違うけど、これが一番近い. <b>有料フォントがあるので年間1900円</b></p>
        <ul>
          <li><a href="https://www.58pic.com/newpic/32822139.html">义启粗楷体拼音版 =>簡体字</a></li>
          <li><a href="http://www.zitixiazai.org/huawenzitixiazai/2289.html">华文楷体 =>日文</a></li>
          <li><a href="https://ifontcloud.com/index/font_intro.jsp#!?family_font_id=1551947491918&searchWord=%E6%8B%BC%E9%9F%B3">AR StdKaiSHYL1 Md (文鼎拼音字型) => 繁体字</a></li>
        </ul>
        {/* AR StdKaiSHYL1 Md = 1465803963432.TTC */}
        <p>
          このフォントが見つからない. これがあれば全部無料なんだけど...　 -->
          <a href="https://www.fontke.com/family/1386721/">方正楷体繁体拼音体</a>
        </p>
        <Code
          codeString={codeMing}
          language="javascript"
         />

        <p>&nbsp;</p>
        <h1>黑体（角ゴシック体）</h1>
        <p><img class="font-img" src="./images/font_sample3.png" alt="中黑拼音体+源真ゴシック+AR HeiSHYL1 Bd (文鼎拼音字型)" /></p>
        <p>太さ違うけど、これが一番近い。<b>有料フォントがあるので250円+年間1900円</b></p>
        <ul>
          <li><a href="https://en.fontke.com/font/26549102/">中黑拼音体 =>簡体字</a></li>
          <li><a href="http://jikasei.me/font/genshin/">源真ゴシック =>日文 </a></li>
          <li><a href="https://ifontcloud.com/index/font_intro.jsp#!?family_font_id=1551947491918&searchWord=%E6%8B%BC%E9%9F%B3">AR HeiSHYL1 Bd (文鼎拼音字型) => 繁体字</a></li>
        </ul>
        {/* AR HeiSHYL1 Bd = 1465803465595.TTC  */}
        <Code
          codeString={codeGothic}
          language="javascript"
         />


        <p>&nbsp;</p>
        <h1>篆書体</h1>
        <p><img class="font-img" src="./images/font_sample4.png" alt="印品简篆拼音体+楽院篆書+DFNewChuan-B5(华康新篆体)" /></p>
        <p>変わり種、簡体字のみ拼音</p>
        <ul>
          <li><a href="https://www.58pic.com/newpic/32822247.html">印品简篆拼音体 =>簡体字</a></li>
          <li><a href="http://shuzandou.com/cgi/cgigount.cgi">楽院篆書 =>日文</a></li>
          <li><a href="http://www.fonts.net.cn/font-31454796483.html">DFNewChuan-B5(华康新篆体) =>繁体字</a></li>
        </ul>
        <Code
          codeString={codeTeng}
          language="javascript"
         />

        <p>&nbsp;</p>
        <h1>面白いフォント</h1>
        <ul>
          <li><a href="https://nukosuki.booth.pm/items/134190">略字フォント</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>注音符号</h1>
        <ul>
          <li><a href="https://booth.pm/ja/items/1117555">注音符号 自動ルビ振りフォント</a></li>
          <li><a href="https://www.58pic.com/newpic/32820935.html">王汉宗中楷体注音</a></li>
          <li><a href="https://www.58pic.com/newpic/32820939.html">王汉宗中楷破音一</a></li>
          <li><a href="https://www.58pic.com/newpic/32820943.html">王汉宗中楷体破音二</a></li>
          <li><a href="https://www.58pic.com/newpic/32820945.html">王汉宗中楷体破音三</a></li>
          <li><a href="https://www.58pic.com/newpic/32820933.html">王汉宗中明体注音</a></li>
          <li><a href="https://www.58pic.com/newpic/32820937.html">王汉宗中明体破音一</a></li>
          <li><a href="https://www.58pic.com/newpic/32820941.html">王汉宗中明体破音二</a></li>
          <li><a href="https://www.58pic.com/newpic/32820944.html">王汉宗中明体破音三</a></li>
        </ul>

      </div>
    );
  }
}

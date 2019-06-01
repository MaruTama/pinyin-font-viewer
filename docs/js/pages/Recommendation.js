import React, { Component } from 'react';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">

        <p>拼音フォントと日本語フォントの組み合わせを個人的に考えてみました。<br />
        「かわいい手書き」「かっこいい手書き」「楷体（明朝系）」「黑体（角ゴシック体）」「篆書体」の 5 種類です。<br />
        ※細かな文字詰めはしていないのでご了承下さい。</p>

        <p>&nbsp;</p>
        <h1>かわいい手書き</h1>

        <p><img class="font-img" src="./images/AaBaiBaiShengPiZi_and_azuki.png" alt="Aa拜拜生僻字+あずきフォント" /></p>
        <p>手書きのフォントで可愛らしい印象</p>
        <ul>
          <li><a href="http://m.lvdoutang.com/show/3615.html">Aa拜拜生僻字　=>簡体字・繁体字</a></li>
          <li><a href="http://azukifont.com/font/azuki.html">あずきフォント　=>日文　(Scale x=85% y=75%, Move x=0 y=-110)</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>かっこいい手書き</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>行楷書体、かっこいい手書きの印象</p>
        <ul>
          <li><a href="http://www.lvdoutang.com/show/4195.html">Aa氧气少女拼音体　=>簡体字・繁体字</a></li>
          <li><a href="https://www.ac-font.com/jp/detail_jb_006.php">英椎行書　=>日文</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>楷体（明朝系）</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>ピンインの雰囲気違うけど、これが一番近い. 有料フォントがあるので年間1900円</p>
        <ul>
          <li><a href="http://m.lvdoutang.com/show/3985.html">方正楷体拼音字库01 =>簡体字</a></li>
          <li><a href="http://www.zitixiazai.org/huawenzitixiazai/2289.html">华文楷体 =>日文</a></li>
          <li><a href="https://ifontcloud.com/index/font_intro.jsp#!?family_font_id=1551947491918&searchWord=%E6%8B%BC%E9%9F%B3">AR StdKaiSHYL1 Md (文鼎拼音字型 1465803963432.TTC) => 繁体字</a></li>
        </ul>
        <p>
          これみつからん、、、これがあれば全部無料なんだけど、、、 -->
          <a href="https://www.fontke.com/family/1386721/">方正楷体繁体拼音体</a>
        </p>

        <p>&nbsp;</p>
        <h1>黑体（角ゴシック体）</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>有料フォントがあるので年間1900円</p>
        <ul>
          <li><a href="https://en.fontke.com/font/26549102/">中黑拼音体 =>簡体字</a></li>
          <li><a href="http://jikasei.me/font/genshin/">源真ゴシック =>日文 </a></li>
          <li><a href="https://ifontcloud.com/index/font_intro.jsp#!?family_font_id=1551947491918&searchWord=%E6%8B%BC%E9%9F%B3">AR HeiSHYL1 Bd (文鼎拼音字型 1465803465595.TTC) => 繁体字</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>篆書体</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>変わり種、簡体字のみ拼音</p>
        <ul>
          <li><a href="https://www.58pic.com/newpic/32822247.html">印品简篆拼音体 =>簡体字</a></li>
          <li><a href="http://shuzandou.com/cgi/cgigount.cgi">楽院篆書 =>日文</a></li>
          <li><a href="http://www.fonts.net.cn/font-31454796483.html">DFPNewChuan-B5(华康新篆体) =>繁体字</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>面白いフォント</h1>
        <ul>
          <li><a href="https://nukosuki.booth.pm/items/134190">略字フォント</a></li>
        </ul>

        <p>&nbsp;</p>
        <h1>注音符号</h1>
        <ul>
          <li><a href="https://booth.pm/ja/items/1117555">注音符号 自動ルビ振りフォント</a></li>
        </ul>

      </div>
    );
  }
}

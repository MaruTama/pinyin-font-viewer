import React, { Component } from 'react';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <p>拼音フォントと日本語フォントの組み合わせを個人的に考えてみました。<br />
        「明朝体」「ゴシック体」「手書き」の三種類です。<br />
        ※細かな文字詰めはしていないのでご了承下さい。</p>

        <p>&nbsp;</p>
        <h1>手書きフォント</h1>

        <p><img class="font-img" src="./images/AaBaiBaiShengPiZi_and_azuki.png" alt="Aa拜拜生僻字+あずきフォント" /></p>
        <p>Aa拜拜生僻字 + あずきフォント(Scale x=85% y=75%, Move x=0 y=-110)<br />
        手書きのフォントで可愛らしい印象</p>

        <p>&nbsp;</p>
        <h1>明朝体</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>Aa拜拜生僻字 + Univers45Light 110%<br />
        スッキリした印象</p>

        <p>&nbsp;</p>
        <h1>ゴシック体</h1>
        <p><a href="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png"><img class="alignnone size-full wp-image-5815" src="https://www.flopdesign.com/blog/wp-content/uploads/2017/09/font-konshoku2-2.png" alt="和欧混植フォント" width="598" height="244" /></a></p>
        <p>Aa拜拜生僻字 + Univers45Light 110%<br />
        爽やかな印象</p>

      </div>
    );
  }
}

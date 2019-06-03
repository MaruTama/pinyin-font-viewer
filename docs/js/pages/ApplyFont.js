import React, { Component } from 'react';
import Code from 'react-code-prettify';

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const codeCJ = ` &lt;family lang="zh-Hans"&gt;
       &lt;font weight="400" style="normal" index="2"&gt;aabaibaishengpizi.ttf&lt;/font&gt;
    &lt;/family&gt;
    &lt;!-- TODO: Add Bopo --&gt;
    &lt;family lang="zh-Hant"&gt;
       &lt;font weight="400" style="normal" index="3"&gt;aabaibaishengpizi.ttf&lt;/font&gt;
    &lt;/family&gt;
    &lt;family lang="ja"&gt;
       &lt;font weight="400" style="normal" index="0"&gt;aabaibaishengpizi.ttf&lt;/font&gt;
    &lt;/family&gt;
    &lt;family lang="ko"&gt;
       &lt;font weight="400" style="normal" index="1"&gt;NotoSansCJK-Regular.ttc&lt;/font&gt;
    &lt;/family&gt;`

    const codeBasic = ` &lt;family name="sans-serif"&gt;
           &lt;font weight="100" style="normal"&gt;Mali-ExtraLight.ttf&lt;/font&gt;
           &lt;font weight="100" style="italic"&gt;Mali-ExtraLightItalic.ttf&lt;/font&gt;
           &lt;font weight="300" style="normal"&gt;Mali-Light.ttf&lt;/font&gt;
           &lt;font weight="300" style="italic"&gt;Mali-LightItalic.ttf&lt;/font&gt;
           &lt;font weight="400" style="normal"&gt;Mali-Regular.ttf&lt;/font&gt;
           &lt;font weight="400" style="italic"&gt;Mali-Italic.ttf&lt;/font&gt;
           &lt;font weight="500" style="normal"&gt;Mali-Medium.ttf&lt;/font&gt;
           &lt;font weight="500" style="italic"&gt;Mali-MediumItalic.ttf&lt;/font&gt;
           &lt;font weight="900" style="normal"&gt;Mali-SemiBold.ttf&lt;/font&gt;
           &lt;font weight="900" style="italic"&gt;Mali-SemiBoldItalic.ttf&lt;/font&gt;
           &lt;font weight="700" style="normal"&gt;Mali-Bold.ttf&lt;/font&gt;
           &lt;font weight="700" style="italic"&gt;Mali-BoldItalic.ttf&lt;/font&gt;
  &lt;/family&gt;`

    const codeLauncher = ` &lt;family name="sans-serif-condensed"&gt;
            &lt;font weight="300" style="normal"&gt;Mali-Light.ttf&lt;/font&gt;
            &lt;font weight="300" style="italic"&gt;Mali-LightItalic.ttf&lt;/font&gt;
            &lt;font weight="400" style="normal"&gt;Mali-Regular.ttf&lt;/font&gt;
            &lt;font weight="400" style="italic"&gt;Mali-Italic.ttf&lt;/font&gt;
            &lt;font weight="500" style="normal"&gt;Mali-Medium.ttf&lt;/font&gt;
            &lt;font weight="500" style="italic"&gt;Mali-MediumItalic.ttf&lt;/font&gt;
            &lt;font weight="700" style="normal"&gt;Mali-Bold.ttf&lt;/font&gt;
            &lt;font weight="700" style="italic"&gt;Mali-BoldItalic.ttf&lt;/font&gt;
  &lt;/family&gt;`

    return (
      <div className="page">
        <h1>Androidにフォントを適応させる</h1>
        <p>Androidのバージョンは8.0.1 root化済み Nexus 6P</p>
        <p>合成したAa拜拜生僻字 を英字フォントに設定するとなぜか一部文字が豆腐になりました。そのため、英字フォントは別のものを設定する必要があります。
        <a href="https://fonts.google.com/specimen/Mali?selection.family=Caveat"> <u>Mali</u> </a> が無料で書体の感じも近く、スタイルが多いので良い感じです。<br />
        しかし、このままではロック画面上のコロンが表示されないので、以下の記事に基づいてfontforgeで編集する必要があります。</p>

        <ul>
          <li><a href="https://androplus.org/Entry/5597/">AndroidでRobotoフォントを置換するとロック画面のコロンが豆腐になる原因</a></li>
        </ul>

        <p>&nbsp;</p>
        <p>フォントの適応方法は以下の記事を参考にしてください。</p>
        <ul>
          <li><a href="https://androidlover.net/android-marshallow-change-font">Android 6.0 Marshmallowのフォント変更方法【要root】</a></li>
        </ul>

        <p>合成したaabaibaishengpizi.ttf ，Mali フォントのファミリーを /system/fonts/ に入れてパーミッション変えて、/system/etc/fonts.xml を編集します。</p>


        <p>中国語・日本語の設定</p>
        <Code
          codeString={codeCJ}
          language="xml"
         />
       <img class="font-img" src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/11848816/picture_pc_8e3590a351b6b4f0bfa6055a20f9f838.png" alt="中国語・日本語の設定" width="60%"/>


        <p>web サイトとか基本的な英数字テキスト</p>
        <Code
          codeString={codeBasic}
          language="shell"
         />
        <img class="font-img" src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/11848830/picture_pc_aeab0d7b4f713372a325425b8aa98928.png" alt="web サイトとか基本的な英数字テキスト" width="60%"/>

        <p>ランチャー上 のアプリ名とかステータスバー上のwifi名等</p>
        <Code
          codeString={codeLauncher}
          language="shell"
         />
        <img class="font-img" src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/11848855/picture_pc_b9869f1071c0e6c1d0eee37cd77654e5.png" alt="ランチャー上 のアプリ名" width="60%"/>
        <img class="font-img" src="https://d2l930y2yx77uc.cloudfront.net/production/uploads/images/11848847/picture_pc_413de5eebd98eca565a2662094b4d0ef.png" alt="ステータスバー上のwifi名" width="60%"/>

      </div>
    );
  }
}

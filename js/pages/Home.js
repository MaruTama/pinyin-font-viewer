/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import StackGrid, { transitions, easings } from '../../../src/';
import jsonData from "../../json/pinyin-fonts.json";
import TagsControl from '../components/TagsControl';

const transition = transitions.scaleDown;

// json からフォントの情報を取得する
const ldtztw_fonts = jsonData.fonts.绿斗堂字体网;
const qtw_fonts = jsonData.fonts.千图网;
const ztxz_fonts = jsonData.fonts.字体下载;
const ztjz_fonts = jsonData.fonts.字体视界;
const zzw_fonts = jsonData.fonts.找字网;
const etc_fonts = jsonData.fonts.etc;
// 結合する
const fonts = ldtztw_fonts.concat(qtw_fonts, ztxz_fonts, ztjz_fonts, zzw_fonts, etc_fonts);
// console.log(fonts);

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state={
      fonts: fonts,
      // bool型の配列っていいのかな、、、？
      is_tags: { "free": true,
              "charge": true,
              "simplified_characters": true,
              "traditional_characters": true,
              "hiragana": true,
              "elegant": true,
              "cheerful": true,
              "square_style": true,
              "handwriting": true,
              "beautiful": true,
              "serious": true,
              "cute": true,
              "nostalgic": true,
              "ming": true,
              "gothic": true }
    };
  }


  // ボタンが押されたときのコールバック
  // OR 検索
  orSearchItems = () => {
    console.log("or button");
    let matchedFonts = [];

    // チェックされているタグのリストを作成する
    const is_checked_tags = Object.keys(this.state.is_tags).filter( (key) => {
      return this.state.is_tags[key] === true
    });

    // 参考リンク
    // JavaScript配列操作速度比較 -for vs each vs jQuery-
    // https://qiita.com/yukiB/items/dd74cb8ebcfb5babe874
    // 配列同士で重複する値があるか確認する
    // https://www.dkrk-blog.net/javascript/duplicate_an_array
    // filterで一致する要素があるか検索する。
    fonts.forEach(font => {
      // 検索条件 のタグのすべてが フォントの tags に含まれるとき
      // 重複する要素を取り出す
      const duplicate_tags = [...font["tags"], ...is_checked_tags].filter(item => font["tags"].includes(item) && is_checked_tags.includes(item));
      if(duplicate_tags.length > 0){
        console.log(font);
        matchedFonts.push(font);
      }
    });
    this.setState({fonts: matchedFonts});
  }
  // AND 検索
  andSearchItems = () => {
    console.log("and button");
    let matchedFonts = [];

    // チェックされているタグのリストを作成する
    const is_checked_tags = Object.keys(this.state.is_tags).filter( (key) => {
      return this.state.is_tags[key] === true
    });
    // AND 検索
    fonts.forEach(font => {
      // filterで一致する要素があるか検索する。
      // 検索条件 のタグのすべてが フォントの tags に含まれるとき
      // 重複する要素を取り出す。同じ値が2つずつ重複して出てくるので一意にする
      const duplicate_tags = [...font["tags"], ...is_checked_tags].filter(item => font["tags"].includes(item) && is_checked_tags.includes(item));
      if([...new Set(duplicate_tags)].length === is_checked_tags.length){
        console.log(font);
        matchedFonts.push(font);
      }
    });
    this.setState({fonts: matchedFonts});
  }
  // チェックボタンが選択されたときのコールバック
  changedFreeItems = (checked) => {
    // ネストになってるので、一度辞書ごと取り出して、要素を入れ替える。
    let new_state = this.state.is_tags;
    new_state.free = checked;
    this.setState({is_tags: new_state});
  }
  changedChargeItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.charge = checked;
    this.setState({is_tags: new_state});
  }
  changedSimplifiedCharactersItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.simplified_characters = checked;
    this.setState({is_tags: new_state});
  }
  changedTraditionalCharactersItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.traditional_characters = checked;
    this.setState({is_tags: new_state});
  }
  changedHiraganaItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.hiragana = checked;
    this.setState({is_tags: new_state});
  }
  changedElegantItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.elegant = checked;
    this.setState({is_tags: new_state});
  }
  changedCheerfulItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.cheerful = checked;
    this.setState({is_tags: new_state});
  }
  changedSquareStyleItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.square_style = checked;
    this.setState({is_tags: new_state});
  }
  changedHandwritingItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.handwriting = checked;
    this.setState({is_tags: new_state});
  }
  changedBeautifulItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.beautiful = checked;
    this.setState({is_tags: new_state});
  }
  changedSeriousItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.serious = checked;
    this.setState({is_tags: new_state});
  }
  changedCuteItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.cute = checked;
    this.setState({is_tags: new_state});
  }
  changedNostalgicItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.nostalgic = checked;
    this.setState({is_tags: new_state});
  }
  changedMingItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.ming = checked;
    this.setState({is_tags: new_state});
  }
  changedGothicItems = (checked) => {
    let new_state = this.state.is_tags;
    new_state.gothic = checked;
    this.setState({is_tags: new_state});
  }

  render() {
    return (
      <div>
        <TagsControl
          onOrSearch={this.orSearchItems}
          onAndSearch={this.andSearchItems}
          onFreeChange={this.changedFreeItems}
          onChargeChange={this.changedChargeItems}
          onSimplifiedCharactersChange={this.changedSimplifiedCharactersItems}
          onTraditionalCharactersChange={this.changedTraditionalCharactersItems}
          onHiraganaChange={this.changedHiraganaItems}
          onElegantChange={this.changedElegantItems}
          onCheerfulChange={this.changedCheerfulItems}
          onSquareStyleChange={this.changedSquareStyleItems}
          onHandwritingChange={this.changedHandwritingItems}
          onBeautifulChange={this.changedBeautifulItems}
          onSeriousChange={this.changedSeriousItems}
          onCuteChange={this.changedCuteItems}
          onNostalgicChange={this.changedNostalgicItems}
          onMingChange={this.changedMingItems}
          onGothicChange={this.changedGothicItems}
        />
        <StackGrid
          monitorImagesLoaded
          columnWidth={300}
          duration={600}
          gutterWidth={15}
          gutterHeight={15}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          {this.state.fonts.map(obj => (
            <figure
              key={"./images/" + obj.src}
              className="image"
            >
              <a href={obj.url}>
                <img src={"./images/" + obj.src} alt={obj.name}/>
              </a>
              <figcaption>{obj.name}</figcaption>
            </figure>
          ))}
        </StackGrid>
      </div>
    );
  }
}

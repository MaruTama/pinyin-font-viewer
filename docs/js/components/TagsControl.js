/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Slider from 'rc-slider';
import { easings, transitions } from '../../../src/';


export default class TagsControl extends Component {
  // ボタン
  handleOrSearch = () => {
    this.props.onOrSearch();
  }
  handleAndSearch = () => {
    this.props.onAndSearch();
  }

  // チェックボタン
  handleFreeChange = (e) => {
    this.props.onFreeChange(e.target.checked);
  }
  handleChargeChange = (e) => {
    this.props.onChargeChange(e.target.checked);
  }
  handleSimplifiedCharactersChange = (e) => {
    this.props.onSimplifiedCharactersChange(e.target.checked);
  }
  handleTraditionalCharactersChange = (e) => {
    this.props.onTraditionalCharactersChange(e.target.checked);
  }
  handleHiraganaChange = (e) => {
    this.props.onHiraganaChange(e.target.checked);
  }
  handleEleganteChange = (e) => {
    this.props.onElegantChange(e.target.checked);
  }
  handleCheerfulChange = (e) => {
    this.props.onCheerfulChange(e.target.checked);
  }
  handleSquareStyleChange = (e) => {
    this.props.onSquareStyleChange(e.target.checked);
  }
  handleHandwritingChange = (e) => {
    this.props.onHandwritingChange(e.target.checked);
  }
  handleBeautifulChange = (e) => {
    this.props.onBeautifulChange(e.target.checked);
  }
  handleSeriousChange = (e) => {
    this.props.onSeriousChange(e.target.checked);
  }
  handleCuteChange = (e) => {
    this.props.onCuteChange(e.target.checked);
  }
  handleNostalgicChange = (e) => {
    this.props.onNostalgicChange(e.target.checked);
  }
  handleMingChange = (e) => {
    this.props.onMingChange(e.target.checked);
  }
  handleGothicChange = (e) => {
    this.props.onGothicChange(e.target.checked);
  }


  render() {
    const {
      free,
      charge,
      simplified_characters,
      traditional_characters,
      hiragana,
      elegant,
      cheerful,
      square_style,
      handwriting,
      beautiful,
      serious,
      cute,
      nostalgic,
      ming,
      gothic
    } = this.props;
    return (
      <div className="tags-control">
        <div>
          <label>免费</label>
          <input type="checkbox" checked={free} onClick={this.handleFreeChange} defaultChecked/>
        </div>
        <div>
          <label>付费</label>
          <input type="checkbox" checked={charge} onClick={this.handleChargeChange} defaultChecked/>
        </div>
        <div>
          <label>簡体字</label>
          <input type="checkbox" checked={simplified_characters} onClick={this.handleSimplifiedCharactersChange} defaultChecked/>
        </div>
        <div>
          <label>繁体字</label>
          <input type="checkbox" checked={traditional_characters} onClick={this.handleTraditionalCharactersChange} defaultChecked/>
        </div>
        <div>
          <label>平仮名</label>
          <input type="checkbox" checked={hiragana} onClick={this.handleHiraganaChange} defaultChecked/>
        </div>
        <div>
          <label>エレガント</label>
          <input type="checkbox" checked={elegant} onClick={this.handleEleganteChange} defaultChecked/>
        </div>
        <div>
          <label>陽気</label>
          <input type="checkbox" checked={cheerful} onClick={this.handleCheerfulChange} defaultChecked/>
        </div>
        <div>
          <label>楷書</label>
          <input type="checkbox" checked={square_style} onClick={this.handleSquareStyleChange} defaultChecked/>
        </div>
        <div>
          <label>崩し</label>
          <input type="checkbox" checked={handwriting} onClick={this.handleHandwritingChange} defaultChecked/>
        </div>
        <div>
          <label>きれい</label>
          <input type="checkbox" checked={beautiful} onClick={this.handleBeautifulChange} defaultChecked/>
        </div>
        <div>
          <label>真面目</label>
          <input type="checkbox" checked={serious} onClick={this.handleSeriousChange} defaultChecked/>
        </div>
        <div>
          <label>可愛い</label>
          <input type="checkbox" checked={cute} onClick={this.handleCuteChange} defaultChecked/>
        </div>
        <div>
          <label>むかしっぽい</label>
          <input type="checkbox" checked={nostalgic} onClick={this.handleNostalgicChange} defaultChecked/>
        </div>
        <div>
          <label>明朝</label>
          <input type="checkbox" checked={ming} onClick={this.handleMingChange} defaultChecked/>
        </div>
        <div>
          <label>ゴシック</label>
          <input type="checkbox" checked={gothic} onClick={this.handleGothicChange} defaultChecked/>
        </div>

        <div>
          <button className="btn" onClick={this.handleOrSearch}>OR検索</button>
        </div>
        <div>
          <button className="btn" onClick={this.handleAndSearch}>AND検索</button>
        </div>
      </div>
    );
  }
}

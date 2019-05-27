/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Slider from 'rc-slider';
import { easings, transitions } from '../../../src/';


export default class TagsControl extends Component {
  handleShuffle = () => {
    this.props.onShuffle();
  }

  handleRTLChange = (e) => {
    this.props.onRTLChange(e.target.checked);
  }
  handleTestChange = (e) => {
    this.props.onTestChange(e.target.checked);
  }

  render() {
    const {
      rtl,
      test,
    } = this.props;
    return (
      <div className="tags-control">
        <div>
          <button className="btn" onClick={this.handleShuffle}>Shuffle</button>
        </div>
        <div>
          <label>免费</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>付费</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>簡体字</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>繁体字</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>平仮名</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>エレガント</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>陽気</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>楷書</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>崩し</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>きれい</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>真面目</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>可愛い</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>むかしっぽい</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
        <div>
          <label>明朝</label>
          <input type="checkbox" checked={test} onClick={this.handleTestChange} defaultChecked/>
        </div>
        <div>
          <label>ゴシック</label>
          <input type="checkbox" checked={rtl} onClick={this.handleRTLChange} defaultChecked/>
        </div>
      </div>
    );
  }
}

/* eslint-disable react/prop-types */
import React from 'react';
import StackGrid, { transitions, easings } from '../../../src/';
import jsonData from "../../json/pinyin-fonts.json";


const transition = transitions.scaleDown;


const ldtztw_fonts = jsonData.fonts.绿斗堂字体网;
const qtw_fonts = jsonData.fonts.千图网;
const zzw_fonts = jsonData.fonts.找字网;
const etc_fonts = jsonData.fonts.etc;

let images = ldtztw_fonts.concat(qtw_fonts, zzw_fonts, etc_fonts);
console.log(images);


const Home = () => (
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
    {images.map(obj => (
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
);

export default Home;

import React, { useState } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import randomColor from './randomColor';
// import randomColor from './randomColor';
// import Headline from './Headline';
// import randomColor from './ColorWindow';
// const buttonStyle = css`
//   position: absolute;
//   width: 844px;
//   height: 334px;
//   left: 331px;
//   top: 425px;
//   background: ${color} !important;
// `;
export default function Button() {
  // const color = randomColor()
  const [color, setColor] = useState(randomColor());
  return (
    <button
      css={css`
        position: absolute;
        width: 844px;
        height: 334px;
        left: 331px;
        top: 425px;
        background: ${color} !important;
      `}
      onClick={function onClick() {
        setColor(randomColor());
      }}
    >
      click here {color}
    </button>
  );
}

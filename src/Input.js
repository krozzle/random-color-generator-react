import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function Input() {
  // const color = randomColor()
  // const [color, setColor] = useState(randomColor());
  return (
    <input
      type='text'
      placeholder='get a less random color'
      css={css`
        width: auto;
        height: auto;
        left: 331px;
        top: 425px;
        background: grey;
      `}
      // onClick={function onClick() {
      //   setColor(randomColor());
      // }}
    >
      {/* click here {color} */}
    </input>
  );
}

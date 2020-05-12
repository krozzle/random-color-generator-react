import React, { useState } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import randomColor from './randomColor';
// handleInput = function () {};
export default function Input() {
  // const color = randomColor()
  const [color, setColor] = useState();
  return (
    <form>
      <input
        type='text'
        name='this is'
        placeholder='name your color'
        css={css`
          position: absolute;
          width: 844px;
          height: 64px;
          left: 331px;
          top: 120px;
          background: ${color} !important;
        `}
        onChange={function onChange(event) {
          setColor(event.target.value);
        }}
      ></input>
    </form>
  );
}
// export default function Input() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Color:
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />{' '}
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

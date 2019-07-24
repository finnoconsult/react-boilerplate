import React from 'react';

//eslint-disable-next-line
export default ({ color = 'black', ...props }) => (
  <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="norecolor" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M7.52,11.6 L22.48,11.6 L22.48,23.84 C22.48,26.0933217 20.6533218,27.92 18.4,27.92 L11.6,27.92 C9.34667822,27.92 7.52,26.0933217 7.52,23.84 L7.52,11.6 Z" id="Rectangle-2" stroke={color} strokeWidth="2" />
      <path d="M11.6,8.88 L11.6,5.48 C11.6,3.60223186 13.1222319,2.08 15,2.08 L15,2.08 C16.8777681,2.08 18.4,3.60223186 18.4,5.48 L18.4,8.88" id="Rectangle-2-Copy" stroke={color} strokeWidth="2" />
    </g>
  </svg>
);

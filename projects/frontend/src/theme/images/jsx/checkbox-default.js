import React from 'react';

//eslint-disable-next-line
export default ({ color = 'black', ...props }) => (
  <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle stroke={color} strokeWidth="2" id="Oval-10" cx="14" cy="14" r="13" />
    </g>
  </svg>
);

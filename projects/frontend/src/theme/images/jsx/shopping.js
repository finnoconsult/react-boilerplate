import React from 'react';

//eslint-disable-next-line
export default ({ color = 'black', ...props }) => (
  <svg width="20px" height="30px" viewBox="0 0 20 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="norecolor" transform="translate(1.000000, 1.000000)" stroke={color} strokeWidth="2">
        <path d="M5,7 L5,4 C5,1.790861 6.790861,4.05812251e-16 9,0 L9,0 C11.209139,-4.05812251e-16 13,1.790861 13,4 L13,7" id="Rectangle-2-Copy-3" />
        <path d="M0,9 L18,9 L18,25 C18,26.6568542 16.6568542,28 15,28 L3,28 C1.34314575,28 2.02906125e-16,26.6568542 0,25 L0,9 Z" id="Rectangle-2-Copy-2" fill="#FFFFFF" fillRule="nonzero" />
      </g>
    </g>
  </svg>
);

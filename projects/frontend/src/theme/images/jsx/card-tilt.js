import React from 'react';

//eslint-disable-next-line
export default ({ color = 'black', ...props }) => (
  <svg width="27px" height="24px" viewBox="0 0 27 24" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="Neu-CD" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Kontakt-Übersicht" transform="translate(-17.000000, -333.000000)">
        <g id="Group-4" transform="translate(17.000000, 335.000000)">
          <path d="M2,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 1.3527075e-16,19.1045695 0,18 L0,8 C-1.3527075e-16,6.8954305 0.8954305,6 2,6 Z M1,11 L1,14 L19,14 L19,11 L1,11 Z M1,16 L1,17 L5,17 L5,16 L1,16 Z M6,16 L6,17 L10,17 L10,16 L6,16 Z" id="Combined-Shape" fill={color} />
          <g id="norecolor" transform="translate(11.000000, 0.000000)" fillRule="nonzero">
            <g fill="#D64218">
              <path d="M8,16.5 C3.30557963,16.5 -0.5,12.6944204 -0.5,8 C-0.5,3.30557963 3.30557963,-0.5 8,-0.5 C12.6944204,-0.5 16.5,3.30557963 16.5,8 C16.5,12.6944204 12.6944204,16.5 8,16.5 Z" id="Combined-Shape" stroke="#FFFFFF" />
            </g>
            <g fill="#FFFFFF">
              <path d="M8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 Z" id="Oval-5" />
            </g>
            <rect id="Rectangle-23" fill="#D64218" x="1" y="7" width="14" height="2" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

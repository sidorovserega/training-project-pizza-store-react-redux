import React from 'react';

const SVGGenerate = ({nameSVG, className}) => {
  
  switch(nameSVG) {
    case 'iconSearch':
      return (
        <svg 
        className={className}
          height="512px" 
          id="Layer_1"  
          version="1.1" 
          viewBox="0 0 512 512" 
          width="512px" 
          xmlns="http://www.w3.org/2000/svg" 
        >
          <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"/>
        </svg>
      );
    case 'iconClose':
      return (
        <svg 
          className={className}
          data-name="Capa 1" 
          id="Capa_1" 
          viewBox="0 0 20 19.84" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
        </svg>
      );
    default: 
    return null; 
  }
  
}

export default SVGGenerate;
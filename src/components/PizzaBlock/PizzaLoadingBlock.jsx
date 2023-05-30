import React from 'react'
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader 
      speed={2}
      width={260}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="131" cy="126" r="125" /> 
      <rect x="-1" y="273" rx="2" ry="2" width="275" height="24" /> 
      <rect x="1" y="314" rx="2" ry="2" width="275" height="83" /> 
      <rect x="3" y="418" rx="2" ry="2" width="88" height="27" /> 
      <rect x="123" y="410" rx="18" ry="18" width="150" height="43" />
    </ContentLoader>
  )
}

export default PizzaLoadingBlock;
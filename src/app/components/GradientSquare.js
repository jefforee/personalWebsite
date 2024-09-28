// GradientSquare.js
import React from 'react';

const GradientSquare = () => {
  return (
    <div className="relative w-[1vw] h-[1.25vw] border-[3px] border-[#787F93] rounded-sm overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C0CBDC]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#A8B5CA]"></div>
    </div>
  );
};

export default GradientSquare;

import React from 'react';

const LabelCard = ({ title, description }) => {

  return (

       <div className="bottom-0 left-1 absolute lg:mb-4 mb-2 lg:pb-4 pb-2 lg:mx-8 mx-4 text-white">   
       <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9] my-1"></div>{" "}
       <h2 className=''>{title}</h2>
       <p>{description}</p> 
   </div>
  );
};

export default LabelCard;

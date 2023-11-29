import { ServiesOffered } from "../../data";
import image from '../../assets/images/wesgrow.svg';

const WhatWeDo = () => {
  return (
    <div className="h-[fit] my-1 lg:py-2 py-1 lg:mx-4 mx-8 lg:px-8 px-2">
      <div className="flex mx-1">
      <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9]"></div>{" "}
        <span className="text-[16px] lg:text-[28px] px-1 lg:px-2">What we do</span>
      </div>
      <p className=" font-extrabold w-full lg:text-[36px] text-[21px] my-2 py-1 lg:leading-[46px] leading-[24px] flex-wrap">
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:space-x-2 md:space-x-1 lg:gap-4 gap-2 my-2 px-2 mt-4">
        {ServiesOffered.map((data, index) => (
          <div key={index} className="col-span-1 flex flex-col text-start">
            <img src={data.image} alt={data.name} width={50}/>
            <h5 className="font-[700]  py-1 font-displayBold">{data.name}</h5>
            <p className="font-displayRegular">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo
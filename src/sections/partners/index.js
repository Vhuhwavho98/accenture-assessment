import { partnersData } from "../../data";
import image from '../../assets/images/wesgrow.svg';

const Partners = () => {
  return (
    <div className="h-[fit] my-1 lg:py-2 py-1 lg:mx-4 mx-8 lg:px-8 px-2">
    <div className="flex px-2">
    <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9]"></div>{" "}
        <span className="text-[16px] lg:text-[28px] px-1 lg:px-2">You will be in good company</span>
      </div>
      <h4 className=" mx-2 px-2 lg:mx-1 font-bold text-[34px] ">
      Trusted by leading brands
      </h4>
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:space-x-2 md:space-x-1 lg:gap-1 my-2 gap-4">
        {partnersData.map((data, index) => (
          <div key={index} className="lg:col-span-1 cols-span-2 flex flex-col text-start py-2 h-[70px]">
            <img src={data.image} alt={data.name} className=" lg:min-h-[10px] lg:max-w-[200px] max-w-[120px] min-h-[60px]  p-2"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners
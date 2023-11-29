import { partnersData } from "../../data";
const ContactUs = () => {
  return (
    <footer className="h-[fit] lg:py-2 py-1 lg:mx-0 lg:px-8 px-10 bg-[#430964] text-white pb-4 bottom-0 w-full static">
      <div className="lg:px-4">
      <div className="flex">
      <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 mb-1 bg-[#D100C9]"></div>{" "}
                    <span className="text-[16px] lg:text-[21px]  px-1 font-medium">Contact us</span>
                    </div>
     <div>
      
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:space-x-2 md:space-x-1 lg:gap-1 my-2 gap-4">
       <div className="col-span-1 left-0">
        <p className=" font-extrabold w-1/2 lg:text-[36px] text-[21px] ">Have a project in mind? Let's make it happen</p>
        </div>
        <div className="col-span-1 right-2">
        <div className="relative text-end items-center">
          <div className="left-0">
          <span>22 Street Name, Suburb, 8000,</span><br/>
        <span>Cape Town, South Africa</span><br/>
        <a >+27 21 431 0001</a><br/>
        <a>enquirie@website.co.za</a>
          </div>
        </div>
        </div>
        </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 lg:space-x-2 md:space-x-1 lg:gap-1 my-2 gap-4">
       <div className="col-span-1">
          <ul className=" list-none">
            <li className="font-light">Terms of service</li>
            <li className="font-light">Privacy policy</li>
            <li className="font-light">Impressum</li>
          </ul>
       </div>
       <div className="col-span-1">
       <ul className=" list-none">
            <li className="font-light">Facebook</li>
            <li className="font-light">Instagram</li>
            <li className="font-light">Twitter</li>
          </ul>
        </div>
        <div className="col-span-1">
        <ul className=" list-none">
            <li className="font-light">Github</li>
            <li className="font-light">Linkedin</li>
            <li className="font-light">Teams</li>
          </ul>
        </div>
        <div className="col-span-1">
        <ul className=" list-none">
          <li className="font-light">Youtube</li>
          <li className="font-light">Behance</li>
          <li className="font-light">Dribbble</li>
          </ul>
        </div>
        <div className="col-span-2">
        <p className="pb-2">Explore open jobs</p>
        <p> &copy; 2000—2023 Company Name</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default ContactUs
import { partnersData } from "../../data";
const ContactUs = () => {
  return (
    <footer className="h-[fit] lg:py-2 py-1 lg:mx-0 lg:px-8 px-10 bg-[#430964] text-white pb-4 bottom-0 w-full static">
      <div className="lg:px-4">
      <div className="flex">
      <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 mb-1 bg-[#D100C9]"></div>{" "}
                    <span className="text-[16px] lg:text-[21px]  px-1 ">Contact us</span>
                    </div>
     <div>
      
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 lg:space-x-2 md:space-x-1 lg:gap-1 my-2 gap-4">
       <div className="col-span-1">
          <ul className=" list-none">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Impressum</li>
          </ul>
       </div>
       <div className="col-span-1">
       <ul className=" list-none">
            <li >Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="col-span-1">
        <ul className=" list-none">
            <li >Github</li>
            <li>Linkedin</li>
            <li>Teams</li>
          </ul>
        </div>
        <div className="col-span-1">
        <ul className=" list-none">
            <li >Youtube</li>
            <li>Behance</li>
            <li>Dribbble</li>
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
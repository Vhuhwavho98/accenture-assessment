
//import libraries
import { Route ,Link} from "react-router-dom";

//import the components
import ContactUs from "../../sections/contactus";
import Partners from "../../sections/partners";
import WhatWeDo from "../../sections/whatwedo"
import Cases from "../../sections/case-studies";

const Home=()=>{
    console.log(process.env.DATA_API);
    return(
        <>
        <div className=" bg-confidence  h-[450px]  text-white relative lg:min-h-[500px] lg:mb-2 mb-1 lg:py-2 py-1  lg:px-8 px-2">    
          <div className="lg:px-2 px-1 py-4">
          <div className="align-baseline absolute bottom-0 mx-4 my-4">
            <h1 className="p2-4 font-bold text-[24px] lg:text-[36px]">Live with Confidence</h1>
            <p className="py-2 ">Jose Mourinho brings confidence to pan-African Sanlam campaign</p>
            <Link
                to="/projects"  
                className="rounded-[25px] bg-[#70259B] px-2 py-[0.5rem] lg:h-[120px] lg:w-[180px] w-[120px] mb-2 lg:mb-5 my-2 btn-height "
                >
                View Project
                </Link>            
            </div>
          </div>
        </div>
        <WhatWeDo />
        <Cases/>
        <Partners/>
        </>
    )
}

export default Home
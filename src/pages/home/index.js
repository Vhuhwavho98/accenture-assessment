import WhatWeDo from "../../sections/banner-section/confidence"

const Home=()=>{
    console.log(process.env.DATA_API);
    return(
        <>
        <div className="py-4 lg:py-8 mb-2 border-[2px] border-sky-400 my-auto bg-confidence text-white relative mx-auto lg:px-8">    
            <div className="align-baseline absolute bottom-0 mx-auto">
            <h1 className="p2-4 mx-4 font-bold text-[24px] lg:text-[36px]">Live with Confidence</h1>
            <p className="py-2 mx-4">Jose Mourinho brings confidence to pan-African Sanlam campaign</p>
            <button className="mx-4 rounded-[25px] bg-indigo-500 px-2 py-1 lg:h-[50px] lg:w-[180px] w-[120px] mb-2  lg:mb-5"> View Project</button>
            </div>
        </div>
        <WhatWeDo />
        </>
    )
}

export default Home
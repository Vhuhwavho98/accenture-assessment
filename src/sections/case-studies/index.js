//Import the Libraries

import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';

//Import the getData function from services
import { getData } from "../../Appservices";
// Loads the carousel styling
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Cases = () => {
    const [dataList, setdataList] = useState([]);

    useEffect(() => {
        getData("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/")
            .then((data) => {
              if(data.success){
                console.log(data);
                setdataList(data);
              }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="h-[fit] my-1 lg:py-2 py-1 lg:mx-4 mx-8 lg:px-8 px-2">
        <div className="lg:px-0">
                <div className="flex px-1">
                <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9]"></div>{" "}
        <span className="text-[16px] lg:text-[28px] px-1 lg:px-2">Cases studies</span>
      </div>
      { dataList !==null ?
      (
        <Carousel
        infinite={true}
        ssr={true}
        autoPlay={ true}
        partialVisible={true}
        responsive={ {
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 120,
          },
          desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2, 
          },
          tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2,
          },
        }
        }
        itemClass="px-2"
        className="text-white"
      >
           {dataList.map((item, index) => (
                      <div
                      key={index}
                      className="lg:py-4 py-2 col-span-1 align-baseline content-baseline  relative text-start  my-1 mx-1 lg:mx-1 lg:px-8 px-4 lg:h-[450px] lg:max-h-[450px] max-h-[250px] h-[250px]"
                      style={{
                          backgroundImage: `url(${item.imageUrl})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                      }}
                      >            
                  <div className="bottom-0 left-1 absolute lg:mb-4 mb-2 lg:pb-4 pb-2 lg:mx-8 mx-4">   
                      <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9] my-1"></div>{" "}
                      <h2>{item.title}</h2>
                      <p>{item.description}</p> 
                  </div>
                  </div>
                  ))}
          </Carousel>
      ):
      (
      <div className="text-dark">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>)
      }
        </div>
    </div>
    );
};

export default Cases;

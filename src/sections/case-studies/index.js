//Import the Libraries

import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';

//Import the getData function from services
import { getData } from "../../Appservices";
// Loads the carousel styling
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GenericCard from "../../components/Cards/genericCard";
import LabelCard from "../../components/Cards/labelCard";

const Cases = () => {
  const [dataList, setdataList] = useState([]);
  const [showCase,setshowCase]=useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    useEffect(() => {
        getData("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/")
            .then((data) => {
                console.log(data);
                setdataList(data);
                setshowCase(true)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(dataList)
    return (
      <div className="h-[fit] my-1 lg:py-2 py-1 lg:mx-4 mx-8 lg:px-8 px-2">
        <div className="lg:px-0">
          <div className="flex px-1">
            <div className="h-[3px] lg:h-[5px] lg:w-[60px] w-[25px] lg:mt-4 mt-2 bg-[#D100C9]"></div>{" "}
              <span className="text-[16px] lg:text-[28px] px-1 lg:px-2 font-displayRegular">Cases studies</span>
            </div>
                 {
                  showCase ?  <Carousel
                  infinite={true}
                  ssr={true}
                  autoPlay={ true}
                  partialVisible={true}
                  itemsPerSlide={ 3 }

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
                
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {dataList.map((item, index) => (
        <GenericCard
          key={index}
          title={item.title}
          content={item.description}
          imageUrl={item.imageUrl}
          onClick={() => {
          }}
        >
        <LabelCard title={item.title} description={item.content}/>
        </GenericCard>
      ))}
    </div>
        </Carousel> :
        <p 
        className={`text-[#9939D0] text-center font-semibold transition-text ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    
        >Wait a moment for us to check if we have anything new</p>
                 }
        </div> 
    </div>
    );
};

export default Cases;
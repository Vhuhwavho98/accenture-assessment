import { useEffect, useState } from "react";
import { getData } from "../../Appservices";

const Cases = () => {
    const [dataList, setdataList] = useState([]);

    useEffect(() => {
        getData("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/")
            .then((data) => {
                console.log(data);
                setdataList(data);
                // Do something with the data
            })
            .catch((error) => {
                console.error(error);
                // Handle the error
            });
    }, []);

    return (
        <div className="flex lg:flex-row flex-col px-4 lg:space-x-2 lg:gap-4 mx-auto items-center content-center">
            {dataList.map((item, index) => (
                <div key={index} className="">
                    <img src={item.imageUrl} alt={item.title}  className="h-[250px] w-[fit]"/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                    </div>
            ))}
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>

    );
};

export default Cases;

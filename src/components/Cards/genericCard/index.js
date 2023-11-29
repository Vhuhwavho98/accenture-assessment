import React from 'react';
import LabelCard from '../labelCard';

const GenericCard = ({ imageUrl, content ,title}) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight:'100%',
    minWidth:'100%',
    backgroundPosition:'center'
  };

  return (
    <div
    className="lg:py-4 py-2 col-span-1 align-baseline content-baseline  relative text-start  my-1 mx-1 lg:mx-1 lg:px-8 px-4 lg:h-[450px] lg:max-h-[450px] max-h-[250px] h-[250px]
    bg-white shadow-md p-4 m-4 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
      style={cardStyle}
    >
      <LabelCard  title={title} description={content}/>
    </div>
  );
};

export default GenericCard;

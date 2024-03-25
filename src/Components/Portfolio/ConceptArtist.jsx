import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import './portfolio.css'


const ConceptArtist = () => {
  const [Images, setImages] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setImages(data.data);
  }, []);
  return (
    <div>
        <div className="gap-7 border-l-[10px] border-r-[10px] h-16 border-blue-950 flex  mt-3 items-center justify-center hover:cursor-pointer bg-gray-900 ">
        <h1 className=" text-white text-center conceptHeader ">Concept Art</h1>
      </div>
      
      
       <div className="grid grid-cols-4 gap-3 mx-3 mt-3">
      {
        Images.map((image, index) => (
          <div key={index} className="rounded-md mb-2 gap-4 ConceptImage hover:scale-105 hover:opacity-95 artIcon duration-300 ">
           <a href={image}> <img src={image} alt="" /></a>
          </div>
        ))
      }
    </div>
    
    </div>
  );
};
export default ConceptArtist;

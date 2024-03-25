import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./T3DIllustration.css";
import { deathStrike } from "./data";

const T3DIllustration = () => {
  const [details, setDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);
  const [itemIndex, setCurrentItemIndex] = useState();

  useEffect(() => {
    const index = deathStrike.findIndex((item) => item.id === details.id);
    if (index !== -1) {
      setCurrentItemIndex(index);
    }
  }, [details]);

  const handleNextClick = () => {
    setCurrentItemIndex((prev) => (prev + 1) % deathStrike.length);
  };
  const handlePrevClick = () => {
    setCurrentItemIndex(
      (prev) => (prev - 1 + deathStrike.length) % deathStrike.length
    );
  };
  const [currentData1, setCurrentData1] = useState();
  const [currentData2, setCurrentData2] = useState();

  useEffect(() => {
    setCurrentData1(deathStrike[itemIndex]?.description);
    setCurrentData2(deathStrike[itemIndex]?.videourl);
  }, [itemIndex]);

  return (
    <div className="">
      <div className="md:mx-[100px] mx-2 text-white ">
        <div className=" py-4">
          <div className="mt-3">
            <div id="videoid mt-10">
              <h1 className="fon">{currentData1}</h1>
              <video src={currentData2} controls className="vid-six ">
                <source src={details.videourl} />
              </video>
            </div>
          </div>
          <div className="flex mt-3 hidbtn">
            <div className="gb">
              <NavLink to={"/3DSculptor"}>
                <button>Go back</button>
              </NavLink>
            </div>
            <div className=" justify-center m-auto flex  text-white gap-8">
              <div
                className="w-14 h-12 border-[1px] rounded-full hover:text-7xl border-gray-700 h1 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                onClick={handlePrevClick}
              >
                {`<`}
              </div>
              <div
                className="w-14 h-12 border-[1px] border-gray-700 hover:text-7xl h1 text-bold rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                onClick={handleNextClick}
              >
                {`>`}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" mt-3 hidden">
            <div className=" left-0 right-0  flex w-fit text-white gap-8 mx-auto ">
              <div
                className="w-14 h-12 border-[1px] rounded-full hover:text-7xl border-gray-700 h1 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                onClick={handlePrevClick}
              >
                {`<`}
              </div>
              <div
                className="w-14 h-12 border-[1px] border-gray-700 hover:text-7xl h1 text-bold rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                onClick={handleNextClick}
              >
                {`>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T3DIllustration;

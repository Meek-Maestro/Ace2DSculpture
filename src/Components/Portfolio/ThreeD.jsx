import React, { useState } from "react";
import "./portfolio.css";
import { deathStrike } from "./data";
import { artIcons, art1, art2, art3 } from "./data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [art, setart1] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleModalClick = (id) => {
    const clickedData = artIcons.find((data) => data.id === id);
    if (clickedData.id === 1) {
      setOpenModal(!openModal);
      setart1(art1);
    } else if (clickedData.id === 2) {
      setOpenModal(!openModal);
      setart1(art2);
    } else if (clickedData.id === 3) {
      setOpenModal(!openModal);
      setart1(art3);
    }
  };
  const CloseModal = () => {
    setOpenModal(!openModal);
  };

 

  const handleDetails = (carddata) => {
    navigate(`/T3DIllustration/${carddata.name}`, {
      state: {
        item: carddata,
      },
    });
  };
  const NextImageClick = () => {
    setCurrentIndex((previndex) => (previndex + 1) % art.length);
  };
   const PrevImageClick = () => {
    setCurrentIndex((previndex) => (previndex - 1) % art.length);
  };
 
 


  return (
    <div className="bagckground text-white ">
      <div className="gap-7 border-l-[10px] border-r-[10px] h-16 mt-3 border-blue-950 flex items-center justify-center hover:cursor-pointer bg-gray-900 ">
      <h1 className=" text-white text-center conceptHeader ">3D sculpture</h1>
    </div>
      <div className={"fade-out-in"}>
        <T3DComponent />
      </div>
    </div>
  );

  function MangaComponent() {
    return (
      <motion.div
      >
        <div className="gap-7 h-12 border-blue-950 flex items-center justify-center hover:cursor-pointer bg-gray-900 ">
        <h1 className="T3D-figures text-center ">Art Section</h1>
      </div>
      <div className=" fade-in duration-700">
        <div className="grid grid-cols-3 m-auto mx-3 justify-evenly w-auto mt-7">
          {artIcons.map((card, index) => (
            <div key={index} className=" ">
              <div className="border rounded-md m-2 h-[400px] hover:scale-105 artIcon duration-300 hover:border-b-cyan-900">
                <img
                  className="wx rounded-md"
                  src={card.imageUrl}
                  alt=""
                  onClick={() => handleModalClick(card.id)}
                />
              </div>
              <h1 className="gb m-2">{card.name}</h1>
            </div>
          ))}
        </div>
        {openModal && (
          <div id="ModalImg" className="modal border w-96 h-96">
            <div className="ml-5 text-2xl close mb-2 " onClick={CloseModal}>
              <h1 className="sticky z-10 bg-slate-400 bg-opacity-30 rounded-md duration-300 gb w-28 text-center">
                Go back
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-9 justify-evenly">
            <button className="realbtn text-right h1" onClick={PrevImageClick}>{ `<`}</button>
             <div>
             <img
                className="modal-content"
                src={art[currentIndex]?.imageUrl}
                alt=""
                key={art.id}
              />{" "}
             </div>
              <div className="hiddeny absolute gap-56 w-fit left-0 right-0 mx-auto bottom-72">
              <button className="h1 bg-slate-400 bg-opacity-30 w-14 h-14 justify-center rounded-md duration-300" onClick={PrevImageClick}>{ `<`}</button>
              <button className="h1 bg-slate-400 bg-opacity-30 w-14 h-14 justify-center rounded-md duration-300" onClick={NextImageClick}>{ `>`}</button>
                
              </div>

              <button className="realbtn justify-right text-left h1" onClick={NextImageClick}>{ `>`}</button>
            </div>
          </div>
        )}
      </div>
      </motion.div>
    );
  }

  function T3DComponent() {
    return (
     
      <div className="md:grid md:gap-5 md:grid-cols-4 md:flex-col m-4 gap-3 py-2 fade-in duration-700">
        
        {deathStrike.map((card, index) => (
          <div>
            <div
              className="card hover:scale-105"
              key={index}
              onClick={() => {
                handleDetails(card);
              }}
            >
              <video className="vid-size" width={"100%"}>
                <source src={card.videourl} />
              </video>
              <h1 className="mt-2 text-center fon">{card.description}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Portfolio;

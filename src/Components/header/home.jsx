import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const data = useLoaderData();

  useEffect(() => {
    setImages(data);
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenModal(true);
  };                                      

  const PictureModal = () => {
    setOpenModal(!openModal);
  };

  const handleImageNextClick = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleImagePrevClick = () => {
    setSelectedImageIndex((prev) => {
      const newIndex = (prev - 1) % images.length;
      return newIndex >= 0 ? newIndex : newIndex + images.length;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div id="Concept-Artist">
        <div className="grid md:grid-cols-3 gap-2 mx-2 mt-4 border-b-4 bgCon">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-md gap-2 ConceptImage hover:scale-105 hover:bg-fixed hover:opacity-95 artIcon duration-300 "
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {openModal && (
            <motion.div
              className="fixed top-0 left-0 z-[10] w-full h-full bg-black bg-opacity-90 overflow-auto text-white duration-300 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mt-28 mx-1">
                <div
                  className="w-20 next bg-gray-600 text-center py-1 md:mx-3 mx-1 mb-3 text-[20px] rounded-md cursor-pointer active:bg-transparent"
                  onClick={PictureModal}
                >
                  <h1>{`Go back`}</h1>
                </div>
                <div className="fixed flex left-0 right-0 bottom-10 gap-8 md:bottom-52 justify-center 2xl:gap-8 2xl:bottom-10 md:gap-[575px] z-[10] md:mr-4">
                  
                    <div
                      className="w-20 bg-gray-700 text-center py-2 md:mx-3 mx-1 mb-3 rounded-sm cursor-pointer active:bg-transparent bg-opacity-75 text-[25px] next"
                      onClick={handleImagePrevClick}
                    >
                      Prev
                    </div>
                    <div
                      className="w-20 bg-gray-700 text-center py-2 md:mx-3 mx-1 mb-3 rounded-sm cursor-pointer  active:bg-transparent bg-opacity-75 next text-[25px]"
                      onClick={handleImageNextClick}
                    >
                      Next
                    </div>
                  
                </div>
                <motion.div
                  key={selectedImageIndex}
                    initial={{ opacity: 0, x: 100 }}  
                    animate={{ opacity: 1, x: 0 }}  
                    transition={{ type: "spring", stiffness: 100, damping: 10 }} 
                  >
               
                  <img
                    src={images[selectedImageIndex]}
                    alt=""
                    className="md:w-[600px] md:h-[500px] 2xl:w-[1000px] 2xl:h-[800px] h-[350px] w-[410px] m-auto rounded-md"
                  />
               
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="justify-center align-middle mt-6 border-b-4 mx-3 bgCon rounded-md">
          <h1 className="h1 text-center text-white">About Me</h1>
          <p className="text-center p mx-4 text-gray-100">
            I'm passionate about my work. Very energetic and positive! Always up
            for a challenge!
          </p>
          <p className="text-center p mx-4 text-gray-100 font">
            "There's no such thing as perfect art, there's only art better than
            what you used to draw"
          </p>
          <p className="text-center hs text-white"> ~S. Nilsson</p>
        </div>
      </div>

      <div>
        <h1 className="h1 text-center text-white mt-6 px-2">Contact me</h1>
        <div className="mb-3  gap-5 flex-col flex ">
          <a href="mailto:sbnilsson@gmail.com">
            <div className="Cbox flex gap-2 bgCon duration-300">
              <MdEmail className="iconSize mx-2 mt-2 text-gray-5" />
              <h1 className="py-3 textfnt">Email</h1>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

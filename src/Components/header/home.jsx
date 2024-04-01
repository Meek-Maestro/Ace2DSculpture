import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./home.css";

const Home = () => {
  const [videos, setvideos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const data = useLoaderData();
  useEffect(() => {
    async function fetchData() {
      try {
        setvideos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenModal(true);
  };

  const PictureModal = () => {
    setOpenModal(!openModal);
  };

  const handleImageNextClick = () => {
    setSelectedImageIndex((prev) => (prev + 1) % videos.length);
  };

  const handleImagePrevClick = () => {
    setSelectedImageIndex((prev) => {
      const newIndex = (prev - 1) % videos.length;
      return newIndex >= 0 ? newIndex : newIndex + videos.length;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div id="Concept-Artist">
        <div className="grid md:grid-cols-4 py-2 gap-2 mx-2 mt-4 border-b-4 ">
          {videos.map((image, index) => (
            <div
              key={index}
              className="rounded-md gap-2 hover:scale-[1] hover:bg-fixed hover:opacity-95 artIcon duration-300 "
            >
              <video className="h-96 w-96  2xl:w-[500px] rounded-md" controls>
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                  <video
                    className="md:w-[600px] md:h-[500px] 2xl:w-[1000px] 2xl:h-[800px] h-[350px] w-[410px] m-auto rounded-md"
                    controls
                    onClick={handleImageClick}
                  >
                    <source src={videos[selectedImageIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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

        <div className="flex m-auto justify-center">
          <div className="mb-3  gap-5 flex">
            <a href="mailto:sbnilsson@gmail.com">
              <div className="Cbox flex gap-2 bgCon w-72  md:w-96 h-12 rounded-sm duration-300 hover:scale-105 hover:shadow-sm hover:shadow-slate-200">
                <MdEmail className="text-[25px] text-white mx-2 mt-2 text-gray-5" />
                <h1 className="py-2 textfnt">Email</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

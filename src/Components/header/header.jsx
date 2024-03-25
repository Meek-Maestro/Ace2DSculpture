import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import "./header.css";

import { Link } from "react-router-dom";
import Home from "./home";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isO, setIsO] = useState(false);

  const tog = () => {
    var pop = document.getElementById("nav");
    pop.classList.toggle("hidden");
    setIsOpen(!isOpen);
    setIsO(<BsList />);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  function Head() {
    return (
      <div className="">
         <div className="flex justify-between mx-5">
         <button className="headertext md:m-auto 2xl:text-2xl 2xl:py-8">
          <Link to={`/`}>SEBASTIAN NILSSON</Link>
        </button>
       
         </div>
        <div className="headertext2 gap-16 justify-center pb-1 hidden md:flex">
          
        </div>
      </div>
    );
  }
  return (
    <>
      <div style={{backgroundColor:" rgb(0, 51, 102,0.8)"}} className="w-full border-b-4 bgCon border-b-white justify-center">
        <Head />
        <div className="tex mt-2 mr-2 md:hidden text-bold duration-300 rounded-md">
         
          <AnimatePresence>
            <div
              id="nav"
              className={`popupwindow  ${isOpen ? "visible" : "hidden"}`}
            >
              <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <nav className="text-white">
                  <div className="gap-8 flex-col flex">
                  <Link to="/">
                    <button
                      className="hover:text-blue-500 hover:underline cursor-pointer border-gray-400  rounded-md h-[50px] w-full border"
                      onClick={tog}
                    >
                      Home
                    </button>
                    </Link>
                    <Link to="/3DSculptor">
                     <button
                      className="hover:text-blue-500 hover:underline cursor-pointer border-gray-400 rounded-md h-[50px] border w-full "
                      onClick={tog}
                    >
                      3DSculptor
                    </button>
                    </Link>
                    <Link to="/Animator">
                     <button
                      className="hover:text-blue-500 hover:underline cursor-pointer border-gray-400 rounded-md h-[50px] border w-full "
                      onClick={tog}
                    >
                     Animator
                    </button>
                    </Link>
                    <Link to="/ConceptArtist">
                     <button
                      className="hover:text-blue-500 hover:underline cursor-pointer rounded-md h-[50px] border w-full border-gray-400"
                      onClick={tog}
                    >
                      Concept Artist
                    </button>
                    </Link>
                    <Link to="/about">
                    <button
                      className="hover:text-blue-500 hover:underline cursor-pointer rounded-md  border h-[50px] w-full border-gray-400"
                      onClick={tog}
                    >
                     About Me
                    </button>
                    </Link>
                    <Link to="/contact">
                    <button
                      className="hover:text-blue-500 hover:underline cursor-pointer rounded-md h-[50px] w-full border border-gray-400"
                      onClick={tog}
                    >
                     Contact Me
                    </button>
                    </Link>
                  </div>
                </nav>
              </motion.header>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
function MiniHeader() {
  return (
    <>
      <div className="text-white font-bold ml-10 py-1 resBlock md:flex hidden ">
        <nav className="flex gap-5 resBlock duration-300">
          <h1 className="hover:text-blue-500 hover:underline cursor-pointer  duration-300">
            <Link to="/">Home</Link>
          </h1>

          <h1 className="hover:text-blue-500 hover:underline cursor-pointer duration-300">
            <Link to="">About Me</Link>
          </h1>
          <h1 className="hover:text-blue-500 hover:underline cursor-pointer duration-300 ">
            <Link to="/contact">Contact Me</Link>
          </h1>
        </nav>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <div className="colorr text-white sticky top-0 z-[20] ">
        <div className="sticky py-0 top-0 z-[20]">
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;

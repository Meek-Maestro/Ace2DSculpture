import React from "react";
import "./herosection.css";
import { motion } from "framer-motion";


function Banner() {
  return (
    <>
      <div className="grid text-white py-2 ">
        <div className="relative m-auto">
         
        </div>

        
      </div>
    </>
  );
}

const Herosection = () => {
  return (
    <div className="aceColor">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.div>
    </div>
  );
};

export default Herosection;

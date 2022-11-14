import React from "react";
import { motion } from "framer-motion";
const containerVarients = {
  init: {
    opacity: 0,
  },
  ani: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const FramerDefault = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={className}
      {...props}
      variants={containerVarients}
      initial="init"
      animate="ani"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default FramerDefault;

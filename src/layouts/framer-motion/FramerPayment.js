import React from "react";
import { motion } from "framer-motion";
const containerVarients = {
  init: {
    x: "-100vw",
    opacity: 0,
  },
  ani: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const FramerPayment = ({ children, className, ...props }) => {
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

export default FramerPayment;

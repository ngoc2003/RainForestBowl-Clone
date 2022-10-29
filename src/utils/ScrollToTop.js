import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children, className = "" }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);
  return <div className={className}>{children}</div>;
};

export default ScrollToTop;

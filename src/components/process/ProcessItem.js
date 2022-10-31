import React from "react";
import PropTypes from "prop-types";

const ProcessItem = ({ title = "", children, link = "/", titleLink = "" }) => {
  return (
    <div className="relative pb-5 pl-8 border-l border-dashed border-l-font">
      <div className="absolute w-4 h-4 rounded-full top-2 -left-2 bg-pink"></div>
      <span className="block mb-1 text-lg font-semibold uppercase xl:text-2xl">
        {title}
      </span>
      {children}{" "}
      <a
        href={link}
        target="_blank"
        className="capitalize text-blue"
        rel="noreferrer"
      >
        {titleLink}
      </a>
    </div>
  );
};

ProcessItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProcessItem;

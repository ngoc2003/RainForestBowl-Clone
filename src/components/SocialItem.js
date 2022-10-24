import React from "react";

const SocialItem = ({ data }) => {
  return (
    <a
      href={data.path}
      target="_blank"
      className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-font"
      rel="noreferrer"
    >
      <img src={data.image} className="w-3 h-3" alt="" />
    </a>
  );
};

export default SocialItem;

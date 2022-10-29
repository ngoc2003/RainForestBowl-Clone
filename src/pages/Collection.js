import React from "react";
import Filter from "../modules/collection/Filter";
import Hero from "../modules/collection/Hero";

const Collection = () => {
  return (
    <div className='grid gap-8'>
      <Hero></Hero>
      <Filter></Filter>
    </div>
  );
};

export default Collection;

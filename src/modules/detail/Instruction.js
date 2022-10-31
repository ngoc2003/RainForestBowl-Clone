import React from "react";
import BackgroundAttemp from "../../components/BackgroundAttemp";
import bg from "../../images/care/care-instruction-bg-white.webp";
import TabListData from "../../data/TabList";
import { v4 } from "uuid";
const Instruction = ({ categories }) => {
  const { care } = TabListData.find((tab) => tab.name === categories);
  return (
    <BackgroundAttemp>
      <div >
        <div className="flex flex-col justify-between p-10 text-black bg-white md:flex-row gap-x-2 rounded-xl">
          {care.map((instruction) => (
            <div key={v4()} className='flex flex-col justify-between'>
              <img src={instruction.image} className='max-w-full mx-auto' alt="" />
              <p className="mt-2 text-center">{instruction.text}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundAttemp>
  );
};

export default Instruction;

import React from "react";
import { v4 } from "uuid";
import CommitData from "../../data/Commit";
const Commit = () => {
  return (
    <div className='flex items-center justify-between mt-8'>
      {CommitData.map((commit) => (
        <div key={v4()}>
          <img src={commit.image} className='mx-auto' alt="" />
          <p className="text-sm font-semibold text-center">{commit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Commit;

import React from "react";
import CommitData from "../../data/Commit";
const Commit = () => {
  return (
    <div className='flex items-center justify-between mt-8'>
      {CommitData.map((commit) => (
        <div>
          <img src={commit.image} className='mx-auto' alt="" />
          <p className="text-center text-sm font-semibold">{commit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Commit;

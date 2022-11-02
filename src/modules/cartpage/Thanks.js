import React from 'react';
import tree from '../../images/icon-tree.webp'
const Thanks = ({number}) => {
    return (
        <div className='flex items-center gap-5 px-3 py-2 my-5 text-sm rounded-md bg-westar'>
            <img src={tree} width={"24px"} alt="" />
            Thanks for your order, we'll plant {number} TREES in your honor!
            
        </div>
    );
};

export default Thanks;
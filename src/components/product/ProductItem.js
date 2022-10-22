import React from 'react';
import PackList from './pack/PackList';

const ProductItem = ({data}) => {
    return (
        <div>
            <img src={data.image} alt="" />
            <h4 className='capitalize'>{data.title}</h4>
            <PackList data={data.type}></PackList>
        </div>
    );
};

export default ProductItem;
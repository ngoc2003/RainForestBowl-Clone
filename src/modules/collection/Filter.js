import React from 'react';
import FilterOption from './filter/FilterOption';
import ListProduct from './filter/ListProduct';

const Filter = () => {
    return (
        <div className='flex gap-5'>
            <FilterOption></FilterOption>
            <ListProduct></ListProduct>
        </div>
    );
};

export default Filter;
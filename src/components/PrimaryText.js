import React from 'react';

const PrimaryText = ({children}) => {
    return (
        <p className= 'inline-block px-1 font-bold text-white bg-primary'>
            {children}
        </p>
    );
};

export default PrimaryText;
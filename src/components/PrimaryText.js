import React from 'react';

const PrimaryText = ({children}) => {
    return (
        <p className= 'inline-block px-1 text-white xl:font-bold bg-primary'>
            {children}
        </p>
    );
};

export default PrimaryText;
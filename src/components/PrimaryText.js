import React from 'react';

const PrimaryText = ({children}) => {
    return (
        <p className= 'inline-block px-1 text-xs text-white sm:text-base xl:font-bold bg-primary whitespace-nowrap'>
            {children}
        </p>
    );
};

export default PrimaryText;
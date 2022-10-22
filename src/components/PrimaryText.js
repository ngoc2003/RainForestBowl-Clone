import React from 'react';

const PrimaryText = ({children}) => {
    return (
        <p className= 'bg-primary text-white font-bold px-1 inline-block'>
            {children}
        </p>
    );
};

export default PrimaryText;
import React from 'react';
import Button from './Button'
const AddButton = ({children, ...props}) => {   

    return (
        <Button {...props} >{children}</Button>
    );
};

export default AddButton;
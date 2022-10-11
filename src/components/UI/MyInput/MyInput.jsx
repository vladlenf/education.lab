import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({children, ...props}) => {
    return (
        <div>
            <input {...props} className={classes.myInput}/>
            {children}
        </div>
    );
};

export default MyInput;
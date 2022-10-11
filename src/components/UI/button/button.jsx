import React, {useState} from 'react';
import classes from "./button.module.css";

const MyButton = ({children, ...props}) => {

    /*const [site,setSite] = useState('')
    const addNewUser = (e) => {
        e.preventDefault()

    }*/
    return (
        <button {...props} className={classes.myBtn}>

            {children}
        </button>
    );
};

export default MyButton;
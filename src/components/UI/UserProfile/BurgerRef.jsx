import React from 'react';
import classes from "./userprofile.module.css";

const BurgerRef = ({children, ...props}) => {
    return (
        <div>
            <li><a className= {classes.wrapper__menu_link} {...props}>{children}</a></li>
        </div>
    );
};

export default BurgerRef;
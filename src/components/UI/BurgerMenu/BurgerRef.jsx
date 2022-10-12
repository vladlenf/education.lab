import React from 'react';
import classes from "../UserProfile/userprofile.module.css";

const BurgerRef = ({children, ...props}) => {
    return (
        <div style={{margin: '20px'}}>
            <li><a className= {classes.wrapper__menu_link} {...props}>

                {children}
            </a></li>
        </div>
    );
};

export default BurgerRef;
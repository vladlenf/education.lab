import React from 'react';
import classes from './Notification.module.css'
const Notification = ({children, ...props},flag) => {
    if(flag == 1){
        console.log("232");
        return (
        <div {...props} className={classes.ntf}>
            <h2>{children}</h2>
        </div>
    )}
    else if(flag == 0) {
        return (
            <div {...props} className={classes.nft2}>
                <h2>{children}</h2>
            </div>
    )}
};

export default Notification;
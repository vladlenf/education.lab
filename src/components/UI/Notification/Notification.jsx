import React from 'react';
import classes from './Notification.module.css'
const Notification = ({children, flag, ...props}) => {
    if(flag == 1){
        return (
        <div {...props} className={classes.ntf}>
            <h2>{children}</h2>
        </div>
    )}
    else if(flag == 0) {
        return (
            <div {...props} className={classes.ntf2}>
                <h2>{children}</h2>
            </div>
    )}
};

export default Notification;
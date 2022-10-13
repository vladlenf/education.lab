import React from 'react';

const ExitAccount = ({children, ...props}) => {
    return (
        <div {...props}>
            {children} {/*Имя аккаунта*/}
            <a href ="/index.html">Выйти</a>
        </div>
    );
};

export default ExitAccount;
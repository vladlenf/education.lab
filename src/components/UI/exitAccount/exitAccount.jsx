import React from 'react';

const ExitAccount = ({children, ...props}) => {
    return (
        <div {...props}>
            {children} {/*Имя аккаунта*/}
            <a href ="http://localhost:3000/welcome">Выйти</a>
        </div>
    );
};

export default ExitAccount;
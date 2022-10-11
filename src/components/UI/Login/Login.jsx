import React from 'react';
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import classes from "../Login/Login.module.css";

const Login = () => {

    return (
        <div>
            <h4>Логин</h4>
            <MyInput type="text"/>
            <h4>Пароль</h4>
            <MyInput type="password"/>
            <div className={classes.btn}>
                <MyButton>
                    Login
                </MyButton>
            </div>
        </div>
    );
};

export default Login;
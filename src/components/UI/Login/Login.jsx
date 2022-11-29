import React, {useState} from 'react';
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import classes from "../Login/Login.module.css";
import CoursePage from "../../../pages/CoursePage/CoursePage";
import router from "react-router-dom/es/Router";
import {Link} from "react-router-dom";
import userLogin from "../../API/Login";


const SignIn = async (e) => {

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const userData = new FormData()
    userData.append("login", login);
    userData.append("password", password);
    const response = await userLogin.postAll(userData);
    console.log(response);
    if(response.access === 'allowed'){
        document.location.href = "http://localhost:3000/courses";
    } else {
        alert('ВЫЙДИ И ЗАЙДИ НОРМАЛЬНА!')
    }





    /*if(response.filter( p=> p.access==='allowed'){
        document.location.href = "http://localhost:3000/courses";
    } else alert("")*/
    e.preventDefault()
}

    const Login = () => {

    return (
        <div>
            <h4>Логин</h4>
            <MyInput
                type="text"
                id="login"></MyInput>
            <h4>Пароль</h4>
            <MyInput
                type="password"
                id="password"></MyInput>
            <div className={classes.btn}>
                <MyButton onClick={SignIn}>
                    Войти
                </MyButton>
            </div>
        </div>
    );
};

export default Login;
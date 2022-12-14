import React, {useContext, useEffect, useState} from 'react';
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import classes from "../Login/Login.module.css";
import CoursePage from "../../../pages/CoursePage/CoursePage";
import router from "react-router-dom/es/Router";
import {Link} from "react-router-dom";
import userLogin from "../../API/Login";
import {useInput} from "../../../hooks/useValidations"


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
    e.preventDefault()

}



const Login = () => {
    const login = useInput('', {isEmpty: true, minLength: 2, maxLength: 40})
    const password = useInput('', {isEmpty: true, minLength: 2, maxLength: 40})
    return (
        <div>
            <h4>Логин</h4>
            {(login.isDirty && login.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            {(login.isDirty && login.minLengthError) && <div style={{color:'red'}}>Твой логин был длиннее:)</div>}
            {(login.isDirty && login.maxLengthError) && <div style={{color:'red'}}>Меньше букв в логине:)</div>}
            <MyInput
                type="text"
                id="login"
                onChange={e => login.onChange(e)}
                value={login.value}
                onBlur={e => login.onBlur(e)}>
            </MyInput>
            <h4>Пароль</h4>
            {(password.isDirty && password.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            {(password.isDirty && password.minLengthError) && <div style={{color:'red'}}>Твой пароль был длиннее:)</div>}
            {(password.isDirty && password.maxLengthError) && <div style={{color:'red'}}>Меньше букв в пароле:)</div>}

            <MyInput
                type="password"
                id="password"
                onChange={e => password.onChange(e)}
                value={password.value}
                onBlur={e => password.onBlur(e)}>
            </MyInput>
            <div className={classes.btn}>
                <MyButton disabled={!login.inputValid || !password.inputValid} onClick={SignIn} >
                    Войти
                </MyButton>
            </div>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import classes from "../Login/Login.module.css";
import CoursePage from "../../../pages/CoursePage/CoursePage";
import router from "react-router-dom/es/Router";
import {Link} from "react-router-dom";

    const Login = () => {
        const [login, setLogin] = useState('')
        const [password, setPassword] = useState('')
    const SignIn = (e) =>{
        e.preventDefault()
        document.location.href ="http://localhost:3000/courses";
    }
    return (
        <div>
            <h4>Логин</h4>
            <MyInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}/>
            <h4>Пароль</h4>
            <MyInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <div className={classes.btn}>
                <MyButton onClick={SignIn}>

                    Войти
                </MyButton>

            </div>
        </div>
    );
};

export default Login;
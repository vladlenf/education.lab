import React, {useState} from 'react';
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import classes from "../Login/Login.module.css";
import CoursePage from "../CoursePage/CoursePage";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
const SignIn = (e) =>{
    e.preventDefault()
    console.log(setLogin,setPassword)
    if(setLogin == "user" && setPassword == "12345"){
        console.log('asdsadas')
    }

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
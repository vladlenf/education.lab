import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import classes from './Registration.module.css'
import MyButton from "../button/button";
import Notification from "../Notification/Notification";
import MyModal from "../MyModal/MyModal";
import getUsers from "../../API/getUsers";
import axios from "axios";
import registrationUsers from "../../API/registrationUser";
import {useInput} from "../../../hooks/useValidations"



async function SaveUserData(Name, LastName, Patronymic, Date, userEmail, Login, Password) { /*Достаем данные из формы Регистрация*/
    const users = await getUsers.getAll();
    console.log(users);

    let Category = document.getElementsByName('category');
    let a=0;
    if (Category[0].checked == 0){
        a=1;
        console.log(Name, LastName, Patronymic, Date, Login, Password, a)
    }
    else{
        a=0;
        console.log(Name, LastName, Patronymic, Date, Login, Password, a)
    }
    const userData = new FormData()
    userData.append("0",Name.value);
    userData.append("1",LastName);
    userData.append("2",Patronymic);
    userData.append("3",Date);
    userData.append("4",userEmail);
    userData.append("5",a);
    userData.append("6",Login);
    userData.append("7",Password);
    console.log(userData);
    /*const r = await registrationUsers.postAll(userData);*/
    console.log(Name.value, LastName.value, Patronymic.value, Date.value, userEmail.value, Login.value, Password.value, a)
}

const Registration = () => {
    const Name = useInput('', {isEmpty: true, minLength: 1, maxLength: 35})
    const LastName = useInput('', {isEmpty: true, minLength: 1, maxLength: 35})
    const Patronymic = useInput('', {isEmpty: true, minLength: 1, maxLength: 35})
    const Date = useInput('', {isEmpty: true})
    const userEmail = useInput('', {isEmpty: true, minLength: 1, maxLength: 40, isEmail:true})
    const Login = useInput('', {isEmpty: true, minLength: 1, maxLength: 40})
    const Password = useInput('', {isEmpty: true, minLength: 1, maxLength: 40, repeatPassword: false})
    const Password2 = useInput('',{})

    return (

        <div>
            <h4>Имя</h4>
            {(Name.isDirty && Name.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="text"
                onChange={e => Name.onChange(e)}
                value={Name.value}
                onBlur={e => Name.onBlur(e)}/>
            <h4>Фамилия</h4>
            {(LastName.isDirty && LastName.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="text"
                onChange={e => LastName.onChange(e)}
                value={LastName.value}
                onBlur={e => LastName.onBlur(e)}
            />
            <h4>Отчество</h4>
            {(Patronymic.isDirty && Patronymic.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="text"
                onChange={e => Patronymic.onChange(e)}
                value={Patronymic.value}
                onBlur={e => Patronymic.onBlur(e)}
            />
            <h4>Дата рождения </h4>
            {(Date.isDirty && Date.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="date"
                onChange={e => Date.onChange(e)}
                value={Date.value}
                onBlur={e => Date.onBlur(e)}
            />
            <h4>Электронная почта</h4>
            {(userEmail.isDirty && userEmail.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            {(userEmail.isDirty && userEmail.emailError) && <div style={{color:'red'}}>Электронная почта некоректна</div>}
            <MyInput
                onChange={e => userEmail.onChange(e)}
                value={userEmail.value}
                onBlur={e => userEmail.onBlur(e)}
            />
            <h4>Придумайте логин</h4>
            {(Login.isDirty && Login.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="text"
                onChange={e => Login.onChange(e)}
                value={Login.value}
                onBlur={e => Login.onBlur(e)}
            />
            <h4>Пароль</h4>
            {(Password.isDirty && Password.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            {(Password.isDirty && Password.repeatPasswordError) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="password"
                onChange={e => Password.onChange(e)}
                value={Password.value}
                onBlur={e => Password.onBlur(e)}
            />
            <h4>Пароль ещё раз</h4>
            {(Password2.isDirty && Password2.isEmpty) && <div style={{color:'red'}}>Поле не может быть пустым</div>}
            <MyInput
                type="password"
                onChange={e => Password2.onChange(e)}
                value={Password2.value}
                onBlur={e => Password2.onBlur(e)}
            />
            <div className={classes.category}>
                <p><b>Категория</b>
                <p>Студент</p>
                <MyInput type="radio" name="category" value={"student"} checked/>
                <p>Преподаватель</p>
                <MyInput type="radio" name="category" value={"teacher"}/>
                </p>
            </div>
            <MyButton onClick={() => SaveUserData(Name, LastName, Patronymic, Date, userEmail, Login, Password)}>
                Зарегистрироваться
            </MyButton>
        </div>
    );
};

export default Registration;
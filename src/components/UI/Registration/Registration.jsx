import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import classes from './Registration.module.css'
import MyButton from "../button/button";
import Notification from "../Notification/Notification";
import MyModal from "../MyModal/MyModal";
import getUsers from "../../API/getUsers";
import axios from "axios";
import registrationUsers from "../../API/registrationUser";




async function SaveUserData() { /*Достаем данные из формы Регистрация*/
    const users = await getUsers.getAll();
    console.log(users);
    let Name = document.getElementById('userName').value;
    let LastName = document.getElementById('userLastName').value;
    let Patronymic = document.getElementById('userPatronymic').value;
    let Date = document.getElementById('userDate').value;
    let userEmail = document.getElementById('userEmail').value;
    let Login = document.getElementById('userLogin').value;
    let Password = document.getElementById('userPassword').value;
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
    userData.append("0",Name);
    userData.append("1",LastName);
    userData.append("2",Patronymic);
    userData.append("3",Date);
    userData.append("4",userEmail);
    userData.append("5",a);
    userData.append("6",Login);
    userData.append("7",Password);
    console.log(userData);
    const r = await registrationUsers.postAll(userData);
}




const Registration = () => {

    return (

        <div>
            <h4>Имя</h4>
            <MyInput type="text" id="userName"/>
            <h4>Фамилия</h4>
            <MyInput type="text" id="userLastName"/>
            <h4>Отчество</h4>
            <MyInput type="text" id="userPatronymic"/>
            <h4>Дата рождения </h4>
            <MyInput type="date" id="userDate"/>
            <h4>Придумайте логин</h4>
            <MyInput type="text" id="userLogin"/>
            <h4>Электронная почта</h4>
            <MyInput type="email" id="userEmail"/>
            <h4>Пароль</h4>
            <MyInput type="password" id="userPassword"/>
            <h4>Пароль ещё раз</h4>
            <MyInput type="password" id="userPassword2"/>
            <div className={classes.category}>
                <p><b>Категория</b>
                <p>Студент</p>
                <MyInput type="radio" name="category" value={"student"}  />
                <p>Преподаватель</p>
                <MyInput type="radio" name="category" value={"teacher"} />
                </p>
            </div>
            <MyButton onClick={() => SaveUserData()}>
                Зарегистрироваться
            </MyButton>
        </div>
    );
};

export default Registration;
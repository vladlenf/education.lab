import React from 'react';
import MyInput from "../MyInput/MyInput";
import classes from './Registration.module.css'
import MyButton from "../button/button";
import Notification from "../Notification/Notification";

function SaveUserData (){ /*Достаем данные из формы Регистрация*/
    let Name = document.getElementById('userName').value;
    let LastName = document.getElementById('userLastName').value;
    let Patronymic = document.getElementById('userPatronymic').value;
    let Date = document.getElementById('userDate').value;
    let Login = document.getElementById('userLogin').value;
    let Password = document.getElementById('userPassword').value;
    let Category = document.getElementById('Category').value;
    console.log(Name, LastName, Patronymic, Date, Login, Password, Category);
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
                <p>Ученик</p>
                <MyInput type="radio" name="category" value={"student"} id="Category" />
                <p>Преподаватель</p>
                <MyInput type="radio" name="category" value={"teacher"} id="Category"/>
                </p>
            </div>
            <MyButton onClick={SaveUserData}>
                Зарегистрироваться
            </MyButton>


        </div>
    );
};

export default Registration;
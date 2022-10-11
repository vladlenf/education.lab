import React from 'react';
import MyInput from "../MyInput/MyInput";
import classes from './Registration.module.css'
import MyButton from "../button/button";

const Registration = () => {
    return (

        <div>
            <h4>Имя</h4>
            <MyInput type="text"/>
            <h4>Фамилия</h4>
            <MyInput type="text"/>
            <h4>Отчество</h4>
            <MyInput type="text"/>
            <h4>Дата рождения</h4>
            <MyInput type="date"/>
            <h4>Придумайте логин</h4>
            <MyInput type="text"/>
            <h4>Электронная почта</h4>
            <MyInput type="email"/>
            <h4>Пароль</h4>
            <MyInput type="password"/>
            <h4>Пароль ещё раз</h4>
            <MyInput type="password"/>
            <div className={classes.category}>
                <p><b>Категория</b>
                <p>Ученик</p>
                <MyInput type="radio" name="category" value={"student"}/>
                <p>Преподаватель</p>
                <MyInput type="radio" name="category" value={"teacher"}/>
                </p>
            </div>
            <MyButton>
                Зарегистрироваться
            </MyButton>


        </div>
    );
};

export default Registration;
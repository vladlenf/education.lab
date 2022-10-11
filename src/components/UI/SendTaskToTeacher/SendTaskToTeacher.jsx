import React from 'react';
import MyButton from "../button/button";
import classes from "./SendTaskToTeacher.module.css"

const SendTaskToTeacher = ({children, ...props}) => {
    return (
        <div>
            <div>
                <h2>Отправить задание {children}</h2>
                <textarea>

                </textarea>
                <h5>Прикрепить файл</h5>
                <input type="file"/>
                <MyButton>
                    Отправить
                </MyButton>
            </div>
        </div>
    );
};

export default SendTaskToTeacher;
import React from 'react';
import MyButton from "../button/button";
import classes from "./AddNewTask.module.css"

const AddNewTask = ({children, ...props}) => {
    return (
        <div>
            <div>
                <h4>Название задания</h4>
                <input type="text"/>
            </div>
            <div>
                <h4>Описание задания</h4>
                <textarea>

                </textarea>
            </div>
            <div>
                <h5>Прикрепить файл (необязательно*)</h5>
                <input type="file"/>
                <MyButton>
                    Добавить еще файл
                </MyButton>
                <MyButton>
                    Добавить задание
                </MyButton>
            </div>
        </div>
    );
};

export default AddNewTask;
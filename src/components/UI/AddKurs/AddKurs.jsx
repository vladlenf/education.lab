import React from 'react';
import classes from './AddKurs.module.css'
import MyButton from "../button/button";

const AddKurs = ({children,...props}) => {
    return (
        <div {...props} className={classes.AddKurs} >
            <div>
                <h4>Введите название курса</h4>
                <input type="text"/>
                <h4>Описание курса</h4>
                <textarea maxLength="1000">

                </textarea>
                <h4>Прикрипить файл</h4>
                <input type="file"/>
                <MyButton>
                    Добавить еще файл
                </MyButton>

            </div>
            <MyButton>
                Создать курс
            </MyButton>
        </div>
    );
};

export default AddKurs;
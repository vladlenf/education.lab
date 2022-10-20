import React from 'react';
import classes from './AddCourse.module.css'
import MyButton from "../button/button";
import MyInput from "../MyInput/MyInput";
import TextArea from "../TextArea/TextArea";

const AddCourse = ({children,...props}) => {

    return (
        <div {...props} className={classes.AddKurs} >
            <div>
                <h4>Введите название курса</h4>
                <MyInput
                    /*value={}
                    onChange={e => setCourseName(e.target.value)}*/
                    maxLength="40">

                </MyInput>
                <h4>Описание курса</h4>
                <TextArea
                    /*value={CourseDescription}
                    onChange={e => setCourseDescription(e.target.value)}*/
                    rows="10"

                    maxLength="300">


                </TextArea>

                {/*<h4>Прикрипить файл</h4>
                <input type="file"/>
                <MyButton onClick={()=> }>
                    Добавить еще файл
                </MyButton>*/}

            </div>
            <MyButton>
                Создать курс
            </MyButton>
        </div>
    );
};

export default AddCourse;
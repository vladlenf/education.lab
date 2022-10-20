import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../button/button";
import classes from './CourseForm.module.css'

const CourseForm = ({create, remove}) => {
    const [course,setCourse] = useState({title:'',body:''})

    const addNewCourse = (e) => {
        e.preventDefault()
        const newCourse = {
            ...course, id:Date.now()
        }
        create(newCourse)
        setCourse({title: '', body: ''})
    }
    return (
        <form className={classes.addNewCourse}>
            <MyInput
                value={course.title}
                onChange={e => setCourse({...course, title: e.target.value})}
                type="text"
                placeholder="Название курса"
            />
            <MyInput
                value={course.body}
                onChange={e => setCourse({...course, body: e.target.value})}
                type="text"
                maxLength="250"
                placeholder="Описание курса"
            />
            <MyButton onClick={addNewCourse}>Создать курс</MyButton>
        </form>
    );
};

export default CourseForm;
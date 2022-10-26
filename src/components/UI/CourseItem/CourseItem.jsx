import React from 'react';
import classes from './CourseItem.module.css'
import MyButton from "../button/button";

const CourseItem = (props) => {

    return (
        <div className={classes.course}>
            <div className={classes.course__p}>
                <p><strong>{props.number}. {props.course.title}</strong></p>
            </div>
            <div className={classes.course__content}>
                {props.course.body}
            </div>
            <div className={classes.btns}>
                <MyButton onClick={() => props.remove(props.course)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.course)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default CourseItem;

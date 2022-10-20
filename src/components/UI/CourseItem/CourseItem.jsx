import React from 'react';
import classes from './CourseItem.module.css'
import MyButton from "../button/button";

const CourseItem = (props) => {

    return (
        <div className={classes.course}>
            <div >
                <strong>{props.number}. {props.course.title}</strong>
            </div>
            <div className={classes.course__content}>
                {props.course.body}
            </div>
            <div>
                <MyButton onClick={() => props.remove(props.course)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default CourseItem;

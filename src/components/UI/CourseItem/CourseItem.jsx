import React from 'react';
import classes from './CourseItem.module.css'
import MyButton from "../button/button";
import {useHistory} from "react-router-dom";

const CourseItem = (props) => {
    const router = useHistory()
    return (
        <div className={classes.course}>
            <div className={classes.course__p}>
                <p><strong>{props.course.title}</strong></p>
            </div>
            <div className={classes.course__content}>
                {props.course.body}
            </div>
            <div className={classes.btns}>
                <MyButton onClick={() => router.push(`/courses${props.courses.id}`)}>
                    Открыть(В разработке!)
                </MyButton>
                <MyButton onClick={() => props.remove(props.course)}>
                    Удалить(В разработке!)
                </MyButton>
            </div>
        </div>
    );
};

export default CourseItem;

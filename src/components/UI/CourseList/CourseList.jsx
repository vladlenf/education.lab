/*
import React, {useState} from 'react';
import classes from '/'
import CourseItem from "../CourseItem/CourseItem";

const CourseList = ({courses,title,remove}) => {
    if (!courses.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Курсы не найдены!
            </h1>
        )
    }

    return (
        <div className="">
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {courses.map((course, index) =>
                key={course.id}
                timeout={100}
                classNames="course"
                <CourseItem remove={remove} number={index+1} course={course}/>
                )}

        </div>
    );
};

export default CourseList;*/

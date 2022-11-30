import React, {useState} from 'react';
import CourseItem from "./CourseItem/CourseItem";

const CourseList = ({courses, remove}) => {

    if (!courses.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Курсы не найдены!
            </h1>
        )
    }
    return (
        <div>
            {courses.map((course) =>
                <CourseItem number={course.id} course={course} key={course.id} remove={remove}/>
                )}

        </div>
    );
};

export default CourseList;

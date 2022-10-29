import React from 'react';
import {useState} from "react";
import {useCourses} from "../../hooks/useCourses";
import BurgerMenu from "../../components/UI/BurgerMenu/BurgerMenu";
import ExitAccount from "../../components/UI/exitAccount/exitAccount";
import CourseList from "../../components/UI/CourseList";
import MyButton from "../../components/UI/button/button";
import MyModal from "../../components/UI/MyModal/MyModal";
import CourseForm from "../../components/UI/CourseForm/CourseForm";
import classes from "./Course.module.css";
import CourseFilter from "../../components/UI/CourseFilter";

const CoursePage = () => {
    /*Массив курсов состоящий из объектов*/
    const [courses,setCourses] = useState([
        {id:1, title:'asdas', body:'asdas'},
        {id:2, title:'sadd', body:'asdddas'},
        {id:3, title:'asfasdas', body:'asdas'},
        {id:4, title:'asfsdadas', body:'asdfsadas'},
        {id:5, title:'affassdas', body:'asdas'},
        {id:6, title:'asfasddas', body:'asdfsadas'},
        {id:7, title:'asdas', body:'asdas'},
        {id:8, title:'asdfdasas', body:'asdfdsaas'},
        {id:9, title:'asdas', body:'asdafadss'},
        {id:10, title:'afsdasdas', body:'asdas'},
        {id:11, title:'asdas', body:'asdfdsaas'}
    ])
    const [modal,setModal] = useState(false) /*Модальное окно, по умолчанию выключено*/
    const [filter, setFilter] = useState({sort: '', query: ''}) /*Фильтр сортировки курсов*/
    const sortedAndSearchedCourses = useCourses(courses, filter.sort, filter.query); /*Сортированный список курсов (Кастомный хук)*/

    const createCourse = (newCourse) => { /*Создание нового курса*/
        setCourses([...courses, newCourse])
        setModal(false)
    }

    const removeCourse = (course) => { /*Удаление курса*/
        setCourses(courses.filter(p => p.id !== course.id))
    }

    return (
        <body>
            <header>
                <BurgerMenu/>
                <div>

                </div>
                <div className={classes.MiddleHead}>
                    <h1>Список доступных курсов</h1>
                </div>
                <div className={classes.RightHead}>
                    <ExitAccount/>
                </div>
            </header>

            <main >
                <nav className={classes.LeftContent}>
                    sasddasdsasadsadsadasdasdasdasdasdsadad
                </nav>

                <div className={classes.MainContent}>
                    <hr style={{margin: '15px 0'}}/>
                    <CourseFilter
                        filter={filter}
                        setFilter={setFilter}
                    />

                    <CourseList courses={sortedAndSearchedCourses} remove={removeCourse}></CourseList>
                </div>
                <div className={classes.RightContent}>

                    <div className={classes.RightUpContent}>
                        sasddasdsa
                    </div>
                    <div className={classes.RightBottomContent}>
                        <MyButton onClick={() => setModal(true)}>
                            Добавить курс
                        </MyButton>
                    </div>
                </div>
                <MyModal visible={modal} setVisible={setModal}>
                    <CourseForm create={createCourse}/>
                </MyModal>

            </main>

        </body>

    );
};

export default CoursePage;


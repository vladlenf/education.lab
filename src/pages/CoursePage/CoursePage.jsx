import React, {useContext, useEffect} from 'react';
import {useState} from "react";
import {useCourses} from "../../hooks/useCourses";
import BurgerMenu from "../../components/UI/BurgerMenu/BurgerMenu";
import ExitAccount from "../../components/UI/exitAccount/exitAccount";
import CourseList from "../../components/UI/CourseList";
import MyButton from "../../components/UI/button/button";
import MyModal from "../../components/UI/MyModal/MyModal";
import CourseForm from "../../components/UI/CourseForm/CourseForm";
import classes from "./Course.module.css";
import CourseFilter from "../../components/CourseFilter";
import userLogin from "../../components/API/Login";
import getCourses from "../../components/API/getCourses";
import axios from "axios";


const CoursePage = () => {

    /*Массив курсов состоящий из объектов*/
    const [courses,setCourses] = useState([

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

    useEffect( ()=>{
        fetchCourses()
    },[])

    async function fetchCourses() {

        /*const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        setCourses(response.data)*/
        const fetchedcourses = await getCourses.getAll();
        setCourses(fetchedcourses)
        console.log(fetchedcourses)


    }
    const vk='https://www.vk.com'
    console.log(userLogin)
    return (
        <body>
            <header>
                <BurgerMenu/>
                <div className={classes.MiddleHead}>
                    <h1>Список доступных курсов</h1>
                </div>
                <div className={classes.RightHead}>
                    <ExitAccount/>
                </div>
            </header>

            <main >

                <div className={classes.LeftContent}>
                    <strong>Ваши подписки:(В разбработке!)</strong>
                    {courses.map(course =>{
                        return (
                            <p><a href={vk}></a>{course.title}</p>
                        )
                    })
                    }
                </div>

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
                        Календарь с дедлайнами (В разработке!)
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


import React, {useEffect} from 'react';
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

const CoursePage = () => {
    /*Массив курсов состоящий из объектов*/
    const [courses,setCourses] = useState([
        {id:1, title:'c[k][1]', body:'c[k][2]'}
    ])
    const [modal,setModal] = useState(false) /*Модальное окно, по умолчанию выключено*/
    const [filter, setFilter] = useState({sort: '', query: ''}) /*Фильтр сортировки курсов*/
    const sortedAndSearchedCourses = useCourses(courses, filter.sort, filter.query); /*Сортированный список курсов (Кастомный хук)*/


    const createCourse = (newCourse) => { /*Создание нового курса*/
        console.log(newCourse)
        console.log("1")
        setCourses([...courses, newCourse])
        setModal(false)
    }


    const removeCourse = (course) => { /*Удаление курса*/
        setCourses(courses.filter(p => p.id !== course.id))
    }

    useEffect(()=> {
        fetchCourses()
    },[])


    async function fetchCourses() {
        const c = await getCourses.getAll();
        for (let k = 0; k < c.length; k++) {
            /*console.log(k)*/
            let d={id:c[k][0], title:c[k][1], body:c[k][2]}
            /*console.log(d)*/
            createCourse({id:c[k][0], title:c[k][1], body:c[k][2]})
        }

    }

    return (
        <body>
            <header>
                <BurgerMenu/>
                <div>
                    <MyButton onClick={() => fetchCourses()}/>
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


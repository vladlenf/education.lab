import React, {useState} from 'react';
import classes from './Course.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ExitAccount from "../exitAccount/exitAccount";
import MyButton from "../button/button";
import Login from "../Login/Login";
import MyModal from "../MyModal/MyModal";
import CourseList from "../CourseList/CourseList";
import CourseItem from "../CourseItem/CourseItem";
import CourseForm from "../CourseForm/CourseForm";
import MySelect from "../MySelect/MySelect";
import MyInput from "../MyInput/MyInput";
import {useCourses} from '../../../hooks/useCourses'
import CourseFilter from '../CourseFilter'

const CoursePage = () => {

    const [courses,setCourses] = useState([

    ])
    const [modal,setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedCourses = useCourses(courses, filter.sort, filter.query);



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

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


const CoursePage = () => {

    const [courses,setCourses] = useState([
        {id:1,title:'Курс по React', body:'Изучаем React'},
        {id:2, title:'Курс по Python', body:'Изучаем Python'},
        {id:3, title:'Купс по PHP', body: 'Изучаем PHP'}
    ])
    const [modal,setModal] = useState()

    const createCourse = (newCourse) => {
        setCourses([...courses, newCourse])
        setModal(false)
    }

    const removeCourse = (course) => {
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
                    <CourseList courses={courses} remove={removeCourse}></CourseList>
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

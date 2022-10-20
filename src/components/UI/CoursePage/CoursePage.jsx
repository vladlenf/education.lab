import React, {useState} from 'react';
import classes from './Course.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ExitAccount from "../exitAccount/exitAccount";
import MyButton from "../button/button";
import AddCourse from "../AddCourse/AddCourse";
import Login from "../Login/Login";
import MyModal from "../MyModal/MyModal";
import CourseList from "../CourseList/CourseList";

const CoursePage = () => {
    const [courses,setCourses] = useState([
        {id:1,title:'Курс по React', body:'Изучаем React'},
        {id:2, title:'Курс по Python', body:'Изучаем Python'},
        {id:3, title:'Купс по PHP', body: 'Изучаем PHP'}
    ])

    const [modal,setModal] = useState()
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

                <section className={classes.MainContent}>
                    {/*<CourseList remove={removeCourse} title={"Посты"} course={course}></CourseList>*/}
                </section>
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
                    <AddCourse/>
                </MyModal>
            </main>
        </body>
    );
};

export default CoursePage;

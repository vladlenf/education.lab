import React, {useState} from 'react';
import classes from './Course.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ExitAccount from "../exitAccount/exitAccount";
import MyButton from "../button/button";
import MyModal from "../MyModal/MyModal";
import AddKurs from "../AddKurs/AddKurs";


const CoursePage = () => {
    const [modal, setModal] = useState(false);

    const [Course, setCourse] = useState()
    const [CourseName, setCourseName] = useState('')
    const [CourseDescription, setCourseDescription] = useState('')

    const addNewCourse = (e) => {
        e.preventDefault()
        const newCourse = {
            id: Date.now(),
            CourseName,
            CourseDescription
        }
        setCourse([...Course, newCourse])
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

                <section className={classes.MainContent}>
                    sdadsdsdadsasdasdadasdasdasdsadd
                </section>
                <div className={classes.RigthBlock}>
                    <div className={classes.RightUpContent}>
                        sasddasdsa

                    </div>
                    <div className={classes.RightBottomContent}>
                        <MyButton onClick={()=> setModal(true)}>
                            Добавить курс
                        </MyButton>
                        <MyModal visible={modal} setVisible={setModal}>
                            <AddKurs>

                            </AddKurs>
                        </MyModal>
                    </div>

                </div>

            </main>
        </body>
    );
};

export default CoursePage;
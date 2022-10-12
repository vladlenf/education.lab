import React, {useState} from 'react';
import classes from './Course.module.css'
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MyButton from "../button/button";
import AddNewTask from "../AddNewTask/AddNewTask";
import Login from "../Login/Login";
import MyModal from "../MyModal/MyModal";
import AddKurs from "../AddKurs/AddKurs";

const CoursePage = () => {
    const [modal, setModal] = useState(false);
    return (
        <body>
            <div>
                <header>
                    <BurgerMenu/>
                    <div className="classes.LeftHead">


                    </div>

                    <div className="classes.MiddleHead">
                        <h1>Список доступных курсов</h1>
                    </div>

                    <div className="classes.RightHead">
                        <MyButton onClick={() => setModal(true) }>
                            Добавить список
                        </MyButton>
                    </div>
                    <MyModal visible={modal} setVisible={setModal}>
                        <AddKurs/>
                    </MyModal>

                </header>

                <main className="classes.mainCourse">

                    asdsassadasdasdsadsa
                </main>



            </div>
        </body>
    );
};

export default CoursePage;
import React, {useState} from 'react';
import classes from './index.module.css'
import MyButton from "../../components/UI/button/button";
import BurgerRef from "../../components/UI/BurgerMenu/BurgerRef";
import MyModal from "../../components/UI/MyModal/MyModal";
import Registration from "../../components/UI/Registration/Registration";
import Login from "../../components/UI/Login/Login";



const Index = () => {

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    return (
        <body>

            <header>
                <div className={classes.LeftHead}>
                    <img src="https://kappa.cs.petrsu.ru/~vvfrolov/img/logo.jpg"/>
                </div>
                <div className={classes.MiddleHead}>
                    <p className={classes.header_font}>EDUCATION LAB</p>
                </div>
                <div className={classes.RightHead}>
                    <div className="classes.TwoButton">

                        <div>
                            <MyButton onClick={() => setModal(true)}>
                                Войти
                            </MyButton>
                        </div>
                        <div>
                            <MyButton onClick={() => setModal2(true)}>
                                Регистрация
                            </MyButton>
                        </div>
                    </div>
                    <MyModal visible={modal2} setVisible={setModal2}>
                        <Registration/>
                    </MyModal>

                    <MyModal visible={modal} setVisible={setModal}>
                        <Login/>
                    </MyModal>

                </div>

            </header>
            <div className = {classes.studentMain}>

                    <h1 className={classes.header_font}>Новости</h1>
                <p></p>
            </div>
            <footer>
                <div>
                    Связь с нами: panfiloow@mail.ru
                </div>

            </footer>
        </body>
    );
};

export default Index;
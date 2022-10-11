import React, {useState} from 'react';
import classes from './userprofile.module.css'
import BurgerRef from "./BurgerRef";
import MyButton from "../button/button";
import MyModal from "../MyModal/MyModal";
import Registration from "../Registration/Registration";
import burger from './burger.css'

const Userprofile = () => {
    const [modal, setModal] = useState(false);
    return (
        <body>

            <header>
                <div className={classes.LeftHead}>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            <BurgerRef href="vk.com">
                                asdasdas
                            </BurgerRef>

                            <BurgerRef >
                                asdasdas
                            </BurgerRef>

                            <BurgerRef >
                                asdasdas
                            </BurgerRef>
                        </ul>
                    </div>

                </div>
                <div>
                    <MyButton onClick={() => setModal(true)}>
                        Login or
                        Registration
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <Registration/>
                    </MyModal>
                </div>



            </header>
            <div className = {classes.studentMain}>
                <nav>
                    <p> Тут будет
                        типо списка слева</p>

                </nav>
                <section>
                    <p>
                        Тут будет типо список курсов
                    </p>
                </section>
                <form>
                    Ну а здесь будет какой-то поганынй список
                    или еще одна херня

                </form>
            </div>

            <footer>

            </footer>
        </body>
    );
};

export default Userprofile;
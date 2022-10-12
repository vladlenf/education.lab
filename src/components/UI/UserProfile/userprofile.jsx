import React, {useState} from 'react';
import classes from './userprofile.module.css'
import BurgerRef from "../BurgerMenu/BurgerRef";
import MyButton from "../button/button";
import MyModal from "../MyModal/MyModal";
import Registration from "../Registration/Registration";
import burger from '../BurgerMenu/burger.css'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Userprofile = () => {
    const [modal, setModal] = useState(false);
    return (
        <body>
            <header>
                <div className={classes.LeftHead}>

                <BurgerMenu/>
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

            <footer className="classes.footerU">

            </footer>
        </body>
    );
};

export default Userprofile;
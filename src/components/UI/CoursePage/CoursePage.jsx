import React from 'react';
import classes from './Course.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ExitAccount from "../exitAccount/exitAccount";
import MyButton from "../button/button";

const CoursePage = () => {
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
                <form className={classes.RightContent}>
                    sasddasdsa
                    <div>

                    </div>
                </form>
            </main>
        </body>
    );
};

export default CoursePage;
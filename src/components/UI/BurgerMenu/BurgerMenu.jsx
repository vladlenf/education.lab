import React from 'react';
import BurgerRef from "./BurgerRef";

const BurgerMenu = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <BurgerRef href="vk.com">
                    Мой аккаунт
                </BurgerRef>

                <BurgerRef >
                    Курс 1
                </BurgerRef>

                <BurgerRef >
                    Курс 2
                </BurgerRef>
            </ul>
        </div>
    );
};

export default BurgerMenu;
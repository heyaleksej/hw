import React from 'react'
import s from './error404.module.css'
import {PATH} from "../RoutesComp";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {NavLink} from "react-router-dom";


function Error404() {
    return (
        <div className={s.notfound}>
            <div className={s.number}>404</div>
            <div className={s.text}>Page not found!</div>
            <div className={s.text}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <span className={s.button}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={s.link}><SuperButton> На главную </SuperButton></NavLink>
            </span>
        </div>
    )
}

export default Error404

import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./RoutesComp";
import s from './Header.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


function Header() {


    return (
        <div className={s.linkContainer}>
            <div className={s.levels}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={s.link}><SuperButton> HW 1-4</SuperButton></NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={s.link}><SuperButton> HW 6-9</SuperButton></NavLink>
                <NavLink to={PATH.HW10_12}
                         className={s.link}><SuperButton> HW 10-12</SuperButton></NavLink>

            </div>

        </div>
    )
}

export default Header

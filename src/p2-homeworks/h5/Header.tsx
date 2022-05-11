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
                         className={s.link}><SuperButton> Pre Junior</SuperButton></NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={s.link}><SuperButton> Junior Plus</SuperButton></NavLink>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={s.link}><SuperButton> Middle</SuperButton></NavLink>

            </div>

        </div>
    )
}

export default Header

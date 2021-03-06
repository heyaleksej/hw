import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import JuniorPlus from "./pages/JuniorPlus";
import HW1012 from "./pages/HW1012";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR_PLUS: '/junior-plus',
    HW10_12:'/hw10_12'

    // add paths
}

function RoutesComp () {
    return (
        <div >
            <Routes >

            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
            <Route path={'/'} element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR}  element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR_PLUS}  element={<JuniorPlus/>}/>
            <Route path={PATH.HW10_12}  element={<HW1012/>}/>

                // add routes

            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
            <Route path="*" element={<Error404/>}/>


            </Routes>
        </div>
    )
}

export default RoutesComp


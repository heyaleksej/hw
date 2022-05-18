import React from "react";
import s from './../../commonStyles/HWBlock.module.css'
import a from './../h7/common/c6-SuperRadio/superRadio.module.css'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeReducerAC} from "./bll/themeReducer";


const themes = ['dark', 'red', 'classic'];

export type ttypes = 'dark' |'red'| 'classic'

function HW12() {
    const theme: string = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()
    const onChangeCallback = (theme: ttypes) => {
        dispatch(ThemeReducerAC(theme))
    }
// useSelector

    // useDispatch, onChangeCallback


    return (
        <div className={`${s.HWBlock} ${s[theme]}`}>
            <h2 className={`${s.blockTitle} ${s[theme + '-text']}`}>
                homework 12
            </h2>
            <div className={s.content}>

                {/*should work (должно работать)*/}
                <SuperRadio name={'radio'}
                            options={themes}
                            onChangeOption={onChangeCallback}
                            value={theme}
                            className={a[theme + '-text']}
                            theme={theme}


                />
            </div>
        </div>
    );
}

export default HW12;

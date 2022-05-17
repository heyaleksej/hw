import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './../../commonStyles/HWBlock.module.css'
import sa from './Loader.module.css'
import {LoadingAC} from "./bll/loadingReducer";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {AppStoreType} from "./bll/store";

function HW10() {
    // useSelector, useDispatch
    const Load = useSelector<AppStoreType, boolean>(state => state.loading.load)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(LoadingAC(true))
        setTimeout(()=>{
            dispatch((LoadingAC(false)))
        },1000)
        console.log('loading...')
    };

    // const [Load, setLoad] = useState(false)
    //
    // const off =()=>{
    //     setLoad(false)
    // }
    //
    // const setLoading = () => {
    //     setLoad(true)
    //     setTimeout((off), 1000)
    // }

    return (
        <div className={s.HWBlock}>
            <h2 className={s.blockTitle}> homework 10</h2>

                {/*should work (должно работать)*/}
                {Load
                    ? (
                        <div className={sa.clockLoader}></div>
                    ) : (
                            <SuperButton  onClick={setLoading}>set loading...</SuperButton>
                    )
                }

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                <hr/>

        </div>
)
}

export default HW10



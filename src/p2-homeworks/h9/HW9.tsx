import React from 'react'
import Clock from './Clock'
import s from './../../commonStyles/HWBlock.module.css'

function HW9() {
    return (
        <div className={s.HWBlock}>
            <h2 className={s.blockTitle}>homework 9</h2>
            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9

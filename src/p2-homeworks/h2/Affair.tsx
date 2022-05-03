import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)

    }// need to fix
    const priorityStyle = props.affair.priority === 'high' ? s.red : (props.affair.priority === 'middle')? s.yellow : s.green


    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={props.affair.priority === 'high' ? s.red : (props.affair.priority === 'middle')? s.yellow : s.green}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
            {/*<div> {props.affair.priority} </div>*/}
        </div>
    )
}

export default Affair

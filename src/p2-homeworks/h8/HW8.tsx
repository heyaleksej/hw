import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './../../commonStyles/HWBlock.module.css'
import st from './hw8.module.css'

export type UserType = {
    _id: number;
    name: string;
    age: number
}

export type UsersArrayType = UserType[]


const initialPeople: UsersArrayType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersArrayType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span className={st.name}>{p.name} </span>
            <span className={st.age}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))

    return (
        <div className={s.HWBlock}>
            <h2 className={s.blockTitle}>
                homework 8</h2>

            {/*should work (должно работать)*/}
            <div className={s.list}>
            {finalPeople}
            </div>

            <div className={st.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import cs from './../../../src/commonStyles/HWBlock.module.css'

import s from './Greeting.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div className={cs.HWBlock}>
            <h2 className={cs.blockTitle}> homework 3
            </h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeGreeting/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW3

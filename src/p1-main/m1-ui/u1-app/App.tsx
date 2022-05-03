import React from 'react'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'
import HW4 from '../../../p2-homeworks/h4/HW4'
import HW5 from '../../../p2-homeworks/h5/HW5'
import s from './App.module.css'

function App() {
    return (
        <div>
            <h2 className={s.title}>React homeworks:</h2>

            <span className={s.App}>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW5/>

        </span>
        </div>
    )
}

export default App

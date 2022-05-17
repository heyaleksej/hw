import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import st from './../../commonStyles/HWBlock.module.css'
import a from './Clock.module.css'


const AddZero = (d: number) => {
    return (d < 10) ? '0' + d : d
}

const AddDoubleZero = (d: number) => {
    return (d < 10) ? '00' + d : (d < 100) ? '0' + d : d
}

const DaysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    let t = new Date()

    let Y = t.getFullYear();
    let M = AddZero(t.getMonth() + 1);
    let D = AddZero(t.getDate());
    let day = DaysOfTheWeek[t.getDay()]
    let h = AddZero(t.getHours())
    let m = AddZero(t.getMinutes())
    let s = AddZero(t.getSeconds())
    let ms = AddDoubleZero(t.getMilliseconds())

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 10)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    //
    //

    const stringTime = `${h}:${m}:${s}:${ms}`
    const stringDate = `${D}.${M}.${Y}(${day})`
    // fix with date

    return (
        <div className={a.content}>
            <div
                className={a.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={a.timeBlock}>
                    {stringTime}</div>

                {show && (
                    <div
                    >
                        {stringDate}
                    </div>
                )}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton red onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

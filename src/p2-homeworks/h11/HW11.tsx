import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './../../commonStyles/HWBlock.module.css'
import a from './common/c8-SuperDoubleRange/SuperDoubleRange.module.css'
import {Stack} from "@mui/material";


function HW11() {
    const [value1, setValue1] = useState<number>(1)
    const [value2, setValue2] = useState<Array<number>>([1, 100])

    const onChangeRange = (e: number) => {
        setValue1(e)
        setValue2([e, value2[1]])
    }

    const onChangeDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value)
    }

    return (
        <div className={s.HWBlock}>
            <h2 className={s.blockTitle}> Homework 11</h2>

            {/*should work (должно работать)*/}
            <div>
                <span className={a.numb} >{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}/>
            </div>

            <Stack direction="row"
                   spacing={2}
                   alignItems="center"
            >
                <span className={a.numb}>{value1}</span>

                <SuperDoubleRange
                    value={value2}
                    max={100}
                    min={1}
                    step={1}
                    onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={a.numb}>{value2[1]}</span>
            </Stack>

        </div>
    )
}

export default HW11
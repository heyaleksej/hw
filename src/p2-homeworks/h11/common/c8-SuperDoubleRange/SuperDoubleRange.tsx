import Slider from '@mui/material/Slider'
import React from 'react'
import st from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>
    min?: number
    max?: number
    step?: number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (event: Event, value: number | number[]) => {
        onChangeRange && onChangeRange(value as number[])
    }

    return (
        <div className={st.slider}>
            <Slider value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChangeCallback}
                    color="secondary"

            />
        </div>
    )
}

export default SuperDoubleRange

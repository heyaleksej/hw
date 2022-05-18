import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

import s from './superRadio.module.css'
import a from "./superRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    theme?: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption, className, theme,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions = options ? options.map((o, i) => ( // map options with key
        <label className={`${a.label} ${className}`} key={name + '-' + i} >
            <input
                type={'radio'}
                name={name}
                checked={o===value}
                value={o}
                onChange={onChangeCallback}
                {...restProps}
                className={`${a.radio} ${a[theme]}`}

            />
            {o}
        </label>
    )) : []

    return (
        <div >
            {mappedOptions}
        </div>
    )
}

export default SuperRadio

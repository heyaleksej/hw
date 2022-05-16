import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './superSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return ( // map options with key
            <option className={s.option} key={o + '-' + i} value={o}>{o}
            </option>
        );
    }) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    return (

        // <select className={s.select} onChange={onChangeCallback} {...restProps}>            {mappedOptions}
        //
        // </select>
        <body>
        <div className={s.customSelect}>
            <select onChange={onChangeCallback}
                    className={s.option}
                    {...restProps}>
                {mappedOptions}
                <option className={s.option}>Hggg</option>
            </select>
            <span className={s.customArrow}>
                <div className={s.arrow}>&#11015;</div></span>
        </div>
        </body>

    )
}

export default SuperSelect

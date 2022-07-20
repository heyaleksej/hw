import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import cs from "../../commonStyles/HWBlock.module.css";
import style from "./common/c2-SuperButton/SuperButton.module.css";

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(`текст ${text} удален`) // если нет ошибки показать текст
            setText('')
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)


    return (
        <div className={cs.HWBlock}>
            <h2 className={cs.blockTitle}> homework 4 </h2>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                {/*<SuperInputText*/}
                {/*    className={s.blue} // проверьте, рабоет ли смешивание классов*/}
                {/*/>*/}

                {/*----------------------------------------------------*/}
                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton className={style.disabled} disabled>
                        disabled
                    </SuperButton>


                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4

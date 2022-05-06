import React from 'react'
import Header from './Header'
import Routes from './Routes'
import style from './../../commonStyles/HWBlock.module.css'

function HW5() {
    return (
        <div className={style.HWBlock}>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <Routes/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5

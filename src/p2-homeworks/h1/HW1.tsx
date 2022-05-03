import React from 'react'
import Message from "./Message";
import cs from './../../../src/commonStyles/HWBlock.module.css'
import s from './Message.module.css'


const messageData = {
    avatar: 'https://pbs.twimg.com/profile_images/1283081127394250752/GhLCfmOz_400x400.jpg',
    name: 'Alexey',
    message: 'ну вот',
    time: '22:00',
}
const messageData2 = {
    avatar: 'https://pbs.twimg.com/profile_images/1283081127394250752/GhLCfmOz_400x400.jpg',
    name: 'Alexey',
    message: 'ну вот опять',
    time: '22:02',
}


function HW1() {
    return (
        <div className={`${cs.HWBlock} +${s.backgroundImg}`}>
            <h2 className={cs.blockTitle}>
                homework 1
            </h2>

            {/*should work (должно работать)*/}
            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>
            {/*для личного творчества, могу проверить*/}
            <Message avatar={messageData2.avatar}
                     name={messageData2.name}
                     message={messageData2.message}
                     time={messageData2.time}/>
            <hr/>
        </div>
    )
}

export default HW1

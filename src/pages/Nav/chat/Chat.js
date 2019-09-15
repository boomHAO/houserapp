import React, { Component } from 'react'
import {Button} from 'antd-mobile';
import './Chat.css'

export default class Chat extends Component {
    render() {
        return (
            <div className='chatbox'>
                <div className='mytalk'>
                    <img src={require('../../../assets/imgs/chat.jpg')}></img>
                    <p>置业顾问:<span className='a'>梁小哥</span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    <Button size='small' className='chatbtn'>我要聊天</Button>
                </div>
            </div>
        )
    }
}

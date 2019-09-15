import React, { Component } from 'react'
import { List } from 'antd-mobile';
import './My.css'
const Item = List.Item;

export default class My extends Component {
    constructor() {
        super()
        this.state = {
            msg: '登录/注册',
            list: [{ icon: 'icon17.png', title: '我的积分' },
            { icon: 'icon18.png', title: '我的订阅' },
            { icon: 'icon19.png', title: '联系人' },
            {},
            { icon: 'icon20.png', title: '房贷计算器' },
            { icon: 'icon21.png', title: '我的房子' },
            { icon: 'icon22.png', title: '看房记录' },
            { icon: 'icon23.png', title: '我的问答' },
            { icon: 'icon24.png', title: '设置' },
            {},
            { icon: 'icon25.png', title: '意见反馈' },
            { title: '切换账号' },]
        }
    }
    render() {
        return (
            <div className='mybox'>
                <div className='bigtop'>
                    <div className='top'>
                        <div className='left'>
                            <img src={require('../../../assets/imgs/chat.jpg')} alt='图片'></img>
                            <div>
                                <p onClick={this.clickLogin.bind(this)}>{this.state.msg}</p>
                                <p>可以与经济人发起聊天</p>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={require('../../../assets/imgs/set-icon-2.png')} alt='图片'></img>
                        </div>
                    </div>
                    <div className='down'>
                        <div>
                            <p>0</p>
                            <p>优惠</p>
                        </div>
                        <div>
                            <p>0</p>
                            <p>钱包</p>
                        </div>
                        <div>
                            <p>0</p>
                            <p>积分</p>
                        </div>
                    </div>
                </div>
                <div className='bigdown'>
                    {
                        this.state.list.map(obj => {
                            if (obj.title) {
                                return <Item
                                    key={obj.name}
                                    thumb={require('../../../assets/imgs/icon17.png')}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{obj.title}
                                </Item>
                            } else {
                                return <div style={{ height: '8px', backgroundColor: '#ccc' }}></div>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        let val = localStorage.getItem('username')
        this.setState({ msg: val ? val : '登录/注册' })
    }
    clickLogin() {
        if (!localStorage.getItem('username'))
            this.props.h.push('/')
    }
}

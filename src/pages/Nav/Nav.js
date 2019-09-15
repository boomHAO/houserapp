import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './Nav.css'
import Mian from '../Nav/main/Mian'
import Chat from '../Nav/chat/Chat'
import My from '../Nav/my/My'
export default class Nav extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'index',
            iconlist: [{ title: "首页", key: "index", icon: "index-icon.png", sicon: "index-icon-s.png" },
            { title: "微聊", key: "chat", icon: "talk-icon.png", sicon: "talk-icon-s.png" },
            { title: "足迹", key: "foot", icon: "foot-icon.png", sicon: "foot-icon-s.png" },
            { title: "我的", key: "my", icon: "my-icon.png", sicon: "my-icon-s.png" }],
        };
    }

    renderContent() {
         switch(this.state.selectedTab) {
           case 'index': return <Mian h={this.props.history}/>
           case 'chat' : return <Chat/>
           case 'my' : return <My h={this.props.history}/>
       }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        this.state.iconlist.map(obj => {
                            return <TabBar.Item
                                title={obj.title}
                                key={obj.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + obj.icon)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + obj.sicon)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === obj.key}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: obj.key,
                                    });
                                }}
                            >
                                {this.renderContent()}
                            </TabBar.Item>
                        })
                    }


                </TabBar>
            </div>
        );
    }
}


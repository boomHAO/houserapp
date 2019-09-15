import React, { Component } from 'react'
import { Button,Flex, WingBlank, WhiteSpace, InputItem ,Toast} from 'antd-mobile';
import { Link } from 'react-router-dom'
import getlogin from '../../api/apis'
import './Login.css'

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            pwd:'',
            oldAcc:'',  //上一轮输入的用户名
            oldPwd:'',  //上一轮输入的密码
        }
    }
    render() {
        return (
            <div className='loginbox'>
                <Flex justify="center">
                    <img src={require('../../assets/imgs/home.jpg')} alt="这是个有趣的图" className="loginimg"></img>
                </Flex>
                <WhiteSpace size="xl" />
                <WingBlank>
                    <InputItem
                         //   用户名
                        clear
                        placeholder="请输入用户名"
                        value={this.state.acc}
                        onChange={(val)=>{this.setState({acc:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/user-icon.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xs" />
                    <InputItem
                         //   密码
                        clear
                        placeholder="请输入密码"
                        type="password"
                        pwd={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/pwd-icon.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xl" />
                    <Button style={{backgroundColor:"#017296",color:'#fff'}} onClick={this.userlogin.bind(this)}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link to="/reg"><span className='linkbtnn'>快速注册</span></Link>
                        <Link to="/login"><span className='linkbtnn'>忘记密码</span></Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    userlogin(){
        getlogin(this.state.acc,this.state.pwd).then(msg=>{
           if(msg.data==="ok"){
               localStorage.setItem("username",this.state.acc)
                 this.props.history.push('/nav')
           }else{
            Toast.fail('用户名和密码不正确', 1);
           }
      })
     /*  let {acc, pwd,oldAcc,oldPwd} = this.state

        //如果上一轮的用户名和密码和这一轮的一致
        if(oldAcc == acc && oldPwd == pwd) return

        console.log('发送请求')

        //保存上一轮的用户名和密码
        this.setState({
            oldAcc: acc,
            oldPwd: pwd
        })

        getlogin(acc, pwd).then(msg => {
            console.log('收到响应')

            if(msg.data == 'ok'){
                //持久保存用户名
                localStorage.setItem('username',acc )

                //成功
                this.props.history.push('/nav')      
            }else{
                //失败提示错误信息
                this.setState({
                    show: 'block'
                })
            }
        }) */
    }
}

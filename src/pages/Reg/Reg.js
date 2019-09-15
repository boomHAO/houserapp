import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getreg,getvalitecode} from '../../api/apis'
import './Reg.css'
import { Button,WingBlank, WhiteSpace, InputItem, Radio ,Toast} from 'antd-mobile';
export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            pwd:'',
            valitecode:''
        }
    }
    render() {
        return (
            <div className='regbox'>
                <WingBlank>
                    <WhiteSpace size="sm" />
                    <InputItem
                        clear
                        placeholder="请输入用户名"
                        value={this.state.acc}
                        onChange={(val)=>{this.setState({acc:val})}}
                    />
                    <WhiteSpace size="sm" />
                    <InputItem
                        type="password"
                        clear
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    />
                    <WhiteSpace size="sm" />
                    <InputItem
                        disabled
                        clear
                        value={this.state.valitecode}
                        onChange={(val)=>{this.setState({valitecode:val})}}
                        placeholder="请输入验证码"
                        extra="获取验证码"
                        onExtraClick={(e)=>{
                            getvalitecode().then(msg=>{
                                this.setState({
                                    valitecode:msg.data
                                })
                            })
                        }}
                    />
                    <WhiteSpace size="xl" />
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)} checked></Radio><span>我已同意<span className='grenn'>《用户服务协议》及《隐私权政策》</span></span>
                    <WhiteSpace size="xl" />
                    <Button style={{backgroundColor:"#017296",color:'#fff'}} onClick={this.userreg.bind(this)}>注册</Button><WhiteSpace />
                    <Link to='/login'><span className='linkbtnn'>已有账号</span></Link>
                </WingBlank>
            </div>
        )
    }
    userreg(){
        if(this.state.valitecode===''){
            Toast.fail('验证码错误', 1);
        }else{
           getreg(this.state.acc,this.state.pwd).then(msg=>{
               console.log(msg)
            if(msg.data==="ok"){
                this.props.history.push('/')
            }else{
                Toast.fail('用户名和密码不正确', 1);
            }
        }) 
        }
        

    }
}

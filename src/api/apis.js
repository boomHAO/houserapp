import axios from 'axios'
import qs from 'qs'
/* export const IP='http://192.168.1.8:80' */ //家
export const IP='http://172.16.10.204:80' //学校

// 用户登录
// acc:用户名
// pwd:密码
export default  function getlogin(acc,pwd){
   return  axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
}
// 用户注册
export function getreg(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd}))
}
// 获取验证码
export function getvalitecode(){
    return axios.get(IP+'/valitecode.php')
}
// 猜你喜欢
export function iflike(){
     return axios.get(IP+'/gethouselist.php')
}
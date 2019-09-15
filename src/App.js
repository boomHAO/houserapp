import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import './assets/styles/APP.css'
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import Nav from './pages/Nav/Nav'
import Map from './pages/map/Map'
import Err404 from './pages/err404/Ree404'
console.log(store)
export default class App extends Component {
  render() {
    return (
      <div className='appbox'>
       { <HashRouter>
          <Switch> 
            <Route path='/' exact component={Login }></Route>
            <Route path='/nav'  component={Nav}></Route>
            <Route path='/reg' component={Reg}></Route>
            <Route path='/map' component={Map}></Route>
            
            <Route component={Err404}></Route>
          </Switch>
        </HashRouter>}
      </div>
    )
  }
}


import {createStore,combineReducers} from 'redux'

/* var store=createStore(function(state='张三',actions){
    switch (actions.type) {
        case "changname":return actions.name
    
        default: return state
    }
})

let a = {
    type:'changname',
    name:'网上'
}
store.dispatch(a)
console.log(store.getState())

export default store */

function test(state='test',action){
  switch (action.type) {
      default: return  state
  }
}

var a =combineReducers({
    test
})

export default createStore(a)
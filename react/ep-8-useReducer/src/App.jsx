import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

function reducerFn(state, action) {
  switch(action.type){
    case 'increment':
      return {count:state.count+1}
    case 'decrement':
      return {count:state.count-1}
    default:
      return state
  }
}
function App() {
  const[state,dispatch]=useReducer(reducerFn,{count:1})//state is nothing but a count object
  const increment = () => {
    dispatch({type:'increment'})
  }

  const decrement=()=>{
    dispatch({type:"decrement"})
  }
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App

//use reducer is helpfull for whre a state has more than a 3 or 4 acrtions
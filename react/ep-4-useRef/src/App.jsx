import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
function App() {
  const [input, setInput] = useState("")
  const inputRef=useRef(null)
  const onClick=()=>{
    setInput(inputRef.current.value)
  }
  console.log("getting render")

  return (
    <>
    <h1>{input}</h1>
    <input type='text' ref={inputRef}/>
    <button onClick={onClick}>Click</button>
    </>
  )
}

export default App


//this rerenders whenever i add the value or remove the value note this rerenders every single time this is a big problem
//for resoleve this we can use useRef
//inputRef caries the whole value on the input

// step1:
// function App() {
//   const[input,setInput]=useState('hi')
//   console.log("getting render")
//   const inputRef=useRef(null)
//   const display=()=>{
//     console.log(inputRef.current.value)
//   }
//   return (
//     <div>
//     <h1>Input</h1>
//     <input type='text' 
//     ref={inputRef}
//     ></input>
//    <h1>My name is:{inputRef.current?.value}</h1>  ? -->this is optional chaining which helps if it present it works if not it will not give error
//     <button onClick={()=>{display()}}>Show Input</button>
//     </div>
//   )
// }
     //if i use onChange here it will rerender every time i type something but if i use useRef it will not rerender
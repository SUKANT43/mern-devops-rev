import React, { useContext } from 'react'
import { ThemeContext } from './App'


function User() {
    const theme=useContext(ThemeContext)
    const style={
        backgroundColor:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white',
        padding:'20px',
        borderRadius:'5px'
    }
  return (
    <h1 style={style}>User</h1>
  )
}

export default User
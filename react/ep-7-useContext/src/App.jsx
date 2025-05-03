import React, { createContext, useState } from 'react'
import Container from './Container'
export const ThemeContext=createContext();
function App() {
  const [theme,serTheme]=useState('light')

  const togleTheme=()=>{
    if(theme==='light'){
      serTheme('dark')
    }else{
      serTheme('light')
    }
  } 
  return (
    <ThemeContext.Provider value={theme}>
    <button onClick={togleTheme}>Toggle Theme</button>
    <h1>App Component</h1>
    <Container/>
    </ThemeContext.Provider>
  )
}

export default App

//useContext is used to share data between components without passing props down manually at every level.
//i need to send a data from app to user component but it is the grand child of app component we need to send props via container and users component which is large process insted of this we use useContext
//if i need to pass theme for app to user component for achiving the dark and light mode

//createContext is used to create a context object and useContext is used to consume the context object
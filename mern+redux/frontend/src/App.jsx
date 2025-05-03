import React from 'react'
import Login from './pages/Login'
import AddData from './pages/AddData'
import ActionData from './pages/ActionData'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
function App() {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      {token && <Navbar />}
      <Routes>
        {token ? (
          <>
            <Route path='/action' element={<ActionData />} />
            <Route path='/' element={<AddData />} />
          </>
        ) : (
          <>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          </>
        )}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

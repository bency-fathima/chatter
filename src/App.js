 import React from 'react'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
 
 function App() {
   return (
  <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Chat/>}/>
    <Route path='/login' element={<Login/>}/>
 
 

  </Routes>
  </BrowserRouter>
   )
 }
 
 export default App
 
import React from 'react'
import Navbar
 from '../components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import MarvelHome from "../pages/MarvelHome"
import KarakterDetay from '../pages/KarakterDetay'

const AppRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRouter />}>
            <Route path="home" element={<Home />} />
            <Route path='/MarvelHome' element={<MarvelHome/>}/>
            <Route path="/KarakterDetay" element={<KarakterDetay/>}/>
            </Route>
          
        </Routes>
    </div>
  )
}

export default AppRouter
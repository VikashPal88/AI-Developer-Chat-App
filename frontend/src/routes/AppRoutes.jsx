import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../components/screens/Login'
import Register from '../components/screens/Register'
import Home from '../components/screens/Home'
import Porject from '../components/screens/Porject'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/project" element={<Porject />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

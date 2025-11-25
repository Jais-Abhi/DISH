import React from 'react'
import Navbar from './Components/Navbar.jsx'
import { Outlet } from 'react-router'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    )
}

export default App
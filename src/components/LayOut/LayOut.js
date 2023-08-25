import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const LayOut = () => {
  return (
    <>
        <Header/>
        <Sidebar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayOut
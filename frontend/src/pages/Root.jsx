import React from 'react'
import Navbar from '../companents/Navbar'
import { Outlet } from "react-router"
import Footer from '../companents/Footer'

function Root() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root

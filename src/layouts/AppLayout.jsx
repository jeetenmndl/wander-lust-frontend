import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/common/AppNavbar'

const AppLayout = () => {
  return (
    <div>
        <AppNavbar />

        <Outlet />
    </div>
  )
}

export default AppLayout
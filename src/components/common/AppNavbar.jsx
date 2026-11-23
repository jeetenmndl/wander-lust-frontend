import React from 'react'
import CustomButton from './CustomButton'
import useAuth from '../../hooks/useAuth'

const AppNavbar = () => {

    const {onLogout} = useAuth();
  return (
    <header className="flex justify-between items-center px-20 py-4 bg-amber-100">
        {/* left part */}
        <div>
            <h1 className='text-3xl font-semibold text-orange-700'>WanderLust</h1>
        </div>

        {/* right part */}
        <div className='flex gap-20 items-center'>
            <nav className='space-x-16 text-lg font-medium'>
                <a href="/dashboard">Dashboard</a>
                <a href="/trips">Trips</a>
                <a href="/baggage">Baggage</a>
            </nav>

            <div onClick={()=>{onLogout()}}>
                <CustomButton text="Log out" />
            </div>
        </div>
    </header>
  )
}

export default AppNavbar
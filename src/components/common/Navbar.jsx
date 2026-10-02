import React from 'react'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 bg-amber-100">
        {/* left part */}
        <div>
            <h1 className='text-3xl font-semibold text-orange-700'>WanderLust</h1>
        </div>

        {/* right part */}
        <div className='flex gap-20 items-center'>
            <nav className='space-x-16 text-lg font-medium'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>

            <button className='bg-orange-700 px-10 py-2 text-white text-lg rounded hover:cursor-pointer hover:bg-orange-800'>Log in</button>
        </div>
    </header>
  )
}

export default Navbar
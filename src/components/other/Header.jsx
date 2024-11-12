import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
           <h1 className='text-2xl font-medium'>Hello <br /><samp className='text-3xl font-semibold'>Rikesh👋</samp> </h1>
           <button className='bg-red-500 text-white px-5 py-3 rounded-s-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header

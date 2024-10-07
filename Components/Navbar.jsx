import React from 'react'

const Navbar = () => {
    return (
        <div className='flex py-3 flex-wrap justify-around'>
            <h1 className='text-lg font-semibold text-orange-600'>Todo APP</h1>
            <ul className='flex gap-[40px] text-m'>
        <li className='hover:text-orange-600 cursor-pointer'>Home</li>
        <li className='hover:text-orange-600 cursor-pointer'>Products</li>
        <li className='hover:text-orange-600 cursor-pointer'>About</li>
        <li className='hover:text-orange-600 cursor-pointer'>Contact</li>
            </ul>
        </div>
      )
    }
    

export default Navbar
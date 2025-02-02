import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#181C14] text-white px-10 py-3'>
        <div className="logo font-bold text-xl">
            <span>iTask</span>
        </div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Todo</li>
        </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <div className='py-4 flex justify-around bg-slate-500 text-white items-center'>
      <h1 className='text-3xl font-extrabold'>Logo</h1>
      <nav className='hidden sm:block'>
        <ol className='flex gap-5'>
          <Link to="/">Home</Link >
          <Link to="/about">about</Link >
          <Link to="/contact">contact</Link >
          <Link to="/services">services</Link >
 
        </ol> 
      

      </nav>
    </div>
  )
}

export default Header2 
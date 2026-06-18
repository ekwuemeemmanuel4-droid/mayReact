import React from 'react'
import { FaCarRear } from "react-icons/fa6";

function Header() {
  return (
    <div className='h-[60px] bg-gray-400 flex justify-around'>
      <h1>Logo</h1>
      <FaCarRear className=' text-4xl text-red-600'/>
    </div>
  )
}

export default Header
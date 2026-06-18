import React from 'react'
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { FaUserCog } from "react-icons/fa";

function Body() {
  return (
    <div className='bg-[url("mtwork.jpeg")] bg-cover h-125 w-[full] bg-green-300'>
     <section className='h-125 w-[50%] bg-amber-300'>
      <h1 className='text-5xl ml-16.25'>WORK WITH EXPERT</h1>
     <section className='h-50 w-[80%] bg-blue-900 ml-16.25 flex gap-1.5 text-center justify-around items-center'>
      <section className='h-45 bg-white w-[45%]'>
        <FaCloudArrowUp className='text-4xl' />
        cloud and digital
        more 
      </section>
      <section className='h-45 bg-white w-[45%]'>
        <FaWarehouse className='text-5xl' />
        tax services
        more

      </section>
     </section>
     <section className='bg-red-400 h-50 w-[80%] mt-5 ml-16.25 flex gap-1.5 text-center justify-around items-center '>
      <section className='h-45 bg-white w-[45%]'>
        <LuNotebookText className='text-5xl' />
      </section>
      <section className='h-45 bg-white w-[45%]'>
        <FaUserCog className='text-5xl' />
        managed services
        more
      </section>
     </section>
    
    
    </section>
    
     
     
    
    </div>
  )
}

export default Body
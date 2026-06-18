import React, { useState } from 'react'

function Mile() {
  let [num,setnum]=useState(0)
  const[mycoco, setMycoco]= useState(false)

  function togglecolor(){
    setMycoco(!mycoco) 
}


  return (
    <div className='bg-amber-400 h-100 w-full flex justify-center items-center absolute top-0'>
        <section className={` bg-green-400 h-50 w-100 bg-[url("lime.jpg")] bg-cover bg-center ${mycoco==true?"scale-100":"scale-0" }`}></section>
        <button onClick={togglecolor}  className ='absolute top-0.5 right-0 text-4xl'>x</button>
    </div>
  )
}

export default Mile 
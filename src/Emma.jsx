import React, { useEffect, useState } from 'react'

function Emma() {

  let[placeData,setplaceData]=useState([]);
  useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setplaceData(data.products));
          
    

  },[])

 
  return (
    <div className='h-screen w-full bg-black grid grid-cols-5  gap-2'>
      {
        placeData.length !=0? 

        placeData.map((item)=>(
          <div className='bg-gray-600 p-2 grid-cols-1 gap-2'>
            <div className='h-25 w-100% bg-sky-500 rounded-md'>
              <img src={item.thumbnail} className='h-full w-full'  />
            </div>
            <h1 className='text-white font-bold mt-2.5 whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</h1>
            <span className='text-white'>{item.price}</span>
          </div>
      
        ))
        :    
        <p className=' text-5xl text-white'>loading</p>
      } 
    
    
    </div>
  )
}

export default Emma 
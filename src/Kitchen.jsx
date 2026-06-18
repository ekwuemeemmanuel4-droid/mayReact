import React, { useEffect, useState } from 'react'

function Kitchen() {
    let[king,setKingData]=useState([])
    useEffect(()=>{
          fetch('https://food-backend-3xb1.onrender.com/restaurants')
            .then(response => response.json())
            .then(data => setKingData(data));
          
    },[])



  return (
    <div className='h-minscreen w-full bg-black grid grid-cols-3 gap-2.5 '>
     {
        king.length !=0?

        king.map((item)=>(      
            
            <div className='bg-gray-600 '>
            <div className='h-50  bg-sky-500 rounded-md'>
              <img src={item.image} className='h-full w-full'  />
            </div>
            <h1 className='text-white font-bold mt-2.5 whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</h1>
            <span className='text-white'>{item.foodtypes}</span>
            <h1 className='text-white'>{item.openingtime}</h1>
            <h1 className='text-white'>{item.closingtime}</h1>
            <h1 className='text-white'>{item.description}</h1>
            <h1 className='text-white'>{item.rating}</h1>


          </div>
        ))
        :
        <p>loading</p>

}  
</div>


  )
}

 
export default Kitchen
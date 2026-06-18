import React, { useEffect, useState } from 'react'

function Api() {

    
        let [holdData,setHoldData]=useState('');

        useEffect(()=>{
            fetch('https://fakestoreapi.com/products/1')
           .then(response => response.json())
           .then(data => setHoldData(data));
        
        
        },[])

 

  return (
    <div className='h-[220px] w-[150px] p-2 bg-slate-700'>
        <div className='h-[150px] bg-sky-200 rounded-md p-2'>
            <img src={holdData.image} className="h-full w-full" />

        </div>
        <h2 className='text-sky-200 font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{holdData.title}</h2>
        <span className='text-white'>${holdData.price}</span>

    
    </div>
  ) 
}

export default Api 
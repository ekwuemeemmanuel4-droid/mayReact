import React from 'react'

function Rat() {
  return (
   <div className=' bg-white h-125 grid grid-rows-2 p-7.5'>
    <section className='  p-12.5 flex justify-center flex-col items-center'>
        <h1 className='text-6xl '>OUR work transforms businesses</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quia.</h6>

    </section>
    <section className=' bg-white grid grid-cols-3 gap-7.5 '>
        
        <div className=' bg-amber-300 grid grid-rows-2'>
            <div className=' bg-green-600 bg-[url("king.jpg")] bg-center bg-cover'></div>
            <div className=' bg-yellow-300'>
                Alignment
                <ul>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>execeptur sint occua</li>
                    <li>  msi st commodo</li>
                   </ul>
                     
                      
                         
                          
                  

            
            </div>
        </div>


        <div className=' bg-blue-500 grid grid-rows-2'>
            <div className=' bg-green-600 bg-[url("lime.jpg")] bg-center bg-cover'></div>
            <div className=' bg-yellow-300'>
                Grow
                <ul>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>execeptur sint occua</li>
                    <li>  msi st commodo</li>
                   </ul>
            </div>
        </div>


        <div className=' bg-amber-700 grid grid-rows-2'>
            <div className=' bg-green-600 bg-[url("orange.jpg")] bg-center bg-cover'></div>
            <div className=' bg-yellow-300'>
                Digital
                <ul>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>elit sed do elusond</li>
                    <li>execeptur sint occua</li>
                    <li>  msi st commodo</li>
                   </ul>
            </div>
        </div>
        <button className='bg-red-300 rounded-md w-37.5 ml-130'>learn more</button>  
    </section>
   </div>
  )
}

export default Rat
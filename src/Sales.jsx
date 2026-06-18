import React, { useRef, useState } from 'react'
  
function Sales() {
     let[price1,setPrice1]=useState("")
     let[cost1,setCost1]=useState("")
     let qty1= useRef()

     function obi() {
        if(price1==""){
            setPrice1(2000)
        }else{
            setPrice1("")
        }
        
     }
     let forCost=()=>{
        setCost1(qty1.current.value*price1)
     }
     let[price2,setPrice2]=useState("")
     let[cost2,setCost2]=useState("")
     let qty2= useRef()
 
     function emma() {
        if(price2==""){ 
            setPrice2(3000)
        }else{
            setPrice2("")
        }   
       

    }
     let forCost2=()=>{
        setCost2(qty2.current.value*price2)
        }

    let[price3,setPrice3]=useState("")
     let[cost3,setCost3]=useState("")
     let qty3= useRef()

     function seat() {
        if(price3==""){ 
            setPrice3(4000)
        }else{
            setPrice3("")
        }   
       

    }
    let forCost3=()=>{
        setCost3(qty3.current.value*price3)
        }










  return (
    <div className='min-h-screen bg-gray-500 flex items-start justify-center pt-16 '>
        <div className='w-[70%] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className='px-6 py-4  border-b border-gray-100'>
            <h2 className='text-lg font-semibold text-gray-700 tracking-wide'>Sales</h2>
        </div> 

        <table className='w-full'>
            <thead>
                <tr className='bg-green-400 text-xs uppercase tracking-wide text-gray-400'> 
                    <th className='px-6 py-3 text-left font-medium text-black'>item</th>
                    <th className='px-6 py-3  text-left font-medium text-black'>Quantity</th>
                    <th className='px-6 py-3  text-left font-medium text-black'>Price</th>
                    <th className='px-6 py-3  text-left font-medium text-black'>cost</th>

                </tr> 
            </thead>

            <tbody>
                <tr className='border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
                        <input type="checkbox" className='accent-indigo-500'onClick={obi}/> 
                        shoe
                    </td>
                <td className='px-6 py-3 '><input  type ref={qty1} onInput={forCost}type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-gray-600 outline-none focus:ring-indigo-300 ' /></td>
                <td className='px-6 py-3'><input value={price1} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300'/></td>
                <td className='px-6 py-3'><input value={cost1} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                    
            </tr>

            <tr className='border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
                        <input type="checkbox" className='accent-indigo-500'onClick={emma}/>
                         
                        beans
                </td>
                <td className='px-6 py-3 '><input type ref={qty2} onInput={forCost2}type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-gray-600 outline-none focus:ring-indigo-300 ' /></td>
                <td className='px-6 py-3'><input value={price2} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300'/></td>
                <td className='px-6 py-3'><input value={cost2} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                   
            </tr>

            <tr className='border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
                        <input type="checkbox" className='accent-indigo-500'onClick={seat}/> 
                         
                        rice
                    
                        
</td>
                <td className='px-6 py-3 '><input type ref={qty3}onInput={forCost3}type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-gray-600 outline-none focus:ring-indigo-300 ' /></td>
                <td className='px-6 py-3'><input value={price3} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300'/></td>
                <td className='px-6 py-3'><input value={cost3} type="number" className='w-20 border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                    
            </tr>
            
            
            
 
            </tbody>
            <tfoot>
                <tr className='border-t border-gray-100 bg-gray-50'>
                    <td colSpan={4} className='px-6 py-4 flex items-center gap-3'>
                        <button className='text-xs font-medium text-indigo-500 uppercase tracking-wide hover:text-indigo-700 transition-colors'>total</button>
                        <span className='text-2xl font-bold text-gray-700'>$0</span>

                    </td>
                     
                </tr>
            </tfoot>
            
        
            

                

                
            

        </table>
    </div>
    </div>
    
  )
}

export default Sales
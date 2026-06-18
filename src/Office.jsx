import React from 'react'

function Office() {
  return (
    <div className='bg-yellow-400 h-100 mt-25 flex justify-end bg-[url("sideview.jpg")] bg-center bg-cover  '>
        <section className='  w-max' >
            <h3>FROM PROBLEM TO SOLUTION</h3>
            <h1 className='text-4xl'>STRATEGIC
                                      CONSULTING
            </h1>
            <ol>
              <li><input type="checkbox" />strategic planning</li>
              <li><input type="checkbox" />cost effective solutions</li>
              <li><input type="checkbox" /> full diaster testing</li>
              <li><input type="checkbox" /> complete system functionality</li>
              <li><input type="checkbox" name="" id="" /> Accessible virtually anywhere</li>
              <li><input type="checkbox" name="" id="" />comprehensive maintenance</li>
            </ol>
            <button className='bg-red-500 rounded-3xl text-white w-70'>VIEW ALL</button>
        </section>
        
    
    </div>
  )
}

export default Office
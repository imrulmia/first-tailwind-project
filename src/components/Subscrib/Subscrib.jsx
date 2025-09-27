import React from 'react'
import image from './../../images/subscribe-bg.png'
function Subscrib() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      
    }} className='bg-no-repeat bg-amber-800/20 bg-left'>
      <div className='sm:flex justify-center items-center text-white mx-auto py-10 px-3 sm:gap-5 md:gap-10'>
        <div className='text-center mb-3 sm:mb-0 sm:border-r-2 sm:pr-20'>
          <h1 className='text-2xl sm:text-4xl font-semibold mb-2'>Newslatter Subscription</h1>
          <p className='text-xl sm:text-2xl font-medium mb-2'>Get subscribed to our newsletter & receive latest lorem updates</p>
        </div>
        <div className='flex justify-center items-center '>
          <input className='bg-white border-none  block mr-1 h-7 sm:h-9  mt-3 text-orange-800 px-3 sm:text-xl' type="email" placeholder='Enter Email' />
          <button className='bg-red-800 rounded-md text-center sm:text-xl px-3 mt-3 py-2 block ml-1 hover:bg-red-950 transition cursor-pointer'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscrib
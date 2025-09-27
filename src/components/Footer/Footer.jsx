import React, { useEffect, useState } from 'react'


function Footer() {

  const [footer, setFotter] = useState([]);
  useEffect(() => {
    fetch('/footerData.json')
      .then(res => res.json())
      .then(data => setFotter(data))

  }, [])

  return (
    <div className='my-9 sm:mt-14 '>
      <div>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-5 md:gap-8 lg:gap-12 mx-auto text-white'>

          {
            footer.map(item => (
              <div className=' px-10 border-b sm:border-none border-white pb-8 sm:pb-0'>
                <h2 className='text-2xl underline underline-offset-8 decoration-white sm:text-3xl capitalize mb-2'>{item.title}</h2>

                <ul>
                  {
                    item.links.map(li => (
                      <li className='text-xl leading-10 mt-3 '><a href={li.url}>{li.name}</a></li>

                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>
      </div>
      <div className='border-t-2 border-gray-500 mt-14 mx-auto'>
          <h3 className='font-semibold italic mx-auto p-6 text-[18px] sm:text-xl text-green-900'> © 2025 Designed & Developed by : Imu</h3>

      </div>
    </div >
  )
}

export default Footer
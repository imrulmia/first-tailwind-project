import React, { useEffect, useState } from 'react'

function Price() {

  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch('/generated (2).json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <div className='my-20'>
      <div className=' mx-auto px-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7'>

        {
          products.map(item => (

            <div className='border-3 border-gray-900 bg-gray-900 shadow-xl hover:border-green-900 p-10 my-4 rounded-xl transition-all'>
              <h2 className='text-xl sm:text-3xl font-semibold text-white mb-2'>{item.title}</h2>
              <p className=' text-green-600 mb-2 text-xl'>💰 Price: $ <span className='text-xl sm:text-2xl'>{item.price}</span></p>

              {/* List render */}

              <ul className='list-disc list-inside text-gray-600 leading-8'>

                {
                  item.list.map(li => (

                    <li className='text-xl leading-10'>{li}</li>
                  ))
                }

              </ul>
              <button className='px-4 py-3 bg-green-900 hover:bg-green-950 transition text-white mt-2 rounded-md text-xl uppercase font-semibold'>buy now</button>
            </div>


          ))
        }

      </div>
    </div>
  )

}

export default Price
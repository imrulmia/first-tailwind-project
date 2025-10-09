import React from 'react'
import pik1 from '../../images/pik1.jpg'
import pik2 from '../../images/pik2.jpg'
import pik3 from '../../images/pik3.jpg'
import pik4 from '../../images/pik4.jpg'
import pik5 from '../../images/pik5.jpg'
import pik6 from '../../images/pik6.jpg'


function Card() {

  const members = [
    {
      img: pik4,
      name: "Md Merajul Islam Meraj",
      title: "UI/UX Designer",
    },
    {
      img: pik1,
      name: "Md Imrul Mia",
      title: "Frontend Developer",
    },
    {
      img: pik3,
      name: "Md Abdun Nur",
      title: "Frontend Developer",
    },
    {
      img: pik5,
      name: "Md Redoy Babu",
      title: "Backend Developer",
    },

    {
      img: pik2,
      name: "Md Abu Talhaz",
      title: "App Developer",
    },
    {
      img: pik6,
      name: "K.M Hasan",
      title: "App Developer",
    },

  ];
  return (
    <div className='mt-24  mx-auto'  >

      <h2 className='text-white text-3xl text-center mb-12'>Our Developers</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mx-auto pb-10 p-6'>

        {
          members.map(singleItems => (
            <div className='border-3 border-gray-800 hover:border-green-800 rounded-lg text-center p-6 bg-gray-800 text-white cursor-pointer'>
              <img className='w-full h-48 md:h-56  lg:h-72 object-cover rounded-2xl mb-4 border-2 border-indigo-400 shadow-xl' src={singleItems.img} alt="" />
              <h3 className='text-xl font-semibold sm:text-2xl'>{singleItems.name} </h3>
              <h5 className='text-lg font-semibold sm:text-xl'>{singleItems.title} </h5>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Card
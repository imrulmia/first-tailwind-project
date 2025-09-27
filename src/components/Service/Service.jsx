import React from 'react';
import img1 from '../../images/client-01.png';
import img2 from '../../images/client-02.png';
import img3 from '../../images/client-03.png';
import img4 from '../../images/client-04.png';
import img5 from '../../images/client-05.png';
import img6 from '../../images/client-06.png';
import img7 from '../../images/client-07.png';
import img8 from '../../images/client-08.png';
import img9 from '../../images/client-09.png';

const Service = () => {

  const clients = [
    { img: img1, name: "One Plus" },
    { img: img2, name: "Techno" },
    { img: img3, name: "Apple" },
    { img: img4, name: "Microsoft" },
    { img: img5, name: "Lenovo" },
    { img: img6, name: "Huawei" },
    { img: img7, name: "Nexus" },
    { img: img8, name: "Tesla" },
    { img: img9, name: "Brave" },
  ]
  return (
    <div className='bg-slate-900 mb-32'>
      <div className='mt-24 container mx-auto px-5 py-16 md:py-48 grid place-content-center'>
        <div className='md:flex justify-center items-center gap-5 sm:gap-8 md:gap-12 md:gap-x-48 text-white'>
          <div className=' '>
            <h2 className='text-3xl text-center sm:text-5xl animate-bounce mb-3 text-orange-700'>Our Clients</h2>
            <p className='text-xl sm:text-2xl text-center '>Our Developers <br />Team <span className='underline decoration-amber-600 underline-offset-8'>services 300k</span> <br />Clients</p>
          </div>
          <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 justify-center items-center  my-7'>

            {
              clients.map(singleClient => (
                <div className='text-center '>
                  <img className='w-full' src={singleClient.img} alt="" />
                  <h2 className='text-2xl mt-1.5'>{singleClient.name}</h2>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
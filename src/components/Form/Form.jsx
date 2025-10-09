import React from 'react';

const Form = () => {
  return (
    <div>
      <div className='bg-gray-800 py-16 sm:py-20'>
        <h1 className='text-center text-xl sm:text-3xl text-white mb-6'>Ask a question</h1>

        <form >
          <input type="email" className='block mx-auto w-5/6 h-12 sm:w-1/2 mb-8 placeholder:italic placeholder:text-orange-900 px-5 bg-white' name="" id="" placeholder='Enter Your Email' /><br />
          <textarea name="" className='block mx-auto w-5/6 h-52 sm:w-1/2 mb-10 placeholder:italic placeholder:text-orange-900 pt-2 px-5 bg-white' id="" placeholder='Your question'></textarea>
          <button className='block rounded-xl mx-auto text-white text-xl bg-green-900 px-10 py-4 mb-6 hover:bg-green-950 transition'>Send Me</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
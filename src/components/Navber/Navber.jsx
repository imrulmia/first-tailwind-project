import React, { useState } from 'react';
import coverPhoto from '../../images/hero-img.png'
import Card from '../Card/Card';
import Service from '../Service/Service';
import Form from '../Form/Form';
import Price from '../Price/Price';
import Subscrib from '../Subscrib/Subscrib';
import Footer from '../Footer/Footer';

const Navber = () => {

  const [activeLink, setActiveLink] = useState('#home')

  const navLink = [
    { href: "#home", label: "Home" },
    { href: "#Products", label: "Product" },
    { href: "#blogs", label: "Blogs" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <body className='bg-[#2B2D33]'>
      <nav className='bg-[#2B2D33] shadow-xl sm:sticky top-0 z-50'>
        <div className='container mx-auto'>
          <div className='sm:flex justify-between items-center py-5 '>

            <div className='mb-3 sm:mb-0 ml-3 sm:ml-0'>
              <a href="#" className='text-white text-xl sm:text-3xl animate-pulse font-medium sm:font-semibold'><span className='text-orange-700 animate-pulse'>H</span>ey Develop<span className='text-orange-700 animate-pulse'>ers</span></a>
            </div>

            <div className='sm:flex text-xl text-center border-t border-t-amber-600 sm:border-none'>
              {
                navLink.map(link => (

                  <li className='list-none  mx-2  my-2 sm:my-0 p-3'><a href={link.href} onClick={() => setActiveLink(link.href)} className={` rounded-md cursor-pointer ${activeLink === link.href ? "text-orange-700" : "text-white"}`}>{link.label}</a></li>
                ))
              }
            </div>
          </div>

        </div>
      </nav>

      {/* header section code start here */}

      <header>
        <div className='container text-white flex flex-col sm:flex-row justify-around items-center text-center border border-indigo-600 border-t-0 mx-auto h-[80vh] px-10 pt-10'>
          <div className=''>
            <h1 className='text-2xl sm:text-5xl font-semibold mb-7 sm:mb-12 '>Smart Coders: Learn <br />Programming</h1>
            <button className='bg-indigo-900 px-7 py-3 rounded-full text-xl shadow-xl cursor-pointer hover:bg-indigo-950 transition duration-300'>Join : DevZone <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline-block animate-ping ml-2 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </button>

          </div>
          <div className='mt-3 sm:mt-0'>
            <img className='animate-pulse ' src={coverPhoto} alt="" />
          </div>
        </div>
      </header>

      <main>
        {/* main section code start here */}

        <section>
          <Card></Card>
        </section>

        <section>
          <Service></Service>
        </section>

        <section>
          <Form></Form>
        </section>

        <section>
          <Price></Price>
        </section>

        <section>
          <Subscrib></Subscrib>
        </section>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </body>
  );
};

export default Navber;
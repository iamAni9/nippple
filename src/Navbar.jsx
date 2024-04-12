import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({name}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  }
  
  return (
    <>
      <nav className='w-full h-14 sm:grid grid-cols-12 gap-4 hidden'>
        <div className='col-span-2 flex items-center justify-start ml-4'>
            <img src="./Images/logo.png" height={70} width={100} alt="" srcset=""/>
        </div>
        <div className='col-span-4 flex items-center'>
            <ul className='flex justify-between align-middle gap-8 font-mono'>
                <li><Link to="nippple/" className="hover:border-b-2">DesignI</Link></li>
                <li><Link to="nippple/DesignTwo" className="hover:border-b-2">DesignII</Link></li>
                <li><Link to="nippple/DesignThree" className="hover:border-b-2">DesignIII</Link></li>
                <li><Link to="nippple/" className="hover:border-b-2">DesignIV</Link></li>
            </ul>
        </div>
        <div className='col-span-4 flex items-center justify-end'>
          <span className='w-40 h-8 bg-slate-100 rounded-lg mr-4 flex items-center'>
            <img src="./Images/search.png" className='ml-3' height={14} width={14} alt="" srcset=""/>
            {/* <span className='ml-2 text-slate-400'>Search</span> */}
            <input type="text" className="bg-transparent outline-none w-full ml-2 mr-2" placeholder="Search"/>
          </span>
        </div>
        <div className='col-span-1 flex items-center justify-end gap-4'>
          <img src="./Images/suitcase.png" className='cursor-pointer' height={24} width={24} alt="" srcset=""/>
          <img class="h-8 w-8 object-cover rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
        </div>
        <div className='col-span-1 flex items-center justify-center mr-2 ml-2'>
          <button type="button" className="text-white bg-[#FE6843] hover:bg-[#f7542c] font-medium rounded-lg text-sm px-5 py-2.5">Upload</button>
        </div>
      </nav>

      <nav className='w-full h-14 grid grid-cols-12 gap-2 sm:hidden'>

        {/* Mobile Menu Icon */}
        <div className='col-span-3 flex items-center justify-start ml-4'>
            <img src="./Images/logo.png" className="w-full" alt="Mobile Menu" srcset=""/>
        </div>

        {/* Search Bar */}
        <div className='col-span-6 flex items-center justify-end'>
            <span className='w-40 h-8 bg-slate-100 rounded-lg flex items-center'>
                <img src="./Images/search.png" className='ml-3' height={14} width={14} alt="" srcset=""/>
                {/* <span className='ml-2 text-slate-400'>Search</span> */}
                <input type="text" className="bg-transparent outline-none w-full ml-2 mr-2" placeholder="Search"/>
            </span>
        </div>

        {/* Profile Icons */}
        <div className='col-span-3 flex items-center justify-end gap-4 mr-2'>
            <img class="h-8 w-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            {/* <img src="./images/suitcase.png" height={24} width={24} alt="" srcset=""/> */}
            <div className='col-span-2 flex items-center justify-start'>
                <button className='focus:outline-none' onClick={toggleMenu}>
                    <svg className={`w-6 h-6 transition-transform duration-300 transform ${menuOpen ? 'rotate-90' : ''}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                    </svg>
                </button>
            </div>
        </div>
        </nav>
        <div className={`w-full ${menuOpen ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-max-height duration-300`}>
            <div className={`flex flex-col items-center pt-2 pb-2 bg-gray-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.3s' }}>
                <Link to="nippple/" className="hover:border-b-2 hover:border-black mb-2">DesignI</Link>
                <Link to="nippple/DesignTwo" className="hover:border-b-2 hover:border-black mb-2">DesignII</Link>
                <Link to="nippple/DesignThree" className="hover:border-b-2 hover:border-black mb-2">DesignIII</Link>
                <Link to="nippple/" className="hover:border-b-2 hover:border-black mb-2">DesignIV</Link>
            </div>
        </div>
      </>
  )
}

export default Navbar

import React from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constans/index'

const Nav = () => {
  return (
    <div>
      <header className='padding-x padding-y-8 absolute z-10 w-full p-5'>
       <nav className='flex justify-between items-cente max-container'>
       <a href='/' >
          <img src={headerLogo} alt="nike" width={130} height={29} className='m-0 w-[129px] h-[29px]'/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 mx-lg:hidden'>
          {navLinks.map((item)=>(
             <li key={item.label}>
              <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-black font-bold'
              >
                 {item.label}
              </a>
             </li>
          ))}

        </ul>
        <diV className="hidden max-lg:block">
        <img src={hamburger} alt="logo" width={25} height={25}/>
        </diV>
       
       </nav>
      </header>
        </div>
  )
}

export default Nav
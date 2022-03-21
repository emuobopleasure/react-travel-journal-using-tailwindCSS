import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa"

const Header = ({theme, handleToggle}) => {
  return (
        <nav className='nav-bar bg-[#F55A5A] h-[55px] text-white flex justify-center items-center gap-1 relative'>
            <img src='images/world-icon.png'alt='world-icon'
                className='nav-icon w-[24px] h-[24px]'
            
            />
           <h1> Emuobo Travel Journal</h1>
            <button 
                onClick={handleToggle}
                className='color-switch flex absolute right-5 lg:right-20'>
                <FaMoon 
                    className={theme ? 'visible text-slate-900' : "hidden"}
                />
                <FaSun
                    className={theme ? 'hidden' : 'visible'}
                />
            </button>
        </nav>
  )
}

export default Header
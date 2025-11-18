import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './Login';

export default function Header() {
  return (
    <header className='bg-white shadow-sm p-4'>
      <div className='container-padding flex items-center justify-between h-16'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold'>
            VD
          </div>
          <span className='font-semibold'>Vinay</span>
        </div>
        <nav className='hidden md:flex gap-6 text-sm'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/gallery'
            className={({ isActive }) =>
              isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-700'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-700'
            }
          >
            Contact
          </NavLink>
        </nav>
        <div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}

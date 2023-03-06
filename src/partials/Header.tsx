import { Link } from 'gatsby'
import React from 'react'
import { menu, zsh } from '../partials/icons'

const Header = () => {
  return (
    <header
      className='py-5 w-full z-10  max-w-8xl backdrop-filter backdrop-blur-lg fixed'
    >
      <section className='w-10/12 flex justify-between mx-auto'>

        <h4 className='text-white uppercase flex items-center text-2xl'>
          <span className='w-8  fill-white'>
            {zsh}
          </span>
          <span className='font-medium text-lg md:text-2xl'>
            Sanket
          </span>
        </h4>
        <button className='fill-slate-300 text-slate-200 w-5 h-5 md:hidden'>
          {menu}
        </button>
        <nav className='hidden md:flex duration-200 transition-all space-x-5 font-normal text-slate-400  items-center'>

          {
            [
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'About',
                to: '/about'
              },
              {
                label: 'Experience',
                to: '/about'
              },
              {
                label: 'Contact',
                to: '/about'
              },
            ].map(({ label, to }) =>
              <Link
                key={label}
                className='hover:font-medium hover:scale-105 duration-200 transition-all hover:text-slate-100 '
                to={to}
              >
                {label}
              </Link>
            )
          }

          <button
            className='bg-white glow-white-sm hover:scale-[1.015] transition-all duration-150 group space-y-2 overflow-hidden flex flex-col h-12 rounded-full px-6 py-3 text-bg '>
            <span
              className='group-hover:translate-y-0 -translate-y-9 transition-all duration-200'
            >
              Send inquery!
            </span>
            <span className='group-hover:translate-y-8 -translate-y-8 transition-all duration-200'>
              Start project?
            </span>
          </button>
        </nav>
      </section>
    </header>
  )
}

export default Header
import { Link } from 'gatsby'
import React from 'react'
import { git, menu, zsh } from '../partials/icons'

const Header: React.FC<{ headerOpen: boolean }> = ({ headerOpen }) => {
  return (
    <header
      className='py-5 w-full z-10  max-w-8xl backdrop-filter backdrop-blur-lg fixed'
    >
      <section className='md:w-10/12 flex justify-between mx-auto px-8 md:px-0'>

        <h4 className='text-white uppercase flex items-center text-2xl'>
          <span className='w-8  fill-white'>
            {zsh}
          </span>
          <span className='font-medium text-lg md:text-2xl'>
            Sanket
          </span>
        </h4>
        <a href='https://github.com/sanket-gawande' target={'_blank'} className='fill-slate-300 text-slate-200 w-5 h-5 md:hidden'>
          {git}
        </a>
        <div className={`md:hidden fixed inset-0 backdrop-filter backdrop-blur-lg z-10  bg-slate-900/50 blur-xl h-screen ${headerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>

        </div>

        <nav className={`flex duration-300 transition-all md:space-x-5 font-normal text-slate-200 md:text-slate-400  md:items-center fixed md:relative  h-screen md:h-full top-0 left-0 flex-col md:flex-row bg-slate-800/20 md:bg-transparent backdrop-filter backdrop-blur-lg z-20 ${headerOpen ? 'w-10/12 px-6' : 'w-0 md:w-auto'} overflow-hidden pt-16 md:pt-0  space-y-4 md:space-y-0`}>

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
            className='bg-white glow-white-sm hover:scale-[1.015] transition-all duration-150 group space-y-2 overflow-hidden flex flex-col h-12 rounded-full px-6 py-3 text-bg w-max'>
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
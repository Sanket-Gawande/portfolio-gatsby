import { Link } from 'gatsby'
import React from 'react'
import { git, instagram, js, linkedin, react } from './icons'

const Footer = () => {
  return (
    <footer className='mt-auto top-full p-6 sm:p-12 text-slate-400'>
      <div className='flex items-center justify-between border-b py-4 border-slate-500 flex-wrap'>
        <h5 className='items-center flex text-sm md:text-lg space-x-2'>
          <span>
            Made with
          </span>
          <img src="/images/gatsby.png"
            className='h-5 w-5 inline-block'
            alt="gatsby" />
          <img src="/images/tailwind.webp"
            className='h-5 w-5 inline-block'
            alt="gatsby" />
          <span>
            by Sanket Gawande
          </span>
        </h5>
        <p>
          © 2023 Sanket Gawande
        </p>
      </div>
      <div className='flex items-center justify-between py-4 border-slate-500'>
        <div className='flex items-center space-x-6'>
          <Link
            target={'_blank'}
            to='https:github.com/sanket-gawande'
            className='w-5 fill-slate-400 hover:fill-slate-200 duration-200 transition-all'>
            {git}
          </Link>
          <Link
            target={'_blank'}
            to='https:instagram.com/sanketgawande.dev'
            className='w-5 fill-slate-400 hover:fill-slate-200 duration-200 transition-all'>
            {instagram}
          </Link>
          <Link
            target={'_blank'}
            to='https:linkedin.com/in/sanket-gawande-js'
            className='w-5 fill-slate-400 hover:fill-slate-200 duration-200 transition-all'>
            {linkedin}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../global.css'
import { close, menu } from './icons';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headerOpen, setHeaderOpen] = React.useState(false);
  return (
    <section className='h-screen w-screen relative items-center text-white bg-bg flex flex-col overflow-hidden'>
      <span className='w-52 h-52 rounded-full blur-3xl bg-secondary/30 block absolute'></span>
      <span className='w-80 h-80 rounded-full blur-3xl bg-primary/10 top-[80vh] right-0 block absolute'></span>
      <span className='w-96 h-96 rounded-full blur-[80px] bg-pink-600/10 top-[50vh] left-0 block absolute'></span>
      <div className='h-screen  w-full overflow-y-auto scrollbar-hidden'>

        <Header
          headerOpen={headerOpen}
        />
        <main className='pt-20 shrink-0 w-full z-[1]'>
          {children}
        </main>
        <Footer />
        <button
          onClick={() => setHeaderOpen(!headerOpen)}
          className='md:hidden bottom-4 right-4 z-20 h-12 w-12 rounded-full border border-primary/30 bg-slate-600/20 backdrop-filter backdrop-blur-md fill-white fixed'>
          <span
            className='scale-75 h-4 w-4 fill-white inline-block'
          >
            {headerOpen ? close : menu}
          </span>
        </button>
      </div>
    </section >
  )
}

export default Layout
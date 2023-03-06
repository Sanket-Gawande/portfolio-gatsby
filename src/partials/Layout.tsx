import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../global.css'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className='h-screen w-screen relative items-center text-white bg-bg flex flex-col overflow-y-scroll'>
    <div className='h-max w-full'>
        <span className='w-52 h-52 rounded-full blur-3xl bg-secondary/30 block absolute'></span>
        <span className='w-80 h-80 rounded-full blur-3xl bg-primary/10 top-[80vh] right-0 block absolute'></span>
        <span className='w-96 h-96 rounded-full blur-[80px] bg-pink-600/10 top-[50vh] left-0 block absolute'></span>
        <Header />
        <main className='pt-20 shrink-0 w-full z-[1]'>
          {children}
        </main>
        <Footer />
    </div>
    </section>
  )
} 

export default Layout
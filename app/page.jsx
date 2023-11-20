import Image from 'next/image'
import { arrowRight, docThemeImg, blogThemeImg } from './assets'

export default function Home() {
  return (
   <div className=''>
     <div className=' flex items-center mb-4 gap-[10px] '>
       <p className=' text-primary text-xs tracking-wider font-mono uppercase'>Documentation</p>
       <Image
       src={arrowRight}
       width={8}
       height={5}
       alt='Breadcrumb'
       />
       <p className=' font-semibold text-xs tracking-wider font-mono uppercase'>Introduction</p>
     </div>

    <div className='font-semibold' >
    <p className='  mb-4  text-4xl'>Introduction</p>
    <p className='  text-primary'>Nextra is a framework on top of Next.js, that lets you build content focused websites. It has all the great features from Next.js, plus extra power to create Markdown-based content with ease.</p>
    </div>

    <div className=' mt-10 border-b border-slate-900/10'>
      <p className='mb-6 font-semibold text-4xl'>Quick Start <span className=' text-hash text-4xl'>#</span></p>
    </div>
    <div className='my-6 font-semibold '>
       <p className=' pb-2 text-primary '>To start using QOVES, you need to select a theme first:</p>
    </div>

    <div className=' flex gap-4'>
       <a href='https://nextra.site/docs/docs-theme/start' className=' flex flex-col border border-slate-900/10 w-1/2'>

       <div className='w-full flex justify-center py-10'>
       <Image
       src={docThemeImg}
       width={100}
       height={100}
       alt='Doc Theme'
       />
       </div>

       <div className=' flex items-center  font-semibold border-t border-slate-900/10'>
        <p className=' py-4 px-2'>Documentation theme →</p>
       </div>
       </a>

       <a href='https://nextra.site/docs/blog-theme/start' className=' flex flex-col border border-slate-900/10 w-1/2'>
       <div className='w-full flex justify-center py-[43px]'>
       <Image
       src={blogThemeImg}
       width={100}
       height={100}
       alt='Doc Theme'
       />
       </div>
       <div className=' flex items-center  font-semibold border-t border-slate-900/10'>
        <p className=' py-4 px-2'>Blog theme →</p>
       </div>
       </a>
    </div>
   </div>
  )
}

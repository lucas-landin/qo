import Image from 'next/image'
import { arrowRight } from './assets'

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
       <p className=' font-bold text-xs tracking-wider font-mono uppercase'>Introduction</p>
     </div>
    <p className=' font-alike mb-4 font-bold text-4xl'>Introduction</p>
    <p className=' text-primary'>Nextra is a framework on top of Next.js, that lets you build content focused websites. It has all the great features from Next.js, plus extra power to create Markdown-based content with ease.</p>
   </div>
  )
}

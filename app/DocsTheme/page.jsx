import Image from "next/image";
import { arrowRight } from "../assets"; 
function DocsTheme() {
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
     <p className=' font-alike mb-4 font-bold text-4xl'>Docs Theme</p>
     <p className='text-primary self-stretch px-1 '>Nextra Docs Theme is a theme that includes almost everything you need to build a modern documentation website. It includes a top navigation bar, a search bar, a pages sidebar, a TOC sidebar, and other built-in components. This website itself is built with the Nextra Docs Theme.</p>
    </div>
    );
}

export default DocsTheme;
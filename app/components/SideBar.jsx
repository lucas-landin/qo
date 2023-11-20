"use client" 
import Image from 'next/image';
import { arrowRight} from '../assets';
import Link from 'next/link';
import { useState } from 'react';

function SideBar() {
  const [activeLink, setActiveLink] = useState("Introduction");  
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);

  const toggleGetStarted = () => {
    setShowGetStarted(!showGetStarted);
    setRotateArrow(!rotateArrow);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    return ( 
    <div className="flex flex-col pt-6 text-primary ">
     <ul className=" list-none gap-1 flex flex-col">
       <li onClick={() => handleLinkClick("Introduction")} className={` p-[8px] ${activeLink === "Introduction" ? "activeLink" : ""}`}>
       <Link className=' flex items-start'  href='/' >
       Introduction
       </Link>
       </li>

       <li className=" p-[8px] ">
       <a className='flex justify-between cursor-pointer '> 
       Docs Theme
        <div className={`p-1 hover:bg-listf ${rotateArrow ? 'rotate-90' : ''}`} onClick={toggleGetStarted}>
        <Image
        src={arrowRight}
        width={8}
        height={5}
        alt='Docs Theme'
        
        />
        </div>
        </a>
       </li>
       
        <div className={`  border-l border-slate-900/10 pl-3 ml-2   overflow-hidden ${showGetStarted ? 'h-auto' : 'h-0'}`}>
          <ul className='flex flex-col gap-[10px]' >
            <li onClick={() => handleLinkClick("GetStarted")} className={` p-[8px] ${activeLink === "GetStarted" ? "activeLink" : ""}`}>
             <Link className=' flex items-start' href="/DocsTheme">
              Get Started
            </Link>
            </li>
            <li className=' p-[8px]'>
             Page Configuration
            </li>
            <li className=' p-[8px]'>
            Theme Configuration
            </li>
            <li className=' p-[8px]'>
            <a className='flex justify-between cursor-pointer'>
            Built-ins
            
            <div className='p-1 hover:bg-listf'>
             <Image
             src={arrowRight}
             width={8}
             height={5}
             alt='Built-ins'
              />
            </div>
            </a>
            </li>
            <li className=' p-[8px]'>
            <a className='flex justify-between cursor-pointer'>
            API
            
            <div className='p-1 hover:bg-listf'>
             <Image
             src={arrowRight}
             width={8}
             height={5}
             alt='API'
              />
            </div>
            </a>
            </li>
         </ul>   
        
        </div>

           <li className=' p-[8px] '>
            <a className='flex justify-between cursor-pointer'>
            Blog Theme
            
            <div className='p-1 hover:bg-listf'>
             <Image
             src={arrowRight}
             width={8}
             height={5}
             alt='API'
              />
            </div>
            </a>
            </li>

     </ul>
    </div>

    );
}

export default SideBar;
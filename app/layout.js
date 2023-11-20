
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import RightBar from './components/RightBar'



export const metadata = {
  title: 'Introduction',
  description: 'QOVES Introduction',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <div>
       <body >
         <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10  bg-white/95 supports-backdrop-blur:bg-white/60 '>
         <div className='max-w-[97.5rem] mx-auto'>
         <Header />
         </div>
        

        </div>
        <div className="flex  max-w-[97.5rem] mx-auto px-4 sm:px-6 md:px-8">
          <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto bg-white">
           
            <SideBar />
          </div>

           <div className='lg:pl-[22rem]'>
           <div className=" max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 bg-white">
            
            {children}
          </div>
           </div>
          
          <div className=" fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[16.5rem] py-10 overflow-y-auto hidden xl:block bg-white">
          
            <RightBar />
          </div>
        </div>
        
       <Footer />
      </body>
      </div>
    </html>
  )
}

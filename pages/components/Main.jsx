import React from 'react'
import {FaLinkedinIn} from "react-icons/fa";

const Main = () => {
  return (
     <div className='w-full h-screen text-center'>
       <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center'>
         <div>
           <p className='uppercase tracking-widest bg-gray-400 text-sm text-gray-600'>Let's Build Something Legendary Together</p>
           <h1 className='py-4 text-gray-700'>Hi I'm <span className='text-[#5651e5]'>Hamma</span></h1>
             <h1 className='py-4 text-gray-700'> I'am a sofware Developper</h1>
           <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
             Fluorescent is hiring a Frontend Developer to help us with our small catalogue of premium Shopify
             themes. We're offering a competitive salary, four weeks vacation, remote work and the option of
             a four-day work week. This is a great role for someone looking for a small team and a
             meaningful relationship to the software that they build.
             We're looking for someone in Canada. Shares sincerely appreciated.
           </p>
           <div className='flex flex-row items-center justify-between max-w-[330px] m-auto py-4'>
               <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                 <FaLinkedinIn color="blue" />
               </div>

               <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                 <FaLinkedinIn color="blue" />
               </div>

               <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                 <FaLinkedinIn color="blue" />
               </div>

               <div className="rounded-full p-4 mr-4 shadow-lg shadow-gray-400 ">
                 <FaLinkedinIn color="blue" />
               </div>
           </div>
         </div>
       </div>
     </div>
  )
}

export default Main
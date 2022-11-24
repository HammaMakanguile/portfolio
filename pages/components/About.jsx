import React from "react";

export const About = () => {



    return (
          // <div className='max-w-[1240px] min-h-min w-[70%] mx-auto'>
          //     <div className='text-2xl text-[#5651e5] my-4'>About</div>
          //     <div className='flex flex-col justify-between tracking-widest lg:flex-row flex-nowrap'>
          //         <div className='lg:w-1/2 xl:m-auto '>
          //             <p>
          //                 Fluorescent is hiring a Frontend Developer to help us with our small catalogue of premium Shopify
          //                 themes. We're offering a competitive salary, four weeks vacation, remote work and the option of
          //                 a four-day work week. This is a great role for someone looking for a small team and a
          //                 meaningful relationship to the software that they build.
          //                 We're looking for someone in Canada. Shares sincerely appreciated.
          //             </p>
          //             <p>
          //                 Fluorescent is hiring a Frontend Developer to help us with our small catalogue of premium Shopify
          //                 themes. We're offering a competitive salary, four weeks vacation, remote work and the option of
          //                 a four-day work week. This is a great role for someone looking for a small team and a
          //                 meaningful relationship to the software that they build.
          //                 We're looking for someone in Canada. Shares sincerely appreciated.
          //             </p>
          //         </div>
          //         <div className='lg:w-1/2'>
          //             <img className='w-[372px] mx-auto my-8  lg:my-auto h-[372px] rounded-full shadow-xl  hover:scale-105 ease-in-out duration-500 hover:shadow-[#5651e5]  ' src="data:image/jpeg;base64,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" alt="une image"/>
          //         </div>
          //     </div>
          // </div>

        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p></p>
                </div>
            </div>

        </div>


    )
}
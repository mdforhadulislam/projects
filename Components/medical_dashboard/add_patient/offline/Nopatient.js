import React from 'react'
import Image from "next/image"
import search from '../../../../Assets/icon/search.svg'
import roundedplus from '../../../../Assets/icon/roundedplus.svg'
function Nopatient() {
  return (
    <div className="container w-[90%] mx-auto relative ">
        <div className="  mt-16 h-[400px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
        <div className=" flex justify-between w-full pt-10 md:flex-nowrap flex-wrap">
    <div className="pt-2 relative text-gray-600 w-full md:w-[300px]">
    <input className=" h-10 px-5  w-[90%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC]"
      type="search" name="search" placeholder="Search"/>
    <div className='absolute md:right-4 right-10 top-0 mt-[18px] cursor-pointer'>
    <Image src={search} width={18} height={18} alt='search' />
    </div>
  </div>
 <div className='absolute md:right-4 right-6 top-[90px] md:top-[85px]'>
     <button className='flex flex-row md:ml-[230px] md:mr-8 bg-transparent border-none cursor-pointer items-center '>
     <p className='capitalize mr-2 text-lg text-[#707070]'>Add Patient</p>
     <div className='flex items-center'>
     <Image src={roundedplus} width={40} height={40} alt='search' />
    </div>
     </button>
    
        </div>
</div>

<div className=" min-h-screen mt-12">
    <div className="md:px-4">
      <div className="bg-white p-4 rounded-md">
       
      <div className="flex items-center bg-[#da1e37] rounded-md py-2 px-4 text-white font-bold text-md">
            <div className='mr-24 -ml-2'>
              <span className='text-lg'>Sl No</span>
            </div>
            <div>
              <span className='text-lg'>Member</span>
            </div>
          </div>
              <h3 className='text-center mt-14 capitalize text-[#707070] font-normal'>No Patient Found</h3>
      </div>
    </div>
</div>

 
    </div>
    
       
     
        </div>
  )
}

export default Nopatient


import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Image from "next/image"
import calendar from '../../../Assets/icon/calendar.svg'

function Noticeinfo() {
    const [value, onChange] = useState(new Date());
  return (
      <div className='container w-[90%] mx-auto relative'>
      <div className='   mt-[156px] w-full h-[1200px] rounded-2xl shadow-4xl md:shadow-3xl mb-10 mx-auto bg-white'>
        <div className="flex  flex-col absolute right-12 flex-shrink pb-40">
            <label className='mt-10 mb-2 ' htmlFor="">Select date</label>
            <div className='flex flex-row'>
                <input className=' flex rounded-l-lg h-10 pl-3 justify-center items-center border-2 border-[#DA1E37] w-[100px] md:w-[130px]' placeholder='15th Aug. 2021'/>
                <div className="flex justify-center w-10 h-[40px] bg-[#DA1E37]  rounded-r-lg p-1">
            <Image src={calendar} className='bg-[#DA1E37] ' width={30} height={18} alt='calender'/>
                        </div>
            </div>
            <div className='hidden'>
      <Calendar onChange={onChange} value={value} />
            </div>
          
        </div>
        
        <div className="flex  flex-col flex-shrink  w-[95%] mx-auto pt-40">
        <div className='  w-full mx-auto bg-[#CCCCCC] h-[1px] '></div>
            <label className='mt-10 mb-2' htmlFor="">Id/record number</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[290px] outline-none pl-3" placeholder='985699...|'/>
        </div>
        <div className=' mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]'></div>
        <div className="flex  flex-col flex-shrink  w-[95%] mx-auto">
            <label className='mt-7 mb-2' htmlFor="">Subject</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px]  outline-none pl-3 " />
        </div>
        <div className=' mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]'></div>
        <div className="flex  flex-col flex-shrink  w-[95%] mx-auto">
            <label className='mt-10 mb-2' htmlFor="">Describe Your Notice</label>
           <textarea name="" id="" className=' h-[280px] border-none bg-[#F5F5F5] rounded-lg outline-none pl-8 pt-8 ' placeholder='Type Your Notice...'></textarea>
        </div>

        <div className="flex  flex-col   absolute right-12 flex-shrink-0">
            <label className='mt-10 mb-2' htmlFor="">Fill Your Name</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[200px] outline-none pl-3" placeholder='985699...|'/>
        </div>

        <div className="flex  flex-col absolute right-12 flex-shrink-0 mt-24">
            <label className='mt-10 mb-2' htmlFor="">Position</label>
            <select className="form-select h-[38px] w-[215px] text-sm outline-none border-none bg-[#F5F5F5] rounded-md pl-3">
                <option>Managing Director</option>
                <option>cdcd</option>
                <option>Option 2</option>
                <option>Option 2</option>
             </select>
           
        
           
        </div>
        <div className="flex  flex-row absolute right-12 flex-shrink mt-60">
        <button className='w-[100px] lg:w-[130px] h-[45px] bg-[#E22424] text-white cursor-pointer outline-none border-none rounded-lg mr-5 '>
           Submit
        </button>
        <button className='w-[100px] lg:w-[130px] h-[45px] border-[#E22424] text-[#E22424] bg-transparent cursor-pointer outline-none border-2 rounded-lg'>
           Cancel
        </button>
        </div>
      
    </div>
      </div>
    
  )
}

export default Noticeinfo
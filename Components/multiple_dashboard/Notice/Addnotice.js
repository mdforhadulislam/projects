import Image from "next/image"
import React from "react"
import Calendar from '../../../Assets/icon/calendar.svg'
import list from '../../../Assets/icon/list.png'
import plus from '../../../Assets/icon/plus.png'


function Addnotice() {
  return (

    <div className="container w-[90%] mx-auto relative ">
      <div className=" flex justify-between w-full visible md:invisible">
        <h3 className='text-2xl font-bold text-[#313131] mt-5'>Notice</h3>
        <div className='flex flex-row mt-16'>
          <input className=' flex rounded-l-lg h-10 w-[100px] pl-3 justify-center items-center border-2 border-[#DA1E37]' placeholder='15th Aug. 2021' />
          <div className="flex justify-center items-center w-10 h-[38px] bg-[#DA1E37]  rounded-r-lg p-1">
            <Image src={Calendar} className='bg-[#DA1E37] ' width={30} height={18} alt='calender' />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-center items-center mt-20   h-[326px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">

          <div className="flex flex-auto justify-center items-center static outline-none border-none">
            <div className="ml-10 outline-none border-none bg-transparent">
              <Image src={list} width={72} height={93} alt='list' />
            </div>
            <button className="flex justify-center absolute w-[220px] outline-none border-none bg-transparent ">
              <Image className="cursor-pointer" src={plus} width={36} height={36} alt='plus' />
              <span className="ml-3 capitalize text-center text-lg text-[#666666] outline-none border-none bg-transparent cursor-pointer">add new notice</span>
            </button>
          </div>

        </div>
      </div>


    </div>


  )
}

export default Addnotice
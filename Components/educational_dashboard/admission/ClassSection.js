import React from 'react'
import Image from 'next/image'
import downarrow from '../../../Assets/icon/downarrow.svg'
import roundedplus from '../../../Assets/icon/roundedplus.svg'
import noadmission from '../../../Assets/icon/noadmission.svg'
function ClassSection() {
  return (
    <div className="container w-[90%] lg:w-[40%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
        <div className="flex flex-col md:flex-row md:justify-around">
        <div className="flex flex-col">
      <label className=' mb-2 text-[#666666]' >Select Class </label>
      <div className="relative inline-block w-[200px] text-gray-700 outline-none ">
  <select className="w-[200px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent" placeholder="Regular input">
    <option>Select Class</option>
    <option>eight</option>
    <option>nine</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
  <Image src={downarrow} width={20} height={20}/>
  </div>
</div>
      </div>
        <div className="flex flex-col mt-6 md:mt-0">
      <label className=' mb-2 text-[#666666]' >Section </label>
      <div className="relative inline-block w-[200px] text-gray-700 outline-none ">
  <select className="w-[200px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent" placeholder="Regular input">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
  <Image src={downarrow} width={20} height={20}/>
  </div>
</div>
      </div>
        </div>
   

      <div className="mt-12 flex justify-end ">
        <button className="w-[120px] lg:w-[130px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-3xl md:shadow-3xl  drop-shadow-md border-none text-[11px]">
          Yes
        </button>
        <button className="w-[120px] lg:w-[130px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-3xl ">
          No
        </button>
      </div>
    </div>
  </div>
  )
}

export default ClassSection
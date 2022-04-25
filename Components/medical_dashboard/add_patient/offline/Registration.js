import React from 'react'
import Image from 'next/image'
import { Wrapper } from '../../../../styles/Scrollbar'
import cross from '../../../../Assets/icon/cross.svg'
import camera from '../../../../Assets/icon/camera.svg'
import person from '../../../../Assets/icon/person.svg'
import downarrow from '../../../../Assets/icon/downarrow.svg'

function Registration() {
  return (
    <div className='container w-[90%] mx-auto relative '>
        <div className='absolute -right-5 -mt-9 cursor-pointer'>
      <Image src={cross} width={45} height={45} alt='cross'/>
      </div>
    <div className="  mt-16 md:h-[700px] h-[2350px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md pt-16 ">
    
    <div className='w-[210px] h-[210px] mx-auto rounded-2xl shadow-4xl md:shadow-5xl bg-white drop-shadow-md relative'>
      <div className='float-right m-4 rounded-full shadow-4xl md:shadow-4xl bg-white w-6 h-6 text-center p-1 cursor-pointer'>
        <Image src={camera} width={20} height={20} alt='camera'/>
      </div>
      <div className='  absolute ml-4 mt-10'>
        <Image src={person} width={180} height={150} alt='person'/>
      </div>
      <p className='pl-10 absolute bottom-0 text-[12px] text-[#666666]'>Upload Photo 2Mb At Lest </p>
    </div>
    <Wrapper>
    <div className="mx-auto w-[90%] routine-table-body-section">
      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px] ">
      <label className='mt-10 mb-2 text-[#666666]' >Patient Name </label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:md:w-[290px] w-[220px]  outline-none pl-3"/>
      </div>
      <div className="flex flex-col">
      <label className='mt-10 mb-2 text-[#666666]' >Gender </label>
      <div className="relative inline-block w-[200px] text-gray-700 outline-none ">
  <select className="w-[200px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent" placeholder="Regular input">
    <option>Add your gender</option>
    <option>Male</option>
    <option>Female</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
  <Image src={downarrow} width={20} height={20} alt='downarrowe'/>
  </div>
</div>
      </div>
      </div>
     
      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col md:mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Age</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#bbbaba]' >ID No </label>
            <input type="text" className="border-2 border-solid border-[#F5F5F5] bg-[#ffffff] rounded-md  h-[38px] w-[150px] outline-none pl-3 placeholder:text-[#bbbaba]" placeholder='Dp123443'/>
      </div>
      </div>
      

      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Contact Number</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Mail Address </label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      </div>

      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Father Name </label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[170px] md:md:w-[290px] outline-none pl-3"/>
            <div className='relative'>
              <p className='absolute md:-right-16 sm:-right-16 -right-16 -mt-8 text-[#666666] capitalize'>optional</p>
            </div>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Mother Name  </label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[170px] md:md:w-[290px] outline-none pl-3"/>
            <div className='relative'>
              <p className='absolute md:-right-16 sm:-right-16 -right-16 -mt-8 text-[#666666] capitalize'>optional</p>
            </div>
      </div>
      </div>

      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Other Gurdiantn Name </label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[170px] md:md:w-[290px]  outline-none pl-3"/>
            <div className='relative'>
              <p className='absolute md:-right-16 sm:-right-16 -right-16 -mt-8 text-[#666666] capitalize'>optional</p>
            </div>
      </div>
      <div className="flex flex-col mr-[250px] mt-5">
      <label className='mt-10 mb-2 text-[#666666]' >Relation</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3 placeholder:text-[#666666]" placeholder='Example : Friend,Brother,Uncle etc'/>
      </div>
      </div>
      <h2 className='font-normal -mb-5 mt-10 md:mt-5'>Present Address:</h2>
      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Region</label>
            <input type="text" className="border-2 border-solid border-[#DA1E37]  rounded-md  h-[38px] md:w-[290px]  outline-none pl-3" placeholder='Khulna,,|'/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >City</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      </div>

      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Area</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Address</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      </div>
      <div className="flex flex-row mt-5 flex-wrap">
      <h2 className='font-normal -mb-5 '>Permanent Address:</h2>
      <div className="flex  md:ml-[360px] ">
    <div className="flex items-center h-5 mt-6">
      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <div className="ml-3 text-sm mt-6">
      <label htmlFor="remember" className="font-medium text-[#666666] ">Same</label>
    </div>
  </div>
      </div>
      
      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Region</label>
            <input type="text" className="border-2 border-solid border-[#DA1E37]  rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3" placeholder='Khulna,,|'/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >City</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      </div>

      <div className="flex -mb-4 flex-wrap">
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Area</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      <div className="flex flex-col mr-[250px]">
      <label className='mt-10 mb-2 text-[#666666]' >Address</label>
            <input type="text" className="border-none bg-[#F5F5F5] rounded-md  h-[38px] md:w-[290px] w-[220px] outline-none pl-3"/>
      </div>
      </div> 
      <div className="flex  mt-16 float-right md:mr-[140px] -mr-3">
        <button className='w-[120px] lg:w-[150px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[11px]'>
        Add To Patient List
        </button>
        <button className='w-[100px] lg:w-[150px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-2xl drop-shadow-2xl'>
        Cancel
        </button>
        </div>
    </div>
    </Wrapper>
    
    </div>
    </div>
  )
}

export default Registration
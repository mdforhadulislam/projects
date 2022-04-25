import React from 'react'

function TurnOffAdmission() {
  return (
    <div className="container w-[90%] md:w-[40%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
     <h2 className='text-center font-normal'>Are You Sure To Turn Off Admission ?</h2>
     <p className='text-center text-[#DA1E37]'>Note : If You Turn Off Then No One Can not Give You Admission Request </p>

     <div className="mt-8 flex justify-center items-center ">
        <button className='w-[120px] lg:w-[130px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[11px]'>
        Yes
        </button>
        <button className='w-[120px] lg:w-[130px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-4xl '>
        No
        </button>
        </div>
    </div>
  </div>
  )
}

export default TurnOffAdmission
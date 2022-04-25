import React from 'react'

function AdmitedSuccess() {
  return (
    <div className="container w-[90%] md:w-[40%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
      <h3 className="text-center font-normal">Successfully Admitted! </h3>

      <div className="mt-5 flex items-center justify-center">
        <button className="w-[120px] lg:w-[150px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-3xl  drop-shadow-md border-none text-[11px]">
          Done
        </button>
       
      </div>

      <div className="mt-6 flex justify-center items-center space-x-4">
        <button className="  bg-transparent cursor-pointer outline-none border-none underline text-[11px]">
        View Admission List  
        </button>
        <button className=" bg-transparent cursor-pointer outline-none border-none underline text-[11px]">
        View Receipt 
        </button>
      </div>
    </div>
  </div>
  )
}

export default AdmitedSuccess
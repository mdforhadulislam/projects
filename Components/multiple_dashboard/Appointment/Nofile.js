import React from "react";
import Image from "next/image";
import AppoinmentHeader from "./AppoinmentHeader";
import nodata from '../../../Assets/icon/nodata.svg'
import roundedplus from '../../../Assets/icon/roundedplus.svg'
function Nofile() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
       
       <AppoinmentHeader></AppoinmentHeader>
        <div className=" min-h-screen mt-12 w-[96%] mx-auto">
          <div className="flex flex-col items-center justify-center rounded-[20px] shadow-4xl md:shadow-3xl bg-white drop-shadow-md h-[300px]">
          
            <Image src={nodata} width={48} height={48} alt='fdefd'/>
           
            <h3 className=" capitalize text-[#707070] font-normal">
            There Are No Appointment On This Date
            </h3>
            <div className="absolute md:right-6 right-6 mt-56 pb-4">
            <button className="flex flex-row md:ml-[230px] md:mr-8 bg-transparent border-none cursor-pointer items-center">
              <p className="capitalize mr-1 text-md text-[#707070] text-[16px]">
              Create Appointment
              </p>
              <div className="flex items-center">
                <Image src={roundedplus} width={60} height={60} alt='fdefd'/>
              </div>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nofile;

import React, { useState } from 'react';
import Image from "next/image";
import Switch from "./Switch";
import { Wrapper } from "../../../styles/Scrollbar";
import documents from '../../../Assets/icon/documents.svg'
import roundedplus from '../../../Assets/icon/roundedplus.svg'
import noadmission from '../../../Assets/icon/noadmission.svg'
function AdmissionCanceled() {
  const [value, setValue] = useState(false);
  return (
    <div className="container w-[96%] md:w-[90%] mx-auto relative ">
    <div className="  mt-16 h-[700px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
    <div className="flex justify-end items-center pr-14 pt-2">
        <p className="text-bold items-center mt-5 text-xl">Admission Request</p>
        <div className="flex justify-center items-center ml-3">
          <Switch
            isOn={value}
            onColor="#42C542"
            handleToggle={() => setValue(!value)}
          />
        </div>
      </div>
      <div className="flex items-center md:justify-end md:pr-5 ml-10 md:ml-0 pt-4 pb-3 md:pb-6">
        <div className="pr-2 cursor-pointer">
          <Image src={documents} width={25} height={25} />
        </div>
        <p className="pr-12 text-xl cursor-pointer">Require Documents </p>
      </div>
      <div className="flex md:justify-end items-center md:mr-16 md:-mt-4 ml-8 -mt-2 mb-2 md:mb-0">
        <div className="flex items-center">
          <Image src={roundedplus} width={40} height={40} />
        </div>
        <p className="capitalize mr-2 text-lg text-[#707070] cursor-pointer">
          Offline User Admission
        </p>
      </div>

      <div className="flex md:px-3 md:ml-7 ml-3">
        <p className="md:pr-1 md:text-[18px] text-[#DA1E37] cursor-pointer w-[120px] md:w-[160px] text-[13px] pr-1 mt-5">
          Admission Request
        </p>
        <div className="ml-1 mr-2 mt-1 bg-slate-300 w-[1px] h-[22px] md:mr-3"></div>
        <p className=" md:text-lg md:pl-7 cursor-pointer pl-1 text-[14px] mt-1">Accepted </p>
        <div className="md:ml-[40px] mt-1 bg-slate-300 w-[1px] h-[22px] mr-3 ml-3"></div>
        <p className=" md:text-lg md:pl-7 cursor-pointer text-[14px] mt-5">Canceled </p>
      </div>

      <div className="md:ml-[35px] md:mt-1  bg-[#DA1E37] md:w-[176px] w-[130px] h-[1px]"></div>
      <div className="md:ml-[203px] md:-mt-[1px] bg-slate-300  md:w-[260px] w-[300px] h-[1px]"></div>
      <div className="md:ml-[360px] md:-mt-[1px] bg-slate-300  md:w-[160px] w-[0px] h-[1px]"></div>

     
     

      <div className=" min-h-screen ">
        <div className="md:px-4">
          <div className="bg-white p-4 rounded-md">
            <div className="flex items-center bg-[#da1e37] rounded-md py-2 px-4 text-white font-bold text-md invisible md:visible justify-around">
              <span className="text-lg">Name</span>
              <span className="text-lg">Class</span>
              <span className="text-lg">Gender</span>
              <span className="text-lg">Age</span>
              <span className="text-lg">Action</span>
            </div>
            <div className="flex justify-center items-center">
              <Image src={noadmission} width={400} height={400} />
            </div>
            <h3 className="text-center -mt-14 capitalize text-[#707070] font-normal">
            No Canceled List Found
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AdmissionCanceled;

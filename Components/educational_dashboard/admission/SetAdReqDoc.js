import Image from "next/image";
import React from "react";
import SimpleAccordion from "./SimpleAccordion";
import leftarrow from '../../../Assets/icon/leftarrow.svg'
import documents from '../../../Assets/icon/documents.svg'
import roundedplus from '../../../Assets/icon/roundedplus.svg'

function SetAdReqDoc() {
  return (
    <div className="container w-[90%]  mx-auto relative ">
      <div className="  mt-16 h-[900px] md:h-[700px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
        <div className="flex pt-12 md:ml-10 ml-5">
          <Image src={leftarrow} width={25} height={25} alt=""/>
        </div>
        <div className="flex justify-center">
          <Image src={documents} width={305} height={155} alt="" />
        </div>
        <p className="text-center">Set Admission Require Documents </p>
        <div className="w-[90%] mx-auto flex sm:justify-between flex-wrap">
          <div className="flex flex-col w-full md:w-[300px]">
            <label className="mt-10 mb-2 text-[#666666]">Document Name</label>
            <input
              type="text"
              className="border-1 border-[#a1a1a1] border-solid bg-[#F5F5F5] rounded-md  h-[38px] md:md:w-[310px] w-[95%]  outline-none pl-3 "
              placeholder="Example: Birth Certificate, Passport Etc"
            />
            <button className="flex flex-row  bg-transparent border-none cursor-pointer items-center mt-3">
              <div className="flex items-center">
                <Image src={roundedplus} alt="" width={40} height={40} />
              </div>
              <p className="capitalize mr-2 text-lg text-[#707070] cursor-pointer ">
                Add More
              </p>
            </button>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-[300px]">
            <label className=" mb-2 text-[#666666]">Instruction:</label>
            <div className="w-full md:h-48 relative ">
              <div className="w-auto h-auto absolute top-0 left-0">
                <SimpleAccordion></SimpleAccordion>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  mt-48 md:mt-16 float-right md:mr-[50px] mr-0">
          <button className="w-[120px] lg:w-[130px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-3xl  drop-shadow-md border-none text-[11px]">
            save
          </button>
          <button className="w-[120px] lg:w-[130px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-3xl ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetAdReqDoc;

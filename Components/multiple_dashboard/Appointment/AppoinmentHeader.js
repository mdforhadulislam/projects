import React from "react";
import Image from "next/image";
import Classes from "../../../styles/Header.module.css";
import search from '../../../Assets/icon/search.svg'
import calendar from '../../../Assets/icon/calendar.svg'
function AppoinmentHeader() {
  return (
    <>
      <p className="text-center pt-20 text-[#313131] text-[30px]">
        Appointment
      </p>
      <div className=" flex justify-between w-full pt-10  md:flex-nowrap flex-wrap">
        <div className=" relative text-gray-600 w-full md:w-[400px] -mt-12">
          <input
            className=" h-12 px-5  w-[90%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute md:right-4 right-10 -top-1 mt-[18px] cursor-pointer">
            <Image src={search} width={18} height={18} alt='fdfd'/>
          </div>
        </div>
        <div className="right-[230px] absolute md:-mt-3 mt-7 text-[18px] md:mr-3 -mr-3">
          Filter By
        </div>
        <div className="absolute md:right-14 right-7 md:top-[130px]">
          <div className="flex flex-row mt-4 ">
            <div className="flex justify-center w-10 h-[40px] bg-[#DA1E37] rounded-l-lg p-1">
              <Image
                src={calendar}
                className="bg-[#DA1E37] "
                width={30}
                height={18}
                alt="calender"
              />
            </div>
            <input
              className=" flex rounded-r-lg md:w-[130px] h-10 justify-center pl-3 items-center border-2 border-[#DA1E37] w-[100px]"
              placeholder="15th Aug.2021"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[95%] mx-auto items-center justify-between text-center text-[#666666] mt-20 ">
        <div
          className={`${Classes.border} ${Classes.borderRed} mb-6 p-3 w-full cursor-pointer`}
        >
          Upcoming
        </div>
        <div className={`${Classes.border}  mb-6 p-3 w-full cursor-pointer`}>
          Previous
        </div>
        <div className={`${Classes.border}  mb-6 p-3 w-full cursor-pointer`}>
          Request
        </div>
      </div>

     
    </>
  );
}

export default AppoinmentHeader;

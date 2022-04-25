import React from "react";
import Image from "next/image";
import AppoinmentHeader from '../../Appointment/AppoinmentHeader'
import calendar from '../../../../Assets/icon/calendar.svg'
import clock from '../../../../Assets/icon/clock.svg'
function Datetime() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
        <AppoinmentHeader></AppoinmentHeader>
        <div className="grid justify-center">
     <div className="flex pt-4">
          <p className="pr-5 text-[#DA1E37] w-[100px] text-center cursor-pointer">Sent</p>
          <div className="-ml-[20px] bg-slate-300 w-[1px] h-[22px] mr-2">
        </div>
          <p className="w-[100px] text-center pr-10 cursor-pointer">received</p>
        </div>

        <div className="ml-[5px] mt-1 bg-[#DA1E37]  w-[80px] h-[1px]">
        </div>
        <div className="ml-[85px] -mt-[1px] bg-slate-300  w-[90px] h-[1px]">
        </div>
     </div>

        <div className=" h-[700px] mt-10 w-[96%] mx-auto">
          <div className="flex flex-col  rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md h-[600px]">
            <div className="flex md:ml-20 ml-2 flex-col mt-7">
              <p className="text-[22px] mb-3">Set Date</p>
              <div className="flex flex-row ">
                <input
                  className=" flex  rounded-l-lg justify-center pl-3 items-center border-2 border-[#DA1E37] w-[150px]"
                  placeholder="15th Aug. 2021"
                />
                <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                  <Image
                    src={calendar}
                    className="bg-[#DA1E37] "
                    width={30}
                    height={18}
                    alt="calender"
                  />
                </div>
              </div>
            </div>

            <div className="flex md:ml-20 ml-2 flex-col mt-5">
              <p className="text-[22px] mb-3">Set Time</p>
              <div className="flex flex-row md:space-x-6 space-x-2">
                <div className="flex flex-row ">
                  <input
                    className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[80px] w-14"
                    placeholder="5:00 AM"
                  />
                  <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37] p-1">
                    <Image
                      src={clock}
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>
                <span className=" flex items-center">to</span>
                <div className="flex flex-row ">
                  <input
                    className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[80px] w-14"
                    placeholder="5:00 PM"
                  />
                  <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                    <Image
                      src={clock}
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:ml-20 ml-2 flex-col w-[90%] mx-auto mt-5">
              <p className="text-[22px] mb-3">Description</p>
              <textarea
                name=""
                id=""
                className=" h-[200px]  bg-[#fbfbfb] border-solid border-b-gray-500 rounded-lg outline-none pl-8 pt-8 "
                placeholder=""
              ></textarea>
            </div>

            <div className="flex justify-center items-center mt-10 space-x-3">
              <button className="w-[120px] lg:w-[170px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[15px] px-1">
                Sent Request
              </button>
              <button className="w-[120px] lg:w-[170px] h-[45px] border-solid border-[#DA1E37] bg-white text-[#DA1E37] cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md  text-[15px] px-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datetime;

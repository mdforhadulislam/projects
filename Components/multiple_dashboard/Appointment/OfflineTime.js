import React from "react";
import Image from "next/image";
import calendar from '../../../Assets/icon/calendar.svg'
import clock from '../../../Assets/icon/clock.svg'
function OfflineTime() {
  return (
    <div className="container md:w-[60%] w-[92%] mx-auto relative ">
      <div className="  mt-16 md:h-[600px] h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
        <div className="flex px-3 ml-6 pt-4">
          <p className="pr-8">Dutpedia User</p>
          <div className="-ml-[20px] mt-0 bg-slate-300 w-[1px] h-[20px] mr-3"></div>
          <p className="text-[#DA1E37]">Offline User</p>
        </div>

        <div className="ml-[35px] mt-2 bg-slate-300  w-[116px] h-[1px]"></div>
        <div className="ml-[149px] -mt-[1px] bg-[#DA1E37]  w-[100px] h-[1px]"></div>

        <div className=" min-h-screen md:mt-7 pb-5">
          <div className="bg-white px-4  md:rounded-2xl relative z-10 routine-table-body-section ">
            <div className="flex md:ml-5 flex-col">
              <p className="text-[22px] mb-3 flex flex-col">Time</p>
              <div className="flex justify-between flex-wrap ">
                <div className="flex flex-row">
                  <input
                    className=" flex rounded-l-lg justify-center pl-3 items-center border-2 border-[#DA1E37] md:w-[180px] w-[150px] h-10 text-sm"
                    placeholder="Saturday :15th Aug. 2021"
                  />
                  <div className="flex justify-center w-10 h-[40px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                    <Image
                      src={calendar}
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:-mt-6 flex-wrap">
                  <p className="text-[22px] mb-3 ">Set Time</p>
                  <div className="flex flex-row md:space-x-6 space-x-3">
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[80px] w-[50px]"
                        placeholder="5:00 AM"
                      />
                      <div className="flex justify-center w-10 md:h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  md:p-1">
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
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[80px] w-[50px] p-1"
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
              </div>

              <div className="flex ml-0 flex-col w-[97%] mx-auto mt-5">
                <p className="text-[18px] mb-3">Description</p>
                <textarea
                  name=""
                  id=""
                  className=" h-[200px]  bg-[#efefef] border-solid border-blue-500 rounded-lg pl-8 pt-8 "
                  placeholder="type here"
                ></textarea>
              </div>

              <div className="flex justify-start items-center mt-5 space-x-3">
                <button className="w-[120px] lg:w-[170px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[15px] px-1">
                  Create Appointment
                </button>
                <button className="w-[120px] lg:w-[170px] h-[45px] border-solid border-[#DA1E37] bg-white text-[#DA1E37] cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md  text-[15px] px-1">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfflineTime;

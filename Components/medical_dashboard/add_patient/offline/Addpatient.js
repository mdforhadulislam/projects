import React from "react";
import Image from "next/image";
import { Wrapper } from "../../../../styles/Scrollbar";
import search from '../../../../Assets/icon/search.svg'
import roundedplus from '../../../../Assets/icon/roundedplus.svg'
import person1 from '../../../../Assets/icon/person1.svg'
import shild from '../../../../Assets/icon/shild.svg'
function Addpatient() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-[600px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
      <div className="flex px-3 ml-6 pt-4 ">
          <p className="pr-8">Dutpedia User</p>
          <div className="-ml-[20px]  bg-slate-300 w-[1px] h-[20px] mr-3">
        </div>
          <p className="text-[#DA1E37]">Offline User</p>
        </div>

        <div className="ml-[35px] mt-[2px] bg-slate-300  w-[116px] h-[1px]">
        </div>
        <div className="ml-[149px] -mt-[1px] bg-[#DA1E37]  w-[100px] h-[1px]">
        </div>

        <div className=" flex justify-between w-full pt-10 md:flex-nowrap flex-wrap">
          <div className="-mt-2 relative text-gray-600 w-full md:w-[300px]">
            <input
              className=" h-10 px-5  w-[90%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC]"
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="absolute md:right-4 right-10 top-0 mt-[11px] cursor-pointer">
              <Image src={search} width={18} height={18} alt='search' />
            </div>
          </div>
          <div className="absolute md:right-4 right-6 top-[130px] md:top-[85px] mt-3 md:mt-0">
            <button className="flex flex-row md:ml-[230px] md:mr-8 bg-transparent border-none cursor-pointer items-center">
              <p className="capitalize mr-2 text-lg text-[#707070]">
                Add Patient
              </p>
              <div className="flex items-center">
                <Image src={roundedplus} width={40} height={40} alt='search' />
              </div>
            </button>
          </div>
        </div>

        <div className=" min-h-screen mt-20 md:mt-7">
          <Wrapper className="md:px-4">
            <div className="bg-white px-4 mt-4 md:rounded-md relative z-10 routine-table-body-section ">
              <div className="flex items-center bg-[#DA1E37] rounded-md py-2 md:px-4 text-white font-bold text-md w-full md:w-[100%] mx-auto top-0 sticky z-10">
                <div className="md:mr-24 mr-8 ml-2">
                  <span className="text-lg">Sl No</span>
                </div>
                <div>
                  <span className="text-lg">Member</span>
                </div>
              </div>
              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border rounded-lg items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                  <span className="md:pr-[90px] pr-10 pl-6 ">
                    01
                  </span>
                  <div className="relative flex items-center">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50}  alt='search'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-2 ml-4 md:-mt-0">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                    <div className="flex flex-wrap items-center ">
                      <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 -mt-2 w-7 md:w-[40px]">
                        <Image src={shild} width={40} height={40} alt='search'/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex  rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                  <span className="md:pr-[90px] pr-10 pl-6 ">
                    01
                  </span>
                  <div className="relative flex items-center">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50}  alt='search'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-2 ml-4 md:-mt-0">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                    <div className="flex flex-wrap items-center ">
                      <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 -mt-2 w-7 md:w-[40px]">
                        <Image src={shild} width={40} height={40} alt='search'/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border rounded-lg items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                  <span className="md:pr-[90px] pr-10 pl-6 ">
                    01
                  </span>
                  <div className="relative flex items-center">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50}  alt='search'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-2 ml-4 md:-mt-0">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                    <div className="flex flex-wrap items-center ">
                      <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 -mt-2 w-7 md:w-[40px]">
                        <Image src={shild} width={40} height={40} alt='search'/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border rounded-lg items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                  <span className="md:pr-[90px] pr-10 pl-6 ">
                    01
                  </span>
                  <div className="relative flex items-center">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50}  alt='search'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-2 ml-4 md:-mt-0">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                    <div className="flex flex-wrap items-center ">
                      <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 -mt-2 w-7 md:w-[40px]">
                        <Image src={shild} width={40} height={40} alt='search'/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border rounded-lg items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                  <span className="md:pr-[90px] pr-10 pl-6 ">
                    01
                  </span>
                  <div className="relative flex items-center">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50}  alt='search'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className="-space-y-3 mt-2 ml-4 md:-mt-0">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                    <div className="flex flex-wrap items-center ">
                      <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 -mt-2 w-7 md:w-[40px]">
                        <Image src={shild} width={40} height={40} alt='search'/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default Addpatient;

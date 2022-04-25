import React from 'react'
import Image from "next/image";
import search from '../../../Assets/icon/search.svg'
import person1 from '../../../Assets/icon/person1.svg'

import { Wrapper } from "../../../styles/Scrollbar";
function OfflineSearch() {
  return (
    <div className="container md:w-[60%] w-[93%] mx-auto relative ">
      <div className="  mt-16  h-auto rounded-2xl shadow-3xl md:shadow-3xl bg-white drop-shadow-md">
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

        <div className=" flex justify-between w-full pt-10 md:flex-nowrap flex-wrap ">
          <div className="-mt-2 relative text-gray-600 md:w-[97%] w-[92%]">
            <input
              className=" md:h-14 h-10 px-5  w-[95%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC]"
              type="search"
              name="search"
             
            />
            <div className='absolute left-5 md:left-14 md:top-[13px] top-1 text-lg  border-none -mt-1 px-4 py-1 cursor-pointer'>
                Tanisha shima 
            </div>
            <div className="absolute md:right-6 right-0 md:top-1 top-2 md:mt-[11px] w-10  h-8 cursor-pointer">
              <Image src={search} width={18} height={28} alt='fdefd'/>
            </div>
          </div>
         
        </div>

        <div className="  md:mt-7 ">
          <Wrapper className="md:px-4 ">
            <div className="bg-white px-4 mt-4 rounded-md relative z-10  routine-table-body-section pb-5">
          
            <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex  rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                 
                  <div className="relative flex items-center ml-5">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50} alt='fdefd'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className=" ml-4 ">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border border-gray-100 rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl ">
                 
                  <div className="relative flex items-center ml-5">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50} alt='fdefd'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className=" ml-4 ">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border- rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                 
                  <div className="relative flex items-center ml-5">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50} alt='fdefd'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className=" ml-4 ">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border- rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                 
                  <div className="relative flex items-center ml-5">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50} alt='fdefd'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className=" ml-4 ">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">
                <div className=" flex border- rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                 
                  <div className="relative flex items-center ml-5">
                   
                    <div className="w-[50px] h-[50px] ">
                      <Image src={person1} width={50} height={50} alt='fdefd'/>
                    </div>
                
                  </div>

                  <div className="flex flex-col justify-between md:flex-row w-full">
                    <div className=" ml-4 ">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                        Tanisha shima{" "}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  )
}

export default OfflineSearch
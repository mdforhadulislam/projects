import React, { useState } from "react";
import Image from "next/image";
import Switch from "./Switch";
import { Wrapper } from "../../../styles/Scrollbar";
import documents from '../../../Assets/icon/documents.svg'
import roundedplus from '../../../Assets/icon/roundedplus.svg'
import person1 from '../../../Assets/icon/person1.svg'
import online from '../../../Assets/icon/online.svg'

function AdAccepted() {
  const [value, setValue] = useState(false);
  return (
    <div className="container md:w-[90%] mx-auto relative">
      <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
      <div className="flex justify-end items-center pr-14 ">
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
          <p className="capitalize mr-2 text-lg text-[#707070] cursor-pointer ">
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


        <div className=" min-h-screen">
          <Wrapper className="md:px-4">
            <div className="bg-white px-4 mt-4 md:rounded-md relative z-10 routine-table-body-section">
              <div className="xl:flex items-center bg-[#DA1E37] rounded-md py-2 md:px-4 text-white font-bold text-md w-full lg:w-full mx-auto top-0 sticky z-10 hidden justify-between ">
                <div className="text-lg ">Name</div>
                <div className="text-lg ml-24">Class</div>
                <div className="text-lg ">Gender</div>
                <div className="text-lg ">Age</div>
                <div className="text-lg ">Action</div>
                <div className="text-lg mr-10">Details</div>
              </div>

{/* akhane mobile design kora hoise */}
              <div className="  text-sm font-normal mt-4 block xl:hidden">
                <div className=" border-2 rounded-md  w-full h-[200px]  shadow-3xl ">
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg  ml-2 w-[50px] h-[50px] mt-2">
                      <Image src={person1} width={50} height={50} />
                    </div>
                    <div className="flex mt-12 -ml-4">
                      <Image src={online} width={27} height={27} />
                    </div>
                    <div className="flex flex-col space-y-1  -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px] ">
                      Id: Dp 343463
                    </div>
                  </div>
                  </div>

                
                  <div className=" flex">
                    <p className="pl-4 text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer pr-2">
                      View Details
                    </p>
                  </div>
                  </div>
                  <div className="flex justify-around">
                  <div className="flex flex-col items-center">
                <span className="text-lg ">Class</span>
                <span className="">8</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Gender</span>
                <span className="">Female</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Age</span>
                <span className="">13</span>
                </div>
                  </div>
                 
              
                 
                  <div className="flex flex-col float-left items-center ">
                    <p className="pl-4 text-[#DA1E37] text-[15px] ">
                      Accepted
                    </p>
                    <p className="pl-4 text-[#707070] text-[15px] -mt-3">
                      Accepted By Robin
                    </p>
                  </div>

                
                </div>
              </div>

              <div className=" items-center text-sm font-normal mt-4 hidden xl:block">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-3xl ">
                  <div className="flex ">
                    <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                      <Image src={person1} width={50} height={50} />
                    </div>
                    <div className="flex mt-10 -ml-4">
                      <Image src={online} width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 justify-center -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px]">
                      Id: Dp 343463
                    </div>
                  </div>

                  <span className="text-lg xl:mr-24 xl:ml-28 2xl:ml-40">8</span>
                  <span className="text-lg lg:mr-24 xl:ml-16 2xl:ml-[120px] ">Female</span>
                  <span className="text-lg lg:mr-14 xl:ml-14 2xl:ml-24 ml-1">13</span>
                 
                  <div className=" md:-mt-5 justify-center xl:right-[250px] 2xl:right-[290px] absolute flex md:flex-col -space-y-3 ">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center">
                      Accepted
                    </p>
                    <p className="pl-4 text-[#707070] text-[15px] flex  justify-center">
                      Accepted By Robin
                    </p>
                  </div>

                  <div className="right-10 absolute flex ">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      View Details
                    </p>
                  </div>
                </div>
              </div>

{/* akhane mobile version kora hoise */}
              <div className=" border-t text-sm font-normal mt-4 block xl:hidden">
                <div className=" border-2 rounded-md  w-full h-[200px]  shadow-5xl ">
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg  ml-2 w-[50px] h-[50px] mt-2">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                    <div className="flex mt-12 -ml-4">
                      <Image src="/online.svg" width={27} height={27} />
                    </div>
                    <div className="flex flex-col space-y-1  -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px] ">
                      Id: Dp 343463
                    </div>
                  </div>
                  </div>

                
                  <div className=" flex">
                    <p className="pl-4 text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer pr-2">
                      View Details
                    </p>
                  </div>
                  </div>
                  <div className="flex justify-around">
                  <div className="flex flex-col items-center">
                <span className="text-lg ">Class</span>
                <span className="">8</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Gender</span>
                <span className="">Female</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Age</span>
                <span className="">13</span>
                </div>
                  </div>
                 
              
                 
                  <div className="flex flex-col float-left items-center ">
                   
                    <p className="pl-4 text-[#707070] text-[15px] mt-3">
                      Accepted By Robin
                    </p>
                  </div>

                
                </div>
              </div>

              <div className=" items-center border-t text-sm font-normal mt-4 hidden xl:block">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-5xl ">
                  <div className="flex ">
                    <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                    <div className="flex mt-10 -ml-4">
                      <Image src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1  justify-center -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px] ">
                      Id: Dp 343463
                    </div>
                  </div>

                  <span className="text-lg xl:mr-24 xl:ml-28 2xl:ml-40 ">8</span>
                  <span className="text-lg lg:mr-24 xl:ml-16 2xl:ml-[120px] ">Female</span>
                  <span className="text-lg lg:mr-14 xl:ml-14 2xl:ml-24 ml-1">13</span>
                 
                  <div className=" justify-center xl:right-[250px] 2xl:right-[290px] absolute flex md:flex-col ">
                  
                    <p className="pl-4 text-[#707070] text-[15px] flex  justify-center">
                      Accepted By Robin
                    </p>
                  </div>

                  <div className="right-10 absolute flex ">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
{/* akhane mobile design kora hoise */}
              <div className=" border-t text-sm font-normal mt-4 block xl:hidden">
                <div className=" border-2 rounded-md  w-full h-[200px]  shadow-5xl ">
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="rounded-lg  ml-2 w-[50px] h-[50px] mt-2">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                    <div className="flex mt-12 -ml-4">
                      <Image src="/online.svg" width={27} height={27} />
                    </div>
                    <div className="flex flex-col space-y-1  -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px] ">
                      Id: Dp 343463
                    </div>
                  </div>
                  </div>

                
                  <div className=" flex">
                    <p className="pl-4 text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer pr-2">
                      View Details
                    </p>
                  </div>
                  </div>
                  <div className="flex justify-around">
                  <div className="flex flex-col items-center">
                <span className="text-lg ">Class</span>
                <span className="">8</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Gender</span>
                <span className="">Female</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="text-lg ">Age</span>
                <span className="">13</span>
                </div>
                  </div>
                 
              
                 
                  <div className="flex flex-row float-left items-center mt-5 ml-3">
                  <button className="w-[90px]  h-[28px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-md mr-2 shadow-4xl md:shadow-5xl   border-none text-[11px]">
          Accept
        </button>
        <button className="w-[90px]  h-[28px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-md  shadow-2xl drop-shadow-2xl">
          Cancel
        </button>
                  </div>

                
                </div>
              </div>


              <div className=" items-center border-t text-sm font-normal mt-4 hidden xl:block">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-5xl ">
                  <div className="flex ">
                    <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                      <Image src="/person1.svg" width={50} height={50} />
                    </div>
                    <div className="flex mt-10 -ml-4">
                      <Image src="/online.svg" width={27} height={27} />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1  justify-center -mt-1">
                    <div className=" text-[#707070] text-[15px]">
                      Tanisha shima trisna
                    </div>
                    <div className=" text-[#707070] text-[12px] ">
                      Id: Dp 343463
                    </div>
                  </div>

                  <span className="text-lg xl:mr-24 xl:ml-28 2xl:ml-40 ">8</span>
                  <span className="text-lg lg:mr-24 xl:ml-16 2xl:ml-[120px] ">Female</span>
                  <span className="text-lg lg:mr-14 xl:ml-14 2xl:ml-24 ml-1">13</span>
                 
                  <div className=" justify-center xl:right-[210px] 2xl:right-[250px] absolute flex md:flex-row ">
                 
                  <button className="w-[90px]  h-[28px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-md mr-2 shadow-4xl md:shadow-5xl   border-none text-[11px]">
          Accept
        </button>
        <button className="w-[90px]  h-[28px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-md  shadow-2xl drop-shadow-2xl">
          Cancel
        </button>
                 
                  </div>

                  <div className="right-10 absolute flex ">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      View Details
                    </p>
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

export default AdAccepted;

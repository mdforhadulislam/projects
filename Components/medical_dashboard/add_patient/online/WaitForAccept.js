import React from "react";
import Image from "next/image";
import { Wrapper } from "../../../../styles/Scrollbar";
import search from '../../../../Assets/icon/search.svg';
import roundedplus from '../../../../Assets/icon/roundedplus.svg';
import onlineSvg from '../../../../Assets/icon/online.svg'
import person1 from '../../../../Assets/icon/person1.svg'
function WaitForAccept() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-[700px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
      <div className="flex px-3 ml-5 pt-4">
          <p className="pr-8 text-[#DA1E37]">Dutpedia User</p>
          <div className="-ml-[20px] mt-4 bg-slate-300 w-[1px] h-[22px] mr-3">
        </div>
          <p className="">Offline User</p>
        </div>

        <div className="ml-[28px] -mt-[6px] bg-[#DA1E37] w-[106px] h-[1px]">
        </div>
        <div className="ml-[134px] -mt-[1px] bg-slate-300 w-[100px] h-[1px]">
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
              <Image src={search} width={18} height={18} />
            </div>
          </div>
          <div className="absolute md:right-4 right-6 top-[130px] md:top-[85px] mt-3 md:mt-0">
            <button className="flex flex-row md:ml-[230px] md:mr-8 bg-transparent border-none cursor-pointer items-center">
              <p className="capitalize mr-2 text-lg text-[#707070]">
                Add Patient
              </p>
              <div className="flex items-center">
                <Image src={roundedplus} width={40} height={40} />
              </div>
            </button>
          </div>
        </div>


        <div className=" min-h-screen md:mt-14 mt-20">
          <Wrapper className="md:px-4">
            <div className="bg-white px-4 mt-4 md:rounded-md relative z-10 routine-table-body-section ">
              <div className="flex items-center bg-[#DA1E37] rounded-md py-2 md:px-4 text-white font-bold text-md w-full md:w-[100%] mx-auto top-0 sticky z-10">
                <div className="md:mr-24 mr-8 ml-2">
                  <span className="text-lg">Sl No</span>
                </div>
                <div>
                  <span className="text-lg">Patient</span>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-3xl ">
                  <span className="pr-[70px] pl-3 ">01</span>
                  <div className="flex flex-none ">
                  <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                    <Image src={person1} width={50} height={50} />
                  </div>
                  <div className="flex mt-10 -ml-4">
                    <Image src={onlineSvg} width={27} height={27} />
                  </div>
                    </div>
                
                   
                  <div className="flex flex-col space-y-1 items-center justify-center -mt-2">
                    <div className="pl-4 text-[#707070] text-[15px] ">
                      Tanisha shima{" "}
                    </div>
                    <div className="pl-1 text-[#707070] text-[12px]">
                      Id: Dp 343463
                    </div>
                  </div>

               
                 
                  <div className="left-[40px] sm:left-[360px] mt-[80px] ml-6 absolute flex flex-nowrap visible md:invisible">
                    <div className=" text-[#DA1E37] text-[12px] pr-5 ">
                      Request Sent
                    </div>
                    <div className=" text-[#707070] text-[12px]">
                      Wait For Accept
                    </div>
                  </div>
                  <div className="left-2 mt-10 ml-14 absolute flex visible md:invisible">
                    <p className=" text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer ">
                      Cancel Request
                    </p>
                  </div>
                  
                  <div className=" md:-mt-0 justify-center lg:right-[400px] md:right-[210px] absolute flex md:flex-col -space-y-3 invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center">
                      Request Sent
                    </p>
                    <p className="pl-4 text-[#707070] text-[15px] flex  justify-center">
                      Wait For Accept
                    </p>
                  </div>

                  <div className="right-5 absolute flex invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      Cancel Request
                    </p>
                  </div>
                </div>
              </div>

            
              <div className="flex items-center  text-sm font-normal mt-4">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-3xl ">
                  <span className="pr-[70px] pl-3 ">01</span>
                  <div className="flex flex-none ">
                  <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                    <Image src={person1} width={50} height={50} />
                  </div>
                  <div className="flex mt-10 -ml-4">
                    <Image src={onlineSvg} width={27} height={27} />
                  </div>
                    </div>
                
                   
                  <div className="flex flex-col space-y-1 items-center justify-center -mt-2">
                    <div className="pl-4 text-[#707070] text-[15px] ">
                      Tanisha shima{" "}
                    </div>
                    <div className="pl-1 text-[#707070] text-[12px]">
                      Id: Dp 343463
                    </div>
                  </div>

               
                 
                  <div className="left-[40px] sm:left-[360px] mt-[80px] ml-6 absolute flex flex-nowrap visible md:invisible">
                    <div className=" text-[#DA1E37] text-[12px] pr-5 ">
                      Request Sent
                    </div>
                    <div className=" text-[#707070] text-[12px]">
                      Wait For Accept
                    </div>
                  </div>
                  <div className="left-2 mt-10 ml-14 absolute flex visible md:invisible">
                    <p className=" text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer ">
                      Cancel Request
                    </p>
                  </div>
                  
                  <div className=" md:-mt-0 justify-center lg:right-[400px] md:right-[210px] absolute flex md:flex-col -space-y-3 invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center">
                      Request Sent
                    </p>
                    <p className="pl-4 text-[#707070] text-[15px] flex  justify-center">
                      Wait For Accept
                    </p>
                  </div>

                  <div className="right-5 absolute flex invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      Cancel Request
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center  text-sm font-normal mt-4">
                <div className="flex border-2 rounded-md items-center w-full  md:h-20 h-[120px] shadow-3xl ">
                  <span className="pr-[70px] pl-3 ">01</span>
                  <div className="flex flex-none ">
                  <div className="rounded-lg -ml-12 md:ml-5 w-[50px] h-[50px] mt-2">
                    <Image src={person1} width={50} height={50} />
                  </div>
                  <div className="flex mt-10 -ml-4">
                    <Image src={onlineSvg} width={27} height={27} />
                  </div>
                    </div>
                
                   
                  <div className="flex flex-col space-y-1 items-center justify-center -mt-2">
                    <div className="pl-4 text-[#707070] text-[15px] ">
                      Tanisha shima{" "}
                    </div>
                    <div className="pl-1 text-[#707070] text-[12px]">
                      Id: Dp 343463
                    </div>
                  </div>

               
                 
                  <div className="left-[40px] sm:left-[360px] mt-[80px] ml-6 absolute flex flex-nowrap visible md:invisible">
                    <div className=" text-[#DA1E37] text-[12px] pr-5 ">
                      Request Sent
                    </div>
                    <div className=" text-[#707070] text-[12px]">
                      Wait For Accept
                    </div>
                  </div>
                  <div className="left-2 mt-10 ml-14 absolute flex visible md:invisible">
                    <p className=" text-[#DA1E37] text-[12px] flex justify-center underline cursor-pointer ">
                      Cancel Request
                    </p>
                  </div>
                  
                  <div className=" md:-mt-0 justify-center lg:right-[400px] md:right-[210px] absolute flex md:flex-col -space-y-3 invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center">
                      Request Sent
                    </p>
                    <p className="pl-4 text-[#707070] text-[15px] flex  justify-center">
                      Wait For Accept
                    </p>
                  </div>

                  <div className="right-5 absolute flex invisible md:visible">
                    <p className="pl-4 text-[#DA1E37] text-[15px] flex justify-center underline cursor-pointer pr-5">
                      Cancel Request
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

export default WaitForAccept;

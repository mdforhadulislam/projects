import React from "react";
import Image from "next/image";
import { Wrapper } from "../../../../styles/Scrollbar";
import search from '../../../../Assets/icon/search.svg';
import roundedplus from '../../../../Assets/icon/roundedplus.svg';
import onlineSvg from '../../../../Assets/icon/online.svg'
import person1 from '../../../../Assets/icon/person1.svg'
import cross from '../../../../Assets/icon/cross.svg'
function RequestSent() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="absolute -right-5 -mt-9 cursor-pointer">
        <Image src={cross} width={45} height={45} />
      </div>
      <div className="  mt-16 md:h-[600px] h-[1000px] rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md pt-16 ">
        <div className="pt-2 relative text-gray-600">
          <input
            className="h-12 px-5 md:w-[89%] w-[86%] mx-auto rounded-lg text-sm focus:outline-none md:ml-14 ml-5 outline-none border-2 border-solid border-[#ECECEC]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute md:right-[110px] sm:right-[110px] right-12 top-1 mt-[18px]  cursor-pointer">
            <Image src={search} width={18} height={18} />
          </div>
        </div>
        <Wrapper>
          <div className="mx-auto w-[90%] routine-table-body-section pr-3">
            <div className="flex items-center  text-sm font-normal mt-4 ">
              <div className=" flex border-2 rounded-md items-center w-full relative md:h-20 h-28 shadow-3xl pl-2">
                <span className="rounded-lg">
                  <Image src={person1} width={50} height={50} />
                </span>
                <span className="flex mt-10 -ml-4">
                  <Image src={onlineSvg} width={27} height={27} />
                </span>
                <div className="flex flex-col -space-y-3 -mt-2">
                  <p className="pl-4 text-[#707070] text-[15px] ">
                    Tanisha shima{" "}
                  </p>
                  <p className="pl-4 text-[#707070] text-[12px]">
                    Id: Dp 343463
                  </p>
                </div>
                <div className="left-5 mt-20 ml-16 visible sm:invisible absolute flex  cursor-pointer">
                  <p className=" text-[#DA1E37] text-[15px]">Request Send</p>
                </div>
                <div className="sm:right-5 invisible sm:visible absolute flex  cursor-pointer">
                  <p className="pl-[270px] text-[#DA1E37] text-[15px]">
                    Request Send
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center  text-sm font-normal mt-4 ">
              <div className=" flex border-2 rounded-md items-center w-full relative md:h-20 h-28 shadow-3xl pl-2">
                <span className="rounded-lg">
                  <Image src={person1} width={50} height={50} />
                </span>
                <span className="flex mt-10 -ml-4">
                  <Image src={onlineSvg} width={27} height={27} />
                </span>
                <div className="flex flex-col -space-y-3 -mt-2">
                  <p className="pl-4 text-[#707070] text-[15px] ">
                    Tanisha shima{" "}
                  </p>
                  <p className="pl-4 text-[#707070] text-[12px]">
                    Id: Dp 343463
                  </p>
                </div>
                <div className="left-5 mt-20 ml-16 visible sm:invisible absolute flex  cursor-pointer">
                  <p className=" text-[#DA1E37] text-[15px]">Request Send</p>
                </div>
                <div className="sm:right-5 invisible sm:visible absolute flex  cursor-pointer">
                  <p className="pl-[270px] text-[#DA1E37] text-[15px]">
                    Request Send
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center  text-sm font-normal mt-4 ">
              <div className=" flex border-2 rounded-md items-center w-full relative md:h-20 h-28 shadow-3xl pl-2">
                <span className="rounded-lg">
                  <Image src={person1} width={50} height={50} />
                </span>
                <span className="flex mt-10 -ml-4">
                  <Image src={onlineSvg} width={27} height={27} />
                </span>
                <div className="flex flex-col -space-y-3 -mt-2">
                  <p className="pl-4 text-[#707070] text-[15px] ">
                    Tanisha shima{" "}
                  </p>
                  <p className="pl-4 text-[#707070] text-[12px]">
                    Id: Dp 343463
                  </p>
                </div>
                <div className="left-5 mt-20 ml-16 visible sm:invisible absolute flex  cursor-pointer">
                  <p className=" text-[#DA1E37] text-[15px]">Request Send</p>
                </div>
                <div className="sm:right-5 invisible sm:visible absolute flex  cursor-pointer">
                  <p className="pl-[270px] text-[#DA1E37] text-[15px]">
                    Request Send
                  </p>
                </div>
              </div>
            </div>

         
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default RequestSent;

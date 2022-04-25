import React from "react";
import Image from "next/image";
function StdOnlineAcCancel() {
  return (
    <div className="container w-[90%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
      <div className="ml-10 pt-10 cursor-pointer">
        <Image src="/leftarrow.svg" alt="arrow" width={25} height={25} />
      </div>
      <h2 className="text-center -mt-7 text-[#313131]">Dhaka City College</h2>
      <div className="flex items-center  font-normal mt-4 w-[80%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="relative flex items-center">
            <div className="w-[80px] h-[80px]">
              <Image src="/person1.svg" alt="arrow" width={80} height={80} />
            </div>

            <div className="absolute -bottom-[12px] -right-[12px] w-7 h-7">
              <Image src="/online.svg" alt="arrow" width={33} height={33} />
            </div>
          </div>
          <div className="flex w-[200px]">
            <div className="-space-y-3  md:ml-4 md:-mt-3 ">
              <p className="md:pl-4 pl-1 text-[#707070] text-[18px]">
                Tanisha shima{" "}
              </p>
              <p className="md:pl-4 pl-1 text-[#707070] text-[12px] ">
                Id: Dp 3434
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end md:flex-row w-full space-y-3 -mt-8">
          <div className="flex shadow-3xl rounded-full cursor-pointer mr-4 ml-4 w-10 md:w-18">
            <Image src="/shild.svg" alt="arrow" width={60} height={60} />
          </div>
          <div className="right-5  flex shadow-3xl rounded-full cursor-pointer mr-3 w-10 md:w-18">
            <Image src="/send.svg" alt="arrow" width={60} height={60} />
          </div>
        </div>
      </div>
      <div className="flex  justify-end cursor-pointer md:w-[80%] w-[95%] mx-auto ">
        <Image src="/edit.svg" alt="arrow" width={50} height={50} />
      </div>

      <h3 className="text-center p-2 text-white bg-[#DA1E37]">
        Student Information
      </h3>
      <div className="w-[95%] mx-auto h-auto">
        <div className="flex flex-row space-x-11 lg:space-x-20 items-center">
          <p className="md:w-[200px] md:text-[20px] font-medium">
            Student Name:
          </p>
          <p className="">Nourin Nishat</p>
        </div>

        <div className="flex flex-col md:flex-row space-x-5 md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
          <div className="flex items-center">
            <p className="lg:w-[200px] lg:text-[20px] font-medium">Gender:</p>
            <div className="ml-24 lg:w-[200px] text-gray-700 xl:ml-20">
              <p>Female</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="md:w-[200px] md:text-[20px] -ml-5 font-medium">
              Blood Group:
            </p>
            <div className="ml-20 md:w-[200px]  flex flex-row md:-ml-10 items-center">
              <p>O+</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-x-5 md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
          <div className="flex items-center">
            <p className="lg:w-[200px] lg:text-[20px] font-medium">
              Date Of Birth:
            </p>
            <div className="ml-14 lg:w-[200px] text-gray-700 xl:ml-20">
              <p>12/09/2000</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="md:w-[200px] md:text-[20px] -ml-5 font-medium">
              Religion:
            </p>
            <div className="ml-24 md:w-[200px]  flex flex-row md:-ml-10 items-center">
              <p>Islam</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] font-medium">Nationality:</p>
          <p className="-ml-10">Bangladeshi</p>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] font-medium">Father Name:</p>
          <p className="-ml-10">Md Julfiqer Ali</p>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] font-medium">Mother Name:</p>
          <p className="-ml-10">Tamannah Tanjin</p>
        </div>

        <div className="flex flex-col md:flex-row space-x-5 md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
          <div className="flex items-center">
            <p className="lg:w-[200px] lg:text-[20px] font-medium">
              Mobile No:
            </p>
            <div className="ml-20 lg:w-[200px] text-gray-700 xl:ml-20">
              <p>01455-5656665</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="md:w-[200px] md:text-[20px] -ml-5 font-medium">
              Email:
            </p>
            <div className="ml-28 md:w-[200px]  flex flex-row md:-ml-10 items-center">
              <p>email@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] font-medium">
            Guardian Name:
          </p>
          <p className="-ml-10">Masud Reja</p>
        </div>
        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[18px] text-[15px] font-medium">
            Relation With Guardian:
          </p>
          <p className="-ml-8">Brother</p>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] text-[15px] font-medium">
            Present Address:
          </p>
          <p className="-ml-8">Narayanganj, Dhaka</p>
        </div>

        <div className="flex flex-row md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] text-[15px] font-medium">
            Permanent Address:
          </p>
          <p className="-ml-8">Narayanganj, Dhaka</p>
        </div>

        {/* here one thing you need to collect from forhad sir */}
        {/* <p>Student Document:</p> */}
        {/* <div className="flex flex-row justify-between">
          <div className="flex cursor-pointer">
            <Image
              className="blur-lg "
              alt="arrow"
              src="/passport.svg"
              width={335}
              height={335}
            />
            <div className="absolute">
              <Image
                className="blur-lg pl-30"
                alt="arrow"
                src="/transparent.svg"
                width={335}
                height={335}
              />
            </div>
            <p className="absolute left-[180px] mt-40 z-10 text-[20px] text-white">
              Passport
            </p>
          </div>

          <div className="flex cursor-pointer">
            <Image
              className="blur-lg "
              alt="arrow"
              src="/birth.svg"
              width={335}
              height={335}
            />
            <div className="absolute">
              <Image
                className="blur-lg pl-30"
                alt="arrow"
                src="/transparent.svg"
                width={335}
                height={335}
              />
            </div>
            <p className="absolute left-[620px] mt-40 z-10 text-[20px] text-white">
              Birth Certificate
            </p>
          </div>
          <div className="flex cursor-pointer">
            <Image
              className="blur-lg "
              alt="arrow"
              src="/passport.svg"
              width={335}
              height={335}
            />
            <div className="absolute">
              <Image
                className="blur-lg pl-30"
                alt="arrow"
                src="/transparent.svg"
                width={335}
                height={335}
              />
            </div>
            <p className="absolute right-[110px] mt-40 z-10 text-[20px] text-white">
              Educational Certificate
            </p>
          </div>
        </div> */}

        <div className="flex flex-col">
          <div className="flex  md:space-x-20 items-center">
            <p className="w-[200px] md:text-[20px] font-medium text-[#313131]">
              Payment Amount
            </p>
            <p className="w-[200px] md:text-[20px] font-medium text-[#666666]">
              2500
            </p>
        
          </div>

          <div className="flex md:space-x-20 items-center">
          <p className="w-[200px] md:text-[20px] font-medium text-[#313131]">
              Payment Status
            </p>
            <div className="flex items-center">
              <span>
                <Image
                  src="/greentik.svg"
                  alt="arrow"
                  width={25}
                  height={25}
                />
              </span>
              <p className="w-[200px] text-[16px] font-medium">Paid</p>
              <p className="underline -ml-36 text-[14px]">View Receipt</p>
            </div>
          </div>
        </div>

        <p className="w-[200px] text-[18px] font-medium text-[#313131]">
          Admission Request For{" "}
        </p>
        <p className="w-[200px] text-[16px] font-normal text-[#666666]">
          Class Eight
        </p>
        <p className="w-[400px] text-[16px] font-medium text-[#666666]">
          Admitted Date: 24/09/2021{" "}
        </p>

        <p className="w-[200px] text-[16px] font-normal text-[#666666]">
          Class : Eight
        </p>
        <p className="w-[200px] text-[16px] font-normal text-[#666666]">
          Section : A
        </p>
        <div className="flex justify-end pb-5 md:mr-[50px] mr-0">
          <button className="w-[120px] lg:w-[130px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[11px]">
            Accept
          </button>
          <button className="w-[120px] lg:w-[130px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-4xl ">
            Cancel
          </button>
        </div>
      </div>
     
    </div>
  </div>
  );
}

export default StdOnlineAcCancel;

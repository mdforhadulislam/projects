import Image from "next/image";
import React, { useState } from "react";

function RegFileChose() {
  let [clickBox, setClickBox] = useState(false);
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md pt-16 ">
        <div className="ml-10 cursor-pointer">
          <Image src="/leftarrow.svg" width={35} height={35} />
        </div>
        <div className="w-[210px] h-[210px] border-2 border-solid border-[#Da1E37] mx-auto rounded-2xl shadow-4xl md:shadow-5xl bg-white drop-shadow-md relative">
          <div className="float-right m-4 rounded-full shadow-4xl md:shadow-4xl bg-white w-6 h-6 text-center p-1 cursor-pointer">
            <Image src="/camera.svg" width={20} height={20} />
          </div>
          <div className="  absolute ml-4 mt-10">
            <Image src="/person.svg" width={180} height={150} />
          </div>
          <p className="pl-10 absolute bottom-0 text-[12px] text-[#666666]">
            Upload Photo 2Mb At Lest{" "}
          </p>
        </div>

        <div className="mx-auto md:w-[90%] w-[95%] h-auto ">
          <p className="text-center bg-[#Da1E37] p-2 mr-1 text-white text-lg">
            Student Information
          </p>
          <div className="flex flex-col md:flex-row  lg:space-x-10 xl:space-x-20  md:items-center">
            <p className="md:w-[200px] text-[20px] font-medium">Student Name</p>
            <input
              type="text"
              className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:w-[200px] w-[95%]  outline-none pl-3"
            />
          </div>
          <div className="flex flex-row space-x-5 md:space-x-16 lg:space-x-20 xl:space-x-44 md:items-center items-start">
            <div className="flex flex-col md:flex-row md:items-center ">
              <p className="lg:w-[200px] lg:text-[20px] font-medium">Gender</p>
              <div className="relative h-10 lg:w-[200px] text-gray-700 outline-none xl:ml-20">
                <select
                  className="lg:w-[200px] w-[130px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent"
                  placeholder="Regular input"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
                  <Image src="/downarrow.svg" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:w-[200px] md:text-[20px] font-medium">
                {" "}
                Blood Group
              </p>
              <div className="relative h-10 md:w-[200px] text-gray-700 outline-none flex flex-row lg:-ml-10">
                <select
                  className="md:w-[200px] w-[130px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent"
                  placeholder="Regular input"
                >
                  <option>A+</option>
                  <option>A+</option>
                  <option>A+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
                  <Image src="/downarrow.svg" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row lg:space-x-20 md:space-x-1 items-center mt-3 md:mt-0">
            <div className="flex flex-col md:flex-row">
              <p className="md:w-[200px] md:text-[20px] font-medium pr-2 md:pr-0">
                Date Of Birth
              </p>
              <div className="flex lg:ml-20">
                <input
                  className=" flex rounded-l-lg h-10 w-[150px] pl-3 justify-center items-center border-2 border-[#DA1E37]"
                  placeholder="15th Aug. 2021"
                />
                <div className="flex justify-center items-center w-10 h-[38px] bg-[#DA1E37]  rounded-r-lg p-1">
                  <Image
                    src="/calendar.svg"
                    className="bg-[#DA1E37] "
                    width={30}
                    height={18}
                    alt="calender"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
            <div className="flex flex-col md:flex-row md:items-center ">
              <p className="lg:w-[200px] lg:text-[20px] font-medium">
                Nationality
              </p>
              <div className="relative h-10  lg:w-[200px] text-gray-700 outline-none xl:ml-20">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:w-[200px] w-[280px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:w-[200px] md:text-[20px] font-medium -ml-[230px] md:ml-0">
                Religion
              </p>
              <div className="relative h-10 md:w-[200px] text-gray-700 outline-none flex flex-row md:-ml-10">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:md:w-[200px] w-[280px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  lg:space-x-10 xl:space-x-20  md:items-center">
            <p className="md:w-[200px] text-[20px] font-medium">Father Name:</p>
            <input
              type="text"
              className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:w-[200px] w-[95%]  outline-none pl-3"
              placeholder="Md Julfiqer Ali"
            />
          </div>

          <div className="flex flex-col md:flex-row  lg:space-x-10 xl:space-x-20  md:items-center">
            <p className="md:w-[200px] text-[20px] font-medium">Mother Name:</p>
            <input
              type="text"
              className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:w-[200px] w-[95%]  outline-none pl-3"
              placeholder="Md Julfiqer Ali"
            />
          </div>

          <div className="flex flex-row space-x-5 md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
            <div className="flex flex-col md:flex-row md:items-center ">
              <p className="lg:w-[200px] lg:text-[20px] font-medium">
                Mobile( Require ):
              </p>
              <div className="relative h-10 lg:w-[200px] text-gray-700 outline-none xl:ml-20">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:w-[200px] md:text-[20px] font-medium">
                Email(Optional):
              </p>
              <div className="relative h-10 md:w-[200px] text-gray-700 outline-none flex flex-row md:-ml-10">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  lg:space-x-10 xl:space-x-20  md:items-center">
            <p className="md:w-[200px] text-[20px] font-medium">
              Guardian Name:
            </p>
            <input
              type="text"
              className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:w-[200px] w-[95%]  outline-none pl-3"
              placeholder="Md Julfiqer Ali"
            />
          </div>

          <div className="flex flex-row space-x-5 md:space-x-10 lg:space-x-20 xl:space-x-44 md:items-center items-start">
            <div className="flex flex-col md:flex-row md:items-center ">
              <p className="lg:w-[200px] w-[150px] lg:text-[18px] text-[14px] mt-5 font-normal">
                {" "}
                Relation With Guardian:
              </p>
              <div className="relative h-10 lg:w-[200px] text-gray-700 outline-none xl:ml-20">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:w-[200px] md:text-[20px] font-medium">
                {" "}
                Mobile(Require):
              </p>
              <div className="relative h-10 md:w-[200px] text-gray-700 outline-none flex flex-row md:-ml-10">
                <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          <p className="text-center bg-[#Da1E37] p-2 mr-1 text-white text-lg">
            Address
          </p>
          <p>Present Address:</p>
          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col md:mt-10">
              <label className=" mb-2 text-[#666666]">Region</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:mt-10">
              <label className=" mb-2 text-[#666666]">City</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col mt-5">
              <label className=" mb-2 text-[#666666]">Area</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label className=" mb-2 text-[#666666]">Address</label>
              <div className="mb-3 xl:w-[300px]">
              <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[34px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          <p className="">Permanent Address</p>
          {/* <div className="ml-[730px] -mt-10">
              <MemberCheckbox
                title={"Same"}
                name={"Same"}
                value={clickBox}
                actions={(value) => {
                  setClickBox(clickBox ? false : true);
                }}
              />
            </div> */}

          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col md:mt-10">
              <label className=" mb-2 text-[#666666]">Region</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:mt-10">
              <label className=" mb-2 text-[#666666]">City</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:justify-around">
            <div className="flex flex-col mt-5">
              <label className=" mb-2 text-[#666666]">Area</label>
              <div className="mb-3 xl:w-[300px]">
                <select
                  className="form-select appearance-none block w-[140px] md:w-[200px] px-3 py-1.5 text-base font-normal text-gray-700 bg-[#f5f5f5] bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label className=" mb-2 text-[#666666]">Address</label>
              <div className="mb-3 xl:w-[300px]">
              <input
                  type="text"
                  className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[34px] md:md:w-[200px] w-[130px]  outline-none pl-3"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          <p className="text-center bg-[#Da1E37] p-2 mr-1 text-white text-lg">
            Addmission Documents
          </p>

          <div className="md:w-[70%] w-[95%] mx-auto  pb-4">
            <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0">
              <div className="flex items-center md:w-[400px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">National Id</p>
              </div>
              <div className="flex items-center md:w-[200px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">Birth Certificate</p>
              </div>
            </div>

            <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0">
              <div className="flex items-center md:w-[400px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">National Id</p>
              </div>
              <div className="flex items-center md:w-[200px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">Birth Certificate</p>
              </div>
            </div>

            <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0">
              <div className="flex items-center md:w-[400px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">National Id</p>
              </div>
              <div className="flex items-center md:w-[200px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">Birth Certificate</p>
              </div>
            </div>

            <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0">
              <div className="flex items-center md:w-[400px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">National Id</p>
              </div>
              <div className="flex items-center md:w-[200px] w-[150px]">
                <div className="flex-col w-5 h-5">
                  <Image src="/dot.svg" alt="dot" width={10} height={10} />
                </div>
                <p className="ml-3">Birth Certificate</p>
              </div>
            </div>
          </div>

          <h2 className="font-medium">Upload Document</h2>
          <input
            type="text"
            className=" bg-[#F5F5F5] rounded-md border-solid border-[#CFCFCF] h-[38px] w-[140px] md:w-[200px]   outline-none pl-3 mr-3"
            placeholder="Enter Document Name...."
          />
          <button className="w-[100px] lg:w-[150px] border-l-0 h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-md mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[11px]">
            Choose File
          </button>
          <p className="text-center bg-[#Da1E37] p-2 mr-1 text-white text-lg mt-10">
            Payment
          </p>

          <div className="flex flex-row space-x-6 md:space-x-20">
            <div className="flex flex-col">
              <p className="md:w-[200px] md:text-[20px] font-medium">
                Payment Ammount
              </p>
              <div className="relative inline-block w-[140px] md:w-[200px] text-gray-700 outline-none ">
                <div className="flex">
                  <input
                    type="text"
                    id="website-admin"
                    className="md:px-4 md:py-3 px-2 py-2 rounded-none rounded-l-md placeholder-blueGray-300 text-blueGray-600 relative bg-white text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
                    placeholder="9,0000,00৳"
                  />

                  <span className="inline-flex flex-col justify-center items-center px-3 text-white rounded-r-md border border-l-0 bg-[#E22424]">
                    <svg
                      className="cursor-pointer"
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500244 7.53998L6.55298 1.48724L12.6057 7.53998"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="my-1.5"
                      width="24"
                      height="2"
                      viewBox="0 0 24 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.013H23"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>

                    <svg
                      className="cursor-pointer"
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500244 1.46024L6.55298 7.51297L12.6057 1.46024"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className=" w-[140px] md:w-[200px] md:text-[20px] font-medium">
                Payment Status
              </p>
              <div className="relative inline-block md:w-[200px] text-gray-700 outline-none ">
                <select
                  className="md:w-[200px] w-[140px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent"
                  placeholder="Regular input"
                >
                  <option>Paid</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
                  <Image
                    src="/downarrow.svg"
                    alt="dot"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-6 md:space-x-10">
            <div className="flex flex-col">
              <p className="md:w-[240px] md:text-[20px] text-[14px] mt-5 md:mt-3 font-medium">
                Admission Request For
              </p>
              <div className="relative inline-block w-[140px] md:w-[200px] text-gray-700 outline-none ">
                <select
                  className="md:w-[200px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent"
                  placeholder="Regular input"
                >
                  <option>Class eight</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
                  <Image
                    src="/downarrow.svg"
                    alt="dot"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className=" w-[140px] md:w-[200px] md:text-[20px] font-medium">
                Section
              </p>
              <div className="relative inline-block md:w-[200px] text-gray-700 outline-none ">
                <select
                  className="md:w-[200px] w-[140px] h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-none border-[#Da1E37] border-solid bg-transparent"
                  placeholder="Regular input"
                >
                  <option>eight</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-[#Da1E37] rounded-r-lg">
                  <Image
                    src="/downarrow.svg"
                    alt="dot"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pb-7 pt-4">
            <button className="w-[120px] lg:w-[150px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-4xl md:shadow-5xl  drop-shadow-md border-none text-[11px]">
              Confirm
            </button>
            <button className="w-[100px] lg:w-[150px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-4xl ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegFileChose;

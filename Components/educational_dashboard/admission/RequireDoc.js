import React from "react";
import Image from "next/image";
import leftarrow from '../../../Assets/icon/leftarrow.svg'
import documents from '../../../Assets/icon/documents.svg'
import edit from '../../../Assets/icon/edit.svg'
import dot from '../../../Assets/icon/dot.svg'
function RequireDoc() {
  return (
    <div className="container w-[90%] mx-auto relative ">
      <div className="  mt-16 h-auto rounded-2xl shadow-3xl md:shadow-3xl bg-white drop-shadow-md pb-5">
        <div className="flex pt-12 md:ml-10 ml-5 ">
          <Image src={leftarrow} alt="arrow" width={25} height={25} />
        </div>
        <div className="flex justify-center">
          <Image src={documents} alt="arrow" width={305} height={155} />
        </div>
        <p className="text-center">Admission Require Documents</p>

        <div className="flex p-2 justify-end md:mr-[200px] mb-2 cursor-pointer">
          <Image src={edit} alt="arrow" width={55} height={55} />
        </div>

        <div className="md:w-[70%] w-[95%] mx-auto  rounded-xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md ">

          <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0 py-4">
            <div className="flex items-center md:w-[400px] w-[150px]">
              <div className="flex-col w-5 h-5">
                <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">National Id</p>
            </div>
            <div className="flex items-center md:w-[200px] w-[150px]">
              <div className="flex-col w-5 h-5">
                   <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">Birth Certificate</p>
            </div>
          </div>

          <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0 py-4">
            <div className="flex items-center md:w-[400px] w-[150px]">
              <div className="flex-col w-5 h-5">
                <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">National Id</p>
            </div>
            <div className="flex items-center md:w-[200px] w-[150px]">
              <div className="flex-col w-5 h-5">
                   <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">Birth Certificate</p>
            </div>
          </div>

          <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0 py-4">
            <div className="flex items-center md:w-[400px] w-[150px]">
              <div className="flex-col w-5 h-5">
                <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">National Id</p>
            </div>
            <div className="flex items-center md:w-[200px] w-[150px]">
              <div className="flex-col w-5 h-5">
                   <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">Birth Certificate</p>
            </div>
          </div>

          <div className="flex flex-col ml-10 md:flex-row md:justify-around px-4 md:px-0 py-4">
            <div className="flex items-center md:w-[400px] w-[150px]">
              <div className="flex-col w-5 h-5">
                <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">National Id</p>
            </div>
            <div className="flex items-center md:w-[200px] w-[150px]">
              <div className="flex-col w-5 h-5">
                   <Image src={dot} alt="arrow" width={10} height={10} />
              </div>
              <p className="ml-3">Birth Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequireDoc;

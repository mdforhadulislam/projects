import React from "react";

function CancelPop() {
  return (
    <div className="container w-[90%] md:w-[40%] mx-auto relative ">
      <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
        <h2 className="text-center font-normal">Do You Really Want To Cancel?</h2>

        <div className="mt-8 flex justify-center items-center">
          <button className="w-[120px] lg:w-[130px] h-[45px] bg-[#DA1E37] text-white cursor-pointer outline-none rounded-lg mr-5 shadow-3xl md:shadow-5xl  drop-shadow-md border-none text-[11px]">
            Yes
          </button>
          <button className="w-[120px] lg:w-[130px] h-[45px] border-2 border-solid border-[#DA1E37] text-[#DA1E37] bg-transparent cursor-pointer outline-none  rounded-lg mr-5 shadow-3xl ">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelPop;

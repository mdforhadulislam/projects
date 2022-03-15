import React from 'react';

function AttendenceListHeader() {
    return (
        <div
            className="w-full h-auto flex align-middle py-[10px] px-[27px] bg-[#da1e37] text-white rounded-[6.5px]"
            style={{ alignItems: 'center' }}>
            <ul className=" list-none w-full flex justify-between h-auto m-0">
                <li className="text-[16px] text-center w-[140px] pl-[12px]">Employee Name</li>
                <li className="text-[16px] text-center w-[130px] pl-[10px]">Starting Time</li>
                <li className="text-[16px] text-center w-[125px] pl-[15px]">Ending Time</li>
                <li className="text-[16px] text-center w-[130px] pl-[18px]">Break Time</li>
                <li className="text-[16px] text-right w-[140px] pr-[15px]">Today Status</li>
                <li className="text-[16px] text-center w-[180px]">Today Overtime</li>
                <li className="text-[16px] text-left w-[125px]">Total Hour</li>
            </ul>
        </div>
    );
}

export default AttendenceListHeader;

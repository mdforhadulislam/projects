import Image from 'next/image';
import React from 'react';
import ThreeDot from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';

function SingleAttendenceBox() {
    return (
        <div
            className="w-full h-auto mb-3 shadow-3xl py-[12px] px-[10px] rounded-[6px]"
            // style={{ marginBottom: '14px' }}
        >
            <ul
                className="list-none p-0 m-0 flex justify-between align-middle"
                style={{ alignItems: 'center' }}>
                <li className="text-[#313131] text-[18px] w-[110px]  text-center">20/03/2022</li>
                <li className="text-[#313131] text-[18px] w-[150px] text-center">11.00 PM</li>
                <li className="text-[#313131] text-[18px] w-[150px] text-center">11.00 PM</li>
                <li className="text-[#313131] text-[18px] w-[150px] text-center">1 Hour</li>
                <li className="text-[#313131] text-[18px] w-[200px] text-center">
                    Present
                    {/* Absent */}
                    {/* Company Holiday */}
                    {/* Leave For Holiday */}
                </li>
                <li className="text-[#313131] text-[18px] w-[100px] text-center">2 Hour</li>
                <li className="text-[#313131] text-[18px] w-[100px] text-center">12 Hour</li>
                <li className="">
                    <Image src={ThreeDot} alt={'ThreeDot'} />
                </li>
            </ul>
        </div>
    );
}

export default SingleAttendenceBox;

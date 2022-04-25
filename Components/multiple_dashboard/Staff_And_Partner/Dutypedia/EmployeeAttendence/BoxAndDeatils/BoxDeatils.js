import Image from 'next/image';
import React, { useState } from 'react';
import DownIcon from '../../../../../../Assets/images/dashboard/downIcon.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import UserImage from '../../../../../../Assets/images/dashboard/Group 7167.png';
import ThreeDot from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';

function BoxDeatils({
    setAttendenceEditPopup,
    setAttendenceDeletePopup,
    setAttendenceMemberDeatils
}) {
    const [isOption, setIsOption] = useState(false);

    return (
        <div className="w-full h-auto py-[6px] px-[8px] shadow-3xl mb-[13px] rounded-[5px] ">
            <div
                className="w-full h-auto flex align-middle text-[16px]"
                style={{ alignItems: 'center' }}>
                <div className="w-[215px] h-auto flex">
                    <div className="w-[70px] h-[50px] relative">
                        <Image
                            className="rounded-[5px]"
                            width={54}
                            height={45}
                            src={UserImage}
                            alt={'UserImage'}
                        />
                        <div className="w-[20px] h-[20px] absolute bottom-[2px] right-[8px]">
                            <DutyPreIcon width={'20'} height={'20'} />
                        </div>
                    </div>
                    <div className="w-auto h-auto">
                        <div className="text-[18px] text-[#313131]">Maliha Moliy</div>
                        <div className="text-[15px] text-[#666666]">Id :8938274</div>
                    </div>
                </div>

                <div className="w-[120px] text-center">
                    <span>11:00 AM</span>
                </div>

                <div className="w-[170px] text-center">
                    <span>10:00 PM</span>
                </div>

                <div className="w-[135px] text-center">
                    <span>01:00 Hour</span>
                </div>

                <div
                    className="w-[205px] text-center flex justify-evenly align-middle"
                    style={{ alignItems: 'center' }}>
                    <span>Company Holiday</span>
                    <Image className="cursor-pointer" src={DownIcon} alt={'DownIcon'} />
                </div>

                <div className="w-[120px] text-center">
                    <span>2 Hours</span>
                </div>

                <div className="w-[150px] text-center">
                    <span>10 Hours</span>
                </div>

                <div className="w-[18px] flex justify-end relative cursor-pointer">
                    <Image
                        onClick={() => {
                            isOption ? setIsOption(false) : setIsOption(true);
                        }}
                        src={ThreeDot}
                        alt={'ThreeDot'}
                    />
                    {isOption && (
                        <ul className=" list-none w-[120px] h-auto absolute bg-white shadow-3xl rounded-[5px] top-0 right-full p-0 m-0">
                            <li
                                className="py-[5px] px-[8px] hover:bg-[#da1e37] text-[#313131] hover:text-white rounded-[5px] cursor-pointer"
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceEditPopup(true);
                                }}>
                                Edit
                            </li>
                            <li
                                className="py-[5px] px-[8px] hover:bg-[#da1e37]  text-[#313131] hover:text-white rounded-[5px] cursor-pointer"
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceDeletePopup(true);
                                }}>
                                Delete
                            </li>
                            <li
                                className="py-[5px] px-[8px] hover:bg-[#da1e37]   text-[#313131] hover:text-white rounded-[5px] cursor-pointer"
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceMemberDeatils(true);
                                }}>
                                View Deatils
                            </li>
                        </ul>
                    )}
                </div>

                {/** */}
            </div>
        </div>
    );
}

export default React.memo(BoxDeatils);

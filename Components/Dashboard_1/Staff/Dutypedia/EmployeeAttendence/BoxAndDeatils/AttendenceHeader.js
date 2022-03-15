import Image from 'next/image';
import React from 'react';
import CalenderIcon from '../../../../../../Assets/images/dashboard/CalenderIcon';
import QrImage from '../../../../../../Assets/images/dashboard/Group 7167.png';
import ThreeDot from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { SearchBox } from '../../../../../../Utilities/Utilites';
import CreateAttendenceButton from './CreateAttendenceButton';

function AttendenceHeader({ timeSetPopup, selectedEmployee }) {
    return (
        <>
            <CreateAttendenceButton
                timeSetPopup={timeSetPopup}
                selectedEmployee={selectedEmployee}
            />

            <div className="w-[530px] h-auto pb-[8px]">
                <SearchBox
                    placeholder={'Search By  Name Or Id......'}
                    style={{
                        background: '#f5f5f5',
                        border: '1px solid #ececec',
                        padding: '10px',
                        borderRadius: '6px'
                    }}
                    iconStyle={{ top: '10px' }}
                />
            </div>

            <div className="w-full h-auto flex align-middle justify-between pt-[33px] pb-[19px]">
                <div
                    className="w-[240px] h-auto border-[1px] border-[#da1e37] rounded-[6.5px]"
                    style={{ border: '1px solid #da1e37' }}>
                    <div
                        className="w-full h-[52px] flex align-middle"
                        style={{ alignItems: 'center' }}>
                        <div
                            className="w-[60px] h-[52px] bg-[#da1e37] flex align-middle justify-center rounded-l-[5px] p-[15px]"
                            style={{ alignItems: 'center' }}>
                            <CalenderIcon />
                        </div>
                        <div
                            className="w-full h-auto flex align-middle justify-between px-[9px]"
                            style={{ alignItems: 'center' }}>
                            <div className="calender__year__changeing__left"></div>
                            <div className="text-[15px] text-[#313131]">Sep 13th,2021</div>
                            <div className="calender__year__changeing__right"></div>
                        </div>
                    </div>
                </div>

                <div className="w-[170px] h-auto flex align-bottom justify-between">
                    <div className="w-[140px] h-auto relative">
                        <div className="absolute top-[-50%] text-[12px]">
                            Attendence With Qr Code
                        </div>
                        <div className="w-[50px] h-[50px] m-auto">
                            <Image width={50} height={50} src={QrImage} alt="" />
                        </div>
                    </div>
                    <div className="w-[27px] h-[27px] mt-[13.5px] cursor-pointer">
                        <Image width={27} height={27} src={ThreeDot} alt="Three Dot" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AttendenceHeader;

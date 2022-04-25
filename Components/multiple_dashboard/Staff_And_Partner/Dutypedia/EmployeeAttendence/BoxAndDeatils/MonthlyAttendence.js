import React, { useState } from 'react';
import styled from 'styled-components';
import DuballDownIcon from '../../../../../../Assets/images/dashboard/DuballDownIcon';
import SingleAttendenceBox from './SingleAttendenceBox';

function MonthlyAttendence() {
    const [isTrue, setIsTrue] = useState(false);
    const handleDropDown = () => {
        setIsTrue(!isTrue);
    };

    return (
        <div className="w-full shadow-3xl h-auto rounded-[20px] mb-5 pb-2 relative">
            {/* header and deatils  */}
            <div className="w-full h-auto">
                <div className="w-full text-[24px] font-medium text-white bg-[#da1e37] rounded-t-[20px] text-center py-[5px]">
                    January
                </div>
                <div className="w-full h-auto p-[15px]">
                    <ul className=" list-none flex align-middle justify-between m-0 p-0">
                        <li className="w-full">
                            <span className=" w-full block text-center text-[18px] my-[8px] text-[#313131]">
                                Total Present:
                            </span>
                            <span className="w-full block text-center mb-[8px] text-[#666666] text-[16px]">
                                23 days
                            </span>
                        </li>

                        <li className="w-full">
                            <span className="w-full block text-center text-[18px]  my-[8px] text-[#313131]">
                                Total Absent:
                            </span>
                            <span className="w-full block text-center mb-[8px] text-[#666666] text-[16px]">
                                4 days
                            </span>
                        </li>

                        <li className="w-full">
                            <span className="w-full block text-center text-[18px] my-[8px] text-[#313131]">
                                Total Basic Time:
                            </span>
                            <span className="w-full block text-center mb-[8px] text-[#666666] text-[16px]">
                                220 hour
                            </span>
                        </li>

                        <li className="w-full">
                            <span className="w-full block text-center text-[18px] my-[8px] text-[#313131]">
                                Total Overtime:
                            </span>
                            <span className="w-full block text-center mb-[8px] text-[#666666] text-[16px]">
                                60 hours
                            </span>
                        </li>

                        <li className="w-full  pr-[30px] ">
                            <span className="w-full block text-center text-[18px] my-[8px]  text-[#313131]">
                                Total Leave For Holiday:
                            </span>
                            <span className="w-full block text-center mb-[8px] text-[#666666] text-[16px]">
                                3days
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* header  */}
                    <div className="w-full py-[5px] pb-[20px] px-[20px]">
                        <div className="w-full h-auto mb-[12px] bg-[#da1e37]  px-[45px] py-[10px] rounded-[6px] shadow-3xl">
                            <ul className="list-none p-0 m-0 flex justify-between align-middle">
                                <li className="text-white text-[18px] w-[40px]">Date</li>
                                <li className="text-white text-[18px] w-[125px] text-center ">
                                    Starting Time
                                </li>
                                <li className="text-white text-[18px] w-[105px]">Ending Time</li>
                                <li className="text-white text-[18px] w-[150px]">Break Time</li>
                                <li className="text-white text-[18px] w-[90px]">Status</li>
                                <li className="text-white text-[18px] w-[55px]">Overtime</li>
                                <li className="text-white text-[18px] w-[85px]">Total Hour</li>
                            </ul>
                        </div>

                        <div style={{ transition: 'all 3s' }}>
                            <SingleAttendenceBox />
                            <SingleAttendenceBox />
                            <SingleAttendenceBox />
                            <SingleAttendenceBox />

                            {isTrue && (
                                <>
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                    <SingleAttendenceBox />
                                </>
                            )}
                        </div>

                        {/*  */}
                    </div>
                </div>

                {/*  */}
            </div>
            <div className=" absolute bottom-[-35px] left-[47%]">
                <LastIconBox isTrue={isTrue} onClick={handleDropDown}>
                    <DuballDownIcon width={'55'} />
                </LastIconBox>
            </div>
        </div>
    );
}

export default MonthlyAttendence;

const LastIconBox = styled('div')`
    position: absolute;
    bottom: -5%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    border-radius: 50%;
    transition: 0.35s ease-in-out;
    transform: rotate(0deg);
    ${({ isTrue }) =>
        isTrue &&
        `
        transition:  .35s ease-in-out;
        transform: rotate(180deg);;
  `}
`;

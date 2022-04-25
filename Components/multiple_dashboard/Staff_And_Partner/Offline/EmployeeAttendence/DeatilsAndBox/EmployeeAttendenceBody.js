import React from 'react';
import CalenderIcon from '../../../../../../Assets/images/dashboard/CalenderIcon';
import { SetDate } from '../../../../../../Utilities/Utilites';
import {
    default as OfflineSingleEmployeeBox,
    default as SingleEmployeeBox
} from './OfflineSingleEmployeeBox';

function EmployeeAttendenceBody({ setIsDelete, setViewDeatils, setIsEdit }) {
    return (
        <div>
            <div
                className="flex w-full h-auto justify-between align-middle pt-[10px]"
                style={{ alignItems: 'center' }}>
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

                <div className="w-[300px] flex  justify-between" style={{ alignItems: 'center' }}>
                    <span className="text-[17px] font-medium">Filter By </span>
                    <div className="w-[220px]">
                        <SetDate
                            title=""
                            rootStyle={{ width: '200px' }}
                            iconStayle={{
                                width: '4vw',
                                height: '3.6vw',
                                left: '0%',
                                borderTopLeftRadius: '.5vw',
                                borderBottomLeftRadius: '.5vw',
                                borderTopRightRadius: '0vw',
                                borderBottomRightRadius: '0vw'
                            }}
                            inputStyle={'pl-16 py-[22px]'}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-auto mt-[30px]">
                <div className="w-full h-auto flex align-middle py-[10px] px-[27px] bg-[#da1e37] text-white rounded-[6.5px]">
                    <ul className=" list-none w-full flex justify-between h-auto m-0">
                        <li className="text-[16px] text-center w-[180px] pl-[12px]">
                            Employee Name
                        </li>
                        <li className="text-[16px] text-center w-[130px] pl-[10px]">
                            Starting Time
                        </li>
                        <li className="text-[16px] text-center w-[125px] pl-[15px]">Ending Time</li>
                        <li className="text-[16px] text-center w-[150px] pl-[18px]">Break Time</li>
                        <li className="text-[16px] text-right w-[150px] pr-[25px]">Today Status</li>
                        <li className="text-[16px] text-center w-[180px]">Today Overtime</li>
                        <li className="text-[16px] text-left w-[125px]">Total Hour</li>
                    </ul>
                </div>
                <div className="mt-[12px]">
                    <SingleEmployeeBox
                        SetIsDelete={setIsDelete}
                        setViewDeatils={setViewDeatils}
                        setIsEdit={setIsEdit}
                    />
                    <OfflineSingleEmployeeBox />
                    <OfflineSingleEmployeeBox />
                    <OfflineSingleEmployeeBox />
                </div>
            </div>
        </div>
    );
}

export default EmployeeAttendenceBody;

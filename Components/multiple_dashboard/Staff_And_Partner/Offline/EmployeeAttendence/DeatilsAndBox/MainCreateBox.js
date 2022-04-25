import React from 'react';
import BigAddIcon from '../../../../../../Assets/images/dashboard/BigAddIcon';

function MainCreateBox({ setCreateAttendence }) {
    return (
        <div className="w-full h-auto p-[40px] text-center rounded-[16px] shadow-4xl relative">
            <div className="w-full h-auto">
                <div className="p-[25px] pb-[20px] w-[146px] m-auto">
                    <div
                        className="w-[95px] h-[95px] cursor-pointer"
                        onClick={() => {
                            setCreateAttendence(true);
                        }}>
                        <BigAddIcon />
                    </div>
                </div>
                <div className="mt-[6.5px]">
                    <h1 className="text-[33px] font-[500]">Create Employee Attendence</h1>
                </div>
            </div>
        </div>
    );
}

export default MainCreateBox;

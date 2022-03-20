import React from 'react';
import AddButtonIcon from '../../../../../../Assets/images/dashboard/AddOutline';

function OfflineCreateAttendenceHeader({ setCreateAttendence }) {
    return (
        <div
            className="w-full h-auto flex align-middle flex-row text-[#313131] pt-[4px] pb-[16px] text-[17px]"
            style={{ alignItems: 'center' }}>
            <div className="w-auto h-auro pr-[10px] text-[#313131]  text-[17px]">Day Shift</div>
            <div className="w-[1px] h-[22px] bg-[#313131]"></div>
            <div
                className="w-[240px] pl-[8px] justify-around h-auto flex align-middle"
                style={{ alignItems: 'center' }}>
                <div
                    className="w-[27px] cursor-pointer h-auto"
                    onClick={() => {
                        setCreateAttendence(true);
                    }}>
                    <AddButtonIcon width={'27'} />
                </div>
                <div className="text-[#313131]  text-[17px]">Create A New Attendence</div>
            </div>
        </div>
    );
}

export default OfflineCreateAttendenceHeader;

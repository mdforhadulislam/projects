import React from 'react';
import Modal from 'react-modal';
import { BrackTimer, DutyTimer, TimerSet, TodayStatus } from '../../../../../../Utilities/Utilites';

function AttendenceEditPopup({ attendenceEditPopup, setAttendenceEditPopup }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };

    return (
        <Modal isOpen={attendenceEditPopup} style={customStyles}>
            <div className="w-[550px] h-auto pt-[15px] pb-[20px] px-[30px] bg-white rounded-[13px] shadow-3xl">
                <div className="w-full flex justify-between pb-[12px]">
                    <DutyTimer title="Stating Time" />
                    <DutyTimer title="Ending Time" />
                </div>
                <div className="w-full flex justify-between pb-[12px]">
                    <TodayStatus />
                    <BrackTimer title="Bracking Time" />
                </div>
                <div className="w-full flex justify-between pb-[25px]">
                    <TimerSet title="Bracking Time" />
                    <TimerSet title="Bracking Time" />
                </div>
                <div className="w-full flex justify-end">
                    <button
                        className="w-[130px] h-auto border-none bg-[#da1e37] text-white outline-none p-[4px] py-[5px] mr-[15px] rounded-[5px]"
                        onClick={() => {
                            setAttendenceEditPopup(false);
                        }}>
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setAttendenceEditPopup(false);
                        }}
                        className="w-[130px] h-auto bg-white text-[#da1e37] border-[1px] border-[#da1e37] outline-none p-[4px] rounded-[5px]">
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(AttendenceEditPopup);

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
            <div className="attendence__edit__container__main">
                <div className="attendence__edit__container__main__row__one">
                    <DutyTimer title="Stating Time" />
                    <DutyTimer title="Ending Time" />
                </div>
                <div className="attendence__edit__container__main__row__two">
                    <TodayStatus />
                    <BrackTimer title="Bracking Time" />
                </div>
                <div className="attendence__edit__container__main__row__three">
                    <TimerSet />
                    <TimerSet />
                </div>
                <div className="attendence__edit__container__main__button">
                    <button className="attendence__edit__container__main__button__save">
                        Save
                    </button>
                    <button className="attendence__edit__container__main__button__cancel">
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(AttendenceEditPopup);

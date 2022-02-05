import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import {
    AttendenceName,
    BrackTimer,
    DayCheckBox,
    DutyTimer
} from '../../../../../../Utilities/Utilites';

Modal.setAppElement('#__next');
export default function AttendencePopupForm({ setAttendencesPopupForm, attendencePopupForm }) {
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
        <Modal
            isOpen={attendencePopupForm}
            onRequestClose={() => {
                setAttendencesPopupForm(false);
            }}
            style={customStyles}>
            <div className="attendence__popup__form">
                <div className="attendence__popup__form__back__button">
                    <ArrowBackIcon />
                    Back
                </div>
                <div className="attendence__popup__form__container">
                    <div className="attendence__propup__form__container__name__box">
                        <AttendenceName />
                    </div>
                    <div className="attendence__popup__form__container__timer">
                        <div className="attendence__popup__form__container__timer__row__one">
                            <DutyTimer title="Duty Starting Time" />
                            <DutyTimer title="Duty Ending Time" />
                        </div>
                        <div className="attendence__popup__form__container__timer__row__tow">
                            <BrackTimer />
                        </div>
                    </div>
                    <div className="attendence__popup__form__container__holiday__container">
                        <div className="attendence__popup__form__container__holiday__container__title">
                            Holiday
                        </div>
                        <div className="attendence__popup__form__container__holiday__container__checkbox">
                            <DayCheckBox title={'Saturday'} name={'Saturday'} />
                            <DayCheckBox title={'Sunday'} name={'Sunday'} />
                            <DayCheckBox title={'Monday'} name={'Monday'} />
                            <DayCheckBox title={'Tuesday'} name={'Tuesday'} />
                            <DayCheckBox title={'Wednestday'} name={'Wednestday'} />
                            <DayCheckBox title={'Thursday'} name={'Thursday'} />
                            <DayCheckBox title={'Friday'} name={'Friday'} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import {
    AttendenceName,
    BrackTimer,
    DayCheckBox,
    DutyTimer
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/AttendencePopupForm.module.css';

Modal.setAppElement('#__next');
export default function AttendencePopupForm({
    setAttendencesPopupForm,
    attendencePopupForm,
    setAttendenceEmployee
}) {
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
        <Modal isOpen={attendencePopupForm} style={customStyles}>
            <form
                className={StyleSheet.attendence__popup__form}
                onSubmit={(e) => e.preventDefault()}>
                <div className={StyleSheet.attendence__popup__form__back__button}>
                    <div
                        onClick={() => setAttendencesPopupForm(false)}
                        style={{ cursor: 'pointer' }}>
                        <ArrowBackIcon />
                        Back
                    </div>
                </div>
                <div className={StyleSheet.attendence__popup__form__container}>
                    <div className={StyleSheet.attendence__propup__form__container__name__box}>
                        <AttendenceName title="Attendence Name" />
                    </div>
                    <div className={StyleSheet.attendence__popup__form__container__timer}>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__timer__row__one
                            }>
                            <DutyTimer title="Duty Starting Time" />
                            <DutyTimer title="Duty Ending Time" />
                        </div>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__timer__row__tow
                            }>
                            <BrackTimer title="Break Time" />
                        </div>
                    </div>
                    <div
                        className={
                            StyleSheet.attendence__popup__form__container__holiday__container
                        }>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__holiday__container__title
                            }>
                            Holiday
                        </div>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__holiday__container__checkbox
                            }>
                            <DayCheckBox
                                title={'Saturday'}
                                name={'Saturday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Sunday'}
                                name={'Sunday'}
                                style={{ width: '7.5vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Monday'}
                                name={'Monday'}
                                style={{ width: '7.5vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Tuesday'}
                                name={'Tuesday'}
                                style={{ width: '8vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Wednestday'}
                                name={'Wednestday'}
                                style={{ width: '10.5vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Thursday'}
                                name={'Thursday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                            />
                            <DayCheckBox
                                title={'Friday'}
                                name={'Friday'}
                                style={{ width: '8vw', display: 'inline-block' }}
                            />
                        </div>
                    </div>
                </div>
                <div className={StyleSheet.attendence__popup__form__submit__button}>
                    <button
                        type="submit"
                        onClick={() => {
                            setAttendencesPopupForm(false);
                            setAttendenceEmployee(true);
                        }}>
                        Next
                    </button>
                </div>
            </form>
        </Modal>
    );
}

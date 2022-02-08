import React, { useState } from 'react';
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

    const [attendanceName, setAttendanceName] = useState('');
    const [brackTime, setBrackTime] = useState('');
    const [dayStartAndEndTime, setDayStartAndEndTime] = useState({
        dayStartTime: '10:00:00',
        dayEndTime: '10:00:00'
    });
    const [holiday, setHoliday] = useState({
        saturday: false,
        sunday: false,
        monday: false,
        tuesday: false,
        wednestday: false,
        thursday: false,
        friday: false
    });

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
                        <AttendenceName
                            title="Attendence Name"
                            placeholder={'Staff Of Dutypedia...|'}
                            value={attendanceName}
                            action={(value) => setAttendanceName(value)}
                        />
                    </div>
                    <div className={StyleSheet.attendence__popup__form__container__timer}>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__timer__row__one
                            }>
                            <DutyTimer
                                title="Duty Starting Time"
                                value={dayStartAndEndTime.dayStartTime}
                                action={(value) =>
                                    setDayStartAndEndTime({
                                        ...dayStartAndEndTime,
                                        dayStartTime: value
                                    })
                                }
                            />
                            <DutyTimer
                                title="Duty Ending Time"
                                value={dayStartAndEndTime.dayEndTime}
                                action={(value) =>
                                    setDayStartAndEndTime({
                                        ...dayStartAndEndTime,
                                        dayEndTime: value
                                    })
                                }
                            />
                        </div>
                        <div
                            className={
                                StyleSheet.attendence__popup__form__container__timer__row__tow
                            }>
                            <BrackTimer
                                title="Break Time"
                                action={(value) => setBrackTime(value)}
                                value={brackTime}
                            />
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
                                style={{ width: '9vw', display: 'inline-block' }}
                                value={holiday.saturday}
                                actions={() =>
                                    holiday.saturday
                                        ? setHoliday({ ...holiday, saturday: false })
                                        : setHoliday({ ...holiday, saturday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Sunday'}
                                name={'Sunday'}
                                style={{ width: '8vw', display: 'inline-block' }}
                                value={holiday.sunday}
                                actions={() =>
                                    holiday.sunday
                                        ? setHoliday({ ...holiday, sunday: false })
                                        : setHoliday({ ...holiday, sunday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Monday'}
                                name={'Monday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={holiday.monday}
                                actions={() =>
                                    holiday.monday
                                        ? setHoliday({ ...holiday, monday: false })
                                        : setHoliday({ ...holiday, monday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Tuesday'}
                                name={'Tuesday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={holiday.tuesday}
                                actions={() =>
                                    holiday.tuesday
                                        ? setHoliday({ ...holiday, tuesday: false })
                                        : setHoliday({ ...holiday, tuesday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Wednestday'}
                                name={'Wednestday'}
                                style={{ width: '11vw', display: 'inline-block' }}
                                value={holiday.wednestday}
                                actions={() =>
                                    holiday.wednestday
                                        ? setHoliday({ ...holiday, wednestday: false })
                                        : setHoliday({ ...holiday, wednestday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Thursday'}
                                name={'Thursday'}
                                style={{ width: '9vw', display: 'inline-block' }}
                                value={holiday.thursday}
                                actions={() =>
                                    holiday.thursday
                                        ? setHoliday({ ...holiday, thursday: false })
                                        : setHoliday({ ...holiday, thursday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Friday'}
                                name={'Friday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={holiday.friday}
                                actions={() =>
                                    holiday.friday
                                        ? setHoliday({ ...holiday, friday: false })
                                        : setHoliday({ ...holiday, friday: true })
                                }
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

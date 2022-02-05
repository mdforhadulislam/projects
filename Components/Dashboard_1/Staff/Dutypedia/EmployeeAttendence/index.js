import React, { useState } from 'react';
import BigAddIcon from '../../../../../Assets/images/dashboard/BigAddIcon';
import StyleSheet from './Main.module.css';
import AttendencePopupForm from './PopupBox/AttendencePopupForm';

export default function EmployeeAttendence() {
    const [attendencePopupForm, setAttendencesPopupForm] = useState(false)

    return (
        <>
            <div className={StyleSheet.employee__attendence__container}>
                <div className={StyleSheet.employee__attendence__container__body}>

                    <div className={StyleSheet.employee__attendence__container__body__create__button}>
                        <div className={StyleSheet.employee__attendence__container__body__create__button__image}
                            onClick={() => { setAttendencesPopupForm(true) }}>
                            <BigAddIcon />
                        </div>
                    </div>

                    <div className={StyleSheet.employee__attendence__container__body__title}>
                        <h1>Create Employee Attendence</h1>
                    </div>

                </div>
            </div>


            {
                attendencePopupForm && <AttendencePopupForm setAttendencesPopupForm={setAttendencesPopupForm} attendencePopupForm={attendencePopupForm} />
            }


        </>
    );
}

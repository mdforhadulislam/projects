import Image from 'next/image';
import React, { useState } from 'react';
import AddButtonIcon from '../../../../../Assets/images/dashboard/AddOutline';
import CalenderIcon from '../../../../../Assets/images/dashboard/CalenderIcon';
import QrImage from '../../../../../Assets/images/dashboard/Group 7167.png';
import LeftArrowGray from '../../../../../Assets/images/dashboard/LeftArrowGray';
import RightArrowGray from '../../../../../Assets/images/dashboard/RightArrowGray';
import ThreeDot from '../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { SearchBox } from '../../../../../Utilities/Utilites';
// import AttendenceEmployee from './PopupBox/AttendenceEmployee';
// import AttendencePopupForm from './PopupBox/AttendencePopupForm';
import StyleSheet from './Main.module.css';

export default function EmployeeAttendence() {
    const [attendencePopupForm, setAttendencesPopupForm] = useState(false);
    const [attendenceEmployee, setAttendenceEmployee] = useState(false);

    return (
        <>
            {/* <div className={StyleSheet.employee__attendence__container}>
                <div className={StyleSheet.employee__attendence__container__body}>
                    <div
                        className={
                            StyleSheet.employee__attendence__container__body__create__button
                        }>
                        <div
                            className={
                                StyleSheet.employee__attendence__container__body__create__button__image
                            }
                            onClick={() => {
                                setAttendencesPopupForm(true);
                            }}>
                            <BigAddIcon />
                        </div>
                    </div>

                    <div className={StyleSheet.employee__attendence__container__body__title}>
                        <h1>Create Employee Attendence</h1>
                    </div>
                </div>
            </div> */}

            {/* {attendencePopupForm && (
                <AttendencePopupForm
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    attendencePopupForm={attendencePopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                />
            )}
            {attendenceEmployee && (
                <AttendenceEmployee
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                    attendenceEmployee={attendenceEmployee}
                />
            )} */}

            <div className={StyleSheet.box__container}>
                <div className={StyleSheet.box__container__add__attendenec__button}>
                    <div className={StyleSheet.box__container__add__attendenec__button__left}>
                        Day Shift
                    </div>
                    <div className={StyleSheet.row}></div>
                    <div className={StyleSheet.box__container__add__attendenec__button__right}>
                        <div className={StyleSheet.icon}>
                            <AddButtonIcon />
                        </div>
                        <div className={StyleSheet.button}>Create A New Attendence</div>
                    </div>
                </div>

                <div className={StyleSheet.box__container__search__box}>
                    <SearchBox
                        placeholder={'Search By  Name Or Id......'}
                        style={{ background: '#f5f5f5', paddingBottom: '.4vw', paddingTop: '.4vw' }}
                    />
                </div>

                <div className={StyleSheet.box__calender__header__container}>
                    <div className={StyleSheet.box__calender__header__container__calender}>
                        <div
                            className={StyleSheet.box__calender__header__container__calender__main}>
                            <div className={StyleSheet.icon}>
                                <CalenderIcon />
                            </div>
                            <div className={StyleSheet.button__and__date}>
                                <div className={StyleSheet.button__and__date__left__button}>
                                    <LeftArrowGray />
                                </div>
                                <div className={StyleSheet.button__and__date__date}>
                                    Sep 13th,2021
                                </div>
                                <div className={StyleSheet.button__and__date__right__button}>
                                    <RightArrowGray />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={StyleSheet.box__calender__header__container__qr__code__and__dot}>
                        <div className={StyleSheet.qr__code}>
                            <div className={StyleSheet.qr__code__title}>
                                Attendence With Qr Code
                            </div>
                            <div className={StyleSheet.qr__image}>
                                <Image width={'100%'} height={'100%'} src={QrImage} alt="" />
                            </div>
                        </div>
                        <div className={StyleSheet.three__dot__icon}>
                            <Image width={'100%'} height={'100%'} src={ThreeDot} alt="Three Dot" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

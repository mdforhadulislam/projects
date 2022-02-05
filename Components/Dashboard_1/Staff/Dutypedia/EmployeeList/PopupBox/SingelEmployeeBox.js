import Image from 'next/image';
import React, { useState } from 'react';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import DeleteIcon from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { clockTimer } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../Main.module.css';

function SingelEmployeeBox({
    userData,
    setId,
    setRenderEditMemberInformation,
    setRenderManageAccess,
    setRenderMemberDeatiles,
    setDeleteMember,
    setCanceledRequested
}) {
    const [optionPopup, setOptionPopup] = useState(false);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return (
        <div className={StyleSheet.employee__container__body__employee__container}>
            <div className={StyleSheet.employee__container__body__employee__container__box}>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__image__and__name
                    }>
                    <div
                        className={
                            StyleSheet.employee__container__body__employee__container__box__image__and__name__image
                        }>
                        <Image width={"60vw"} height={"55vw"} src={userData.user_image} alt={userData.name} />
                        <DutyPreIcon />
                    </div>

                    <div
                        className={
                            StyleSheet.employee__container__body__employee__container__box__image__and__name__name
                        }>
                        {userData.name}

                        <div
                            className="employee__container__body__employee__box__image__and__name__name__and__id"
                            style={{
                                width: '113%',
                                height: 'auto',
                                // padding: ' 0.3vw 0vw 0vw 0vw',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                            <p style={{ fontSize: '1vw' }}>Id: DP0324-23{userData.user_id}</p>
                            <div
                                style={{
                                    width: '7vw',
                                    color: '#da1e37',
                                    fontSize: '.9vw',
                                    textAlign: 'right'
                                }}>
                                {userData.accept === false && userData.cancel === false
                                    ? 'Invitation Sent'
                                    : userData.accept
                                    ? 'Accepted'
                                    : userData.cancel
                                    ? 'Canceled'
                                    : 'Invitation Sent'}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__position
                    }>
                    {userData.user_position}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__gender
                    }>
                    {userData.user_gender}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__mobile__no
                    }>
                    {userData.user_mobile_no}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__email
                    }>
                    {userData.user_email}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__joining__date
                    }>
                    {userData.user_joining_date.getDate() +
                        '/' +
                        (userData.user_joining_date.getMonth() + 1 >= 10
                            ? userData.user_joining_date.getMonth() + 1
                            : '0' + (userData.user_joining_date.getMonth() + 1)) +
                        '/' +
                        userData.user_joining_date.getFullYear()}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__salary__date
                    }>
                    {userData.user_salary.no_salary_system
                        ? 'No Salary System'
                        : userData.user_salary.salary_type === 'monthly'
                        ? 'Every Month ' + userData.user_salary.salary_every_month
                        : userData.user_salary.salary_type === 'weekly'
                        ? 'Every Week ' + days[userData.user_salary.salary_every_week]
                        : userData.user_salary.salary_type === 'daily'
                        ? 'Every Day ' + clockTimer(userData.user_salary.salary_every_day)
                        : ' '}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__option__icon
                    }>
                    {optionPopup && (
                        <div
                            className={
                                StyleSheet.employee__container__body__employee__container__box__option__popup
                            }>
                            <ul>
                                <li
                                    onClick={() => {
                                        setRenderEditMemberInformation(true);
                                        setOptionPopup(false);
                                    }}>
                                    Edit
                                </li>
                                <li
                                    onClick={() => {
                                        setRenderManageAccess(true);
                                        setOptionPopup(false);
                                    }}>
                                    Manage Access
                                </li>
                                <li
                                    onClick={() => {
                                        setRenderMemberDeatiles(true);
                                        setOptionPopup(false);
                                    }}>
                                    View Details
                                </li>
                                <li
                                    onClick={() => {
                                        setOptionPopup(false);
                                        userData.accept === false && userData.cancel === false
                                            ? setDeleteMember(true)
                                            : userData.accept
                                            ? setDeleteMember(true)
                                            : userData.cancel
                                            ? setCanceledRequested(true)
                                            : setDeleteMember(true);
                                    }}>
                                    {userData.accept === false && userData.cancel === false
                                        ? 'Delete Member'
                                        : userData.accept
                                        ? 'Delete Member'
                                        : userData.cancel
                                        ? 'Cenceled Request'
                                        : ''}
                                </li>
                            </ul>
                        </div>
                    )}

                    <Image
                        onClick={() => {
                            optionPopup ? setOptionPopup(false) : setOptionPopup(true);
                            setId(userData.user_id);
                        }}
                        src={DeleteIcon}
                        alt="DeleteIcon"
                    />
                </div>
            </div>
        </div>
    );
}

export default SingelEmployeeBox;

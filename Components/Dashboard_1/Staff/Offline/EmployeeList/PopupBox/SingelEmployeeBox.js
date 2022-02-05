import Image from 'next/image';
import React, { useState } from 'react';
import DeleteIcon from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import StyleSheet from '../PopupBoxStyle/SingelEmployeeBox.module.css';

export default function SingelEmployeeBox({
    userData,
    setDeleteMember,
    setId,
    setEditMemberInformation,
    setViewMemberDetails
}) {
    const [optionPopup, setOptionPopup] = useState(false);

    return (
        <div className={StyleSheet.singel__employee__box__container}>
            <div className={StyleSheet.singel__employee__box__container__image__and__name}>
                <div
                    className={
                        StyleSheet.singel__employee__box__container__image__and__name__image
                    }>
                    <div style={{ background: `url(${userData.user_image})` }}></div>
                </div>

                <div
                    className={
                        StyleSheet.singel__employee__box__container__image__and__name__name__and__id
                    }>
                    <div
                        className={
                            StyleSheet.singel__employee__box__container__image__and__name__name__and__id__name
                        }>
                        {userData.name}
                    </div>
                    {/* <div className={StyleSheet.singel__employee__box__container__image__and__name__name__and__id__id}>
                        Id: DP0324-23{userData.user_id}
                    </div> */}
                </div>
            </div>

            <div
                className={
                    StyleSheet.employee__container__body__employee__container__box__row
                }></div>

            <div className={StyleSheet.singel__employee__box__container__position}>
                {userData.user_position}
            </div>

            <div
                className={
                    StyleSheet.employee__container__body__employee__container__box__row
                }></div>

            <div className={StyleSheet.singel__employee__box__container__gender}>
                {userData.user_gender}
            </div>

            <div
                className={
                    StyleSheet.employee__container__body__employee__container__box__row
                }></div>

            <div className={StyleSheet.singel__employee__box__container__mobile__no}>
                {userData.user_mobile_no.length > 10 && userData.user_mobile_no.length < 14
                    ? userData.user_mobile_no
                    : 'N/A'}
            </div>

            <div
                className={
                    StyleSheet.employee__container__body__employee__container__box__row
                }></div>

            <div className={StyleSheet.singel__employee__box__container__email}>
                {userData.user_email.search('@gmail.com') > 0 ? userData.user_email : 'N/A'}
            </div>

            <div
                className={
                    StyleSheet.employee__container__body__employee__container__box__row
                }></div>

            <div className={StyleSheet.singel__employee__box__container__joining__date}>
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

            <div className={StyleSheet.singel__employee__box__container__salary__date}>
                {userData.user_salary.no_salary_system
                    ? 'No Salary System'
                    : `${userData.user_joining_date.getDate()}/${
                          userData.user_joining_date.getMonth() + 2 > 9
                              ? userData.user_joining_date.getMonth() + 2
                              : '0' + (userData.user_joining_date.getMonth() + 2)
                      }/${userData.user_joining_date.getFullYear()}`}
            </div>

            <div className={StyleSheet.singel__employee__box__container__option__box}>
                {optionPopup && (
                    <div
                        className={StyleSheet.singel__employee__box__container__option__box__popup}>
                        <ul>
                            <li
                                onClick={() => {
                                    setEditMemberInformation(true);
                                    setOptionPopup(false);
                                }}>
                                Edit
                            </li>
                            <li
                                onClick={() => {
                                    setViewMemberDetails(true);
                                    setOptionPopup(false);
                                }}>
                                View Details
                            </li>
                            <li
                                onClick={() => {
                                    setDeleteMember(true);
                                    setOptionPopup(false);
                                }}>
                                Delete Member
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
    );
}

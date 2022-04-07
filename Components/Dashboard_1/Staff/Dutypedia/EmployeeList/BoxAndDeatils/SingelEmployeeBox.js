import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import DeleteIcon from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { getApiCall } from '../../../api/apiFatchMethod';
import { getSingleUserURL } from '../../../api/apiUrl';
import StyleSheet from '../BoxAndDeatilsStyle/SingleEmployeeBox.module.css';

function SingelEmployeeBox({
    userData,
    setId,
    setRenderEditMemberInformation,
    setRenderManageAccess,
    setRenderMemberDeatiles,
    setDeleteMember,
    setCanceledRequested
}) {

    const [user, setUser] = useState({})

    useEffect(() => {
        getApiCall(getSingleUserURL(userData?.user?.id)).then((res) => { setUser(res); })
    }, [user])

    const [optionPopup, setOptionPopup] = useState(false);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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


                        <div style={{
                            width: "80%",
                            height: "90%",
                            background: `url(${user?.profile_picture}) center no-repeat`,
                            borderRadius: "6px"
                        }}>

                        </div>



                        <DutyPreIcon />
                    </div>

                    <div
                        className={
                            StyleSheet.employee__container__body__employee__container__box__image__and__name__name
                        }>
                        {userData?.first_name} {userData?.middle_name} {userData?.last_name}

                        <div
                            className="employee__container__body__employee__box__image__and__name__name__and__id"
                            style={{
                                width: '100%',
                                height: 'auto',
                                // padding: ' 0.3vw 0vw 0vw 0vw',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                            <p style={{ fontSize: '14px' }}>Id: DP-{userData?.id}</p>
                            <div
                                style={{
                                    width: '95px',
                                    color: '#da1e37',
                                    fontSize: '14px',
                                    textAlign: 'right',
                                }}>
                                {user?.is_accepted === false && user?.status === 'sending'
                                    ? 'Invitation Sent'
                                    : user?.is_accepted
                                        ? 'Accepted'
                                        : user?.status === "cancel"
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
                    {userData?.position}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__gender
                    }>
                    {userData?.gender}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__mobile__no
                    }>
                    {user?.contact_number}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__email
                    }>
                    {user?.user?.email}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__joining__date
                    }>
                    {userData?.joining_date}
                </div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__row
                    }></div>
                <div
                    className={
                        StyleSheet.employee__container__body__employee__container__box__salary__date
                    }>
                    {
                        userData?.salary_type === "Daily" ? userData?.salary_date_every_day : userData?.salary_type === "Weekly" ? userData?.salary_date_every_week : userData?.salary_type === "Monthly" ? userData?.salary_date_every_month : "N/A"
                    }
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
                                        userData?.accept === false && userData?.cancel === false
                                            ? setDeleteMember(true)
                                            : userData?.accept
                                                ? setDeleteMember(true)
                                                : userData?.cancel
                                                    ? setCanceledRequested(true)
                                                    : setDeleteMember(true);
                                    }}>
                                    {userData?.accept === false && userData?.cancel === false
                                        ? 'Delete Member'
                                        : userData?.accept
                                            ? 'Delete Member'
                                            : userData?.cancel
                                                ? 'Cenceled Request'
                                                : ''}
                                </li>
                            </ul>
                        </div>
                    )}

                    <Image
                        onClick={() => {
                            optionPopup ? setOptionPopup(false) : setOptionPopup(true);
                            setId(userData?.user_id);
                        }}
                        src={DeleteIcon}
                        alt="DeleteIcon"
                    />
                </div>
            </div>
        </div >
    );
}

export default React.memo(SingelEmployeeBox);

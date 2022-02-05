import Image from 'next/image';
import React from 'react';
import backIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import PrintIcon from '../../../../../../Assets/images/dashboard/printer.svg';
import StyleSheet from '../PopupBoxStyle/MemberDetails.module.css';


export default function MemberDetails({
    userData,
    setViewMemberDetails,
    setViewMemberAllInformation
}) {
    const printHendeler = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].style.marginLeft =
            '-2vw';
        window.print();
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'grid';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.display =
            'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
            'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].style.marginLeft =
            '0';
    };

    return (
        <div className={StyleSheet.member__details__container} id="printme">
            <div className={StyleSheet.member__details__container__main}>
                <div className={StyleSheet.member__details__container__main__back__button}>
                    <Image width={"100%"} height={"100%"}
                        onClick={() => {
                            setViewMemberDetails(false);
                        }}
                        src={backIcon}
                        alt="backIcon"
                    />
                </div>

                <div className={StyleSheet.member__details__container__main__header}>
                    <div className={StyleSheet.member__details__container__main__header__left}>
                        <Image width={"100%"} height={"100%"} src={userData.user_image} alt={userData.name} />
                    </div>

                    <div className={StyleSheet.member__details__container__main__header__right}>
                        <div
                            className={
                                StyleSheet.member__details__container__main__header__right__details
                            }>
                            <ul>
                                <li>
                                    <h1>{userData.name}</h1>
                                </li>
                                <li>Id: DP0324-234{userData.user_id}</li>
                                <li>
                                    {userData.user_as_a_member
                                        ? 'Member'
                                        : userData.user_as_a_staff
                                        ? 'Staff'
                                        : 'Member'}
                                </li>
                                <li>{userData.user_position}</li>
                                <li>
                                    Joining Date{' '}
                                    {`${userData.user_joining_date.getDate()}/${
                                        userData.user_joining_date.getMonth() + 1 > 9
                                            ? userData.user_joining_date.getMonth() + 1
                                            : '0' + (userData.user_joining_date.getMonth() + 1)
                                    }/${userData.user_joining_date.getFullYear()}`}
                                </li>
                                <li>
                                    {userData.presentAddress.area},{userData.presentAddress.city},
                                    {userData.presentAddress.region},Bangladesh
                                </li>
                                <li>
                                    Date Of Birth{' '}
                                    {`${userData.user_date_of_birth.getDate()}/${
                                        userData.user_joining_date.getMonth() + 1 > 9
                                            ? userData.user_joining_date.getMonth() + 1
                                            : '0' + (userData.user_joining_date.getMonth() + 1)
                                    }/${userData.user_date_of_birth.getFullYear()}`}
                                </li>
                                <li
                                    onClick={() => {
                                        setViewMemberAllInformation(true);
                                    }}>
                                    View All Information
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                StyleSheet.member__details__container__main__header__right__print__btn
                            }>
                            <Image width={"100%"} height={"100%"} onClick={printHendeler} src={PrintIcon} alt="PrintIcon" />
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.member__details__container__main__body}>
                    <div className={StyleSheet.member__details__container__main__body__header}>
                        <ul>
                            <li>Position</li>
                            <li>Gender</li>
                            <li>Mobile No</li>
                            <li>Email</li>
                            <li>Joining Date</li>
                            <li>Salary Date</li>
                        </ul>
                    </div>
                    <div className={StyleSheet.member__details__container__main__body__body}>
                        <div
                            className={
                                StyleSheet.member__details__container__main__body__body__coloum
                            }>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__position
                                }>
                                {userData.user_position}
                            </div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__row
                                }></div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__gender
                                }>
                                {userData.user_gender}
                            </div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__row
                                }></div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__mobile_no
                                }>
                                {userData.user_mobile_no.length > 10 &&
                                userData.user_mobile_no.length < 14
                                    ? userData.user_mobile_no
                                    : 'N/A'}
                            </div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__row
                                }></div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__email
                                }>
                                {userData.user_email.search('@gmail.com') > 0
                                    ? userData.user_email
                                    : 'N/A'}
                            </div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__row
                                }></div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__joining_date
                                }>
                                {`${userData.user_joining_date.getDate()}/${
                                    userData.user_joining_date.getMonth() + 1 > 9
                                        ? userData.user_joining_date.getMonth() + 1
                                        : '0' + (userData.user_joining_date.getMonth() + 1)
                                }/${userData.user_joining_date.getFullYear()}`}
                            </div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__row
                                }></div>
                            <div
                                className={
                                    StyleSheet.member__details__container__main__body__body__coloum__salary_date
                                }>
                                {userData.user_salary.no_salary_system
                                    ? 'No Salary System'
                                    : `${userData.user_joining_date.getDate()}/${
                                          userData.user_joining_date.getMonth() + 2 > 9
                                              ? userData.user_joining_date.getMonth() + 2
                                              : '0' + (userData.user_joining_date.getMonth() + 2)
                                      }/${userData.user_joining_date.getFullYear()}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Image from 'next/image';
import React from 'react';
import backIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import PrintIcon from '../../../../../../Assets/images/dashboard/printer.svg';
import { clockTimer } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../BoxAndDeatilsStyle/MemberDeatils.module.css';

function MemberDeatils({ userData, setRenderMemberDeatiles, setRenderViewAllInformation }) {
    const printHendeler = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'none';
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.display =
        //     'none';
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
        //     'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '-3.5vw';
        window.print();
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'grid';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'block';
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.display =
        //     'block';
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].style.display =
        //     'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '0vw';
    };

    return (
        <div className={StyleSheet.member__deatils__container}>
            <div className={StyleSheet.member__deatils__container__main}>
                <div className={StyleSheet.member__deatils__container__main__back__button}>
                    <Image
                        src={backIcon}
                        alt={'backIcon'}
                        onClick={() => {
                            setRenderMemberDeatiles(false);
                        }}
                    />
                </div>

                <div className={StyleSheet.member__deatils__container__main__about}>
                    <div className={StyleSheet.member__deatils__container__main__about__image}>
                        <Image
                            width="100vw"
                            height="100vw"
                            src={userData.user_image}
                            alt={userData.name}
                        />
                        <DutyPreIcon />
                    </div>
                    <div className={StyleSheet.member__deatils__container__main__about__deatils}>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__about__deatils__left
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
                                        setRenderViewAllInformation(true);
                                    }}>
                                    View All Information
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__about__deatils__right
                            }>
                            <Image onClick={printHendeler} src={PrintIcon} alt="Print Icon" />
                        </div>
                    </div>
                </div>
                <div className={StyleSheet.member__deatils__container__main__row__box}>
                    <div className={StyleSheet.member__deatils__container__main__row__box__header}>
                        <ul>
                            <li>Position</li>
                            <li>Gender</li>
                            <li>Mobile No</li>
                            <li>Email</li>
                            <li>Joining Date</li>
                            <li>Salary Date</li>
                        </ul>
                    </div>
                    <div className={StyleSheet.member__deatils__container__main__row__box__body}>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__position
                            }>
                            {userData.user_position}
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__row
                            }></div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__gender
                            }>
                            {userData.user_gender}
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__row
                            }></div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__mobile__no
                            }>
                            {userData.user_mobile_no}
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__row
                            }></div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__email
                            }>
                            {userData.user_email}
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__row
                            }></div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__joining__date
                            }>
                            {`${userData.user_joining_date.getDate()}/${
                                userData.user_joining_date.getMonth() + 1
                            }/${userData.user_joining_date.getFullYear()}`}
                        </div>
                        <div
                            className={
                                StyleSheet.member__deatils__container__main__row__box__body__row
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
                                ? 'Every Week ' + userData.user_salary.salary_every_week
                                : userData.user_salary.salary_type === 'daily'
                                ? 'Every Day ' + clockTimer(userData.user_salary.salary_every_day)
                                : ' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(MemberDeatils);

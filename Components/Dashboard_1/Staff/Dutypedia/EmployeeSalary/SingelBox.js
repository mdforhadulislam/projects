import Image from 'next/image';
import React, { useState } from 'react';
import DutyPreIcon from '../../../../../Assets/images/dashboard/DutyPreIconSmall';
import threeDotIcon from '../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { clockTimer } from '../../../../../Utilities/Utilites';
import StyleSheet from './Main.module.css';

export default function SingelBox({ user, salary_status }) {
    const [optionPopup, setOptionPopup] = useState(false);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className={StyleSheet.single__box__container}>
            <div className={StyleSheet.single__box__container__main__container}>
                <div className={StyleSheet.single__box__container__main__container___name__image}>
                    <div
                        className={
                            StyleSheet.single__box__container__main__container___name__image__image__and__logo
                        }>
                        <Image
                            width={'100%'}
                            height={'100%'}
                            src={user.user_image}
                            alt={user.name}
                        />
                        <DutyPreIcon />
                    </div>
                    <div
                        className={
                            StyleSheet.single__box__container__main__container___name__image__name__and__id
                        }>
                        <div>{user.name}</div>
                        <div>Id: DP0324-23{user.user_id}</div>
                    </div>
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary
                    }>
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : user.user_salary.salary_amount}
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary__date
                    }>
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : user.user_salary.salary_type === 'monthly'
                            ? 'Every Month ' + user.user_salary.salary_every_month
                            : user.user_salary.salary_type === 'weekly'
                                ? 'Every Week ' + days[user.user_salary.salary_every_week]
                                : user.user_salary.salary_type === 'daily'
                                    ? 'Every Day ' + clockTimer(user.user_salary.salary_every_day)
                                    : ' '}
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary__status
                    }>
                    {salary_status}
                </div>

                <div className={StyleSheet.single__box__container__main__container__pay__popup}>
                    {/* {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : user.user_salary.salary_status === "upcoming" ? "Pay Advance" : ""}
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : user.user_salary.salary_status === "due" ? "Click To Paid" : ""}
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : user.user_salary.salary_status === "paid" ? "" : ""} */}

                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : salary_status === 'Upcoming'
                            ? 'Pay Advance'
                            : ''}
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : salary_status === 'Due'
                            ? 'Click To Paid'
                            : ''}
                    {user.user_salary.no_salary_system
                        ? 'No Salary System'
                        : salary_status === 'Paid'
                            ? ''
                            : ''}
                </div>

                <div className={StyleSheet.single__box__container__main__container__option}>
                    {optionPopup && (
                        <div
                            className={
                                StyleSheet.single__box__container__main__container__option__container
                            }>
                            <ul>
                                <li>Edit</li>
                                <li>View Deatils</li>
                            </ul>
                        </div>
                    )}

                    <Image
                        onClick={() => {
                            optionPopup ? setOptionPopup(false) : setOptionPopup(true);
                        }}
                        src={threeDotIcon}
                        alt="threeDotIcon"
                        className={
                            StyleSheet.single__box__container__main__container__option__button
                        }
                    />
                </div>
            </div>
        </div>
    );
}

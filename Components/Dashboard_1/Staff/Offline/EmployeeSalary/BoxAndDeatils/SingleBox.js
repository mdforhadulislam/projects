import Image from 'next/image';
import React, { useState } from 'react';
import threeDotIcon from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import { clockTimer, firstDateFormet, lastDateFormet } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../BoxAndDeatilsStyle/SingelBox.module.css';

export default function SingelBox({ user, setPaidPopup, setId, setEditPopup, setViewDeatils }) {
    const [optionPopup, setOptionPopup] = useState(false);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateobj = new Date();

    // sent current date
    const date =
        (dateobj.getDate() > 9 ? dateobj.getDate() : '0' + dateobj.getDate()) +
        '/' +
        (Number(`${dateobj.getMonth() + 1 === 13 ? 0 + 1 : dateobj.getMonth() + 1}`) < 10
            ? '0' + Number(`${dateobj.getMonth() + 1 === 13 ? 0 + 1 : dateobj.getMonth() + 1}`)
            : Number(`${dateobj.getMonth() + 1 === 13 ? 0 + 1 : dateobj.getMonth() + 1}`)) +
        '/' +
        dateobj.getFullYear();

    return (
        <div className={StyleSheet.single__box__container}>
            <div className={StyleSheet.single__box__container__main__container}>
                <div className={StyleSheet.single__box__container__main__container___name__image}>
                    <div
                        className={
                            StyleSheet.single__box__container__main__container___name__image__image
                        }>
                        <Image
                            width={'100%'}
                            height={'100%'}
                            src={user.user_image}
                            alt={user.name}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.single__box__container__main__container___name__image__name__and__id
                        }>
                        <div>{user.name}</div>
                    </div>
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary
                    }>
                    {user.user_salary.salary_amount}
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary__date
                    }>
                    {user.user_salary.salary_type === 'monthly' ? (
                        firstDateFormet(
                            user.user_salary.salary_every_month,
                            user.user_joining_date
                        ) +
                        ' To ' +
                        lastDateFormet(user.user_salary.salary_every_month, user.user_joining_date)
                    ) : user.user_salary.salary_type === 'weekly' ? (
                        <p style={{ width: '6.45vw', margin: '0vw 5.2vw' }}>
                            {' '}
                            {`${date} ` + days[user.user_salary.salary_every_week]}
                        </p>
                    ) : user.user_salary.salary_type === 'daily' ? (
                        <p style={{ width: '6.6vw', margin: '0vw 5.2vw' }}>
                            {' '}
                            {`${date} ${clockTimer(user.user_salary.salary_every_day)}`}
                        </p>
                    ) : (
                        ' '
                    )}
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary__status
                    }>
                    {user.user_salary.salary_status_paid
                        ? 'Paid'
                        : user.user_salary.salary_status_upcoming
                        ? 'Upcoming'
                        : user.user_salary.salary_status_due
                        ? 'Due'
                        : ''}
                </div>

                <div
                    className={
                        StyleSheet.single__box__container__main__container__employee__salary__type
                    }>
                    {user.user_salary.salary_type}
                </div>

                <div
                    className={StyleSheet.single__box__container__main__container__pay__popup}
                    onClick={
                        user.user_salary.salary_status_paid
                            ? () => {}
                            : user.user_salary.salary_status_upcoming
                            ? () => {
                                  setPaidPopup(true);
                                  setId(user.user_id);
                              }
                            : user.user_salary.salary_status_due
                            ? () => {
                                  setPaidPopup(true);
                                  setId(user.user_id);
                              }
                            : () => {}
                    }>
                    {user.user_salary.salary_status_paid
                        ? ''
                        : user.user_salary.salary_status_upcoming
                        ? 'Pay Advance'
                        : user.user_salary.salary_status_due
                        ? 'Click To Paid'
                        : ''}
                </div>

                <div className={StyleSheet.single__box__container__main__container__option}>
                    {optionPopup && (
                        <div
                            className={
                                StyleSheet.single__box__container__main__container__option__container
                            }>
                            <ul>
                                <li
                                    onClick={() => {
                                        setEditPopup(true);
                                        setOptionPopup(false);
                                    }}>
                                    Edit
                                </li>
                                <li
                                    onClick={() => {
                                        setViewDeatils(true);
                                        setOptionPopup(false);
                                    }}>
                                    View Deatils
                                </li>
                            </ul>
                        </div>
                    )}

                    <Image
                        onClick={() => {
                            optionPopup ? setOptionPopup(false) : setOptionPopup(true);
                            setId(user.user_id);
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

import Image from 'next/image';
import React, { useState } from 'react';
import backIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import PrintIcon from '../../../../../../Assets/images/dashboard/printer.svg';
import { CircleCheckBox } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../BoxAndDeatilsStyle/ViewMemberDeatils.module.css';
import PaidPopup from '../PopupBox/PaidPopup';
import ViewDeatilsInRow from './ViewDeatilsInRow';

function ViewMemberDeatils({ user, setViewDeatils }) {
    const [year, setYear] = useState(user.user_joining_date.getFullYear());
    const [upcomingDeatils, setUpcomingDeatails] = useState(false);
    const [dueDeatils, setDueDeatails] = useState(true);
    const [paidDeatils, setPaidDeatails] = useState(false);
    const [paidPopup, setPaidPopup] = useState(false);
    const [id, setId] = useState('');

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

    const salary_history = [
        {
            id: 1,
            salary_status_upcoming: true,
            salary_status_due: false,
            salary_status_paid: false,
            salary_type: 'monthly'
        },
        {
            id: 2,
            salary_status_upcoming: false,
            salary_status_due: true,
            salary_status_paid: false,
            salary_type: 'monthly'
        },
        {
            id: 3,
            salary_status_upcoming: false,
            salary_status_due: true,
            salary_status_paid: false,
            salary_type: 'monthly'
        },
        {
            id: 4,
            salary_status_upcoming: true,
            salary_status_due: false,
            salary_status_paid: false,
            salary_type: 'daliy'
        },
        {
            id: 5,
            salary_status_upcoming: true,
            salary_status_due: false,
            salary_status_paid: false,
            salary_type: 'daliy'
        },
        {
            id: 6,
            salary_status_upcoming: false,
            salary_status_due: false,
            salary_status_paid: true,
            salary_type: 'daliy'
        },
        {
            id: 7,
            salary_status_upcoming: false,
            salary_status_due: false,
            salary_status_paid: true,
            salary_type: 'weekly'
        },
        {
            id: 8,
            salary_status_upcoming: false,
            salary_status_due: true,
            salary_status_paid: false,
            salary_type: 'weekly'
        },
        {
            id: 9,
            salary_status_upcoming: false,
            salary_status_due: false,
            salary_status_paid: true,
            salary_type: 'weekly'
        }
    ];

    return (
        <div className={StyleSheet.view__member__deatils__main}>
            <div className={StyleSheet.view__member__deatils__main__container}>
                <div className={StyleSheet.view__member__deatils__main__container__back__button}>
                    <Image
                        width={'100%'}
                        height={'100%'}
                        src={backIcon}
                        alt={'backIcon'}
                        onClick={() => {
                            setViewDeatils(false);
                        }}
                    />
                </div>
                <div
                    className={StyleSheet.view__member__deatils__main__container__about__container}>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__left
                        }>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__left__image
                            }>
                            <Image
                                width="100vw"
                                height="100vw"
                                src={user.user_image}
                                alt={user.name}
                            />

                            <DutyPreIcon />
                        </div>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__left__deatils
                            }>
                            <ul>
                                <li>
                                    <h1>{user.name}</h1>
                                </li>
                                <li>Id: DP0324-234{user.user_id}</li>
                                <li>{user.user_position}</li>
                                <li>
                                    Joining Date{' '}
                                    {`${user.user_joining_date.getDate()}/${
                                        user.user_joining_date.getMonth() + 1 > 9
                                            ? user.user_joining_date.getMonth() + 1
                                            : '0' + (user.user_joining_date.getMonth() + 1)
                                    }/${user.user_joining_date.getFullYear()}`}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__right
                        }>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__right__salary__amount
                            }>
                            {user.user_salary.no_salary_system ? (
                                <>No Salary System</>
                            ) : (
                                <>
                                    <div
                                        className={
                                            StyleSheet.view__member__deatils__main__container__about__container__right__salary__amount__title
                                        }>
                                        Salary Ammount
                                    </div>
                                    <div
                                        className={
                                            StyleSheet.view__member__deatils__main__container__about__container__right__salary__amount__taka
                                        }>
                                        {user.user_salary.salary_amount}
                                        {'৳'}
                                    </div>
                                    <div
                                        className={
                                            StyleSheet.view__member__deatils__main__container__about__container__right__salary__amount__change__amount
                                        }>
                                        Change Ammount
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__right__print__button
                            }>
                            <Image
                                onClick={printHendeler}
                                width={'100%'}
                                height={'100%'}
                                src={PrintIcon}
                                alt="PrintIcon"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        StyleSheet.view__member__deatils__main__container__about__container__calender
                    }>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__left__btn
                        }
                        onClick={() => {
                            setYear((prev) => prev - 1);
                        }}></div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__title
                        }>
                        CALENDER {year}
                    </div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__right__btn
                        }
                        onClick={() => {
                            setYear((prev) => prev + 1);
                        }}></div>
                </div>

                <div
                    className={
                        StyleSheet.view__member__deatils__main__container__salary__status__filter
                    }>
                    <CircleCheckBox
                        name="ViewUpcoming"
                        title="Upcoming"
                        actions={(value) => {
                            setUpcomingDeatails(true);
                            setDueDeatails(false);
                            setPaidDeatails(false);
                        }}
                        value={upcomingDeatils}
                        style={{ marginLeft: '72%' }}
                    />

                    <CircleCheckBox
                        name="ViewDue"
                        title="Due"
                        actions={(value) => {
                            setUpcomingDeatails(false);
                            setDueDeatails(true);
                            setPaidDeatails(false);
                        }}
                        value={dueDeatils}
                        style={{ width: '6vw' }}
                    />

                    <CircleCheckBox
                        name="ViewPaid"
                        title="Paid"
                        actions={(value) => {
                            setUpcomingDeatails(false);
                            setDueDeatails(false);
                            setPaidDeatails(true);
                        }}
                        value={paidDeatils}
                        style={{ width: '6vw' }}
                    />
                </div>

                <div
                    className={
                        StyleSheet.view__member__deatils__main__container__about__container__row
                    }>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__row__header
                        }>
                        <ul>
                            <li>Salary Date</li>
                            <li>Salary Ammount</li>
                            <li>Payment Status</li>
                            <li>Satay Type</li>
                        </ul>
                    </div>

                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__row__body
                        }>
                        {upcomingDeatils &&
                            salary_history
                                .filter((user) => user.salary_status_upcoming)
                                .map((user) => {
                                    return (
                                        <ViewDeatilsInRow
                                            key={user.id}
                                            user={user}
                                            setPaidPopup={setPaidPopup}
                                            setId={setId}
                                        />
                                    );
                                })}
                        {dueDeatils &&
                            salary_history
                                .filter((user) => user.salary_status_due)
                                .map((user) => {
                                    return (
                                        <ViewDeatilsInRow
                                            key={user.id}
                                            user={user}
                                            setPaidPopup={setPaidPopup}
                                            setId={setId}
                                        />
                                    );
                                })}
                        {paidDeatils &&
                            salary_history
                                .filter((user) => user.salary_status_paid)
                                .map((user) => {
                                    return (
                                        <ViewDeatilsInRow
                                            key={user.id}
                                            user={user}
                                            setPaidPopup={setPaidPopup}
                                            setId={setId}
                                        />
                                    );
                                })}

                        {paidPopup &&
                            salary_history
                                .filter((user) => user.id == id)
                                .map((user) => {
                                    return (
                                        <PaidPopup
                                            key={user.id}
                                            user={user}
                                            paidPopup={paidPopup}
                                            setPaidPopup={setPaidPopup}
                                            confirmActions={(value) => {
                                                setPaidPopup(false);
                                            }}
                                            cencelAction={() => {
                                                setPaidPopup(false);
                                            }}
                                        />
                                    );
                                })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ViewMemberDeatils);

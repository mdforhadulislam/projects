import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircleCheckBox } from '../../../../../Utilities/Utilites';
import StyleSheet from './Main.module.css';
import SingelBox from './SingelBox';

export default function EmployeeSalary() {
    const [upComeingComponentBlock, setUpComeingComponentBlock] = useState(false);
    const [dueComponentBlock, setDueComponentBlock] = useState(true);
    const [PaidComponentBlock, setPaidComponentBlock] = useState(false);

    const allEmployeeData = useSelector((state) => state.onlineUser.user);
    const date = new Date();
    const day = date.getDay();
    const today = date.getDate();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dispatch = useDispatch();

    return (
        <>
            <div className={StyleSheet.employee__salary__container}>
                <div className={StyleSheet.employee__salary__container__header}>
                    <CircleCheckBox
                        name="Upcoming"
                        title="Upcoming"
                        actions={(value) => {
                            setUpComeingComponentBlock(true);
                            setDueComponentBlock(false);
                            setPaidComponentBlock(false);
                        }}
                        value={upComeingComponentBlock}
                        style={{ marginLeft: '72%' }}
                    />

                    <CircleCheckBox
                        name="Due"
                        title="Due"
                        actions={(value) => {
                            setDueComponentBlock(true);
                            setUpComeingComponentBlock(false);
                            setPaidComponentBlock(false);
                        }}
                        value={dueComponentBlock}
                        style={{ width: '6vw' }}
                    />

                    <CircleCheckBox
                        name="Paid"
                        title="Paid"
                        actions={(value) => {
                            setPaidComponentBlock(true);
                            setUpComeingComponentBlock(false);
                            setDueComponentBlock(false);
                        }}
                        value={PaidComponentBlock}
                        style={{ width: '6vw' }}
                    />
                </div>

                <div className={StyleSheet.employee__salary__container__body}>
                    <div className={StyleSheet.employee__salary__container__body__coloum__header}>
                        <ul>
                            <li>Name</li>
                            <li>Salary Ammount</li>
                            <li>Salary Date</li>
                            <li>Status</li>
                        </ul>
                    </div>

                    <div
                        className={StyleSheet.employee__salary__container__body__all__coloum__body}>
                        {upComeingComponentBlock &&
                            allEmployeeData
                                .filter((user) =>
                                    user.user_salary.salary_every_day !== ''
                                        ? user.user_salary.salary_every_day.split(':')[0] >=
                                              hours &&
                                          user.user_salary.salary_every_day.split(':')[1] >= minutes
                                        : user.user_salary.salary_every_week !== ''
                                        ? user.user_salary.salary_every_week > day
                                        : user.user_salary.salary_every_month !== ''
                                        ? user.user_salary.salary_every_month.split('-')[0] + 30 >=
                                          today + 30
                                        : false
                                )
                                .map((user) => {
                                    return (
                                        <SingelBox
                                            key={user.user_id}
                                            user={user}
                                            salary_status={'Upcoming'}
                                        />
                                    );
                                })}

                        {dueComponentBlock &&
                            allEmployeeData
                                .filter((user) =>
                                    user.user_salary.salary_every_day !== ''
                                        ? user.user_salary.salary_every_day.split(':')[0] <=
                                              hours &&
                                          user.user_salary.salary_every_day.split(':')[1] <= minutes
                                        : user.user_salary.salary_every_week !== ''
                                        ? user.user_salary.salary_every_week < day
                                        : user.user_salary.salary_every_month !== ''
                                        ? user.user_salary.salary_every_month.split('-')[0] <= today
                                        : false
                                )
                                .map((user) => {
                                    return (
                                        <SingelBox
                                            key={user.user_id}
                                            user={user}
                                            salary_status={'Due'}
                                        />
                                    );

                                    // const everyDay = user.user_salary.salary_every_day;
                                    // const everyWeek = user.user_salary.salary_every_week;
                                    // const everyMonth = user.user_salary.salary_every_month;

                                    // if (everyDay !== '') {
                                    //     if (
                                    //         everyDay.split(':')[0] <= hours &&
                                    //         everyDay.split(':')[1] <= minutes
                                    //     ) {
                                    //         return (
                                    //             <SingelBox
                                    //                 key={user.user_id}
                                    //                 user={user}
                                    //                 salary_status={'Due'}
                                    //             />
                                    //         );
                                    //     }
                                    // } else if (everyWeek !== '') {
                                    //     if (everyWeek < day) {
                                    //         return (
                                    //             <SingelBox
                                    //                 key={user.user_id}
                                    //                 user={user}
                                    //                 salary_status={'Due'}
                                    //             />
                                    //         );
                                    //     }
                                    // } else if (everyMonth !== '') {
                                    //     if (everyMonth.split('-')[0] <= today) {
                                    //         return (
                                    //             <SingelBox
                                    //                 key={user.user_id}
                                    //                 user={user}
                                    //                 salary_status={'Due'}
                                    //             />
                                    //         );
                                    //     }
                                    // }
                                })}
                    </div>
                </div>
            </div>
        </>
    );
}

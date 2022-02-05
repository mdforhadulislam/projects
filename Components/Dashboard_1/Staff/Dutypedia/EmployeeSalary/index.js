import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user_salary_status_paid_edit } from '../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/editHeandeler';
import EmployeeSalaryBoxHeader from '../../../../../Utilities/EmployeeSalaryBoxHeader';
import EmployeeSalaryHeader from '../../../../../Utilities/EmployeeSalaryHeader';
import SingelBox from './BoxAndDeatils/SingelBox';
import ViewMemberDeatils from './BoxAndDeatils/ViewMemberDeatils';
import StyleSheet from './Main.module.css';
import EditEmployeeSalary from './PopupBox/EditEmployeeSalary';
import PaidPopup from './PopupBox/PaidPopup';

function EmployeeSalary() {
    const [upComeingComponentBlock, setUpComeingComponentBlock] = useState(false);
    const [dueComponentBlock, setDueComponentBlock] = useState(true);
    const [PaidComponentBlock, setPaidComponentBlock] = useState(false);
    const [paidPopup, setPaidPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [id, setId] = useState('');
    const [viewDeatils, setViewDeatils] = useState(false);
    const dispatch = useDispatch();
    const allEmployeeData = useSelector((state) => state.onlineUser.user);
    return (
        <>
            <div className={StyleSheet.employee__salary__container}>
                <EmployeeSalaryHeader
                    upcomingActions={(value) => {
                        setUpComeingComponentBlock(true);
                        setDueComponentBlock(false);
                        setPaidComponentBlock(false);
                    }}
                    upcomingValue={upComeingComponentBlock}
                    dueActions={(value) => {
                        setDueComponentBlock(true);
                        setUpComeingComponentBlock(false);
                        setPaidComponentBlock(false);
                    }}
                    dueValue={dueComponentBlock}
                    paidActions={(value) => {
                        setPaidComponentBlock(true);
                        setUpComeingComponentBlock(false);
                        setDueComponentBlock(false);
                    }}
                    paidValue={PaidComponentBlock}
                />

                <div className={StyleSheet.employee__salary__container__body}>
                    <EmployeeSalaryBoxHeader />

                    <div
                        className={StyleSheet.employee__salary__container__body__all__coloum__body}>
                        {upComeingComponentBlock &&
                            allEmployeeData
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_upcoming &&
                                        user.user_salary.salary_status_due === false
                                )
                                .map((user) => {
                                    return (
                                        <SingelBox
                                            key={user.user_id}
                                            user={user}
                                            setId={setId}
                                            setPaidPopup={setPaidPopup}
                                            setEditPopup={setEditPopup}
                                            setViewDeatils={setViewDeatils}
                                        />
                                    );
                                })}
                        {dueComponentBlock &&
                            allEmployeeData
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_due &&
                                        user.user_salary.salary_status_upcoming === false
                                )
                                .map((user) => {
                                    return (
                                        <SingelBox
                                            key={user.user_id}
                                            user={user}
                                            setId={setId}
                                            setPaidPopup={setPaidPopup}
                                            setEditPopup={setEditPopup}
                                            setViewDeatils={setViewDeatils}
                                        />
                                    );
                                })}
                        {PaidComponentBlock &&
                            allEmployeeData
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_paid
                                )
                                .map((user) => {
                                    return (
                                        <SingelBox
                                            key={user.user_id}
                                            user={user}
                                            setId={setId}
                                            setEditPopup={setEditPopup}
                                            setViewDeatils={setViewDeatils}
                                        />
                                    );
                                })}
                    </div>
                </div>
            </div>

            {paidPopup &&
                allEmployeeData
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <PaidPopup
                                key={user.user_id}
                                user={user}
                                paidPopup={paidPopup}
                                setPaidPopup={setPaidPopup}
                                confirmActions={(value) => {
                                    dispatch(user_salary_status_paid_edit(value));
                                    setPaidPopup(false);
                                }}
                                cencelAction={() => {
                                    setPaidPopup(false);
                                }}
                            />
                        );
                    })}
            {editPopup &&
                allEmployeeData
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditEmployeeSalary
                                key={user.user_id}
                                user={user}
                                editPopup={editPopup}
                                setEditPopup={setEditPopup}
                            />
                        );
                    })}

            {viewDeatils &&
                allEmployeeData
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <ViewMemberDeatils
                                key={user.user_id}
                                user={user}
                                setViewDeatils={setViewDeatils}
                            />
                        );
                    })}
        </>
    );
}
export default React.memo(EmployeeSalary);

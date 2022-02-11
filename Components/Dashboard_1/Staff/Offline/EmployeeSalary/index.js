import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit_offline_user_salary_status_set_paid } from '../../../../../Redux/Dashboard_1/Action/Staff/Offline/offlineEditHendeler';
import EmployeeSalaryBoxHeader from '../../../../../Utilities/EmployeeSalaryBoxHeader';
import EmployeeSalaryHeader from '../../../../../Utilities/EmployeeSalaryHeader';
import SingelBox from './BoxAndDeatils/SingleBox';
import ViewDeatils from './BoxAndDeatils/ViewDeatils';
import StyleSheet from './Main.module.css';
import EditEmployeeSalary from './PopupBox/EditEmployeeSalary';
import PaidPopup from './PopupBox/PaidPopup';

function EmployeeSalary() {
    const allUser = useSelector((state) => state.offlineUser.offline_user);
    const dispatch = useDispatch();

    const [upComeingComponentBlock, setUpComeingComponentBlock] = useState(false);
    const [dueComponentBlock, setDueComponentBlock] = useState(true);
    const [PaidComponentBlock, setPaidComponentBlock] = useState(false);
    const [id, setId] = useState('');
    const [paidPopup, setPaidPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [viewDeatils, setViewDeatils] = useState(false);
    return (
        <>
            <div className={StyleSheet.offline__employee__salary}>
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
                <div className={StyleSheet.offline__employee__salary__box__container}>
                    <EmployeeSalaryBoxHeader />

                    <div className={StyleSheet.offline__employee__salary__box__container__body}>
                        {upComeingComponentBlock &&
                            allUser
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_upcoming &&
                                        user.user_salary.salary_status_due === false &&
                                        user.user_salary.salary_status_paid === false
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
                            allUser
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_due &&
                                        user.user_salary.salary_status_paid === false &&
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
                                })}{' '}
                        {PaidComponentBlock &&
                            allUser
                                .filter(
                                    (user) =>
                                        user.user_salary.no_salary_system === false &&
                                        user.user_salary.salary_status_paid &&
                                        user.user_salary.salary_status_due === false &&
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
                    </div>
                </div>
            </div>

            {paidPopup &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <PaidPopup
                                key={user.user_id}
                                user={user}
                                paidPopup={paidPopup}
                                setPaidPopup={setPaidPopup}
                                confirmActions={(value) => {
                                    dispatch(edit_offline_user_salary_status_set_paid(value));
                                    setPaidPopup(false);
                                }}
                                cencelAction={() => {
                                    setPaidPopup(false);
                                }}
                            />
                        );
                    })}

            {editPopup &&
                allUser
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
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <ViewDeatils
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

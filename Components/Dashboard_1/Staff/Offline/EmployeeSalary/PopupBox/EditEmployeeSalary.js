import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import {
    edit_offline_user_salary_amount,
    edit_offline_user_salary_date_every_day,
    edit_offline_user_salary_date_every_month,
    edit_offline_user_salary_date_every_week,
    edit_offline_user_salary_status,
    edit_offline_user_salary_status_set_due,
    edit_offline_user_salary_status_set_upcoming,
    edit_offline_user_salary_type
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Offline/offlineEditHendeler';
import {
    SalaryAmount,
    SalaryDateEveryDay,
    SalaryDateEveryMonth,
    SalaryDateEveryWeek,
    SalaryStatus,
    SalaryType
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditEmployeeSalary.module.css';

function EditEmployeeSalary({ editPopup, setEditPopup, user }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };
    const dispatch = useDispatch();

    return (
        <Modal isOpen={editPopup} style={customStyles}>
            <div className={StyleSheet.edit__employee__salary__container}>
                <form className={StyleSheet.edit__employee__salary__container__form}>
                    <div className={StyleSheet.edit__employee__salary__container__form__row__one}>
                        <SalaryType
                            value={user.user_salary.salary_type}
                            actions={(value) => {
                                dispatch(
                                    edit_offline_user_salary_type({ id: user.user_id, value })
                                );
                            }}
                        />

                        <SalaryAmount
                            value={user.user_salary.salary_amount}
                            actions={(value) => {
                                dispatch(
                                    edit_offline_user_salary_amount({ id: user.user_id, value })
                                );
                            }}
                        />
                    </div>
                    <div className={StyleSheet.edit__employee__salary__container__form__row__two}>
                        {user.user_salary.salary_type === 'daily' && (
                            <SalaryDateEveryDay
                                actions={(value) => {
                                    dispatch(
                                        edit_offline_user_salary_date_every_day({
                                            id: user.user_id,
                                            value
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_upcoming({
                                            id: user.user_id
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_due({
                                            id: user.user_id
                                        })
                                    );
                                }}
                                value={user.user_salary.salary_every_day}
                            />
                        )}

                        {user.user_salary.salary_type === 'weekly' && (
                            <SalaryDateEveryWeek
                                actions={(value) => {
                                    dispatch(
                                        edit_offline_user_salary_date_every_week({
                                            id: user.user_id,
                                            value
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_upcoming({
                                            id: user.user_id
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_due({
                                            id: user.user_id
                                        })
                                    );
                                }}
                                value={user.user_salary.salary_every_week}
                            />
                        )}

                        {user.user_salary.salary_type === 'monthly' && (
                            <SalaryDateEveryMonth
                                actions={(value) => {
                                    dispatch(
                                        edit_offline_user_salary_date_every_month({
                                            id: user.user_id,
                                            value
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_upcoming({
                                            id: user.user_id
                                        })
                                    );
                                    dispatch(
                                        edit_offline_user_salary_status_set_due({
                                            id: user.user_id
                                        })
                                    );
                                }}
                                value={user.user_salary.salary_every_month}
                            />
                        )}

                        <SalaryStatus
                            value={
                                user.user_salary.salary_status_upcoming
                                    ? 'upcoming'
                                    : user.user_salary.salary_status_due
                                    ? 'due'
                                    : user.user_salary.salary_status_paid
                                    ? 'paid'
                                    : ''
                            }
                            action={(value) => {
                                dispatch(
                                    edit_offline_user_salary_status({
                                        id: user.user_id,
                                        value
                                    })
                                );
                            }}
                        />
                    </div>
                    <div className={StyleSheet.edit__employee__salary__container__form__button}>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                setEditPopup(false);
                            }}>
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setEditPopup(false);
                            }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default React.memo(EditEmployeeSalary);

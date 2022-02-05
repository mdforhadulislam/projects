import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import BackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import {
    user_account_balance_access_edit,
    user_company_holiday_access_edit,
    user_customer_review_access_edit,
    user_dashbord_access_edit,
    user_expencess_access_edit,
    user_groups_access_edit,
    user_joining_date_edit,
    user_member_access_edit,
    user_noAccess_access_edit,
    user_notice_access_edit,
    user_no_salary_system_edit,
    user_order_access_edit,
    user_position_edit,
    user_salary_amount_edit,
    user_salary_date_every_date_edit,
    user_salary_date_every_month_edit,
    user_salary_date_every_week_edit,
    user_salary_type_edit,
    user_staff_partner_access_edit
} from '../../../../../../Redux/Dashboard_1/Action/Dutypedia/editHeandeler';
import {
    CheckBox,
    JoiningDate,
    Position,
    SalaryAmount,
    SalaryDateEveryDay,
    SalaryDateEveryMonth,
    SalaryDateEveryWeek,
    SalaryType
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditCreateEmployee.module.css';

function EditCreateEmployee({ user, setRenderEditCreateEmployee, setRenderEditMemberInformation }) {
    const dispatch = useDispatch();
    return (
        <div className={StyleSheet.edit__create__employee}>
            <div className={StyleSheet.edit__create__employee__container}>
                <div className={StyleSheet.edit__create__employee__container__back__icon}>
                    <Image
                        onClick={() => {
                            setRenderEditCreateEmployee(false);
                            setRenderEditMemberInformation(true);
                        }}
                        src={BackIcon}
                        alt="BackIcon"
                    />
                </div>

                <div className={StyleSheet.edit__create__employee__container__row__one}>
                    <Position
                        actions={(value) => {
                            dispatch(
                                user_position_edit({ id: user.user_id, user_position: value })
                            );
                        }}
                        value={user.user_position}
                    />
                    <JoiningDate
                        actions={(value) => {
                            dispatch(
                                user_joining_date_edit({
                                    id: user.user_id,
                                    user_joining_date: value
                                })
                            );
                        }}
                        value={user.user_joining_date}
                    />
                </div>

                {user.user_salary.no_salary_system ? (
                    ''
                ) : (
                    <>
                        <div className={StyleSheet.edit__create__employee__container__row__two}>
                            <SalaryAmount
                                actions={(value) => {
                                    dispatch(
                                        user_salary_amount_edit({
                                            id: user.user_id,
                                            salary_amount: value
                                        })
                                    );
                                }}
                                value={user.user_salary.salary_amount}
                            />
                            <SalaryType
                                actions={(value) => {
                                    dispatch(
                                        user_salary_type_edit({
                                            id: user.user_id,
                                            salary_type: value
                                        })
                                    );
                                }}
                                value={user.user_salary.salary_type}
                            />
                        </div>
                        <div className={StyleSheet.edit__create__employee__container__row__three}>
                            {user.user_salary.salary_type === 'daily' && (
                                <SalaryDateEveryDay
                                    actions={(value) => {
                                        dispatch(
                                            user_salary_date_every_date_edit({
                                                id: user.user_id,
                                                salary_every_day: value
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
                                            user_salary_date_every_week_edit({
                                                id: user.user_id,
                                                salary_every_week: value
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
                                            user_salary_date_every_month_edit({
                                                id: user.user_id,
                                                salary_every_month: value
                                            })
                                        );
                                    }}
                                    value={user.user_salary.salary_every_month}
                                />
                            )}
                        </div>
                    </>
                )}
                <div className={StyleSheet.edit__create__employee__container__row__four}>
                    <div className={StyleSheet.checkbox__container}>
                        <div className={StyleSheet.checkbox__container__input}>
                            <input
                                type="checkbox"
                                name="nomoney"
                                id="nomoney"
                                onChange={() => {
                                    dispatch(
                                        user_no_salary_system_edit({
                                            id: user.user_id,
                                            no_salary_system: user.user_salary.no_salary_system
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <label
                                htmlFor="nomoney"
                                className={
                                    user.user_salary.no_salary_system
                                        ? StyleSheet.checked
                                        : StyleSheet.unchecked
                                }>
                                No Salary System
                            </label>
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.edit__create__employee__container__row__five}>
                    <div className={StyleSheet.edit__create__employee__container__row__five__title}>
                        Access Functionality
                    </div>

                    <div className={StyleSheet.edit__create__employee__container__row__five__left}>
                        <CheckBox
                            name="dashboard"
                            title="Dashboard"
                            value={user.accessFunctionality.user_dashbord}
                            actions={(value) => {
                                dispatch(
                                    user_dashbord_access_edit({
                                        id: user.user_id,
                                        user_dashbord: user.accessFunctionality.user_dashbord
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="order"
                            title="Order"
                            value={user.accessFunctionality.user_order}
                            actions={(value) => {
                                dispatch(
                                    user_order_access_edit({
                                        id: user.user_id,
                                        user_order: user.accessFunctionality.user_order
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="member"
                            title="Member"
                            value={user.accessFunctionality.user_member}
                            actions={(value) => {
                                dispatch(
                                    user_member_access_edit({
                                        id: user.user_id,
                                        user_member: user.accessFunctionality.user_member
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="groups"
                            title="Groups"
                            value={user.accessFunctionality.user_group}
                            actions={(value) => {
                                dispatch(
                                    user_groups_access_edit({
                                        id: user.user_id,
                                        user_group: user.accessFunctionality.user_group
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="notice"
                            title="Notice"
                            value={user.accessFunctionality.user_notice}
                            actions={(value) => {
                                dispatch(
                                    user_notice_access_edit({
                                        id: user.user_id,
                                        user_notice: user.accessFunctionality.user_notice
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="noAccess"
                            title="No Access In Functionality"
                            value={user.accessFunctionality.user_no_access}
                            actions={(value) => {
                                dispatch(
                                    user_noAccess_access_edit({
                                        id: user.user_id,
                                        user_no_access: user.accessFunctionality.user_no_access
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />
                    </div>

                    <div className={StyleSheet.edit__create__employee__container__row__five__right}>
                        <CheckBox
                            name="staffPartner"
                            title="Staff & Partner"
                            value={user.accessFunctionality.user_staff_and_partner}
                            actions={(value) => {
                                dispatch(
                                    user_staff_partner_access_edit({
                                        id: user.user_id,
                                        user_staff_and_partner: user.accessFunctionality
                                            .user_staff_and_partner
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="expencess"
                            title="Expencess"
                            value={user.accessFunctionality.user_expencess}
                            actions={(value) => {
                                dispatch(
                                    user_expencess_access_edit({
                                        id: user.user_id,
                                        user_expencess: user.accessFunctionality.user_expencess
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="accountBalance"
                            title="Account Balance"
                            value={user.accessFunctionality.user_account_balance}
                            actions={(value) => {
                                dispatch(
                                    user_account_balance_access_edit({
                                        id: user.user_id,
                                        user_account_balance: user.accessFunctionality
                                            .user_account_balance
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="customerReview"
                            title="Customer Review"
                            value={user.accessFunctionality.user_customer_review}
                            actions={(value) => {
                                dispatch(
                                    user_customer_review_access_edit({
                                        id: user.user_id,
                                        user_customer_review: user.accessFunctionality
                                            .user_customer_review
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />

                        <CheckBox
                            name="companyHoliday"
                            title="Company Holiday"
                            value={user.accessFunctionality.user_company_holiday}
                            actions={(value) => {
                                dispatch(
                                    user_company_holiday_access_edit({
                                        id: user.user_id,
                                        user_company_holiday: user.accessFunctionality
                                            .user_company_holiday
                                            ? false
                                            : true
                                    })
                                );
                            }}
                        />
                    </div>
                </div>

                <div className={StyleSheet.edit__create__employee__container__button}>
                    <button
                        type="button"
                        onClick={() => {
                            setRenderEditCreateEmployee(false);
                        }}
                        className={StyleSheet.edit__create__employee__container__button__save__btn}>
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setRenderEditCreateEmployee(false);
                        }}
                        className={
                            StyleSheet.edit__create__employee__container__button__cencel__btn
                        }>
                        Cencel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditCreateEmployee;

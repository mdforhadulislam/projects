import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    user_account_balance_access,
    user_company_holiday_access,
    user_customer_review_access,
    user_dashbord_access,
    user_expencess_access,
    user_group_access,
    user_joining_date,
    user_member_access,
    user_notice_access,
    user_no_access,
    user_no_salary_system_access,
    user_order_access,
    user_position,
    user_salary_amount,
    user_salary_date_every_day,
    user_salary_date_every_month,
    user_salary_date_every_week,
    user_salary_type,
    user_staff_and_partner_access
} from '../../../../../../Redux/Dashboard_1/Action/Dutypedia/index';
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
import StyleSheet from '../PopupBoxStyle/CreateEmployeeBody.module.css';

function CreateEmployeeBody() {
    const dispatch = useDispatch();

    const userPosition = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_position
    );
    const joiningDate = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_joining_date
    );
    const salaryAmount = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_salary_amount
    );
    const salaryType = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_salary_type
    );
    const time = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_salary_date_every_day
    );
    const week = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_salary_date_every_week
    );
    const month = useSelector(
        (state) =>
            state.dutypedia.employeeListReducers.user_position_and_joining_date_and_salary
                .user_salary_date_every_date
    );
    const accessFunctionality = useSelector(
        (state) => state.dutypedia.employeeListReducers.accessFunctionality
    );

    let [renderSalaryReletedBox, setRenderSalaryReletedBox] = useState(true);

    const no_salary_check_box_hendeler = (e) => {
        renderSalaryReletedBox ? setRenderSalaryReletedBox(false) : setRenderSalaryReletedBox(true);
        dispatch(user_no_salary_system_access(e.target.checked));
    };

    return (
        <>
            <div className={StyleSheet.create__employee__body__container}>
                <div className={StyleSheet.create__employee__body__container__first__row}>
                    <Position
                        actions={(value) => dispatch(user_position(value))}
                        value={userPosition}
                    />
                    <JoiningDate
                        actions={(value) => dispatch(user_joining_date(value))}
                        value={joiningDate}
                    />
                </div>

                {renderSalaryReletedBox && (
                    <>
                        <div className={StyleSheet.create__employee__body__container__secoend__row}>
                            <SalaryAmount
                                actions={(value) => dispatch(user_salary_amount(value))}
                                value={salaryAmount}
                            />
                            <SalaryType
                                actions={(value) => dispatch(user_salary_type(value))}
                                value={salaryType}
                            />
                        </div>
                        <div className={StyleSheet.create__employee__body__container__third__row}>
                            {salaryType === 'daily' && (
                                <SalaryDateEveryDay
                                    actions={(value) => dispatch(user_salary_date_every_day(value))}
                                    value={time}
                                />
                            )}
                            {salaryType === 'weekly' && (
                                <SalaryDateEveryWeek
                                    actions={(value) =>
                                        dispatch(user_salary_date_every_week(value))
                                    }
                                    value={week}
                                />
                            )}
                            {salaryType === 'monthly' && (
                                <SalaryDateEveryMonth
                                    actions={(value) =>
                                        dispatch(user_salary_date_every_month(value))
                                    }
                                    value={month}
                                />
                            )}
                        </div>
                    </>
                )}

                <div className={StyleSheet.create__employee__body__container__no__money}>
                    <div className={StyleSheet.checkbox__container}>
                        <div className={StyleSheet.checkbox__container__input}>
                            <input
                                type="checkbox"
                                name="nomoney"
                                id="nomoney"
                                onChange={no_salary_check_box_hendeler}
                            />
                            <label htmlFor="nomoney">No Salary System</label>
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.create__employee__body__container__fourth__row}>
                    <div
                        className={
                            StyleSheet.create__employee__body__container__fourth__row__title
                        }>
                        Access Functionality
                    </div>
                    <div
                        className={StyleSheet.create__employee__body__container__fourth__row__left}>
                        <CheckBox
                            name="dashboard"
                            title="Dashboard"
                            actions={(value) => dispatch(user_dashbord_access(value))}
                            value={accessFunctionality.user_dashbord}
                        />

                        <CheckBox
                            name="order"
                            title="Order"
                            actions={(value) => dispatch(user_order_access(value))}
                            value={accessFunctionality.user_order}
                        />

                        <CheckBox
                            name="member"
                            title="Member"
                            actions={(value) => dispatch(user_member_access(value))}
                            value={accessFunctionality.user_member}
                        />

                        <CheckBox
                            name="groups"
                            title="Groups"
                            actions={(value) => dispatch(user_group_access(value))}
                            value={accessFunctionality.user_group}
                        />

                        <CheckBox
                            name="notice"
                            title="Notice"
                            actions={(value) => dispatch(user_notice_access(value))}
                            value={accessFunctionality.user_notice}
                        />

                        <CheckBox
                            name="noAccess"
                            title="No Access In Functionality"
                            actions={(value) => dispatch(user_no_access(value))}
                            value={accessFunctionality.user_no_access}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.create__employee__body__container__fourth__row__right
                        }>
                        <CheckBox
                            name="staffPartner"
                            title="Staff & Partner"
                            actions={(value) => dispatch(user_staff_and_partner_access(value))}
                            value={accessFunctionality.user_staff_and_partner}
                        />

                        <CheckBox
                            name="expencess"
                            title="Expencess"
                            actions={(value) => dispatch(user_expencess_access(value))}
                            value={accessFunctionality.user_expencess}
                        />

                        <CheckBox
                            name="accountBalance"
                            title="Account Balance"
                            actions={(value) => dispatch(user_account_balance_access(value))}
                            value={accessFunctionality.user_account_balance}
                        />

                        <CheckBox
                            name="customerReview"
                            title="Customer Review"
                            actions={(value) => dispatch(user_customer_review_access(value))}
                            value={accessFunctionality.user_customer_review}
                        />

                        <CheckBox
                            name="companyHoliday"
                            title="Company Holiday"
                            actions={(value) => dispatch(user_company_holiday_access(value))}
                            value={accessFunctionality.user_company_holiday}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(CreateEmployeeBody);

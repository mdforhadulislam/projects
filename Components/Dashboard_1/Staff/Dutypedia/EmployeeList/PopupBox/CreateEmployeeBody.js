import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    // user_account_balance_access,
    // user_company_holiday_access,
    // user_customer_review_access,
    // user_dashbord_access,
    // user_expencess_access,
    // user_group_access,
    user_joining_date,
    user_no_salary,
    // user_member_access,
    // user_notice_access,
    // user_no_access,
    // user_no_salary_system_access,
    // user_order_access,
    user_position,
    user_salary_amount,
    user_salary_date_every_day,
    user_salary_date_every_month,
    user_salary_date_every_week,
    user_salary_status_set_due,
    user_salary_status_set_upcoming,
    user_salary_type
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/index';
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

    const userPosition = useSelector((state) => state.dutypedia.position);
    const joiningDate = useSelector((state) => state.dutypedia.joining_date);
    const salaryAmount = useSelector((state) => state.dutypedia.salary_amount);
    const salaryType = useSelector((state) => state.dutypedia.salary_type);
    const salaryDayTime = useSelector((state) => state.dutypedia.salary_date_every_day);
    const salaryDayWeek = useSelector((state) => state.dutypedia.salary_date_every_week);
    const salaryDayMonth = useSelector((state) => state.dutypedia.salary_date_every_date);
    // const accessFunctionality = useSelector((state) => state.dutypedia.accessFunctionality);

    let [renderSalaryReletedBox, setRenderSalaryReletedBox] = useState(true);
    const [access, setAccess] = useState({
        dashboard: false,
        order: false,
        account_balance: false,
        expencess: false,
        customer_review: false,
        member: false,
        group: false,
        notice: false,
        company_holiday: false,
        staff_and_partner: false,
        no_access: false
    });

    const no_salary_check_box_hendeler = (e) => {
        renderSalaryReletedBox ? setRenderSalaryReletedBox(false) : setRenderSalaryReletedBox(true);
        dispatch(user_no_salary(renderSalaryReletedBox));
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
                            {salaryType === 'daily' || salaryType === '' ? (
                                <SalaryDateEveryDay
                                    actions={(value) => {
                                        dispatch(user_salary_date_every_day(value));
                                        dispatch(user_salary_status_set_upcoming());
                                        dispatch(user_salary_status_set_due());
                                    }}
                                    value={salaryDayTime}
                                />
                            ) : (
                                ''
                            )}
                            {salaryType === 'weekly' && (
                                <SalaryDateEveryWeek
                                    actions={(value) => {
                                        dispatch(user_salary_date_every_week(value));
                                        dispatch(user_salary_status_set_upcoming());
                                        dispatch(user_salary_status_set_due());
                                    }}
                                    value={salaryDayWeek}
                                />
                            )}
                            {salaryType === 'monthly' && (
                                <SalaryDateEveryMonth
                                    actions={(value) => {
                                        dispatch(user_salary_date_every_month(value));
                                        dispatch(user_salary_status_set_upcoming());
                                        dispatch(user_salary_status_set_due());
                                    }}
                                    value={salaryDayMonth}
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
                            actions={(value) => {
                                setAccess({ ...access, dashboard: value });
                            }}
                            value={access.dashboard}
                        />

                        <CheckBox
                            name="order"
                            title="Order"
                            actions={(value) => {
                                setAccess({ ...access, order: value });
                            }}
                            value={access.order}
                        />

                        <CheckBox
                            name="member"
                            title="Member"
                            actions={(value) => {
                                setAccess({ ...access, member: value });
                            }}
                            value={access.member}
                        />

                        <CheckBox
                            name="groups"
                            title="Groups"
                            actions={(value) => {
                                setAccess({ ...access, group: value });
                            }}
                            value={access.group}
                        />

                        <CheckBox
                            name="notice"
                            title="Notice"
                            actions={(value) => {
                                setAccess({ ...access, notice: value });
                            }}
                            value={access.notice}
                        />

                        <CheckBox
                            name="noAccess"
                            title="No Access In Functionality"
                            actions={(value) => {
                                setAccess({
                                    dashboard: false,
                                    order: false,
                                    account_balance: false,
                                    expencess: false,
                                    customer_review: false,
                                    member: false,
                                    group: false,
                                    notice: false,
                                    company_holiday: false,
                                    staff_and_partner: false,
                                    no_access: value
                                });
                            }}
                            value={access.no_access}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.create__employee__body__container__fourth__row__right
                        }>
                        <CheckBox
                            name="staffPartner"
                            title="Staff & Partner"
                            actions={(value) => {
                                setAccess({ ...access, staff_and_partner: value });
                            }}
                            value={access.staff_and_partner}
                        />

                        <CheckBox
                            name="expencess"
                            title="Expencess"
                            actions={(value) => {
                                setAccess({ ...access, expencess: value });
                            }}
                            value={access.expencess}
                        />

                        <CheckBox
                            name="accountBalance"
                            title="Account Balance"
                            actions={(value) => {
                                setAccess({ ...access, account_balance: value });
                            }}
                            value={access.account_balance}
                        />

                        <CheckBox
                            name="customerReview"
                            title="Customer Review"
                            actions={(value) => {
                                setAccess({ ...access, customer_review: value });
                            }}
                            value={access.customer_review}
                        />

                        <CheckBox
                            name="companyHoliday"
                            title="Company Holiday"
                            actions={(value) => {
                                setAccess({ ...access, company_holiday: value });
                            }}
                            value={access.company_holiday}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(CreateEmployeeBody);

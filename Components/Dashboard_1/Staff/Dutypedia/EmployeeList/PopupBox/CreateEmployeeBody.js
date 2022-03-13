import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    user_access,
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
    user_removed_access,
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
import { getEmployeePermitionURL } from '../../../api/apiUrl';
import { getApiCall } from '../../../api/onlineEmployeeListApi';
import StyleSheet from '../PopupBoxStyle/CreateEmployeeBody.module.css';

function CreateEmployeeBody() {
    const [renderSalaryReletedBox, setRenderSalaryReletedBox] = useState(true);
    const [getPermitionData, setGetPermitionData] = useState([]);

    const userPosition = useSelector((state) => state.dutypedia.position);
    const joiningDate = useSelector((state) => state.dutypedia.joining_date);
    const salaryAmount = useSelector((state) => state.dutypedia.salary_amount);
    const salaryType = useSelector((state) => state.dutypedia.salary_type);
    const salaryDayTime = useSelector((state) => state.dutypedia.salary_date_every_day);
    const salaryDayWeek = useSelector((state) => state.dutypedia.salary_date_every_week);
    const salaryDayMonth = useSelector((state) => state.dutypedia.salary_date_every_date);
    // const accessFunctionality = useSelector((state) => state.dutypedia.accessFunctionality);

    const dispatch = useDispatch();

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

    useEffect(() => {
        getApiCall(getEmployeePermitionURL)
            .then((response) => {
                setGetPermitionData(response);
            })
            .catch((error) => {
                console.log(`Error ${error}`);
            });
    }, []);

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
                                        dispatch(user_salary_date_every_week(''));
                                        dispatch(user_salary_date_every_month(''));
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
                                        dispatch(user_salary_date_every_day(''));
                                        dispatch(user_salary_date_every_month(''));
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
                                        dispatch(user_salary_date_every_week(''));
                                        dispatch(user_salary_date_every_day(''));
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
                                setAccess({
                                    ...access,
                                    dashboard: access.dashboard ? false : true,
                                    no_access: false
                                });
                                access.dashboard
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Dashboard')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Dashboard')
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.dashboard}
                        />

                        <CheckBox
                            name="order"
                            title="Order"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    order: access.order ? false : true,
                                    no_access: false
                                });
                                access.order
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Order')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Order')
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.order}
                        />

                        <CheckBox
                            name="member"
                            title="Member"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    member: access.member ? false : true,
                                    no_access: false
                                });
                                access.member
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Member')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Member')
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.member}
                        />

                        <CheckBox
                            name="groups"
                            title="Groups"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    group: access.group ? false : true,
                                    no_access: false
                                });
                                access.group
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Groups')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Groups')
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.group}
                        />

                        <CheckBox
                            name="notice"
                            title="Notice"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    notice: access.notice ? false : true,
                                    no_access: false
                                });
                                access.notice
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Notices')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Notices')
                                          .map((item) => dispatch(user_access({ id: item.id })));
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
                                    no_access: access.no_access ? false : true
                                });
                                access.no_access
                                    ? getPermitionData
                                          .filter(
                                              (items) =>
                                                  items.access_title ===
                                                  'No Access In Functionality'
                                          )
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter(
                                              (items) =>
                                                  items.access_title ===
                                                  'No Access In Functionality'
                                          )
                                          .map((item) => dispatch(user_access({ id: item.id })));
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
                                setAccess({
                                    ...access,
                                    staff_and_partner: access.staff_and_partner ? false : true,
                                    no_access: false
                                });
                                access.staff_and_partner
                                    ? getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Staff & Partner'
                                          )
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Staff & Partner'
                                          )
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.staff_and_partner}
                        />

                        <CheckBox
                            name="expencess"
                            title="Expencess"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    expencess: access.expencess ? false : true,
                                    no_access: false
                                });
                                access.expencess
                                    ? getPermitionData
                                          .filter((items) => items.access_title === 'Expencess')
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter((items) => items.access_title === 'Expencess')
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.expencess}
                        />

                        <CheckBox
                            name="accountBalance"
                            title="Account Balance"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    account_balance: access.account_balance ? false : true,
                                    no_access: false
                                });
                                access.account_balance
                                    ? getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Account Balance'
                                          )
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Account Balance'
                                          )
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.account_balance}
                        />

                        <CheckBox
                            name="customerReview"
                            title="Customer Review"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    customer_review: access.customer_review ? false : true,
                                    no_access: false
                                });
                                access.customer_review
                                    ? getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Customer Review'
                                          )
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Customer Review'
                                          )
                                          .map((item) => dispatch(user_access({ id: item.id })));
                            }}
                            value={access.customer_review}
                        />

                        <CheckBox
                            name="companyHoliday"
                            title="Company Holiday"
                            actions={(value) => {
                                setAccess({
                                    ...access,
                                    company_holiday: access.company_holiday ? false : true,
                                    no_access: false
                                });
                                access.company_holiday
                                    ? getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Company Holiday'
                                          )
                                          .map((item) =>
                                              dispatch(user_removed_access({ id: item.id }))
                                          )
                                    : getPermitionData
                                          .filter(
                                              (items) => items.access_title === 'Company Holiday'
                                          )
                                          .map((item) => dispatch(user_access({ id: item.id })));
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

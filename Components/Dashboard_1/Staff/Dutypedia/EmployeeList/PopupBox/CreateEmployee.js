import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import {
    user_access,
    user_joining_date,
    user_no_salary,
    user_position,
    user_removed_access,
    user_remove_data,
    user_salary_amount,
    user_salary_date_every_day,
    user_salary_date_every_month,
    user_salary_date_every_week,
    user_salary_status_set_due,
    user_salary_status_set_upcoming,
    user_salary_type
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia';
import {
    CheckBox,
    Position,
    SalaryAmount,
    SalaryDateEveryDay,
    SalaryDateEveryMonth,
    SalaryDateEveryWeek,
    SalaryType,
    SetDate
} from '../../../../../../Utilities/Utilites';
import { getEmployeePermitionURL, postEmployeeDetailsURL } from '../../../api/apiUrl';
import { getApiCall, postApiCall } from '../../../api/onlineEmployeeListApi';

function CreateEmployee({
    setAddInformationPopup,
    setCreateEmployeePopup,
    setSuccessfullyDonePopup
}) {
    const [renderSalaryReletedBox, setRenderSalaryReletedBox] = useState(true);
    const [getPermitionData, setGetPermitionData] = useState([]);

    const userPosition = useSelector((state) => state.dutypedia.position);
    const joiningDate = useSelector((state) => state.dutypedia.joining_date);
    const salaryAmount = useSelector((state) => state.dutypedia.salary_amount);
    const salaryType = useSelector((state) => state.dutypedia.salary_type);
    const salaryDayTime = useSelector((state) => state.dutypedia.salary_date_every_day);
    const salaryDayWeek = useSelector((state) => state.dutypedia.salary_date_every_week);
    const salaryDayMonth = useSelector((state) => state.dutypedia.salary_date_every_date);
    const postUserOBJ = useSelector((state) => state.dutypedia);

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
    const submitHendeler = (e) => {
        e.preventDefault();
        console.log(postUserOBJ);
        postApiCall(postEmployeeDetailsURL, postUserOBJ).then((res) => {
            setCreateEmployeePopup(false);
            setSuccessfullyDonePopup(true);
            setAddInformationPopup(false);
            console.log(res);
            dispatch(
                user_remove_data({
                    join_as: [],
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    gender: '',
                    blood_group: '',
                    date_of_birth: new Date(),
                    religion: '',
                    nationality: '',

                    pres_region: '',
                    pres_city: '',
                    pres_area: '',
                    pres_address: '',

                    perm_region: '',
                    perm_city: '',
                    perm_area: '',
                    perm_address: '',

                    file_uplaod: [],

                    user: null,
                    position: '',
                    joining_date: new Date(),
                    no_salary: false,
                    salary_amount: '',
                    salary_type: '',
                    salary_date_every_day: '',
                    salary_date_every_month: '',
                    salary_date_every_week: '',
                    access: []
                })
            );
        });
    };

    return (
        <div
            className="w-full min-h-full absolute py-[30px] top-0 left-0  flex justify-center align-top"
            style={{ background: '#ffffff69', backdropFilter: 'blur(6px)' }}>
            <form
                className="w-[520px] h-auto bg-white p-[20px] shadow-3xl rounded-[13px] relative"
                onSubmit={submitHendeler}>
                <div className="w-full h-auto flex">
                    <Image
                        width={'28px'}
                        height={'20px'}
                        className="cursor-pointer"
                        onClick={() => {
                            setCreateEmployeePopup(false);
                            setAddInformationPopup(true);
                        }}
                        src={BackIcon}
                        alt="BackIcon"
                    />
                </div>

                <div className="w-full h-auto">
                    {/* <CreateEmployeeBody /> */}

                    <div className="w-full h-auto pt-[18px] pb-[6px]">
                        <div className="w-full h-auto flex align-middle justify-between flex-row">
                            <Position
                                actions={(value) => dispatch(user_position(value))}
                                value={userPosition}
                            />
                            <SetDate
                                titleStyle={{ paddingBottom: '1vw' }}
                                rootStyle={{ padding: '0' }}
                                title={'Joining Date'}
                                actions={(value) => dispatch(user_joining_date(value))}
                                value={joiningDate}
                            />
                        </div>

                        {renderSalaryReletedBox && (
                            <>
                                <div className="w-full h-auto flex align-middle justify-between flex-row">
                                    <SalaryAmount
                                        actions={(value) => dispatch(user_salary_amount(value))}
                                        value={salaryAmount}
                                    />
                                    <SalaryType
                                        actions={(value) => dispatch(user_salary_type(value))}
                                        value={salaryType}
                                    />
                                </div>
                                <div className="w-full h-auto">
                                    {salaryType === 'Daily' || salaryType === '' ? (
                                        <SalaryDateEveryDay
                                            actions={(value) => {
                                                dispatch(user_salary_date_every_day(value));
                                                dispatch(user_salary_date_every_week(''));
                                                dispatch(user_salary_date_every_month(''));
                                                dispatch(user_salary_status_set_upcoming());
                                                dispatch(user_salary_status_set_due());
                                            }}
                                            value={salaryDayTime === null ? '' : value}
                                        />
                                    ) : (
                                        ''
                                    )}
                                    {salaryType === 'Weekly' && (
                                        <SalaryDateEveryWeek
                                            actions={(value) => {
                                                dispatch(user_salary_date_every_week(value));
                                                dispatch(user_salary_date_every_day(null));
                                                dispatch(user_salary_date_every_month(''));
                                                dispatch(user_salary_status_set_upcoming());
                                                dispatch(user_salary_status_set_due());
                                            }}
                                            value={salaryDayWeek}
                                        />
                                    )}
                                    {salaryType === 'Monthly' && (
                                        <SalaryDateEveryMonth
                                            actions={(value) => {
                                                dispatch(user_salary_date_every_month(value));
                                                dispatch(user_salary_date_every_week(''));
                                                dispatch(user_salary_date_every_day(null));
                                                dispatch(user_salary_status_set_upcoming());
                                                dispatch(user_salary_status_set_due());
                                            }}
                                            value={salaryDayMonth}
                                        />
                                    )}
                                </div>
                            </>
                        )}

                        <div className="w-full h-auto pt-[12px]">
                            <CheckBox
                                title={'No Salary System'}
                                name={'noSalary'}
                                value={!renderSalaryReletedBox}
                                actions={no_salary_check_box_hendeler}
                            />
                        </div>

                        <div className="w-[75%] h-auto grid grid-cols-2">
                            <div className=" col-start-1 col-end-5 text-[18px] pt-[20px] pb-[13px] text-[#313131]">
                                Access Functionality
                            </div>
                            <div className="col-start-1 col-end-2">
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
                                                  .filter(
                                                      (items) => items.access_title === 'Dashboard'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) => items.access_title === 'Dashboard'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .filter(
                                                      (items) => items.access_title === 'Member'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) => items.access_title === 'Member'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .filter(
                                                      (items) => items.access_title === 'Groups'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) => items.access_title === 'Groups'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .filter(
                                                      (items) => items.access_title === 'Notices'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) => items.access_title === 'Notices'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
                                    }}
                                    value={access.no_access}
                                />
                            </div>
                            <div className="col-start-2 col-end-3">
                                <CheckBox
                                    name="staffPartner"
                                    title="Staff & Partner"
                                    actions={(value) => {
                                        setAccess({
                                            ...access,
                                            staff_and_partner: access.staff_and_partner
                                                ? false
                                                : true,
                                            no_access: false
                                        });
                                        access.staff_and_partner
                                            ? getPermitionData
                                                  .filter(
                                                      (items) =>
                                                          items.access_title === 'Staff & Partner'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) =>
                                                          items.access_title === 'Staff & Partner'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                  .filter(
                                                      (items) => items.access_title === 'Expencess'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) => items.access_title === 'Expencess'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                      (items) =>
                                                          items.access_title === 'Account Balance'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) =>
                                                          items.access_title === 'Account Balance'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                      (items) =>
                                                          items.access_title === 'Customer Review'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) =>
                                                          items.access_title === 'Customer Review'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
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
                                                      (items) =>
                                                          items.access_title === 'Company Holiday'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_removed_access({ id: item.id }))
                                                  )
                                            : getPermitionData
                                                  .filter(
                                                      (items) =>
                                                          items.access_title === 'Company Holiday'
                                                  )
                                                  .map((item) =>
                                                      dispatch(user_access({ id: item.id }))
                                                  );
                                    }}
                                    value={access.company_holiday}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[60%] h-auto pt-[13px] pb-[7px] flex justify-between float-right">
                    <button
                        type="submit"
                        className="w-[45%] h-auto p-[7px] text-[17px] border-none outline-none rounded-[4px] cursor-pointer bg-[#da1e37] text-white">
                        Invite Now
                    </button>

                    <button
                        type="button"
                        className="w-[45%] h-auto p-[7px] text-[17px] outline-none rounded-[4px] cursor-pointer bg-white border-[1px] border-[#da1e37] text-[#da1e37]"
                        onClick={() => {
                            setCreateEmployeePopup(false);
                            setAddInformationPopup(true);
                        }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default React.memo(CreateEmployee);

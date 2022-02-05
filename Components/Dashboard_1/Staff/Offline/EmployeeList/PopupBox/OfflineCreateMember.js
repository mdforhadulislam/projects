import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import {
    add_offline_user,
    offline_user_joining_date,
    offline_user_no_salary_system,
    offline_user_position,
    offline_user_salary_amount,
    offline_user_salary_date_every_day,
    offline_user_salary_date_every_month,
    offline_user_salary_date_every_week,
    offline_user_salary_type
} from '../../../../../../Redux/Dashboard_1/Action/Offline/index';
import {
    JoiningDate,
    Position,
    SalaryAmount,
    SalaryDateEveryDay,
    SalaryDateEveryMonth,
    SalaryDateEveryWeek,
    SalaryType
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/OfflineCreateMember.module.css';

function OfflineCreateMember({
    offlineCreateMemberPopup,
    setOfflineAddMemberInformationPopup,
    setOfflineCreateMemberPopup,
    setSuccessfullDonePopup
}) {
    const {
        name: { user_first_name, user_middle_name, user_last_name },
        email_and_mobile_no: { user_email, user_mobile_no },
        mamber_and_staff: { user_as_a_member, user_as_a_staff },
        gender_and_blood_group: { user_gender, user_blood_group },
        birthDate_and_religion: { user_date_of_birth, user_religion },
        upload_image_and_nationality: { user_profile_image, user_nationality },
        user_documentes: { user_documentes },
        presentAddress,
        permanentAddress,
        position_and_joining_date: { user_position, user_joining_date },
        offline_user_salary_system: user_salary_system
    } = useSelector((state) => state.offline.employeeListReducers);

    const allofflineuser = useSelector((state) => state.offlineUser.offline_user);

    const submitHendeler = (e) => {
        e.preventDefault();
        const user = {
            user_id: allofflineuser.length,
            user_email,
            user_mobile_no,
            user_image: user_profile_image,
            user_as_a_member,
            user_as_a_staff,
            name: `${user_first_name} ${
                user_middle_name ? user_middle_name : ''
            } ${user_last_name}`,
            user_gender,
            user_blood_group,
            user_date_of_birth,
            user_religion,
            user_nationality,
            presentAddress,
            permanentAddress,
            user_documentes,
            user_position,
            user_joining_date,
            user_salary: {
                salary_amount: user_salary_system.user_salary_amount,
                salary_type: user_salary_system.user_salary_type,
                salary_every_day: user_salary_system.user_salary_date_every_day,
                salary_every_week: user_salary_system.user_salary_date_every_week,
                salary_every_month: user_salary_system.user_salary_date_every_month,
                no_salary_system: user_salary_system.user_no_salary_system
            }
        };
        if (
            (user_as_a_member || user_as_a_staff) &&
            user_profile_image &&
            user_nationality &&
            user_religion &&
            user_position
        ) {
            dispatch(add_offline_user(user));
            setSuccessfullDonePopup(true);
            setOfflineCreateMemberPopup(false);
        }
    };

    const customStyles = {
        content: {
            top: '56%',
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
    const { position_and_joining_date, offline_user_salary_system } = useSelector(
        (state) => state.offline.employeeListReducers
    );
    let [renderSalaryReletedBox, setRenderSalaryReletedBox] = useState(true);

    return (
        <Modal isOpen={offlineCreateMemberPopup} style={customStyles}>
            {/* <div className={StyleSheet.offline__add__member}> */}
            <form className={StyleSheet.offline__add__member__container} onSubmit={submitHendeler}>
                <div
                    className={StyleSheet.offline__add__member__container__back__button}
                    onClick={() => {
                        setOfflineCreateMemberPopup(false);
                        setOfflineAddMemberInformationPopup(true);
                    }}>
                        <ArrowBackIcon />
                    Back
                </div>

                <div className={StyleSheet.offline__add__member__container__row__one}>
                    <Position
                        value={position_and_joining_date.user_position}
                        actions={(value) => dispatch(offline_user_position(value))}
                    />
                    <JoiningDate
                        value={position_and_joining_date.user_joining_date}
                        actions={(value) => dispatch(offline_user_joining_date(value))}
                    />
                </div>

                {renderSalaryReletedBox && (
                    <>
                        <div className={StyleSheet.offline__add__member__container__row__two}>
                            <SalaryAmount
                                value={offline_user_salary_system.user_salary_amount}
                                actions={(value) => {
                                    dispatch(offline_user_salary_amount(value));
                                }}
                            />
                            <SalaryType
                                value={offline_user_salary_system.user_salary_type}
                                actions={(value) => {
                                    dispatch(offline_user_salary_type(value));
                                }}
                            />
                        </div>

                        <div className={StyleSheet.offline__add__member__container__row__three}>
                            {offline_user_salary_system.user_salary_type === 'daily' && (
                                <SalaryDateEveryDay
                                    actions={(value) =>
                                        dispatch(offline_user_salary_date_every_day(value))
                                    }
                                    value={offline_user_salary_system.user_salary_date_every_day}
                                />
                            )}
                            {offline_user_salary_system.user_salary_type === 'weekly' && (
                                <SalaryDateEveryWeek
                                    actions={(value) =>
                                        dispatch(offline_user_salary_date_every_week(value))
                                    }
                                    value={offline_user_salary_system.user_salary_date_every_week}
                                />
                            )}
                            {offline_user_salary_system.user_salary_type === 'monthly' && (
                                <SalaryDateEveryMonth
                                    actions={(value) =>
                                        dispatch(offline_user_salary_date_every_month(value))
                                    }
                                    value={offline_user_salary_system.user_salary_date_every_month}
                                />
                            )}
                        </div>
                    </>
                )}

                <div className={StyleSheet.offline__add__member__container__row__four}>
                    <div className={StyleSheet.create__employee__body__container__no__money}>
                        <div className={StyleSheet.checkbox__container}>
                            <div className={StyleSheet.checkbox__container__input}>
                                <input
                                    type="checkbox"
                                    name="nomoney"
                                    id="nomoney"
                                    onChange={(e) => {
                                        renderSalaryReletedBox
                                            ? setRenderSalaryReletedBox(false)
                                            : setRenderSalaryReletedBox(true);
                                        dispatch(offline_user_no_salary_system(e.target.checked));
                                    }}
                                />
                                <label htmlFor="nomoney">No Salary System</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.offline__add__member__container__button}>
                    <button
                        type="submit"
                        className={StyleSheet.offline__add__member__container__button__save__btn}>
                        Add Now
                    </button>
                    <button
                        type="button"
                        className={StyleSheet.offline__add__member__container__button__cancel__btn}
                        onClick={() => {
                            setOfflineCreateMemberPopup(false);
                            setOfflineAddMemberInformationPopup(true);
                        }}>
                        Cancel
                    </button>
                </div>
            </form>
            {/* </div> */}
        </Modal>
    );
}

export default React.memo(OfflineCreateMember);

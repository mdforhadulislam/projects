import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import {
    edit_offline_user_joining_date,
    edit_offline_user_no_salary_system,
    edit_offline_user_position,
    edit_offline_user_salary_amount,
    edit_offline_user_salary_date_every_day,
    edit_offline_user_salary_date_every_month,
    edit_offline_user_salary_date_every_week,
    edit_offline_user_salary_status_set_due,
    edit_offline_user_salary_status_set_upcoming,
    edit_offline_user_salary_type
} from '../../../../../../Redux/Actions/multiple_dashboard/Staff_And_Partner/Offline/offlineEditHendeler';
import {
    JoiningDate,
    Position,
    SalaryAmount,
    SalaryDateEveryDay,
    SalaryDateEveryMonth,
    SalaryDateEveryWeek,
    SalaryType
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditOfflineCreateMember.module.css';

function EditOfflineCreateMember({
    user,
    setEditMemberInformation,
    setEditCreateMember,
    editCreateMember
}) {
    const dispatch = useDispatch();

    const customStyles = {
        content: {
            top: '60%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -60%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };

    return (
        <Modal isOpen={editCreateMember} style={customStyles}>
            {/* <div className={StyleSheet.edit__offline__create__member}> */}
            <form
                className={StyleSheet.edit__offline__create__member__container}
                onSubmit={(e) => {
                    e.preventDefault();
                    setEditCreateMember(false);
                }}>
                <div
                    className={StyleSheet.edit__offline__create__member__container__back__button}
                    onClick={() => {
                        setEditCreateMember(false);
                        setEditMemberInformation(true);
                    }}>
                    <ArrowBackIcon />
                    Back
                </div>

                <div className={StyleSheet.edit__offline__create__member__container__row__one}>
                    <Position
                        value={user.user_position}
                        actions={(value) => {
                            dispatch(edit_offline_user_position({ id: user.user_id, value }));
                        }}
                    />
                    <JoiningDate
                        value={user.user_joining_date}
                        actions={(value) => {
                            dispatch(edit_offline_user_joining_date({ id: user.user_id, value }));
                        }}
                    />
                </div>

                {user.user_salary.no_salary_system ? (
                    ''
                ) : (
                    <>
                        <div
                            className={
                                StyleSheet.edit__offline__create__member__container__row__two
                            }>
                            <SalaryAmount
                                value={user.user_salary.salary_amount}
                                actions={(value) => {
                                    dispatch(
                                        edit_offline_user_salary_amount({ id: user.user_id, value })
                                    );
                                }}
                            />
                            <SalaryType
                                value={user.user_salary.salary_type}
                                actions={(value) => {
                                    dispatch(
                                        edit_offline_user_salary_type({ id: user.user_id, value })
                                    );
                                }}
                            />
                        </div>
                        <div
                            className={
                                StyleSheet.edit__offline__create__member__container__row__three
                            }>
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
                        </div>
                    </>
                )}

                <div className={StyleSheet.offline__add__member__container__row__four}>
                    <div className={StyleSheet.create__employee__body__container__no__money}>
                        <div className={StyleSheet.checkbox__container}>
                            <div className={StyleSheet.checkbox__container__input}>
                                {/* renderSalaryReletedBox ? setRenderSalaryReletedBox(false):setRenderSalaryReletedBox(true); */}
                                <input
                                    type="checkbox"
                                    name="nomoney"
                                    id="nomoney"
                                    onChange={(e) => {
                                        dispatch(
                                            edit_offline_user_no_salary_system({
                                                id: user.user_id,
                                                value: user.user_salary.no_salary_system
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
                </div>

                <div className={StyleSheet.edit__offline__create__member__container__button}>
                    <button
                        type="submit"
                        className={
                            StyleSheet.edit__offline__create__member__container__button__save__btn
                        }>
                        Add Now
                    </button>
                    <button
                        type="button"
                        className={
                            StyleSheet.edit__offline__create__member__container__button__cancel__btn
                        }
                        onClick={() => {
                            setEditCreateMember(false);
                            setEditMemberInformation(true);
                        }}>
                        Cancel
                    </button>
                </div>
            </form>
            {/* </div> */}
        </Modal>
    );
}

export default React.memo(EditOfflineCreateMember);

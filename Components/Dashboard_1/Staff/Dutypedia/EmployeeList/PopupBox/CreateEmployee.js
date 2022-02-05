import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import { create_user } from '../../../../../../Redux/Dashboard_1/Action/Dutypedia/index';
import StyleSheet from '../PopupBoxStyle/CreateEmployee.module.css';
import CreateEmployeeBody from './CreateEmployeeBody';

function CreateEmployee({
    setAddInformationPopup,
    setCreateEmployeePopup,
    setSuccessfullyDonePopup
}) {
    const dispatch = useDispatch();

    const {
        user_id_and_email_and_mobile_no_and_image: {
            user_id,
            user_email,
            user_mobile_no,
            user_image
        },
        member_and_staff: { user_as_a_member, user_as_a_staff },
        name: { user_furst_name, user_middle_name, user_last_name },
        gender_blood_birth_religion_desh: {
            user_gender,
            user_blood_group,
            user_date_of_birth,
            user_religion,
            user_nationality
        },
        presentAddress,
        permanentAddress,
        uploadingFile: { user_documentes },
        user_position_and_joining_date_and_salary: {
            user_position,
            user_joining_date,
            user_salary_amount,
            user_salary_type,
            user_salary_date_every_day,
            user_salary_date_every_week,
            user_salary_date_every_month,
            user_no_salary_system
        },
        accessFunctionality
    } = useSelector((state) => state.dutypedia.employeeListReducers);

    const submitHendeler = (e) => {
        e.preventDefault();
        const user = {
            user_id,
            user_email,
            user_mobile_no,
            user_image,
            user_as_a_member,
            user_as_a_staff,
            name: `${user_furst_name} ${user_middle_name ? user_middle_name : ''
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
                salary_amount: user_salary_amount,
                salary_type: user_salary_type,
                salary_every_day: user_salary_date_every_day,
                salary_every_week: user_salary_date_every_week,
                salary_every_month: user_salary_date_every_month,
                no_salary_system: user_no_salary_system,
                salary_status: ''
            },
            accessFunctionality,
            accept: false,
            cancel: false
        };

        if (
            (user_as_a_member || user_as_a_staff) &&
            user_gender &&
            user_date_of_birth &&
            user_blood_group &&
            user_position &&
            user_joining_date &&
            user_nationality
        ) {
            setCreateEmployeePopup(false);
            setSuccessfullyDonePopup(true);
            dispatch(create_user(user));
            setAddInformationPopup(false);
        }
    };

    return (
        <div className={StyleSheet.creact__employee__popup}>
            <form
                className={StyleSheet.creact__employee__popup__container}
                onSubmit={submitHendeler}>
                <div className={StyleSheet.creact__employee__popup__container__back__button}>
                    <Image
                        onClick={() => {
                            setCreateEmployeePopup(false);
                            setAddInformationPopup(true);
                        }}
                        src={BackIcon}
                        alt="BackIcon"
                    />
                </div>

                <div className={StyleSheet.creact__employee__popup__container__body}>
                    <CreateEmployeeBody />
                </div>

                <div className={StyleSheet.creact__employee__popup__container__button}>
                    <button
                        type="submit"
                        className={
                            StyleSheet.creact__employee__popup__container__button__submit__btn
                        }>
                        Invite Now
                    </button>

                    <button
                        type="button"
                        className={
                            StyleSheet.creact__employee__popup__container__button__cencel__btn
                        }
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

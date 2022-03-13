import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import BackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import { user_remove_data } from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia';
import StyleSheet from '../PopupBoxStyle/CreateEmployee.module.css';
import CreateEmployeeBody from './CreateEmployeeBody';

function CreateEmployee({
    setAddInformationPopup,
    setCreateEmployeePopup,
    setSuccessfullyDonePopup
}) {
    const dispatch = useDispatch();

    const submitHendeler = (e) => {
        e.preventDefault();
        setCreateEmployeePopup(false);
        setSuccessfullyDonePopup(true);
        setAddInformationPopup(false);
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

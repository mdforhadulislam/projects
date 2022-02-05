import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import {
    offline_user_as_a_member,
    offline_user_as_a_staff,
    offline_user_blood_group,
    offline_user_date_of_birth,
    offline_user_email,
    offline_user_first_name,
    offline_user_gender,
    offline_user_joining_date,
    offline_user_last_name,
    offline_user_middle_name,
    offline_user_mobile_no,
    offline_user_nationality,
    offline_user_permanent_address_address,
    offline_user_permanent_address_area,
    offline_user_permanent_address_city,
    offline_user_permanent_address_region,
    offline_user_position,
    offline_user_present_address_address,
    offline_user_present_address_area,
    offline_user_present_address_city,
    offline_user_present_address_region,
    offline_user_profile_image,
    offline_user_religion,
    offline_user_removed_all_documentes,
    offline_user_salary_amount,
    offline_user_salary_date_every_day,
    offline_user_salary_date_every_month,
    offline_user_salary_date_every_week,
    offline_user_salary_type
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Offline';
import StyleSheet from '../PopupBoxStyle/SuccessfullyDone.module.css';

Modal.setAppElement('#__next');
function SuccessfullyDone({ setSuccessfullDonePopup, successfullDonePopup }) {
    const dispatch = useDispatch();

    const doneHendeler = () => {
        setSuccessfullDonePopup(false);
        dispatch(offline_user_as_a_member(false));
        dispatch(offline_user_as_a_staff(false));
        dispatch(offline_user_first_name(''));
        dispatch(offline_user_middle_name(''));
        dispatch(offline_user_last_name(''));
        dispatch(offline_user_email(''));
        dispatch(offline_user_mobile_no(''));
        dispatch(offline_user_gender('Male'));
        dispatch(offline_user_blood_group('A+'));
        dispatch(offline_user_date_of_birth(new Date(1010101010101)));
        dispatch(offline_user_profile_image(''));
        dispatch(offline_user_nationality(''));
        dispatch(offline_user_removed_all_documentes());
        dispatch(offline_user_religion(''));
        dispatch(offline_user_present_address_region('none'));
        dispatch(offline_user_present_address_city('city'));
        dispatch(offline_user_present_address_area('area'));
        dispatch(offline_user_present_address_address(''));
        dispatch(offline_user_permanent_address_region('none'));
        dispatch(offline_user_permanent_address_city('city'));
        dispatch(offline_user_permanent_address_area('area'));
        dispatch(offline_user_permanent_address_address(''));
        dispatch(offline_user_position(''));
        dispatch(offline_user_joining_date(new Date()));
        dispatch(offline_user_salary_amount(''));
        dispatch(offline_user_salary_type('daily'));
        dispatch(offline_user_salary_date_every_day(''));
        dispatch(offline_user_salary_date_every_week(''));
        dispatch(offline_user_salary_date_every_month(''));
    };

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

    return (
        <Modal isOpen={successfullDonePopup} style={customStyles}>
            <div className={StyleSheet.successfully__done__container}>
                <div className={StyleSheet.successfully__done__container__box}>
                    <div className={StyleSheet.successfully__done__container__box__title}>
                        You Added Successfully!!
                    </div>
                    <div className={StyleSheet.successfully__done__container__box__button}>
                        <button type="button" onClick={doneHendeler}>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(SuccessfullyDone);

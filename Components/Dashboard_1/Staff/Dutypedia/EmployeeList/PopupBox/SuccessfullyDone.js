import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import {
    removed_user_all_file,
    user_account_balance_access,
    user_as_a_member,
    user_as_a_staff,
    user_blood_group,
    user_company_holiday_access,
    user_customer_review_access,
    user_dashbord_access,
    user_date_of_birth,
    user_email,
    user_expencess_access,
    user_first_name,
    user_gender,
    user_group_access,
    user_id,
    user_image,
    user_joining_date,
    user_last_name,
    user_member_access,
    user_middle_name,
    user_mobile_no,
    user_nationality,
    user_notice_access,
    user_no_salary_system_access,
    user_order_access,
    user_permanent_address_address,
    user_permanent_address_area,
    user_permanent_address_city,
    user_permanent_address_region,
    user_position,
    user_present_address_address,
    user_present_address_area,
    user_present_address_city,
    user_present_address_region,
    user_religion,
    user_salary_amount,
    user_salary_date_every_day,
    user_salary_date_every_month,
    user_salary_date_every_week,
    user_salary_type,
    user_staff_and_partner_access
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/index';
import StyleSheet from '../PopupBoxStyle/SuccessfullyDone.module.css';

Modal.setAppElement('#__next');
function SuccessfullyDone({ setSuccessfullyDonePopup, successfullyDonePopup }) {
    const dispatch = useDispatch();

    const doneHendeler = () => {
        setSuccessfullyDonePopup(false);
        dispatch(user_id(''));
        dispatch(user_email(''));
        dispatch(user_mobile_no(''));
        dispatch(user_image(''));
        dispatch(user_as_a_member(false));
        dispatch(user_as_a_staff(false));
        dispatch(user_first_name(''));
        dispatch(user_middle_name(''));
        dispatch(user_last_name(''));
        dispatch(user_gender('Male'));
        dispatch(user_blood_group('A+'));
        dispatch(user_date_of_birth(new Date()));
        dispatch(user_religion(''));
        dispatch(user_nationality(''));
        dispatch(user_present_address_region('none'));
        dispatch(user_present_address_city('city'));
        dispatch(user_present_address_area('area'));
        dispatch(user_present_address_address(''));
        dispatch(user_permanent_address_region('none'));
        dispatch(user_permanent_address_city('city'));
        dispatch(user_permanent_address_area('area'));
        dispatch(user_permanent_address_address(''));
        dispatch(removed_user_all_file());
        dispatch(user_position(''));
        dispatch(user_joining_date(new Date()));
        dispatch(user_salary_amount(''));
        dispatch(user_salary_type('daily'));
        dispatch(user_salary_date_every_day(''));
        dispatch(user_salary_date_every_week(''));
        dispatch(user_salary_date_every_month(''));
        dispatch(user_dashbord_access(false));
        dispatch(user_staff_and_partner_access(false));
        dispatch(user_order_access(false));
        dispatch(user_account_balance_access(false));
        dispatch(user_expencess_access(false));
        dispatch(user_customer_review_access(false));
        dispatch(user_company_holiday_access(false));
        dispatch(user_member_access(false));
        dispatch(user_group_access(false));
        dispatch(user_notice_access(false));
        dispatch(user_no_salary_system_access(false));
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
        <Modal isOpen={successfullyDonePopup} style={customStyles}>
            <div className={StyleSheet.successfully__done__container}>
                <div className={StyleSheet.successfully__done__container__box}>
                    <div className={StyleSheet.successfully__done__container__box__title}>
                        Your Invitation Sent Successfully!!
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

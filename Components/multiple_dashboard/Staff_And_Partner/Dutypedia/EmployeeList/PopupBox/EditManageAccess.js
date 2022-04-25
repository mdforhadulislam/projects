import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import {
    user_account_balance_access_edit,
    user_company_holiday_access_edit,
    user_customer_review_access_edit,
    user_dashbord_access_edit,
    user_expencess_access_edit,
    user_groups_access_edit,
    user_member_access_edit,
    user_noAccess_access_edit,
    user_notice_access_edit,
    user_order_access_edit,
    user_staff_partner_access_edit
} from '../../../../../../Redux/Actions/multiple_dashboard/Staff_And_Partner/Dutypedia/editHeandeler';
import { CheckBox } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditManageAccess.module.css';

Modal.setAppElement('#__next');

function EditManageAccess({ userData, setRenderManageAccess, renderManageAccess }) {
    const dispatch = useDispatch();
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
        <Modal
            isOpen={renderManageAccess}
            onRequestClose={() => {
                setRenderManageAccess(false);
            }}
            style={customStyles}>
            <div className={StyleSheet.edit__manage__access}>
                <div className={StyleSheet.edit__manage__access__container}>
                    <div className={StyleSheet.edit__manage__access__container__title}>
                        Access Functionality
                    </div>

                    <form
                        className={StyleSheet.edit__manage__access__container__main}
                        method="#"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setRenderManageAccess(false);
                        }}>
                        <div
                            className={StyleSheet.edit__manage__access__container__main__row__left}>
                            <CheckBox
                                name="dashboard"
                                title="Dashboard"
                                value={userData.accessFunctionality.user_dashbord}
                                actions={(value) => {
                                    dispatch(
                                        user_dashbord_access_edit({
                                            id: userData.user_id,
                                            user_dashbord: userData.accessFunctionality
                                                .user_dashbord
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="order"
                                title="Order"
                                value={userData.accessFunctionality.user_order}
                                actions={(value) => {
                                    dispatch(
                                        user_order_access_edit({
                                            id: userData.user_id,
                                            user_order: userData.accessFunctionality.user_order
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="member"
                                title="Member"
                                value={userData.accessFunctionality.user_member}
                                actions={(value) => {
                                    dispatch(
                                        user_member_access_edit({
                                            id: userData.user_id,
                                            user_member: userData.accessFunctionality.user_member
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="groups"
                                title="Groups"
                                value={userData.accessFunctionality.user_group}
                                actions={(value) => {
                                    dispatch(
                                        user_groups_access_edit({
                                            id: userData.user_id,
                                            user_group: userData.accessFunctionality.user_group
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="notice"
                                title="Notice"
                                value={userData.accessFunctionality.user_notice}
                                actions={(value) => {
                                    dispatch(
                                        user_notice_access_edit({
                                            id: userData.user_id,
                                            user_notice: userData.accessFunctionality.user_notice
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="noAccess"
                                title="No Access In Functionality"
                                value={userData.accessFunctionality.user_no_access}
                                actions={(value) => {
                                    dispatch(
                                        user_noAccess_access_edit({
                                            id: userData.user_id,
                                            user_no_access: userData.accessFunctionality
                                                .user_no_access
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />
                        </div>

                        <div
                            className={
                                StyleSheet.edit__manage__access__container__main__row__right
                            }>
                            <CheckBox
                                name="staffPartner"
                                title="Staff & Partner"
                                value={userData.accessFunctionality.user_staff_and_partner}
                                actions={(value) => {
                                    dispatch(
                                        user_staff_partner_access_edit({
                                            id: userData.user_id,
                                            user_staff_and_partner: userData.accessFunctionality
                                                .user_staff_and_partner
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="expencess"
                                title="Expencess"
                                value={userData.accessFunctionality.user_expencess}
                                actions={(value) => {
                                    dispatch(
                                        user_expencess_access_edit({
                                            id: userData.user_id,
                                            user_expencess: userData.accessFunctionality
                                                .user_expencess
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="accountBalance"
                                title="Account Balance"
                                value={userData.accessFunctionality.user_account_balance}
                                actions={(value) => {
                                    dispatch(
                                        user_account_balance_access_edit({
                                            id: userData.user_id,
                                            user_account_balance: userData.accessFunctionality
                                                .user_account_balance
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="customerReview"
                                title="Customer Review"
                                value={userData.accessFunctionality.user_customer_review}
                                actions={(value) => {
                                    dispatch(
                                        user_customer_review_access_edit({
                                            id: userData.user_id,
                                            user_customer_review: userData.accessFunctionality
                                                .user_customer_review
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />

                            <CheckBox
                                name="companyHoliday"
                                title="Company Holiday"
                                value={userData.accessFunctionality.user_company_holiday}
                                actions={(value) => {
                                    dispatch(
                                        user_company_holiday_access_edit({
                                            id: userData.user_id,
                                            user_company_holiday: userData.accessFunctionality
                                                .user_company_holiday
                                                ? false
                                                : true
                                        })
                                    );
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className={
                                StyleSheet.edit__manage__access__container__main__submit__btn
                            }>
                            Done
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default EditManageAccess;

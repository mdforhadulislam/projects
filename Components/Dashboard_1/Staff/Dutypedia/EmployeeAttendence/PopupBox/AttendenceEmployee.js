import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import { CheckBox, SearchBox } from '../../../../../../Utilities/Utilites';
import Data from '../../../UserData.json';
import SingleEmployeeBox from '../BoxAndDeatils/SingleEmployeeBox';
import StyleSheet from '../PopupBoxStyle/AttendenceEmployee.module.css';

Modal.setAppElement('#__next');
function AttendenceEmployee({
    attendenceEmployee,
    setAttendencesPopupForm,
    setAttendenceEmployee
}) {
    const customStyles = {
        content: {
            top: '55%',
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
        <Modal isOpen={attendenceEmployee} style={customStyles}>
            <div className={StyleSheet.attendence__employee__container}>
                <div className={StyleSheet.attendence__employee__container__back__button}>
                    <div
                        onClick={() => {
                            setAttendencesPopupForm(true);
                            setAttendenceEmployee(false);
                        }}>
                        <ArrowBackIcon />
                    </div>
                    Back
                </div>
                <div className={StyleSheet.attendence__employee__container__search__box}>
                    <div className={StyleSheet.attendence__employee__container__search__box__title}>
                        Select Your Employee For Attendence
                    </div>
                    <div className={StyleSheet.attendence__employee__container__search__box__input}>
                        <SearchBox placeholder={'Search Users......'} />
                    </div>
                </div>
                <div className={StyleSheet.attendence__employee__container__user__selsect__box}>
                    <div
                        className={
                            StyleSheet.attendence__employee__container__user__selsect__box__all__selsect__box
                        }>
                        <CheckBox title="Select All" />
                    </div>

                    <div
                        className={
                            StyleSheet.attendence__employee__container__user__selsect__box__user__box
                        }>
                        {Data.map((user) => {
                            return <SingleEmployeeBox key={user.id} user={user} />;
                        })}
                    </div>
                </div>
                <div className={StyleSheet.attendence__employee__container__button}>
                    <button
                        onClick={() => {
                            setAttendencesPopupForm(false);
                            setAttendenceEmployee(false);
                        }}>
                        Create Now
                    </button>
                    <button
                        onClick={() => {
                            setAttendencesPopupForm(true);
                            setAttendenceEmployee(false);
                        }}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(AttendenceEmployee);
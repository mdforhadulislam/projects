import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import BackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
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

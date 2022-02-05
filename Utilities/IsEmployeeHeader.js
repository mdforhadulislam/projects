import React from 'react';
import PlusIcon from '../Assets/images/dashboard/PlusIcon';
import RestartIcon from '../Assets/images/dashboard/RestartIcon';
import StyleSheet from './IsEmployeeHeader.module.css';

export default function IsEmployeeHeader({ setQrCodePopup }) {
    return (
        <div className={StyleSheet.employee__list__container__header}>
            <div className={StyleSheet.employee__list__container__header__title}>
                Add Staff And Partner
            </div>
            <div className={StyleSheet.employee__list__container__header__button}>
                <div
                    onClick={() => setQrCodePopup(true)}
                    className={StyleSheet.employee__list__container__header__button__left}>
                    <PlusIcon />
                </div>
                <div className={StyleSheet.employee__list__container__header__button__right}>
                    <RestartIcon />
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import CrossIcon from '../../../../../../Assets/images/dashboard/CrossIcon';
import EditIcon from '../../../../../../Assets/images/dashboard/EditIcon';
import SingelImageCard from '../../../../../../Utilities/SingelImageCard';
import StyleSheet from '../PopupBoxStyle/ViewAllInformation.module.css';

function ViewAllInformation({
    userData,
    setViewMemberAllInformation,
    setEditMemberInformation,
    viewMemberAllInformation
}) {
    let [leftButton, setLeftButton] = useState(5);
    let [rightButton, setRightButton] = useState(-5);

    const customStyles = {
        content: {
            top: '58%',
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
        <Modal isOpen={viewMemberAllInformation} style={customStyles}>
            {/* <div className={StyleSheet.view__all__information}> */}

            <div className={StyleSheet.view__all__information__container}>
                <div className={StyleSheet.view__all__information__container__cancel__icon}>
                    {/* <img
                        onClick={() => {
                            setViewMemberAllInformation(false);
                        }}
                        src={crossIcon}
                        alt="crossIcon"
                    /> */}
                    <div onClick={() => {
                            setViewMemberAllInformation(false);
                        }}>
                        <CrossIcon />
                    </div>
                </div>

                <div className={StyleSheet.view__all__information__container__header}>
                    <div className={StyleSheet.view__all__information__container__header__left}>
                        <div
                            className={
                                StyleSheet.view__all__information__container__header__left__joining
                            }>
                            <p>Join</p>
                            {userData.user_as_a_member
                                ? 'As A Member'
                                : userData.user_as_a_staff
                                ? 'As A Staff'
                                : ''}
                        </div>
                        <div
                            className={
                                StyleSheet.view__all__information__container__header__left__member__name
                            }>
                            {userData.name}
                        </div>
                    </div>

                    {/* <img
                        onClick={() => {
                            setEditMemberInformation(true);
                            setViewMemberAllInformation(false);
                        }}
                        src={EditIcon}
                        alt="EditIcon"
                    /> */}
                    <div onClick={() => {
                            setEditMemberInformation(true);
                            setViewMemberAllInformation(false);
                        }}>
                        <EditIcon />
                    </div>
                </div>

                <div className={StyleSheet.view__all__information__container__body}>
                    <div className={StyleSheet.view__all__information__container__body__gender}>
                        <p>Gender:</p>
                        {userData.user_gender}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__blood__group
                        }>
                        <p>Blood Group:</p>
                        {userData.user_blood_group}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__date__of__birth
                        }>
                        <p>Date Of Birth:</p>
                        {`${userData.user_date_of_birth.getDate()}/${
                            userData.user_joining_date.getMonth() + 1 > 9
                                ? userData.user_joining_date.getMonth() + 1
                                : '0' + (userData.user_joining_date.getMonth() + 1)
                        }/${userData.user_date_of_birth.getFullYear()}`}
                    </div>
                    <div className={StyleSheet.view__all__information__container__body__religion}>
                        <p>Religion:</p>
                        {userData.user_religion}
                    </div>
                    <div
                        className={StyleSheet.view__all__information__container__body__nationality}>
                        <p>Nationality:</p>
                        {userData.user_nationality}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__present__address
                        }>
                        <p>Present Address:</p>
                        {userData.presentAddress.area},{userData.presentAddress.city},
                        {userData.presentAddress.region},Bangladesh
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__permanents__address
                        }>
                        <p>Permanent Address:</p>
                        {userData.permanentAddress.area},{userData.permanentAddress.city},
                        {userData.permanentAddress.region},Bangladesh
                    </div>

                    <div
                        className={
                            StyleSheet.view__all__information__container__body__all__documentes
                        }>
                        <div
                            className={
                                StyleSheet.view__all__information__container__body__all__documentes__title
                            }>
                            All Documents
                        </div>
                        <div
                            className={
                                StyleSheet.view__all__information__container__body__all__documentes__container
                            }>
                            {userData.user_documentes.length >= 4 ? (
                                <div
                                    onClick={(e) => {
                                        Number(
                                            e.target.parentElement.style.marginLeft.replace(
                                                'vw',
                                                ''
                                            )
                                        ) <= 0
                                            ? setLeftButton(leftButton + 5)
                                            : setLeftButton(0);
                                        e.target.parentElement.style.marginLeft = `${leftButton}vw`;
                                        setRightButton(-5);
                                    }}
                                    className={
                                        StyleSheet.view__all__information__container__body__all__documentes__container__left__button
                                    }></div>
                            ) : (
                                ''
                            )}
                            {userData.user_documentes.map((image) => (
                                <SingelImageCard key={image.id} image={image} />
                            ))}
                            {userData.user_documentes.length >= 4 ? (
                                <div
                                    onClick={(e) => {
                                        setRightButton(rightButton - 5);
                                        e.target.parentElement.style.marginLeft = `${rightButton}vw`;
                                        setLeftButton(0);
                                    }}
                                    className={
                                        StyleSheet.view__all__information__container__body__all__documentes__container__right__button
                                    }></div>
                            ) : (
                                ' '
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </Modal>
    );
}

export default React.memo(ViewAllInformation);

import React, { useState } from 'react';
import CrossIcon from '../../../../../../Assets/images/dashboard/CrossIcon';
import EditIcon from '../../../../../../Assets/images/dashboard/EditIcon';
import SingelImageCard from '../../../../../../Utilities/SingelImageCard';
import StyleSheet from '../PopupBoxStyle/ViewAllInformation.module.css';


function ViewAllInformation({ user, setRenderViewAllInformation, setRenderEditMemberInformation }) {
    let [leftButton, setLeftButton] = useState(5);
    let [rightButton, setRightButton] = useState(-5);
    let serialNumber = 1;
    return (
        <div className={StyleSheet.view__all__information}>
            <div className={StyleSheet.view__all__information__container}>
                <div className={StyleSheet.view__all__information__container__cancel__icon}>
                    {/* <Image
                        onClick={() => {
                            setRenderViewAllInformation(false);
                        }}
                        src={crossIcon}
                        alt="crossIcon"
                    /> */}
                    <div  onClick={() => {
                            setRenderViewAllInformation(false);
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
                            {user.user_as_a_member
                                ? 'As A Member'
                                : user.user_as_a_staff
                                ? 'As A Staff'
                                : ''}
                        </div>
                        <div
                            className={
                                StyleSheet.view__all__information__container__header__left__member__name
                            }>
                            {user.name}
                        </div>
                    </div>
{/* 
                    <Image
                        onClick={() => {
                            setRenderEditMemberInformation(true);
                            setRenderViewAllInformation(false);
                        }}
                        src={EditIcon}
                        alt="EditIcon"
                    /> */}
                    <div onClick={() => {
                            setRenderEditMemberInformation(true);
                            setRenderViewAllInformation(false);
                        }}>
                        <EditIcon />
                    </div>

                </div>

                <div className={StyleSheet.view__all__information__container__body}>
                    <div className={StyleSheet.view__all__information__container__body__gender}>
                        <p>Gender:</p>
                        {user.user_gender}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__blood__group
                        }>
                        <p>Blood Group:</p>
                        {user.user_blood_group}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__date__of__birth
                        }>
                        <p>Date Of Birth:</p>
                        {`${user.user_date_of_birth.getDate()}/${
                            user.user_joining_date.getMonth() + 1 > 9
                                ? user.user_joining_date.getMonth() + 1
                                : '0' + (user.user_joining_date.getMonth() + 1)
                        }/${user.user_date_of_birth.getFullYear()}`}
                    </div>
                    <div className={StyleSheet.view__all__information__container__body__religion}>
                        <p>Religion:</p>
                        {user.user_religion}
                    </div>
                    <div
                        className={StyleSheet.view__all__information__container__body__nationality}>
                        <p>Nationality:</p>
                        {user.user_nationality}
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__present__address
                        }>
                        <p>Present Address:</p>
                        {user.presentAddress.area},{user.presentAddress.city},
                        {user.presentAddress.region},Bangladesh
                    </div>
                    <div
                        className={
                            StyleSheet.view__all__information__container__body__permanents__address
                        }>
                        <p>Permanent Address:</p>
                        {user.permanentAddress.area},{user.permanentAddress.city},
                        {user.permanentAddress.region},Bangladesh
                    </div>

                    <div
                        className={
                            StyleSheet.view__all__information__container__body__access__functionality
                        }>
                        <div
                            className={
                                StyleSheet.view__all__information__container__body__access__functionality__title
                            }>
                            Access Functionality:
                        </div>
                        <div
                            className={
                                StyleSheet.view__all__information__container__body__access__functionality__option
                            }>
                            {user.accessFunctionality.user_no_access ? (
                                ''
                            ) : (
                                <>
                                    {user.accessFunctionality.user_dashbord ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '7.5vw' }}>
                                            {serialNumber++}.Dashboard
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_staff_and_partner ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '9.5vw' }}>
                                            {serialNumber++}.Staff & Partner
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_order ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '5vw' }}>
                                            {serialNumber++}.Order
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_account_balance ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '10.5vw' }}>
                                            {serialNumber++}.Account Balance
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_expencess ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '7.5vw' }}>
                                            {serialNumber++}.Expencess
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_customer_review ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '11vw' }}>
                                            {serialNumber++}.Customer Review
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_member ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '6vw' }}>
                                            {serialNumber++}.Member
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_group ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '5vw' }}>
                                            {serialNumber++}.Group
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_notice ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '5vw' }}>
                                            {serialNumber++}.Notice
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {user.accessFunctionality.user_company_holiday ? (
                                        <div
                                            className={StyleSheet.funcationality_name}
                                            style={{ width: '12vw' }}>
                                            {serialNumber++}.Company Holiday
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </>
                            )}
                        </div>
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
                            {user.user_documentes.length >= 4 ? (
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
                            {user.user_documentes.map((image) => (
                                <SingelImageCard key={image.id} image={image} />
                            ))}
                            {user.user_documentes.length >= 4 ? (
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
        </div>
    );
}

export default React.memo(ViewAllInformation);

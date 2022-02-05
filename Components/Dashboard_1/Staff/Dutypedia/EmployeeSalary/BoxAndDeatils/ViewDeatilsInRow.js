import Image from 'next/image';
import React, { useState } from 'react';
import ThreeDotIcon from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import StyleSheet from '../BoxAndDeatilsStyle/ViewDeatilsInRow.module.css';

function ViewDeatilsInRow({ user, setPaidPopup, setId }) {
    const [editOption, setEditOption] = useState(false);

    return (
        <div>
            <div className={StyleSheet.row__container__body}>
                <div className={StyleSheet.row__container__body__salary__date}>
                    {user.salary_type === 'monthly' ? (
                        '20/02/2021 To 31/02/2021'
                    ) : user.salary_type === 'daliy' ? (
                        <p style={{ width: '6.6vw', margin: '0vw 6.5vw' }}>20/02/2021 01:20 PM</p>
                    ) : user.salary_type === 'weekly' ? (
                        <p style={{ width: '6.6vw', margin: '0vw 6.5vw' }}>20/02/2021 Sunday</p>
                    ) : (
                        ''
                    )}
                </div>
                <div className={StyleSheet.row__container__body__salary__amount}>50000৳</div>
                <div className={StyleSheet.row__container__body__salary__status}>
                    {user.salary_status_upcoming
                        ? 'Upcoming'
                        : user.salary_status_due
                        ? 'Due'
                        : user.salary_status_paid
                        ? 'Paid'
                        : ''}
                </div>

                <div className={StyleSheet.row__container__body__salary__salary__type}>
                    {user.salary_type}
                </div>

                <div
                    onClick={() => {
                        setPaidPopup(true);
                        setId(user.id);
                    }}
                    className={StyleSheet.row__container__body__salary__paymant__status}>
                    {user.salary_status_paid
                        ? ''
                        : user.salary_status_upcoming
                        ? 'Pay Advance'
                        : user.salary_status_due
                        ? 'Click To Paid'
                        : ''}
                </div>

                <div className={StyleSheet.row__container__body__dot__button}>
                    {editOption && (
                        <div className={StyleSheet.row__container__body__dot__button__option}>
                            <ul>
                                <li
                                    onClick={() => {
                                        setEditOption(false);
                                    }}>
                                    Edit
                                </li>
                            </ul>
                        </div>
                    )}
                    <div>
                        <Image
                            onClick={() => {
                                editOption ? setEditOption(false) : setEditOption(true);
                            }}
                            src={ThreeDotIcon}
                            alt="ThreeDotIcon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ViewDeatilsInRow);

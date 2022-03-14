import Image from 'next/image';
import React, { useState } from 'react';
import DownIcon from '../../../../../../Assets/images/dashboard/downIcon.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import ThreeDot from '../../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import StyleSheet from '../BoxAndDeatilsStyle/BoxDeatils.module.css';

function BoxDeatils({
    setAttendenceEditPopup,
    setAttendenceDeletePopup,
    setAttendenceMemberDeatils
}) {
    const [isOption, setIsOption] = useState(false);

    return (
        <div className={StyleSheet.employee__box}>
            <div className={StyleSheet.employee__box__container}>
                <div className={StyleSheet.employee__box__container__image__and__name}>
                    <div className={StyleSheet.employee__box__container__image__and__name__image}>
                        <div className={StyleSheet.user__image}></div>
                        <DutyPreIcon />
                    </div>
                    <div
                        className={
                            StyleSheet.employee__box__container__image__and__name__id__and__name
                        }>
                        <div className={StyleSheet.user__name}>Maliha Moliy</div>
                        <div className={StyleSheet.user__id}>Id :8938274</div>
                    </div>
                </div>

                <div className={StyleSheet.employee__box__container__starting__time}>
                    <span>11:00 AM</span>
                </div>

                <div className={StyleSheet.employee__box__container__ending__time}>
                    <span>10:00 PM</span>
                </div>

                <div className={StyleSheet.employee__box__container__bracking__time}>
                    <span>01:00 Hour</span>
                </div>

                <div className={StyleSheet.employee__box__container__today__status}>
                    <span>Present</span>
                    <Image src={DownIcon} alt={'DownIcon'} />
                </div>

                <div className={StyleSheet.employee__box__container__today__overtime}>
                    <span>2 Hours</span>
                </div>

                <div className={StyleSheet.employee__box__container__totall__hours}>
                    <span>10 Hours</span>
                </div>

                <div className={StyleSheet.employee__box__container__totall__hours__option}>
                    <Image
                        onClick={() => {
                            isOption ? setIsOption(false) : setIsOption(true);
                        }}
                        src={ThreeDot}
                        alt={'ThreeDot'}
                    />
                    {isOption && (
                        <ul>
                            <li
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceEditPopup(true);
                                }}>
                                Edit
                            </li>
                            <li
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceDeletePopup(true);
                                }}>
                                Delete
                            </li>
                            <li
                                onClick={() => {
                                    setIsOption(false);
                                    setAttendenceMemberDeatils(true);
                                }}>
                                View Deatils
                            </li>
                        </ul>
                    )}
                </div>

                {/** */}
            </div>
        </div>
    );
}

export default React.memo(BoxDeatils);

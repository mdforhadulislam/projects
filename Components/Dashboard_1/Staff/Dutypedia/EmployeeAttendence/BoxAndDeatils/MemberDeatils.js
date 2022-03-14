import Image from 'next/image';
import React, { useState } from 'react';
import backIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import PrintIcon from '../../../../../../Assets/images/dashboard/printer.svg';
import StyleSheet from '../BoxAndDeatilsStyle/MemberDeatils.module.css';

function MemberDeatils({ setAttendenceMemberDeatils }) {
    const [year, setYear] = useState(new Date().getFullYear());

    const printHendeler = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '-3.5vw';
        window.print();
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'grid';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '0vw';
    };

    return (
        <div className={StyleSheet.view__member__deatils__main}>
            <div className={StyleSheet.view__member__deatils__main__container}>
                <div className={StyleSheet.view__member__deatils__main__container__back__button}>
                    <Image
                        width={'100%'}
                        height={'100%'}
                        src={backIcon}
                        alt={'backIcon'}
                        onClick={() => {
                            setAttendenceMemberDeatils(false);
                        }}
                    />
                </div>
                <div
                    className={StyleSheet.view__member__deatils__main__container__about__container}>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__left
                        }>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__left__image
                            }>
                            <Image width="100vw" height="100vw" src={PrintIcon} alt={'image'} />

                            <DutyPreIcon />
                        </div>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__left__deatils
                            }>
                            <ul>
                                <li>
                                    <h1>Forhadul Oslam</h1>
                                </li>
                                <li>Id: DP0324-234</li>
                                <li>Jr.Frontend Developer</li>
                                <li>Joining Date 01/20/2021</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__right
                        }>
                        <div
                            className={
                                StyleSheet.view__member__deatils__main__container__about__container__right__print__button
                            }>
                            <Image
                                onClick={printHendeler}
                                width={'100%'}
                                height={'100%'}
                                src={PrintIcon}
                                alt="PrintIcon"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        StyleSheet.view__member__deatils__main__container__about__container__calender
                    }>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__left__btn
                        }
                        onClick={() => {
                            setYear((prev) => prev - 1);
                        }}></div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__title
                        }>
                        CALENDER {year}
                    </div>
                    <div
                        className={
                            StyleSheet.view__member__deatils__main__container__about__container__calender__right__btn
                        }
                        onClick={() => {
                            setYear((prev) => prev + 1);
                        }}></div>
                </div>

                <div className={StyleSheet.view__member__deatils__main__container__filter}>
                    <div className="view__member__deatils__main__container__filter__title text-[50px] ">
                        Filter By:
                    </div>
                    <select name="" id="">
                        <option value="">Select</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default MemberDeatils;

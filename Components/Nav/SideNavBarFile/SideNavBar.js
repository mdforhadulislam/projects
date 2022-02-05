import React from 'react';
import Image from 'next/image';
import person from '../../../Assets/images/side bar/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import icon1 from '../../../Assets/images/icons/image-logo.svg';
import icon2 from '../../../Assets/images/icons/Path 18839.svg';
import style from './SideNavigation.module.css';
import { menusData } from '../NavigationData';
import PlusIcon from '../icons/PlusIcon';
import MainusIcon from '../icons/MainusIcon';
import Link from 'next/link';
const SideNavBar = () => {
    const [showDropDown, setShowDropDown] = React.useState(null);

    //toggle dropdown
    const toggleDropDown = (title) => {
        if (showDropDown === title) {
            setShowDropDown(null);
        } else {
            setShowDropDown(title);
        }
    };

    return (
        <div className={style.vendor_section}>
            {/* Vandor Details Start */}
            <div className={style.vendor_about}>
                <div className={`next_image_container ${style.vendor_image}`}>
                    {/* <img src={vendorImage} alt="" /> */}
                    <Image
                        src={person}
                        alt="Logo Image"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        className={'next_image'}
                    />
                </div>
                <div className={style.vendor_name}>
                    <p> Md Masud Reja</p> <span> Builder </span>
                </div>
            </div>
            {/* Vandor Details End */}

            <div className={style.vendor_navigation}>
                {menusData.map((menu, index) => (
                    <div key={index} className={style.vendor_nav} id="side-nav1">
                        <div
                            className={style.vendor_nav_main}
                            onClick={() => toggleDropDown(menu.title)}>
                            <div className={style.vendor_nav_icon}>{menu.icon}</div>
                            <div className={style.vendor_nav_text}>{menu.title}</div>
                            <div className={style.vendor_nav_btn}>
                                {showDropDown === menu.title ? <MainusIcon /> : <PlusIcon />}
                            </div>
                        </div>
                        {menu.dropdownList && menu.dropdownList.length > 0 && (
                            <>
                                {/* {!showDropDown && ( */}
                                <div
                                    className={`${style.vendor_nav_more} ${
                                        showDropDown === menu.title ? 'd-block' : 'd-none'
                                    } `}>
                                    {menu.dropdownList.map((dropdownn, index) => (
                                        <Link
                                            href={dropdownn.link ? `${dropdownn.link}` : '#'}
                                            key={index}>
                                            <a className="text-dark">
                                                <span className={style.vendor_nav_more_icon}>
                                                    {/* <img src={RightArrow} alt="" /> */}
                                                </span>
                                                <span className={style.vendor_nav_more_text}>
                                                    {dropdownn.title}
                                                </span>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                {/* )} */}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideNavBar;

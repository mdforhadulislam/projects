import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../../Assets/images/top bar/nav-logo.svg';
import icon1 from '../../../Assets/images/icons/night.svg';
import icon2 from '../../../Assets/images/icons/Group 7482.svg';
import icon3 from '../../../Assets/images/icons/Group 7464.svg';
import icon4 from '../../../Assets/images/icons/Send_3_.svg';
import icon5 from '../../../Assets/images/top bar/brian-mercado-rm7rZYdl3rY-unsplash.jpg';

const TopNavBar = () => {
    return (
        <section className={styles.top_nav_bar_section}>
            <div className={styles.top_nav_left}>
                <div className={styles.logo}>
                    <Image src={logo} alt="" />
                </div>
            </div>

            <div className={styles.top_navigation_button_section}>
                <div className={styles.nav_button}>
                    <Image src={icon1} alt="" />
                </div>
                <div className={styles.nav_button}>
                    <Image src={icon2} alt="" />
                </div>
                <div className={styles.nav_button}>
                    <Image src={icon3} alt="" />
                </div>
                <div className={styles.nav_button}>
                    <Image src={icon4} alt="" />
                </div>
                <div className={styles.nav_account}>
                    <div className={styles.nav_account_image}>
                        <Image src={icon5} alt="" />
                    </div>
                    <p>Omar Akbar</p>
                </div>
            </div>
        </section>
    );
};

export default TopNavBar;

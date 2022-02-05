import React from 'react';
import Image from 'next/image';
import icon from '../../../Assets/images/icons/Group 5696.svg';
import styles from './AddNotice.module.css';

const AddNotice = ({ setIsTrue }) => {
    return (
        <button className={styles.add_notice_section} onClick={() => setIsTrue(true)}>
            <div className={styles.add_notice_button_section}>
                <button className={styles.notice_icon}>
                    <Image src={icon} alt="" />
                </button>
                <h6>Add New Notice</h6>
            </div>
        </button>
    );
};

export default AddNotice;

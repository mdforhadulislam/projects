import React from 'react';
import Image from 'next/image';
import styles from './NoticeHeader.module.css';
import search from '../../../Assets/images/icons/search.svg';

const NoticeHeader = () => {
    return (
        <div className={styles.notice_top_section}>
            <div className={styles.notice_input_search}>
                <input type="text" placeholder="Search by Id Record No ....." />
                <Image src={search} alt="" />
            </div>
            <div className={styles.notice_top_title}>
                <h4>Notice</h4>
            </div>

            <div className={styles.notice_top_search_container}>
                <h6>Search By date</h6>

                <div className={styles.note_date_input}>
                    <input type="date" id={styles.note_date} required />

                    <div className={styles.calender_icon}></div>
                </div>
            </div>
        </div>
    );
};

export default NoticeHeader;

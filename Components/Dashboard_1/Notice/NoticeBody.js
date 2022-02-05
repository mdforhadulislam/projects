import React from 'react';
import Image from 'next/image';
import icon from '../../../Assets/images/icons/printer.svg';
import icon2 from '../../../Assets/images/icons/telegram.svg';
import icon3 from '../../../Assets/images/icons/share.svg';
import styles from './NoticeBody.module.css';

const NoticeBody = () => {
    return (
        <div className={styles.notice_body_section}>
            <div className={styles.notice_top_box}>
                <div></div>
                <h4>Rasel Swimming Training Center</h4>
                <div className={styles.notice_body_top_icon}>
                    <div className={styles.notice_body_icon_container}>
                        <div className={styles.print}>
                            <Image src={icon} alt="" />
                        </div>
                        {/* <div className={styles.share}>
            <Image src={icon2} alt="" />
          </div> */}
                        <div className={styles.share}>
                            <Image src={icon3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!__ NOTICE BODY TITLE __> */}
            <div className={styles.notice_body_title}></div>

            {/* <!__ NOTICE BODY INFO START __> */}
            <div className={styles.notice_body_info_section}>
                <div className={styles.notice_body_info_id}>
                    <p>Id/record number</p>
                    <p>OM/102_SM70i</p>
                </div>

                <div className={styles.notice_body_info_date}>
                    <div>Date:15/08/2021</div>
                </div>
            </div>
            {/* <!__ NOTICE BODY INFO END __> */}

            {/* <!__ NOTICE BODY INFO START __> */}
            <div className={styles.notice_body_subject_section}>
                <h3>
                    SUBJECT: <span> ADMISSION NOTICE 2021_2022 </span>
                </h3>
            </div>
            {/* <!__ NOTICE BODY INFO END __> */}

            {/* <!__ NOTICE BODY TEXT START __> */}
            <div className={styles.notice_body_text_section}>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum.
                </p>
            </div>
            {/* <!__ NOTICE BODY TEXT END __>

  <!__ NOTICE BODY FOOTER START __> */}
            <div className={styles.notice_body_footer_section}>
                <div>
                    <h6>Md Rased Kamal</h6>
                    <h6>Director</h6>
                </div>
            </div>
            {/* <!__ NOTICE BODY FOOTER END __> */}
        </div>
    );
};

export default NoticeBody;

import React from 'react';

import AddNotice from '../../Components/Dashboard_1/Notice/AddNotice';
import CreateNotice from '../../Components/Dashboard_1/Notice/CreateNotice';
import NoticeBody from '../../Components/Dashboard_1/Notice/NoticeBody';
import NoticeHeader from '../../Components/Dashboard_1/Notice/NoticeHeader';
import styles from '../../styles/Notice.module.css';

const Notice = () => {
    const [isTrue, setIsTrue] = React.useState(false);
    const [dataForm, setData] = React.useState([]);

    return (
        <React.Fragment>
            <div className={styles.notice_main_section}>
                {!isTrue ? (
                    <>
                        <div className={styles.notice_body_box}>
                            <NoticeHeader />
                            <AddNotice setIsTrue={setIsTrue} />
                            <NoticeBody />
                        </div>
                    </>
                ) : (
                    <CreateNotice setIsTrue={setIsTrue} setData={setData} dataForm={dataForm} />
                )}
            </div>
        </React.Fragment>
    );
};

export default Notice;

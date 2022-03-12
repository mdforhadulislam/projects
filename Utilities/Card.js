import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import BroderCross from '../Assets/images/dashboard/BroderCross';
import CloudRedIcon from '../Assets/images/dashboard/CloudRedIcon';
import CloudWhiteIcon from '../Assets/images/dashboard/CloudWhiteIcon';
import DeleteIcon from '../Assets/images/dashboard/DeleteIcon';
import StyleSheet from './Card.module.css';

function Card({
    title,
    id,
    file,
    setLeftButton,
    setRightButton,
    actions,
    progress,
    progressHeight
}) {
    let [crossIcon, setCrossIcon] = useState(true);
    let [deleteIcon, setDeleteIcon] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setCrossIcon(false);
            setDeleteIcon(true);
        }, 5000);
    });
    return (
        <div className={StyleSheet.documents__container}>
            <div className={StyleSheet.documents__container__header}>
                <div className={StyleSheet.documents__container__header__title}>
                    {title}

                    {deleteIcon && (
                        <div
                            onClick={(e) => {
                                actions(id);
                                e.target.parentElement.parentElement.parentElement.parentElement.style.marginLeft =
                                    '0vw';
                                setLeftButton(5);
                                setRightButton(-5);
                            }}
                            style={{ cursor: 'pointer' }}>
                            <DeleteIcon />
                        </div>
                    )}

                    {crossIcon && (
                        <div
                            onClick={(e) => {
                                actions(id);
                                e.target.parentElement.parentElement.parentElement.parentElement.style.marginLeft =
                                    '0vw';
                                setLeftButton(5);
                                setRightButton(-5);
                            }}
                            style={{ cursor: 'pointer' }}>
                            <BroderCross />
                        </div>
                    )}
                </div>
            </div>
            <div className={StyleSheet.documents__container__body}>
                <div
                    className={StyleSheet.documents__container__body__image}
                    style={{ background: `#ababab url(${file})`, position: 'relative' }}>
                    <div
                        className={StyleSheet.documents__container__body__image__uploding}
                        style={{ width: '13vw', height: '12vw', borderRadius: '.5vw' }}>
                        <div
                            style={{
                                width: '13vw',
                                height: progressHeight + '%',
                                position: 'absolute',
                                zIndex: '10',
                                borderRadius: '.5vw'
                            }}>
                            {/* <img
                                style={{ width: '5vw', height: '5vw', margin: '3.5vw 4vw' }}
                                src={UploadingIconWhite}
                                alt="UploadingIconNone"
                            /> */}
                            <CloudWhiteIcon />
                        </div>

                        <div
                            style={{
                                width: '13vw',
                                height: '12vw',
                                position: 'absolute',
                                zIndex: '5',
                                overflow: 'hidden',
                                borderRadius: '.5vw',
                                background: '#00000075'
                            }}>
                            {/* <img
                                style={{ width: '5vw', height: '5vw', margin: '3.5vw 4vw' }}
                                src={UploadingIconRed}
                                alt=""
                            /> */}
                            <CloudRedIcon />
                        </div>

                        <div
                            style={{
                                width: '100%',
                                height: 'auto',
                                textAlign: 'center',
                                position: 'absolute',
                                margin: '9.5vw 0vw 0vw 0vw',
                                color: 'white',
                                zIndex: '6'
                            }}>
                            Upload {progress} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Card);

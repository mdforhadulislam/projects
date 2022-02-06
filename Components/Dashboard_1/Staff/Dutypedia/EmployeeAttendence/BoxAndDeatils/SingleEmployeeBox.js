import React from 'react';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import { CheckBox } from '../../../../../../Utilities/Utilites';
import StyleSheet from '../BoxAndDeatilsStyle/SingleEmployeeBox.module.css';

export default function SingleEmployeeBox({ user }) {
    return (
        <div className={StyleSheet.single__user__box}>
            <div className={StyleSheet.single__user__box__main}>
                <div className={StyleSheet.single__user__box__main__checkBox}>
                    <CheckBox style={{ width: '3vw', marginTop: '-.1.5vw' }} />
                </div>
                <div className={StyleSheet.single__user__box__main__user__deatils}>
                    <div className={StyleSheet.single__user__box__main__user__deatils__image__log}>
                        <div
                            className={StyleSheet.image}
                            style={{
                                background: `url(${user.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        <DutyPreIcon />
                    </div>
                    <div className={StyleSheet.single__user__box__main__user__deatils__name__id}>
                        <div className={StyleSheet.name}>{user.name}</div>
                        <div className={StyleSheet.id}>Id: 9297343{user.id}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

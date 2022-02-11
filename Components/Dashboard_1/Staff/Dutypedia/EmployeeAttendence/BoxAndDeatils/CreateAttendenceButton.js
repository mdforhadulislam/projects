import React from 'react';
import AddButtonIcon from '../../../../../../Assets/images/dashboard/AddOutline';
import StyleSheet from '../BoxAndDeatilsStyle/CreateAttendenceButton.module.css';

function CreateAttendenceButton({ timeSetPopup, selectedEmployee }) {
    return (
        <div className={StyleSheet.box__container__add__attendenec__button}>
            <div className={StyleSheet.box__container__add__attendenec__button__left}>
                Day Shift
            </div>
            <div className={StyleSheet.row}></div>
            <div className={StyleSheet.box__container__add__attendenec__button__right}>
                <div
                    className={StyleSheet.icon}
                    onClick={() => {
                        timeSetPopup(true);
                        selectedEmployee(false);
                    }}>
                    <AddButtonIcon />
                </div>
                <div className={StyleSheet.button}>Create A New Attendence</div>
            </div>
        </div>
    );
}
export default React.memo(CreateAttendenceButton);

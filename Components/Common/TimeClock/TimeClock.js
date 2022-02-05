import React from 'react';
import StyleSheet from './TimeClock.module.css';
const TimeClock = ({ title, actions, value }) => {
    return (
        <div className={StyleSheet.salarydateeverydaycontainer}>
            <div className={StyleSheet.salarydateeverydaycontainerinputbox}>
                <input
                    type="time"
                    value={value}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                />

                <div className={StyleSheet.salarydateeverydaycontainerinputboxicon}></div>
            </div>
        </div>
    );
};

export default TimeClock;

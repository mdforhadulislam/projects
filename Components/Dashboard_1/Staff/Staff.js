import React, { useState } from 'react';
import Dutypedia from './Dutypedia/Dutypeadia';
import StyleSheet from './MainApp.module.css';
import Offline from './Offline/Offline';

function Staff() {
    let [reanderDutypedia, setStateRenderDutypedia] = useState(true);
    let [reanderOffline, setStateRenderOffline] = useState(false);

    let clickDutypedia = (e) => {
        setStateRenderDutypedia(true);
        setStateRenderOffline(false);
        e.target.style.color = '#da1e37';
        e.target.style.borderBottom = '0.1vw solid #da1e37';
        e.target.parentElement.children[2].style.color = '#313131';
        e.target.parentElement.children[2].style.borderBottom = '0.1vw solid #313131';
    };

    let clickOffline = (e) => {
        setStateRenderDutypedia(false);
        setStateRenderOffline(true);
        e.target.style.color = '#da1e37';
        e.target.style.borderBottom = '0.1vw solid #da1e37';
        e.target.parentElement.children[0].style.color = '#313131';
        e.target.parentElement.children[0].style.borderBottom = '0.1vw solid #313131';
    };

    return (
        <div className={StyleSheet.main__app}>
            <div className={StyleSheet.main__app__container}>
                <div className={StyleSheet.main__app__container__header}>
                    <div className={StyleSheet.main__app__container__header__box}>
                        <div
                            onClick={clickDutypedia}
                            className={StyleSheet.main__app__container__header__box__dutypedia}>
                            Dutypedia
                        </div>
                        <div className={StyleSheet.main__app__container__header__box__row}></div>
                        <div
                            onClick={clickOffline}
                            className={StyleSheet.main__app__container__header__box__offline}>
                            Offline
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.main__app__container__body}>
                    {reanderDutypedia && <Dutypedia />}
                    {reanderOffline && <Offline />}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Staff);

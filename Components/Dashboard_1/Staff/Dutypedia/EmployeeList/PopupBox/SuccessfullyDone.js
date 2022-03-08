import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import StyleSheet from '../PopupBoxStyle/SuccessfullyDone.module.css';

Modal.setAppElement('#__next');
function SuccessfullyDone({ setSuccessfullyDonePopup, successfullyDonePopup }) {
    const doneHendeler = () => {
        setSuccessfullyDonePopup(false);
    };
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };

    return (
        <Modal isOpen={successfullyDonePopup} style={customStyles}>
            <div className={StyleSheet.successfully__done__container}>
                <div className={StyleSheet.successfully__done__container__box}>
                    <div className={StyleSheet.successfully__done__container__box__title}>
                        Your Invitation Sent Successfully!!
                    </div>
                    <div className={StyleSheet.successfully__done__container__box__button}>
                        <button type="button" onClick={doneHendeler}>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(SuccessfullyDone);

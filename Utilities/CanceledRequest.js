import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import StyleSheet from './DeleteMember.module.css';

Modal.setAppElement('#__next');
function CanceledRequest({ setCanceledRequested, canceledRequest, actions }) {
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
        <Modal isOpen={canceledRequest} style={customStyles}>
            <div className={StyleSheet.delete__member__container}>
                <div className={StyleSheet.delete__member__container__box}>
                    <div className={StyleSheet.delete__member__container__box__title}>
                        Do You Want To Canceled This Invitation?
                    </div>

                    <div className={StyleSheet.delete__member__container__box__button}>
                        <button
                            type="button"
                            onClick={() => {
                                setCanceledRequested(false);
                                actions();
                            }}>
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setCanceledRequested(false);
                            }}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(CanceledRequest);

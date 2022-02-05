import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import StyleSheet from './DeleteMember.module.css';

Modal.setAppElement('#__next');
function DeleteMember({ setDeleteMember, deleteMember, actions }) {
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
        <Modal isOpen={deleteMember} style={customStyles}>
            <div className={StyleSheet.delete__member__container}>
                <div className={StyleSheet.delete__member__container__box}>
                    <div className={StyleSheet.delete__member__container__box__title}>
                        Do You Want To Delate This Member?
                    </div>

                    <div className={StyleSheet.delete__member__container__box__button}>
                        <button
                            type="button"
                            onClick={() => {
                                setDeleteMember(false);
                                actions();
                            }}>
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setDeleteMember(false);
                            }}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(DeleteMember);

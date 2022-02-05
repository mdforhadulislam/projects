import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import DownIcon from '../../../../../../Assets/images/dashboard/DownIcon';
import UpIcon from '../../../../../../Assets/images/dashboard/UpIcon';
import StyleSheet from '../PopupBoxStyle/PaidPopup.module.css';

Modal.setAppElement('#__next');
export default function PaidPopup({ paidPopup, setPaidPopup, user, confirmActions, cencelAction }) {
    const customStyles = {
        content: {
            top: '45%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -45%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };

    const [amount, setAmount] = useState('');

    return (
        <Modal isOpen={paidPopup} style={customStyles}>
            <div className={StyleSheet.paid__container__popup}>
                <div className={StyleSheet.paid__container__popup__title}>Enter Ammount</div>
                <form className={StyleSheet.paid__container__popup__from}>
                    <div className={StyleSheet.paid__container__popup__from__input__box}>
                        <input
                            type="number"
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            value={amount}
                            placeholder="500000.."
                        />
                        <div
                            className={
                                StyleSheet.paid__container__popup__from__input__box__icon__button
                            }>
                            <button
                                type="button"
                                onClick={() => {
                                    setAmount(Number(amount) + 1);
                                }}>
                                <UpIcon />
                            </button>
                            <span></span>
                            <button
                                type="button"
                                onClick={() => {
                                    amount > 0 ? setAmount(Number(amount) - 1) : setAmount(0);
                                }}>
                                <DownIcon />
                            </button>
                        </div>
                    </div>
                    <div className={StyleSheet.paid__container__popup__from__button}>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                confirmActions({ id: user.user_id });
                            }}>
                            Confirm
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                cencelAction();
                            }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

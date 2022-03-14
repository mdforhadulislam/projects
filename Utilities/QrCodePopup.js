import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import CrossIcon from '../Assets/images/dashboard/CrossIcon';
import StyleSheet from './QrCodePopup.module.css';

Modal.setAppElement('#__next');
function QrCodePopup({ qrCodePopup, setQrCodePopup, setAddInformationPopup }) {
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
        <Modal isOpen={qrCodePopup} style={customStyles}>
            <div className={StyleSheet.qr__code__main__container}>
                <div
                    className={StyleSheet.qr__code__main__container__cencel__btn}
                    onClick={() => setQrCodePopup(false)}>
                    <CrossIcon />
                </div>

                <div className={StyleSheet.qr__code__main__container__main__body}>
                    <div className={StyleSheet.qr__code__main__container__main__body__top__heading}>
                        <p>Add with QR code</p>
                    </div>

                    <div
                        className={
                            StyleSheet.qr__code__main__container__main__body__bottom__heading
                        }
                        onClick={() => {
                            setAddInformationPopup(true);
                            setQrCodePopup(false);
                        }}>
                        <p>Add manually</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(QrCodePopup);

import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import style from 'styled-components';
import CrossIcon from '../Assets/images/dashboard/CrossIcon';
// import StyleSheet from './QrCodePopup.module.css';

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
            <Wrraper>
                <div className="qr__code__main__container">
                    <div
                        className="qr__code__main__container__cencel__btn"
                        onClick={() => setQrCodePopup(false)}>
                        <CrossIcon />
                    </div>

                    <div className="qr__code__main__container__main__body">
                        <div
                            className="qr__code__main__container__main__body__top__heading
                            ">
                            <p>Add with QR code</p>
                        </div>

                        <div
                            className="qr__code__main__container__main__body__bottom__heading
                        "
                            onClick={() => {
                                setAddInformationPopup(true);
                                setQrCodePopup(false);
                            }}>
                            <p>Add manually</p>
                        </div>
                    </div>
                </div>
            </Wrraper>
        </Modal>
    );
}

export default React.memo(QrCodePopup);

const Wrraper = style.div`
.qr__code__main__container {
    width: 300px;
    height: 160px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: white;
    -webkit-box-shadow: 0vw 0vw 0.5vw 0vw rgb(0 0 0 / 16%);
    box-shadow: 0vw 0vw 0.5vw 0vw rgb(0 0 0 / 16%);
    border-radius: 10px;
    position: relative;
    padding: 20px 0vw;
}
.qr__code__main__container__cencel__btn {
    width: 53px;
    height: 40px;
    position: absolute;
    top: -32px;
    right: -40px;
}
.qr__code__main__container__cencel__btn svg {
    cursor: pointer;
    height: 38px;
    width: 38px;
}
.qr__code__main__container__main__body {
    width: 100%;
    text-align: center;
}

.qr__code__main__container__main__body__top__heading {
    width: 100%;
    height: auto;
    padding: 6px;
    cursor: pointer;
    font-size: 18px;
    color: #313131;
    transition: all 0.2s;
    margin-top: 28px;
    margin-bottom: 13px;
}
.qr__code__main__container__main__body__top__heading p {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
.qr__code__main__container__main__body__top__heading:hover {
    color: white;
    background: #da1e37;
}

.qr__code__main__container__main__body__bottom__heading {
    width: 100%;
    height: auto;
    color: #313131;
    padding: 6px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s;
}

.qr__code__main__container__main__body__bottom__heading p {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
.qr__code__main__container__main__body__bottom__heading:hover {
    color: white;
    background: #da1e37;
}


`;

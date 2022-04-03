import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import style from 'styled-components';

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
            <Wrraper>
                <div className="delete__member__container">
                    <div className="delete__member__container__box">
                        <div className="delete__member__container__box__title">
                            Do You Want To Delate This Member?
                        </div>

                        <div className="delete__member__container__box__button">
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
            </Wrraper>
        </Modal>
    );
}

export default React.memo(DeleteMember);

const Wrraper = style.div`

.delete__member__container {
    width: 100%;
    /* height: 112%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5vw);
  padding: 12vw 0vw 2vw 0vw; */
}

.delete__member__container .delete__member__container__box {
    width: 33vw;
    height: auto;
    margin: auto;
    padding: 3vw;
    display: flex;
    background: white;
    border-radius: 1vw;
    box-shadow: 0vw 0vw 0.5vw 0vw rgb(0 0 0 / 28%);
    flex-direction: column;
    justify-content: space-around;
    align-content: stretch;
    align-items: center;
}
.delete__member__container .delete__member__container__box .delete__member__container__box__title {
    font-size: 1.6vw;
    padding-bottom: 1.5vw;
    color: rgb(102, 102, 102);
}
.delete__member__container .delete__member__container__box .delete__member__container__box__button {
    width: 90%;
    height: auto;
    text-align: center;
    display: flex;
    justify-content: space-around;
}

.delete__member__container
    .delete__member__container__box
    .delete__member__container__box__button
    button {
    width: auto;
    padding: 0.34vw 4vw;
    font-size: 1.4vw;
    border: none;
    border-radius: 0.4vw;
    cursor: pointer;
}

.delete__member__container
    .delete__member__container__box
    .delete__member__container__box__button
    button:nth-child(1) {
    background-color: #da1e37;
    color: rgb(255, 255, 255);
}

.delete__member__container
    .delete__member__container__box
    .delete__member__container__box__button
    button:nth-child(2) {
    border: 0.1vw solid #da1e37;
    background: white;
    color: #da1e37;
}

`;

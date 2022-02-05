import React from 'react';
import styled from 'styled-components';
import user from '/Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../../Assets/images/dashboard/DutyPreIconSmall';
import { useDispatch } from 'react-redux';
import {
    addAcceptToAppointment,
    addCancelToAppointment,
    addToAppointment
} from '../../../../Redux/Dashboard_1/Action/appointmentAction';

import Modal from 'react-modal';
import Cross from '../../../../Assets/images/dashboard/Cross';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px'
    }
};
Modal.setAppElement('#__next');

const AppointmentReceivedReqCard = ({ appointment }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleAccept = (data) => {
        dispatch(addAcceptToAppointment(data));
        dispatch(addToAppointment(data));
    };
    const handleCancel = (data) => {
        dispatch(addCancelToAppointment(data));
    };
    return (
        <EmployeeItem>
            <EmployeeItemLeft>
                <UserBox>
                    <ImageContainerEmployee>
                        <Image src={user} alt="User" />
                        <DutyPreIcon />
                    </ImageContainerEmployee>
                    <EmployeeTextItem>
                        <p>{appointment.name}</p>
                        <p>Id: Dp2935-897</p>
                    </EmployeeTextItem>
                </UserBox>
                <EmployeeTextItemMid onClick={() => openModal()}>
                    <p>{appointment.date.toDateString()}, 10:00 AM</p>
                    <p>{appointment.title}</p>
                </EmployeeTextItemMid>
                <ButtonBox>
                    {appointment.isAccepted || appointment.isCancelled ? (
                        <React.Fragment>
                            {appointment.isAccepted && <p>Accepted</p>}
                            {appointment.isCancelled && <p>Cancelled</p>}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <button
                                className="btn  btn-danger"
                                onClick={() => handleAccept(appointment)}>
                                Accept
                            </button>
                            <button
                                className="btn  btn-outline-danger"
                                onClick={() => handleCancel(appointment)}>
                                Cancel
                            </button>
                        </React.Fragment>
                    )}
                </ButtonBox>
            </EmployeeItemLeft>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <ModalBox>
                    <TopModalBox onClick={() => closeModal()}>
                        <Cross />
                    </TopModalBox>
                    <MidModalBox>
                        <h6>Date :{appointment?.date.toDateString()}</h6>
                        <h6>Time :{appointment?.date.toDateString()}</h6>
                        <h5>Title : {appointment?.title}</h5>
                        <h5>Description </h5>
                        <p>
                            {appointment?.description}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                            aliquid, voluptatem assumenda quis deserunt excepturi nostrum rem eum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Eligendi suscipit
                            consequatur error aliquid fugit quia mollitia numquam impedit, aut
                            labore quo dicta rerum exercitationem consequuntur, similique vel
                            quidem! Illo dolore quisquam quidem ratione facilis ea error molestias
                            beatae alias dolorem impedit aut nisi quam voluptatem reprehenderit, in
                            fugit, necessitatibus quibusdam?
                        </p>
                    </MidModalBox>
                    <ButtonModalBox>
                        {appointment.isAccepted || appointment.isCancelled ? (
                            <React.Fragment>
                                {appointment.isAccepted && <p>Accepted</p>}
                                {appointment.isCancelled && <p>Cancelled</p>}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <button
                                    className="btn  btn-danger"
                                    onClick={() => handleAccept(appointment)}>
                                    Accept
                                </button>
                                <button
                                    className="btn  btn-outline-danger"
                                    onClick={() => handleCancel(appointment)}>
                                    Cancel
                                </button>
                            </React.Fragment>
                        )}
                    </ButtonModalBox>
                </ModalBox>
            </Modal>
        </EmployeeItem>
    );
};

export default AppointmentReceivedReqCard;

const EmployeeItem = styled('div')`
    width: 100%;
    margin: 1.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const EmployeeItemLeft = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 920px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;
const UserBox = styled('div')`
    display: flex;
    align-items: center;
    width: 48%;
    @media screen and (max-width: 920px) {
        width: 100%;
    }
`;
const EmployeeTextItem = styled('div')`
    margin-left: 1.5rem;
    p:first-child {
        margin-bottom: 5px;
    }
    p :last-child {
        font-size: 14px;
        color: gray;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 920px) {
        margin-left: 2%;
        p:first-child {
            font-size: 70%;
        }
        p :last-child {
            font-size: 50%;
            margin-bottom: 5px;
        }
    }
`;
const EmployeeTextItemMid = styled('div')`
    width: 25%;
    cursor: pointer;
    p {
        font-size: 14px;
        color: gray;
        margin-bottom: 5px;
    }
    p:first-child {
        color: black;
    }
    @media screen and (max-width: 920px) {
        width: 100%;
        margin-top: 2%;
        p {
            font-size: 8.5px;
        }
    }
`;
const ImageContainerEmployee = styled('div')`
    position: relative;
    width: 91px;
    img {
        width: 81px !important;
        border-radius: 8px;
    }
    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 0;
        right: 2%;
    }
    @media screen and (max-width: 920px) {
        width: 57px;
        img {
            width: 47px !important;
            border-radius: 8px;
        }
        svg {
            width: 14px;
            height: 14px;
        }
    }
`;
const ButtonBox = styled('div')`
    display: flex;
    justify-content: flex-end;
    width: 40%;
    p {
        text-align: center;
        color: red;
        margin-bottom: 0;
    }
    button {
        width: 21%;
        height: 37px;
        font-size: 70%;
        margin-left: 10px;
    }
    @media screen and (max-width: 920px) {
        justify-content: flex-start;
        width: 100%;
        button {
            width: 35%;
            height: 30px;
            font-size: 60%;
            margin-top: 5%;
            margin-left: 0px;
            margin-right: 10px;
        }
        p {
            width: 100%;
            text-align: end;
            font-size: 70%;
        }
    }
`;
const ModalBox = styled('div')`
    width: 900px;
    padding: 0.5rem 1rem;
    @media screen and (max-width: 920px) {
        width: 255px;
        padding: 0.2rem 0.5rem;
    }
`;
const TopModalBox = styled('div')`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    svg {
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 920px) {
        svg {
            width: 30px;
            height: 30px;
        }
    }
`;
const MidModalBox = styled('div')`
    h6 {
        font-size: 20px;
        color: rgb(102, 102, 102);
        margin-bottom: 1%;
    }
    h6:nth-child(2) {
        margin-bottom: 3%;
    }
    h5 {
        font-size: 25px;
        margin-bottom: 2%;
    }
    @media screen and (max-width: 920px) {
        h6 {
            font-size: 60%;
        }
        h5 {
            font-size: 60%;
            font-weight: 400;
        }
        p {
            font-size: 50%;
        }
    }
`;
const ButtonModalBox = styled('div')`
    display: flex;
    justify-content: center;

    button {
        width: 22%;
        height: 50px;
        margin-left: 2%;
    }
    p {
        color: red;
        font-size: 20px;
    }
    @media screen and (max-width: 920px) {
        button {
            width: 35%;
            height: 30px;
            font-size: 55%;
        }
        p {
            font-size: 11px;
        }
    }
`;

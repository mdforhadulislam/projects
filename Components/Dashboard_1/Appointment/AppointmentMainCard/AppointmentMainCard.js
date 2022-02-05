import React from 'react';
import styled from 'styled-components';
import user from '../../../../Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../../Assets/images/dashboard/DutyPreIconSmall';

import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
    addCancelToUpcomingAppointment,
    addToPreviousAppointment
} from '../../../../Redux/Dashboard_1/Action/appointmentAction';
import Cross from '../../../../Assets/images/dashboard/Cross';
import ThreeDot from '../../../../Assets/images/dashboard/ThreeDot';

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
const AppointmentMainCard = ({ appointment, isPrevious }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const [isClickTrue, setIsClickTrue] = React.useState(false);
    const [nameOfClick, setNameOfClick] = React.useState('');
    const dispatch = useDispatch();
    const handleIsClick = () => {
        setIsClickTrue(!isClickTrue);
    };
    const handleCancel = () => {
        setIsClickTrue(false);
        setIsOpen2(true);
        setNameOfClick('cancel');
    };
    function openModal() {
        setIsOpen(true);
    }
    function openModal2(name) {
        setIsOpen2(true);
        setNameOfClick(name);
    }

    function closeModal() {
        setIsOpen(false);
        console.log('click');
    }
    function closeModal2() {
        setIsOpen2(false);
    }
    function handlePostClick(data) {
        if (nameOfClick === 'cancel') {
            dispatch(addCancelToUpcomingAppointment(data));
            setIsOpen2(false);
        }
        if (nameOfClick === 'confirm') {
            dispatch(addToPreviousAppointment(data));
            setIsOpen2(false);
        }
    }
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
                <EmployeeTextItemMid onClick={openModal}>
                    <p>{appointment?.date?.toDateString()}, 10.00 AM</p>
                    <p>{appointment?.title}</p>
                </EmployeeTextItemMid>
            </EmployeeItemLeft>
            <CancelBox>
                {isPrevious ? (
                    <React.Fragment>
                        {appointment.isCancelled || appointment.isConfirmed ? (
                            <React.Fragment>
                                {appointment.isCancelled && <h6>Appointment Cancelled</h6>}
                                {appointment.isConfirmed && <h6>Appointment Competed</h6>}
                            </React.Fragment>
                        ) : (
                            ''
                        )}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {appointment.isCancelled || appointment.isConfirmed ? (
                            <React.Fragment>
                                {appointment.isCancelled && <h6>Appointment Cancelled</h6>}
                                {appointment.isConfirmed && <h6>Appointment Competed</h6>}
                            </React.Fragment>
                        ) : (
                            <div onClick={handleIsClick}>
                                <ThreeDot />
                            </div>
                        )}
                        {isClickTrue && <p onClick={handleCancel}>Cancel</p>}
                    </React.Fragment>
                )}
            </CancelBox>
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
                        <h6>Date :{appointment?.date?.toDateString()}</h6>
                        <h6>Time :{appointment?.date?.toDateString()}</h6>
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
                        {isPrevious ? (
                            <React.Fragment>
                                {appointment.isCancelled && <p>Appointment Cancelled</p>}
                                {appointment.isConfirmed && <p>Appointment Completed</p>}
                            </React.Fragment>
                        ) : appointment.isCancelled || appointment.isConfirmed ? (
                            <React.Fragment>
                                {appointment.isCancelled && <p>Appointment Cancelled</p>}
                                {appointment.isConfirmed && <p>Appointment Completed</p>}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <button
                                    className="btn  btn-danger"
                                    onClick={() => openModal2('confirm')}>
                                    Completed
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => openModal2('cancel')}>
                                    Cancel
                                </button>
                            </React.Fragment>
                        )}
                    </ButtonModalBox>
                </ModalBox>
            </Modal>
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={closeModal2}
                style={customStyles}
                contentLabel="Example Modal">
                <CancelledModal>
                    <h3>Are You Sure ?</h3>
                    <CancelledModalButton>
                        <button
                            className="btn btn-danger"
                            onClick={() => handlePostClick(appointment)}>
                            Yes
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => closeModal2()}>
                            No
                        </button>
                    </CancelledModalButton>
                </CancelledModal>
            </Modal>
        </EmployeeItem>
    );
};

export default AppointmentMainCard;
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
    width: 100%;
    align-items: center;

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
    margin-left: 4%;
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
const CancelBox = styled('div')`
    width: 13%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    div {
        cursor: pointer;
    }

    p {
        position: absolute;
        background-color: white;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
        border-radius: 8px;
        padding: 0.5rem 1rem;
        top: -7px;
        right: 1rem;
        :hover {
            background-color: red;
            color: white;
        }
    }
    h6 {
        color: red;
        margin-bottom: 0;
    }
    @media screen and (max-width: 920px) {
        width: 60%;
        h6 {
            font-size: 50%;
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
            font-size: 50%;
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
    button:first-child {
        :hover {
            background-color: white;
            color: red;
        }
    }
    p {
        color: red;
        font-size: 20px;
    }
    @media screen and (max-width: 920px) {
        button {
            width: 40%;
            height: 30px;
            font-size: 60%;
        }
        p {
            font-size: 11px;
        }
    }
`;
const CancelledModal = styled('div')`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    @media screen and (max-width: 920px) {
        h3 {
            font-size: 20px;
        }
        width: 255px;
        padding: 0.2rem 0.5rem;
    }
`;

const CancelledModalButton = styled('div')`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    button {
        width: 45%;
        margin-right: 2%;
    }
    @media screen and (max-width: 920px) {

        button {
        width: 35%;
        font-size:80%;
    }
`;

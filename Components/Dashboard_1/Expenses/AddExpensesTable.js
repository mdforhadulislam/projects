import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';
import dropdown from '../../../Assets/images/resite/arrow4.svg';
import search from '../../../Assets/images/icons/search.svg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Modal from 'react-modal';

import { useDispatch, useSelector } from 'react-redux';
import InputNumberBoxEdit from '../../Common/InputNumberBox/InputNumberBoxEdit';
import { useRouter } from 'next/router';
import NewInputDateBox from '../../Common/InputDateBox/NewInputDateBox';

import {
    removeFromExpenses,
    updateToExpenses
} from '../../../Redux/Dashboard_1/Action/expensesAction';
Modal.setAppElement('#__next');

const customStyles = {
    content: {
        top: '40%',
        left: '36%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 10%)'
    }
};
const customStyles2 = {
    content: {
        top: '40%',
        left: '10.5%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 10%)'
    }
};

const AddExpensesTable = () => {
    const data = useSelector((state) => state.expensesReducers.expenses);
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push('/dashboard_1/expenses/add_expenses');
    };
    const [isIconFalse, setIsIconFalse] = React.useState(true);
    const [isTrue, setIsTrue] = React.useState(false);
    const [storeData, setStoreData] = React.useState(null);
    const [isPop, setIsPop] = React.useState(null);
    const [isOneEdit, setIsOneEdit] = React.useState(null);
    const [deleteExpenses, setDeleteExpenses] = React.useState(null);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [numberInc, setNumberInc] = React.useState(0);
    const [startDate, setStartDate] = React.useState(new Date());
    const [widthData, setWidthData] = React.useState(null);

    const dispatch = useDispatch();

    const handlePopBox = (id) => {
        setIsPop(id);
        setIsTrue(true);
    };
    const handleOnChange = (e) => {
        setStoreData(e.target.value);
    };
    const handleUpdateData = () => {
        dispatch(updateToExpenses(isPop, startDate, storeData, numberInc));
        setIsOneEdit(false);
        setIsIconFalse(true);
    };
    const handleOneEdit = (id) => {
        setIsOneEdit(id);
        setIsTrue(false);
        setIsIconFalse(false);
    };
    const openModal = (id) => {
        setIsTrue(false);
        setModalIsOpen(true);
        setDeleteExpenses(id);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const deleteYes = () => {
        dispatch(removeFromExpenses(deleteExpenses));
        closeModal();
    };
    const handleCancel = () => {
        setIsOneEdit(false);
    };
    React.useEffect(() => {
        setWidthData(window.innerWidth);
    }, []);
    return (
        <Wrapper>
            <Container fluid>
                <Row>
                    <HeaderBox>
                        <FilterBox>
                            <h6>Filtered By</h6>
                            <InputSearchByDate>
                                <select>
                                    <option value="1">Last 1 day</option>
                                    <option value="7">Last 7</option>
                                    <option value="30">Last 1 Month</option>
                                </select>
                                <div className="select-style">
                                    <Image src={dropdown} alt="" />
                                </div>
                            </InputSearchByDate>
                        </FilterBox>
                        <div className="notice_input_search">
                            <input type="text" placeholder="Search Now" />
                            <Image src={search} alt="" />
                        </div>
                    </HeaderBox>
                </Row>
                <Row>
                    <TableBox>
                        <TableHeader>
                            <Title>
                                <h4>Date</h4>
                            </Title>
                            <Title>
                                <h4>Name of Expenses</h4>
                            </Title>
                            <Title>
                                <h4>Amount</h4>
                            </Title>
                        </TableHeader>
                        <TableBody>
                            {data?.map((dt, i) => (
                                <DataRow key={i}>
                                    <Item1>
                                        {isOneEdit === dt.id ? (
                                            <NewInputDateBox
                                                startDate={startDate}
                                                setStartDate={setStartDate}
                                            />
                                        ) : (
                                            <h6>{dt.date.toLocaleDateString('en-US')}</h6>
                                        )}
                                    </Item1>
                                    <Item2>
                                        {isOneEdit === dt.id ? (
                                            <input
                                                type="text"
                                                placeholder={dt.name}
                                                onChange={handleOnChange}
                                                defaultValue={dt.name}
                                            />
                                        ) : (
                                            <h6>{dt.name}</h6>
                                        )}
                                    </Item2>
                                    <Item3>
                                        {isOneEdit === dt.id ? (
                                            <div>
                                                <InputNumberBoxEdit
                                                    setNumberInc={setNumberInc}
                                                    numberInc={numberInc}
                                                    name="amount"
                                                />
                                            </div>
                                        ) : (
                                            <h6>{dt.amount}</h6>
                                        )}
                                        {isIconFalse && (
                                            <button onClick={() => handlePopBox(dt.id)}>
                                                <BsThreeDotsVertical />
                                            </button>
                                        )}

                                        {isPop === dt.id && isTrue && (
                                            <FloatBox>
                                                <p onClick={() => handleOneEdit(dt.id)}>Edit</p>
                                                <p onClick={() => openModal(dt.id)}>Delete</p>
                                            </FloatBox>
                                        )}
                                    </Item3>
                                </DataRow>
                            ))}
                        </TableBody>
                    </TableBox>
                </Row>
                <ModalBoxDiv>
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={widthData < 600 ? customStyles2 : customStyles}
                        // contentLabel="Example Modal"
                    >
                        <ModalDiv id="delete-routine-popup" className="popup-text">
                            <h5 className="text-capitalize text-center">
                                Do You Want To Delete This Expenses?
                            </h5>
                            <ModalBox className="d-flex justify-content-center btn-bootom">
                                <button
                                    id="confirmRoutineDeleteBtn"
                                    className="cmnBtn mr-4 border-0"
                                    onClick={deleteYes}>
                                    Yes
                                </button>
                                <button
                                    id="cancleRoutineDeleteBtn"
                                    className="cmnBtn"
                                    onClick={closeModal}>
                                    No
                                </button>
                            </ModalBox>
                        </ModalDiv>
                    </Modal>
                </ModalBoxDiv>
                <Row>
                    <AddExpensesButton>
                        <button onClick={handleClick}>+</button>
                        <p>Add Expenses</p>
                    </AddExpensesButton>
                </Row>
                <Row>
                    {isOneEdit && (
                        <ButtonBox>
                            <button onClick={handleUpdateData} className="btn btn-danger ">
                                Save
                            </button>
                            <button onClick={handleCancel} className="btn  btn-outline-danger ">
                                Cancel
                            </button>
                        </ButtonBox>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default AddExpensesTable;
const Wrapper = styled('div')`
    width: 80.3%;
    margin: 3rem auto;
    background-color: white;
    height: 100%;
    padding: 3rem 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    @media screen and (max-width: 600px) {
        width: 88.3%;
        margin: 4rem 2rem;
    }
`;
const ModalBoxDiv = styled('div')`
    .ReactModalPortal {
        .ReactModal__Overlay .ReactModal__Overlay--after-open {
            .ReactModal__Content .ReactModal__Content--after-open {
                inset: 50% auto auto 35%;
            }
        }
    }
`;
const HeaderBox = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    .notice_input_search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 21rem;
        border: none;
        border-radius: 0.4rem;
        display: flex;
        padding: 0.2% 1%;
        border: 1px solid lightgray;
    }
    .notice_input_search input {
        border: none;
        height: 2.5rem;

        background-color: transparent;
        :focus {
            outline: none;
        }
    }
    .notice_input_search input::placeholder {
        font-size: 1rem;
    }
    .notice_input_search span {
        width: 2rem !important;
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem;
        .notice_input_search {
            width: 18.438rem;
            margin-top: 1rem;
        }
        .notice_input_search input {
            border: none;
            height: 32px;

            background-color: transparent;
        }
        .notice_input_search input::placeholder {
            font-size: 12px;
        }
        .notice_input_search span {
            width: 32px !important;
            height: 16px !important;
        }
    }
`;
const InputSearchByDate = styled('div')`
    display: flex;
    justify-content: space-around;

    padding: 0rem 2rem 0rem 2rem;

    div:nth-child(1) {
        display: grid;
        align-items: center;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
    select {
        font-size: 14px;
        height: 28px;
        width: 130px;
        position: relative;
        border: 1px solid red;
        border-radius: 6px;
        outline: none;
        background-color: white;
    }
    .select-style {
        height: 28px;
        width: 27px;
        background: #dc3545;
        position: absolute;
        pointer-events: none;
        z-index: 10;
        padding-left: 6px;
        border-radius: 4px;
        /* border-top-right-radius: 0.4vw;
    border-bottom-right-radius: 0.4vw; */
        transform: translateX(5.6rem);
        margin-right: 76px;
    }
    .select-style img {
        height: 100%;
        width: 100%;
    }

    /* select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: white;
    border: 1px solid red;
    border-radius: 0.3rem;

    width: 9rem;
  } */
    @media screen and (max-width: 600px) {
        padding: 0rem 1rem 0rem 1rem;
        select {
            font-size: 11px;
            height: 19px;
            width: 79px;
            border-radius: 4px;
        }
        .select-style {
            height: 19px;
            width: 21px;
            padding-left: 5px;
            border-radius: 5px;
            margin-right: 122px;
        }
    }
`;
const FilterBox = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h6 {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    @media screen and (max-width: 600px) {
        justify-content: start;
        h6 {
            font-size: 11px;
            margin-top: 0.5rem;
        }
    }
`;
const TableBox = styled('div')`
    padding: 1rem 2rem;
    @media screen and (max-width: 600px) {
        padding: 1rem 1rem;
    }
`;
const TableHeader = styled('div')`
    background-color: #dc3545;
    color: white;
    border-radius: 0.4rem;
    height: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div:first-child {
        padding-left: 16%;
        padding-top: 1rem;
    }
    div:nth-child(2) {
        text-align: center;
        padding-top: 1rem;
    }
    div:nth-child(3) {
        display: flex;
        justify-items: center;
        align-items: center;
        padding-top: 1rem;
        h4 {
            margin-left: 36%;
        }
        svg {
            margin-left: 35%;
        }
    }
    @media screen and (max-width: 600px) {
        height: 2.5rem;
    }
`;
const TableBody = styled('div')`
    border: 1px solid lightgray;
`;
const DataRow = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Title = styled('div')`
    h4 {
        font-size: 115%;
    }
    @media screen and (max-width: 600px) {
        h4 {
            font-size: 10.5px;
        }
    }
`;
const Item1 = styled('div')`
    padding-top: 1rem;
    padding-left: 3rem;
    padding-bottom: 1rem;
    font-size: 16px;
    border-bottom: 1px solid lightgray;
    input {
        border: 1px solid red;
        border-radius: 5px;
        height: 42px;
        :focus {
            outline: none;
        }
    }
    .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
        width: 410px;
    }
    .newInputDateBox__DateIcon-sc-tuy7xn-1 {
        height: 42px;
        width: 46px;
        right: 54% !important;
    }
    @media screen and (max-width: 900px) {
        padding-left: 1rem;
        .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
            width: 191px;
        }
        .newInputDateBox__DateIcon-sc-tuy7xn-1 {
            height: 42px;
            width: 46px;
            right: 2% !important;
        }
    }
    @media screen and (max-width: 600px) {
        padding-left: 1rem;
        padding-bottom: 0.7rem;
        padding-top: 0.7rem;
        h6 {
            font-size: 8.5px;
        }
        .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
            width: 85px;
            .react-datepicker-wrapper {
                .react-datepicker__input-container input {
                    width: 71px;
                    height: 19px;
                    font-size: 8.5px;
                }
            }
            .newInputDateBox__DateIcon-sc-tuy7xn-1 {
                width: 19px;
                height: 20px;
                right: 12% !important;
                top: 4px;
                span {
                    width: 20px !important;
                    height: 12px !important;
                }
            }
        }
    }
`;
const Item2 = styled('div')`
    text-align: center;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding-top: 1rem;
    border-bottom: 1px solid lightgray;
    input {
        margin-left: 20%;
        border: none;
        :focus {
            outline: none;
        }
    }
    @media screen and (max-width: 900px) {
        input {
            margin-left: 10%;
        }
    }
    @media screen and (max-width: 600px) {
        padding-top: 0.7rem;
        h6 {
            font-size: 8.5px;
        }
        input {
            width: 40px;
            font-size: 8.5px;
        }
    }
`;
const Item3 = styled('div')`
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    border-bottom: 1px solid lightgray;
    h6 {
        padding-left: 40%;
    }
    button {
        background-color: transparent;
        border: none;

        svg {
            font-size: 22px;
        }
    }
    div {
        margin: 0px auto;
    }
    @media screen and (max-width: 600px) {
        margin-top: -11px;
        h6 {
            font-size: 8.5px;
            margin-bottom: 0;
        }
        button {
            svg {
                font-size: 12px;
            }
        }
        .InputNumberBoxEdit__InputNumberBox-sc-3p9v36-1 {
            width: 67px;
            height: 28px;
            margin-top: 11px;
            input {
                width: 45px;
                height: 23px;
                font-size: 8.5px;
            }
            .InputNumberBoxEdit__ButtonGroupBox-sc-3p9v36-0 {
                width: 26px;
                height: 27px;
            }
        }
    }
`;

const FloatBox = styled('div')`
    position: absolute;
    width: 128px;
    height: 74px;
    background-color: white;
    border-radius: 8px;
    top: 15px;
    right: 10%;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    z-index: 50;
    p {
        padding-top: 3px;
        text-align: start;
        padding-left: 6px;
        :hover {
            background-color: red;
            color: white;
            border-radius: 5px;
        }
    }
`;
const ModalDiv = styled('div')`
    padding: 64px 0;
    width: 457px;

    h5 {
        color: #e22424;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 600px) {
        padding: 8px 0;
        width: 300px;

        h5 {
            font-size: 13px;

            margin-bottom: 30px;
        }
    }
`;
const ModalBox = styled('div')`
    button:first-child {
        color: #fff;
        width: 160px;
        height: 45px;
        background: #e22424;
        border-radius: 5px;
        margin-right: 15px;
    }
    button:last-child {
        width: 160px;
        height: 45px;
        background: #fff;
        border: 1px solid #e22424;
        color: #e22424;
        border-radius: 5px;
    }
    @media screen and (max-width: 600px) {
        button:first-child {
            width: 89px;
            height: 30px;
            font-size: 12px;
            border-radius: 5px;
            margin-right: 15px;
        }
        button:last-child {
            width: 89px;
            height: 30px;
            font-size: 12px;
            border-radius: 5px;
        }
    }
`;
const AddExpensesButton = styled('div')`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    p {
        margin-bottom: 0;
    }
    button {
        margin-right: 5px;
        border: 1px solid black;
        background-color: white;
        width: 26px;
        height: 26px;
        border-radius: 5px;
    }
`;
const ButtonBox = styled('div')`
    margin-top: 33px;
    display: flex;
    justify-content: flex-end;
    button {
        width: 218px;
        height: 58px;
        margin-right: 20px;
        font-size: 1.5rem;
        border-radius: 0.7rem;
    }
    @media screen and (max-width: 600px) {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        button {
            width: 89px;
            height: 30px;
            margin-right: 0px;
            margin-left: 5px;
            font-size: 13px;
            border-radius: 0.4rem;
        }
    }
`;

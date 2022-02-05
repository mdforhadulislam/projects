import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import InputNumberBoxComp from '../../Common/InputNumberBox/InputNumberBoxComp';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import NewInputDateBox from '../../Common/InputDateBox/newInputDateBox';
import { useDispatch } from 'react-redux';
import { addToExpenses } from '../../../Redux/Dashboard_1/Action/expensesAction';

const AddExpenses = () => {
    const [numberInc, setNumberInc] = React.useState(0);
    const [storeData, setStoreData] = React.useState({});
    const [startDate, setStartDate] = React.useState(new Date());
    const router = useRouter();
    const dispatch = useDispatch();
    const id = uuidv4();
    const handleOnChange = (e) => {
        setStoreData({ ...storeData, [e.target.name]: e.target.value });
    };
    const handleSave = (e) => {
        e.preventDefault();

        dispatch(
            addToExpenses({
                ...storeData,
                id: id,
                amount: numberInc,
                date: startDate
            })
        );
        router.push('/dashboard_1/expenses/add_expenses_table');
    };
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col lg="6">
                        <LeftWrapper>
                            <h2>Add New Expenses </h2>
                            <InputBox>
                                <Item>
                                    <h6>Name of Expenses</h6>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleOnChange}
                                        placeholder="Rent House"
                                    />
                                </Item>
                                <Item>
                                    <h6>Amount</h6>
                                    <InputNumberBoxComp
                                        setNumberInc={setNumberInc}
                                        numberInc={numberInc}
                                        name="amount"
                                    />
                                </Item>
                                <Item>
                                    <NewInputDateBox
                                        startDate={startDate}
                                        setStartDate={setStartDate}
                                    />
                                </Item>
                            </InputBox>
                        </LeftWrapper>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <ButtonBox>
                            <button className="btn btn-danger " onClick={handleSave}>
                                Save
                            </button>
                            <button className="btn  btn-outline-danger ">Cancel</button>
                        </ButtonBox>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default AddExpenses;
const Wrapper = styled('div')`
    width: 80.3%;
    margin: 3rem auto;
    background-color: white;
    height: 100%;
    padding: 77px 70px 200px 70px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    @media screen and (max-width: 600px) {
        width: 85.3%;
        margin: 4rem 2rem;
        padding: 80px 30px 197px 23px;
    }
`;
const LeftWrapper = styled('div')`
    h2 {
        margin-bottom: 3.5rem;
    }
    @media screen and (max-width: 600px) {
        h2 {
            font-size: 20px;
            margin-bottom: 2.5rem;
        }
    }
`;

const Item = styled('div')`
    h6 {
        font-size: 20px;
        margin-bottom: 18px;
    }
    &:nth-child(3) input {
        border: 1px solid red;
    }
    &:nth-child(1) input,
    :nth-child(3) input {
        width: 20.5rem;
        border: 1px solid lightgray;
        border-radius: 10px;

        height: 4rem;
        margin-bottom: 2rem;
        padding-left: 1rem;

        :focus {
            outline: none;
        }
    }
    .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
        width: 654px;
    }

    @media screen and (max-width: 600px) {
        h6 {
            font-size: 13px;
            margin-bottom: 18px;
        }
        .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
            width: 245px;
        }

        .InputNumberBoxComp__InputNumberBox-sc-19leu0t-1 {
            width: 186px;
            height: 36px;
            margin-bottom: 4rem;
            input {
                width: 5rem;
                height: 2rem;
            }
            .InputNumberBoxComp__ButtonGroupBox-sc-19leu0t-0 {
                width: 32px;
                height: 36px;
                border-radius: 0.4rem;
                right: -1.2%;
            }
        }
        &:nth-child(1) input {
            width: 15.188rem;

            border-radius: 5px;
            height: 36px;

            ::placeholder {
                font-size: 13px;
            }
        }
        &:nth-child(2) {
            .InputNumberBoxComp__InputNumberBox-sc-19leu0t-1 {
                margin-bottom: 2rem;
                border-radius: 5px;
                input {
                    font-size: 13px;
                }
            }
        }
        &:nth-child(3) {
            .newInputDateBox__DateMainBox-sc-tuy7xn-0 {
                .react-datepicker-wrapper {
                    .react-datepicker__input-container input {
                        font-size: 12px;
                    }
                }
            }
            .newInputDateBox__DateIcon-sc-tuy7xn-1 {
                height: 36px;
                width: 2.5rem;
                right: 23% !important;

                span {
                    width: 2rem !important;
                    height: 22px !important;
                }
            }
        }
        &:nth-child(3) input {
            width: 186px;
            border-radius: 5px;
            height: 36px;
            ::placeholder {
                font-size: 10px;
            }
        }
    }
`;
const InputBox = styled('div')``;

const ButtonBox = styled('div')`
    margin-top: 33px;
    button {
        width: 218px;
        height: 58px;
        margin-right: 32px;
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

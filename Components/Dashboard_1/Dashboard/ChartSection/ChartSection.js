import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ApexAreaChart from '../../../Common/StackedAreaChart/ApexAreaChart';
import ApexNegativeChart from '../../../Common/StackedAreaChart/ApexNegativeChart';

const ChartSection = () => {
    const [isDay, setIsDay] = React.useState(true);
    const [isMonth, setIsMonth] = React.useState(false);
    const [isYear, setIsYear] = React.useState(false);
    const [isDay2, setIsDay2] = React.useState(true);
    const [isMonth2, setIsMonth2] = React.useState(false);
    const [isYear2, setIsYear2] = React.useState(false);
    const handleMonth = (e) => {
        setIsMonth(true);
        setIsDay(false);
        setIsYear(false);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.borderBottom = '1px solid red';
        e.target.parentElement.children[2].style.color = 'red';
    };
    const handleYear = (e) => {
        setIsMonth(false);
        setIsDay(false);
        setIsYear(true);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.borderBottom = '1px solid red';
        e.target.parentElement.children[4].style.color = 'red';
    };
    const handleDay = (e) => {
        setIsMonth(false);
        setIsDay(true);
        setIsYear(false);
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.color = 'red';
    };
    const handleMonth2 = (e) => {
        setIsMonth2(true);
        setIsDay2(false);
        setIsYear2(false);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.borderBottom = '1px solid red';
        e.target.parentElement.children[2].style.color = 'red';
    };
    const handleYear2 = (e) => {
        setIsMonth2(false);
        setIsDay2(false);
        setIsYear2(true);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.borderBottom = '1px solid red';
        e.target.parentElement.children[4].style.color = 'red';
    };
    const handleDay2 = (e) => {
        setIsMonth2(false);
        setIsDay2(true);
        setIsYear2(false);
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.color = 'red';
    };
    return (
        <Container fluid>
            <Row>
                <Col lg="6">
                    <OrderWrapperChart>
                        <h4>Order Report</h4>
                        <WrapperLeft>
                            {/* <StackedAreaChart /> */}
                            <DateChangeBox>
                                <LeftSide>
                                    <h5 onClick={handleDay}>D</h5>
                                    <div></div>
                                    <h5 onClick={handleMonth}>M</h5>
                                    <div></div>
                                    <h5 onClick={handleYear}>Y</h5>
                                </LeftSide>
                            </DateChangeBox>
                            {isDay && <ApexAreaChart />}
                            {isMonth && <ApexAreaChart />}
                            {isYear && <ApexAreaChart />}
                        </WrapperLeft>
                    </OrderWrapperChart>
                </Col>
                <Col lg="6">
                    <OrderWrapperChart>
                        <h4>Revenue Report</h4>
                        <WrapperLeft>
                            <LeftSide>
                                <h5 onClick={handleDay2}>D</h5>
                                <div></div>
                                <h5 onClick={handleMonth2}>M</h5>
                                <div></div>
                                <h5 onClick={handleYear2}>Y</h5>
                            </LeftSide>
                            {isDay2 && <ApexNegativeChart />}
                            {isMonth2 && <ApexNegativeChart />}
                            {isYear2 && <ApexNegativeChart />}
                        </WrapperLeft>
                    </OrderWrapperChart>
                </Col>
            </Row>
        </Container>
    );
};

export default ChartSection;
const OrderWrapperChart = styled('div')`
    margin-top: 2rem;
`;
const WrapperLeft = styled('div')`
    background-color: white;
    border-radius: 8px;
    height: 35rem;
    padding: 1rem;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const DateChangeBox = styled('div')``;
const LeftSide = styled('div')`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    width: 22.5%;
    h5 {
        padding: 0.5rem 1.5rem;
        margin-bottom: 0;
        cursor: pointer;
    }
    div {
        width: 2px;
        height: 16px;
        background-color: lightgray;
    }
    h5:first-child {
        color: red;
        border-bottom: 1px solid red;
    }
`;

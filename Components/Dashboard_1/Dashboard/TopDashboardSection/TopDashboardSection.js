import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';

import avatar from '../../../../Assets/images/dashboard/avatar.svg';
import box from '../../../../Assets/images/dashboard/box.svg';
import money from '../../../../Assets/images/dashboard/money.svg';
import phone from '../../../../Assets/images/dashboard/smartphone.svg';
import people from '../../../../Assets/images/dashboard/management.svg';
import Medal from '../../../../Assets/images/dashboard/Medal';
import Fireworks from '../../../../Assets/images/dashboard/Fireworks';
import Balloons from '../../../../Assets/images/dashboard/Balloons';

const TopDashboardSection = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={4}>
                    <LeftWrapper>
                        <LeftSection>
                            <h4>Congratulation 🎉 Masud Reja</h4>
                            <p>You are now level 2 seller</p>
                            <h4>৳45,400</h4>
                            <button>View Sales</button>
                        </LeftSection>
                        <RightSection>
                            <ImageBox>
                                <Medal />
                                <Fireworks />
                                <Balloons />
                            </ImageBox>
                        </RightSection>
                    </LeftWrapper>
                </Col>
                <Col lg={8}>
                    <RightWrapper>
                        <h4>Statistics</h4>
                        <DisplayItemBox>
                            <Item>
                                <ImageBackgroundBox
                                    style={{ backgroundColor: 'rgb(206, 238, 255)' }}>
                                    <Image src={avatar} />
                                </ImageBackgroundBox>
                                <TextBox>
                                    <h4>230</h4>
                                    <p>Members</p>
                                </TextBox>
                            </Item>
                            <Item>
                                <ImageBackgroundBox
                                    style={{ backgroundColor: 'rgb(233, 230, 255)' }}>
                                    <Image src={box} />
                                </ImageBackgroundBox>
                                <TextBox>
                                    <h4>230</h4>
                                    <p>Orders</p>
                                </TextBox>
                            </Item>
                            <Item>
                                <ImageBackgroundBox
                                    style={{ backgroundColor: 'rgb(255, 214, 215)' }}>
                                    <Image src={money} />
                                </ImageBackgroundBox>
                                <TextBox>
                                    <h4>23,000 ৳</h4>
                                    <p>offline balance</p>
                                </TextBox>
                            </Item>
                            <Item>
                                <ImageBackgroundBox
                                    style={{ backgroundColor: 'rgb(213, 255, 193)' }}>
                                    <Image src={phone} />
                                </ImageBackgroundBox>
                                <TextBox>
                                    <h4>23,000 ৳</h4>
                                    <p>Dutypedia Balance</p>
                                </TextBox>
                            </Item>
                            <Item>
                                <ImageBackgroundBox
                                    style={{ backgroundColor: 'rgb(255, 232, 210)' }}>
                                    <Image src={people} />
                                </ImageBackgroundBox>
                                <TextBox>
                                    <h4>1k</h4>
                                    <p>Employee</p>
                                </TextBox>
                            </Item>
                        </DisplayItemBox>
                    </RightWrapper>
                </Col>
            </Row>
        </Container>
    );
};

export default TopDashboardSection;
const LeftWrapper = styled('div')`
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    padding: 15px;
    display: flex;
    border-radius: 8px;
`;
const RightWrapper = styled('div')`
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    padding: 15px;
    border-radius: 8px;
    padding-left: 5%;
`;
const LeftSection = styled('div')`
    *:nth-child(3) {
        color: rgb(255, 173, 95);
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
    button {
        background-color: rgb(255, 173, 95);
        color: white;
        border: none;
        padding: 5px 20px;
        border-radius: 3px;
    }
`;
const RightSection = styled('div')`
    width: 60%;

    display: flex;
    justify-content: center;
`;
const ImageBox = styled('div')`
    position: relative;

    svg:nth-child(1) {
        position: absolute;
        top: 35%;
        z-index: 1;
        left: 8px;
    }
    svg:nth-child(2) {
        position: absolute;
    }
    svg:nth-child(3) {
        position: absolute;
        top: 65%;
        left: 95px;
    }
`;
const Item = styled('div')`
    display: flex;
    align-items: center;

    margin-top: 3rem;
    margin-bottom: 3rem;
`;
const DisplayItemBox = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;
const TextBox = styled('div')`
    margin-top: 0.8rem;
    p {
        font-size: 10px;
    }
`;
const ImageBackgroundBox = styled('div')`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
`;

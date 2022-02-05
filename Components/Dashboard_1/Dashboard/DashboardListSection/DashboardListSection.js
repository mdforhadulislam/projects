import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import InputSearchBox from '../../../Common/InputSearchBox/InputSearchBox';

import EmployeeCard from './EmployeeCard';
import MemberCard from './MemberCard';

const DashboardListSection = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg="7">
                    <LeftWrapper>
                        <TopHeaderItem>
                            <h4>Employee List</h4>
                            <InputSearchBox />
                        </TopHeaderItem>
                        <EmployeeList>
                            <TableHeader>
                                <h4>Employee Name</h4>
                            </TableHeader>
                            <TableDataBox>
                                <DataScrollingBox>
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                    <EmployeeCard />
                                </DataScrollingBox>
                            </TableDataBox>
                        </EmployeeList>
                    </LeftWrapper>
                </Col>
                <Col lg="5">
                    <RightWrapper>
                        <TopHeaderItem>
                            <h4>Member List</h4>
                            <InputSearchBox />
                        </TopHeaderItem>
                        <EmployeeList>
                            <TableHeader>
                                <h4>Member Name</h4>
                            </TableHeader>
                            <TableDataBox>
                                <DataScrollingBox>
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                    <MemberCard />
                                </DataScrollingBox>
                            </TableDataBox>
                        </EmployeeList>
                    </RightWrapper>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardListSection;
const LeftWrapper = styled('div')`
    margin-top: 3rem;
`;
const RightWrapper = styled('div')`
    margin-top: 3rem;
`;
const TopHeaderItem = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
        margin-bottom: 0;
    }
`;
const EmployeeList = styled('div')``;

const DataScrollingBox = styled('div')`
    height: 390px;
    overflow-y: scroll;
    margin-right: 0.7rem;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: rgb(241, 241, 241);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(102, 102, 102);
        border-radius: 10px;
    }
`;
const TableDataBox = styled('div')`
    background-color: white;
    height: 412px;
    padding-top: 0.3rem;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const TableHeader = styled('div')`
    background-color: rgb(226, 36, 36);
    padding: 1rem 2rem;
    border-radius: 10px;
    margin: 1.5rem auto;
    h4 {
        color: white;
        margin-bottom: 0;
    }
`;

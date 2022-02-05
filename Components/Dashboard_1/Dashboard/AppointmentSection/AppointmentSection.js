import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import FullCalender from '../../../Common/FullCalender/FullCalender';
import InputSearchBox from '../../../Common/InputSearchBox/InputSearchBox';
import AppointmentListSection from './AppointmentListSection';

const AppointmentSection = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg="7">
                    <FullCalender />
                </Col>
                <Col lg="5">
                    <RightSection>
                        <TopSection>
                            <h4>Appointment List</h4>
                            <InputSearchBox />
                        </TopSection>
                        <AppointmentListSection />
                    </RightSection>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentSection;
const RightSection = styled('div')`
    margin-top: 2rem;
`;
const TopSection = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

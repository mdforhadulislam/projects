import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import NewInputDateBox from '../../../Common/InputDateBox/NewInputDateBox';
import NoteCard from './NoteCard';
import NoticeCard from './NoticeCard';
const NoticeAndNoteSection = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    return (
        <Container fluid>
            <Row>
                <Col lg="7">
                    <NoticeSection>
                        <NoticeHeader>
                            <h2>Notice</h2>
                            <DateBoxWrapper>
                                <h6>Search By Date</h6>
                                <NewInputDateBox
                                    startDate={startDate}
                                    setStartDate={setStartDate}
                                />
                            </DateBoxWrapper>
                        </NoticeHeader>
                        <NoticeMainBody>
                            <NoticeCard />
                        </NoticeMainBody>
                    </NoticeSection>
                </Col>
                <Col lg="5">
                    <NoteSection>
                        <h2>Note</h2>
                        <NoteMain>
                            <h4>Note List</h4>
                            <NoteBody>
                                <NoteCard />
                                <NoteCard />
                                <NoteCard />
                                <NoteCard />
                                <NoteCard />
                                <NoteCard />
                                <NoteCard />
                            </NoteBody>
                        </NoteMain>
                    </NoteSection>
                </Col>
            </Row>
        </Container>
    );
};

export default NoticeAndNoteSection;
const NoticeSection = styled('div')`
    margin-top: 2rem;
`;
const NoteSection = styled('div')`
    margin-top: 2rem;
`;
const NoticeHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    input {
        width: 222px;
        height: 49px;
        padding-left: 5%;
        border: 1px solid red;
        border-radius: 8px;
    }
    .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
        height: 3.03rem;
        width: 3rem;
        right: 0% !important;
        span {
            width: 2rem !important;
            height: 23px !important;
        }
    }
`;
const NoticeMainBody = styled('div')``;
const NoteMain = styled('div')`
    margin-top: 5%;
    h4 {
        padding-left: 5%;
    }
`;
const NoteBody = styled('div')`
    padding: 1rem 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const DateBoxWrapper = styled('div')`
    h6 {
        margin-bottom: 0.6rem;
    }
`;

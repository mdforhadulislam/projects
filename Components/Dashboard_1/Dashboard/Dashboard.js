import React from 'react';
import styled from 'styled-components';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import ChartSection from './ChartSection/ChartSection';
import DashboardListSection from './DashboardListSection/DashboardListSection';
import NoticeAndNoteSection from './NoticeAndNoteSection/NoticeAndNoteSection';
import TopDashboardSection from './TopDashboardSection/TopDashboardSection';

const Dashboard = () => {
    return (
        <Wrapper>
            <TopDashboardSection />
            <ChartSection />
            <AppointmentSection />
            <DashboardListSection />
            <NoticeAndNoteSection />
        </Wrapper>
    );
};

export default Dashboard;
const Wrapper = styled('div')`
    width: 96.3%;
    margin: 3rem 4rem;
`;

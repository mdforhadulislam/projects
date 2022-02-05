import React from 'react';
import styled from 'styled-components';
import AfterCreateTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/AfterCreateTableFile/AfterCreateTable';
import MobileAfterCreateTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/MobileAfterCreateTable/MobileAfterCreateTable';

const afterCreateTableRoutine = () => {
    return (
        <Wrapper>
            <DesktopView>
                <AfterCreateTable />
            </DesktopView>
            <MobileView>
                <MobileAfterCreateTable />
            </MobileView>
        </Wrapper>
    );
};

export default afterCreateTableRoutine;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
`;

const MobileView = styled('div')`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;
const DesktopView = styled('div')`
    display: block;
    @media (max-width: 768px) {
        display: none;
    }
`;

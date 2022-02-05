import React from 'react';
import styled from 'styled-components';

import MobileCreateRoutineTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/MobileCreateRoutineTableFile/MobileCreateRoutineTable';

import dynamic from 'next/dynamic';
const CreateRoutineTable = dynamic(() =>
    import(
        '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/CreateRoutineTableFile/CreateRoutineTable'
    )
);

const addSingleMember = () => {
    return (
        <Wrapper>
            <DesktopView>
                <CreateRoutineTable callFrom={'singleMember'} />
            </DesktopView>
            <MobileView>{/* <MobileCreateRoutineTable callFrom={'singleMember'} /> */}</MobileView>
        </Wrapper>
    );
};

export default addSingleMember;

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

import React from 'react';
import styled from 'styled-components';
import CreateRoutineTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/CreateRoutineTableFile/CreateRoutineTable';

const addSingleMember = () => {
    return (
        <Wrapper>
            <CreateRoutineTable callFrom={'singleMember'} />
        </Wrapper>
    );
};

export default addSingleMember;

const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
`;

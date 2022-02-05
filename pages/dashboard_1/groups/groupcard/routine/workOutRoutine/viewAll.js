import React from 'react';
import ViewAll from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/ViewAllFile/ViewAll';
import styled from 'styled-components';

const viewAll = () => {
    return (
        <Wrapper>
            <ViewAll />
        </Wrapper>
    );
};

export default viewAll;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
`;

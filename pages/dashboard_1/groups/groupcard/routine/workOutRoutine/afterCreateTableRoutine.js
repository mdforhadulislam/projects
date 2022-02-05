import React from 'react';
import styled from 'styled-components';
import AfterCreateTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/AfterCreateTable/AfterCreateTable';

const afterCreateTableRoutine = () => {
    return (
        <Wrapper>
            <AfterCreateTable />
        </Wrapper>
    );
};

export default afterCreateTableRoutine;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
`;

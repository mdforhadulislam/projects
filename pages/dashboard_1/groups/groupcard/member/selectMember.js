import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AddMember from '../../../../../Components/Dashboard_1/Group/Member/AddMember/AddMember';
import Member from '../../../../../Components/Dashboard_1/Group/Member/Member';
import { Wrapper } from '../../../../../styles/StyledComponentWrapper';

const selectMember = () => {
    const memberList = useSelector((state) => state.groupUserSelect.memberList);
    const [createMemberList, setCreateMemberList] = useState(true);
    return (
        <Wrapper>
            {memberList.length === 0 ? (
                <AddMember setCreateMemberList={setCreateMemberList} />
            ) : (
                <Member />
            )}
        </Wrapper>
    );
};

export default selectMember;

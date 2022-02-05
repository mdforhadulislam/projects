import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import GroupTopNav from './GroupTopNav';

const AcademicActivities = () => {
    // const navigate = useNavigate();

    const [create, setCreate] = useState('');

    const handleMember = () => {
        setCreate('member');
        // dispatch(loadDataToMemberList(MemberListFakeData));
    };

    return (
        <>
            <GroupTopNav create={create} setCreate={setCreate} handleMember={handleMember} />
        </>
    );
};

export default AcademicActivities;

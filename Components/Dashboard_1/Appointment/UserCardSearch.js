import React from 'react';
import styled from 'styled-components';
import user from '../../../Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../Assets/images/dashboard/DutyPreIconSmall';

const UserCardSearch = ({ userData, setIsDropDownTrue, setUserAdd, setIsInputValueClick }) => {
    const handleUserData = (data) => {
        setIsDropDownTrue(false);
        setIsInputValueClick(true);
        setUserAdd([data]);
    };
    return (
        <UserItem onClick={() => handleUserData(userData)}>
            <UserItemLeft>
                <ImageContainerUser>
                    <Image src={user} alt="User" />
                    {userData.dutyPre && <DutyPreIcon />}
                </ImageContainerUser>
                <UserTextItem>
                    <h6>{userData.name}</h6>
                    {userData.dutyPre && <p>Id: DP0324-234</p>}
                </UserTextItem>
            </UserItemLeft>
        </UserItem>
    );
};

export default UserCardSearch;
const UserItem = styled('div')`
    width: 100%;

    padding: 0.3rem 1rem;
    :hover {
        background: lightgray;
    }
`;
const UserItemLeft = styled('div')`
    display: flex;
`;
const UserTextItem = styled('div')`
    margin-left: 1.5rem;

    p {
        font-size: 14px;
        color: gray;
    }
`;
const ImageContainerUser = styled('div')`
    position: relative;
    width: 60px;
    img {
        width: 50px !important;
        border-radius: 8px;
    }
    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 0;
        right: 2%;
    }
`;

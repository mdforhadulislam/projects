import React from 'react';
import styled from 'styled-components';
import user from '../../../../Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../../Assets/images/dashboard/DutyPreIconSmall';
import { BsThreeDotsVertical } from 'react-icons/bs';
const AppointmentCard = () => {
    return (
        <EmployeeItem>
            <EmployeeItemLeft>
                <ImageContainerEmployee>
                    <Image src={user} alt="User" />
                    <DutyPreIcon />
                </ImageContainerEmployee>
                <EmployeeTextItem>
                    <p>13th sept 2021, 10:00 AM</p>
                    <p>Meeting For Vendor Community</p>
                </EmployeeTextItem>
            </EmployeeItemLeft>
            <BsThreeDotsVertical />
        </EmployeeItem>
    );
};

export default AppointmentCard;
const EmployeeItem = styled('div')`
    width: 100%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.17rem 1rem;
`;
const EmployeeItemLeft = styled('div')`
    display: flex;
`;
const EmployeeTextItem = styled('div')`
    margin-left: 1.5rem;
    p {
        font-size: 14px;
        color: gray;
        margin-bottom: 5px;
    }
`;
const ImageContainerEmployee = styled('div')`
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

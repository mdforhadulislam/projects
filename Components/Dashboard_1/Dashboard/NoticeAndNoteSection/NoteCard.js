import styled from 'styled-components';
import Image from 'next/image';
import NotificationOutlineRedIcon from '../../../../Assets/images/dashboard/NotificationOutlineRedIcon';
import user from '../../../../Assets/images/dashboard/user.jpg';
const NoteCard = () => {
    return (
        <NoteWrapper>
            <UserDetails>
                <Image src={user} alt="" />
                <h5>Fast Delivery</h5>
            </UserDetails>
            <IconBox>
                <NotificationOutlineRedIcon />
            </IconBox>
        </NoteWrapper>
    );
};

export default NoteCard;
const NoteWrapper = styled('div')`
    padding: 0.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const UserDetails = styled('div')`
    display: flex;
    align-items: center;
    width: 50%;
    img {
        width: 50px !important;
        border-radius: 50%;
    }
    h5 {
        margin-left: 3%;
        margin-bottom: 0;
    }
`;
const IconBox = styled('div')`
    width: 44px;
    height: 44px;
    svg {
        padding: 0.7rem;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    }
`;

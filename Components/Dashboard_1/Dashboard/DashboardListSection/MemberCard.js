import styled from 'styled-components';
import user from '../../../../Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../../Assets/images/dashboard/DutyPreIconSmall';
import SentRedIcon from '../../../../Assets/images/dashboard/SentRedIcon';
import ProfileIcon from '../../../../Assets/images/dashboard/ProfileIcon';
const MemberCard = () => {
    return (
        <MemberItem>
            <MemberItemLeft>
                <ImageContainerMember>
                    <Image src={user} alt="User" />
                    <DutyPreIcon />
                </ImageContainerMember>
                <MemberTextItem>
                    <h6>Mohabbat Sikdar Kowshik Choudhury</h6>
                    <p>Id: DP0324-234</p>
                </MemberTextItem>
            </MemberItemLeft>
            <IconBox>
                <ProfileIcon />
                <SentRedIcon />
            </IconBox>
        </MemberItem>
    );
};

export default MemberCard;
const MemberItem = styled('div')`
    width: 90%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0.5rem;
    border-bottom: 1px solid lightgray;
`;
const MemberItemLeft = styled('div')`
    display: flex;
`;
const MemberTextItem = styled('div')`
    margin-left: 1.5rem;
    p {
        font-size: 14px;
        color: gray;
    }
`;
const ImageContainerMember = styled('div')`
    position: relative;
    width: 70px;
    img {
        width: 60px !important;
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
const IconBox = styled('div')`
    svg {
        width: 41px;
        height: 41px;
        padding: 4px;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
        border-radius: 50%;
    }
    svg:last-child {
        margin-left: 10px;
    }
`;

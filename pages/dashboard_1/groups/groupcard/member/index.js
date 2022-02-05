import React from 'react';
import plus from '../../../../../Assets/images/mentor_img/plus.svg';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
const member = () => {
    return (
        <Wrapper>
            <Link href="/dashboard_1/groups/groupcard/member/selectMember">
                <div id="created-book-list" className="created-book-list text-center">
                    <Image src={plus} alt="plus" className="member_add_icon img-fluid" />
                    <h3>Create A Member List</h3>
                </div>
            </Link>
        </Wrapper>
    );
};

export default member;
const Wrapper = styled('div')`
    width: 65%;
    margin: 1rem auto;
    background-color: white;
    .created-book-list {
        padding: 72px 0 55px;
        box-shadow: 0 0 3px #d3d3d3;
        margin-top: 22px;
        border-radius: 5px;
        cursor: pointer;
    }

    .created-book-list h3 {
        margin-top: 10px;
    }
`;

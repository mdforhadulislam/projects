import React from 'react';
import styled from 'styled-components';
import plus from '../../../../Assets/images/mentor_img/plus.svg';
import Link from 'next/link';
import Image from 'next/image';
import GroupTopNav from '../AcademicActivities/GroupTopNav';

const CreateBookList = () => {
    return (

        <Wrapper>
            <Link href="/dashboard_1/groups/groupcard/bookList">
                <div id="created-book-list" className="created-book-list text-center">
                    <Image src={plus} alt="plus" className="member_add_icon img-fluid" />
                    <h3>Create A Member List</h3>
                </div>
            </Link>
        </Wrapper>
    );
};

export default CreateBookList;

const Wrapper = styled('div')`
    width: 92.2%;
    margin: -50px 30px 0 85px;
    padding: 0 20px 40px 20px;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    .created-book-list {
        padding: 72px 0 55px;
        box-shadow: 0 0 3px #d3d3d3;
        margin-top: 22px;
        /* margin-left: 100px; */
        border-radius: 5px;
        cursor: pointer;
    }
    .member_add_icon {
        object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 50px !important;
    }
    .created-book-list h3 {
        margin-top: 10px;
    }
`


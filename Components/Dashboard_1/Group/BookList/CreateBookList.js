import React from 'react';
import styled from 'styled-components';
import plus from '../../../../Assets/images/mentor_img/plus.svg';
import Link from 'next/link';
import Image from 'next/image';
import GroupTopNav from '../AcademicActivities/GroupTopNav';

const CreateBookList = () => {
    return (

        <Wrapper >
            <div className='top_container'>
            <Link href="/dashboard_1/groups/groupcard/bookList/bookListAdd">
                <div id="created-book-list" className="created-book-list text-center">
                    <Image src={plus} alt="plus" className="member_add_icon img-fluid" />
                    <h3>Create A Book List</h3>
                </div>
            </Link>
            </div>
            
        </Wrapper>
    );
};

export default CreateBookList;

const Wrapper = styled('div')`
    .top_container {
        width: 90%;
    /* margin: -50px 30px 0 85px; */
    margin: 0 auto;
    transform: translate(0px, -40px);
    padding: 0 20px 40px 20px;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    }

    .created-book-list {
        padding: 72px 0 55px;
        /* box-shadow: 0 0 4px #d3d3d3; */
        box-shadow: 0px 0px 4px 2px rgba(189,179,179,0.36);
        margin-top: 22px;
        /* margin-left: 100px; */
        border-radius: 5px;
        cursor: pointer;
    }
    .member_add_icon {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: 70px !important;
        /* margin-top: -40px !important; */
    }
    .created-book-list h3 {
        margin-top: 10px;
    }

    @media screen and (max-width: 810px) {
        .top_container {
            width: 97% !important;
        }
    }
`


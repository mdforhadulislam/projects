import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import Link from 'next/link';
import book from '../../../../Assets/images/icon png/books.png';
import schedule from '../../../../Assets/images/icon png/schedule (1).png';
import member from '../../../../Assets/images/icon png/team.png';
import mentor from '../../../../Assets/images/icon png/presentation.png';
import meeting from '../../../../Assets/images/icon png/hangouts-meet (1).png';
import attendence from '../../../../Assets/images/icon png/attendance.png';
import memberReview from '../../../../Assets/images/icon png/Group 7424.png';

const GroupTopNav = ({ setCreate, create, handleMember }) => {
    return (
        <TopSection>
            <div id="academic-activities-section">
                <div className="container">
                    <div className="academic-headline text-center text-capitalize">
                        <h3>Rasel Academy </h3>
                    </div>
                    <div className="academic-activities-inner">
                        <div className="row card-margin">
                            <div className="col-xxl-3 col-md-3 col-sm-6">
                                <Link href="/dashboard_1/groups/groupcard/bookList">
                                    {/* <a> */}
                                        <div
                                            id="book-list"
                                            className={`activities-box books-card text-center ${
                                                create === 'bookList' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('bookList');
                                            }}>
                                            <Image
                                                src={book}
                                                alt="books"
                                                className="Image-responsive"
                                            />
                                            <h5 className="item_title">Book List</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-md-3 col-sm-6 routine_item">
                                <Link href="/dashboard_1/groups/groupcard/routine">
                                    {/* <a> */}
                                        <div
                                            className={`activities-box routine-card text-center ${
                                                create === 'routine' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('routine');
                                            }}>
                                            <Image src={schedule} alt="books" />
                                            <h5>Routine</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-md-3 col-sm-6 mt-md-0 mt-3">
                                <Link href="/dashboard_1/groups/groupcard/member">
                                    {/* <a> */}
                                        <div
                                            id="Member-list"
                                            className={`activities-box member-card text-center ${
                                                create === 'member' && 'b'
                                            }`}
                                            onClick={handleMember}>
                                            <Image src={member} alt="books" />
                                            <h5>Member</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-md-3 col-sm-6 mt-md-0 mt-3">
                                <Link href="/dashboard_1/groups/groupcard/mentor">
                                    {/* <a> */}
                                        <div
                                            className={`activities-box mentor-card text-center ${
                                                create === 'mentor' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('mentor');
                                            }}>
                                            <Image src={mentor} alt="books" />
                                            <h5>Mentor</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="row card-margin">
                            <div className="col-xxl-3 col-md-3 col-sm-6 meeting_item">
                                <Link href="/dashboard_1/groups/groupcard/meeting">
                                    {/* <a> */}
                                        <div
                                            className={`activities-box meeting-card group_card text-center ${
                                                create === 'meeting' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('meeting');
                                            }}>
                                            <Image
                                                src={meeting}
                                                alt="books"
                                                className="mt-3  meeting_icon"
                                            />
                                            <h5>Meeting</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-md-3 col-sm-6">
                                <Link href="/dashboard_1/groups/groupcard/attendance">
                                    {/* <a> */}
                                        <div
                                            className={`activities-box attendence-card group_card text-center ${
                                                create === 'attendence' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('attendence');
                                            }}>
                                            <Image
                                                src={attendence}
                                                alt="books"
                                                className="mt-2 attendance_icon"
                                            />
                                            <h5>Attendance </h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-md-3 col-sm-6 mt-md-0 mt-3">
                                <Link href="/dashboard_1/groups/groupcard/memberReview">
                                    {/* <a> */}
                                        <div
                                            className={`activities-box member-review-card group_card text-center ${
                                                create === 'memberReview' && 'b'
                                            }`}
                                            onClick={() => {
                                                setCreate('memberReview');
                                            }}>
                                            <Image
                                                src={memberReview}
                                                alt="books"
                                                className="member_review_icon"
                                            />
                                            <h5>Member Review</h5>
                                        </div>
                                    {/* </a> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TopSection>
    );
};

export default GroupTopNav;
const TopSection = styled('div')`
#academic-activities-section {
    padding: 50px 0 70px;
    width: 90%;
    margin: 20px auto;
    display: block;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background: #fff;
    /* position: absolute; */
}
    #academic-activities-section .container {
        max-width: 1270px;
    }

    .academic-headline h3 {
        margin-bottom: 16px;
    }

    .academic-activities-inner .card-margin {
        margin-bottom: 30px;
    }
    .card-margin a {
        text-decoration: none;
    }

    .activities-box {
        padding: 33px 0 44px;
        height: 100%;
        border: 2px solid transparent;
        border-radius: 6px;
        box-shadow: 0 0 2px transparent;
        transition: all linear 0.2s;
        position: relative;
        cursor: pointer;
    }

    .activities-box h5 {
        font-size: 24px;
    }

    .activities-box Image {
        padding-bottom: 18px;
    }

    .activities-box::after {
        content: '';
        position: absolute;
        left: 31px;
        bottom: -2px;
        background: transparent;
        width: 0%;
        height: 4px;
        border-radius: 68px;
        transition: all linear 0.3s;
    }

    .b::after {
        content: '';
        position: absolute;
        left: 31px;
        bottom: -2px;
        background: red;
        width: 78%;
        height: 4px;
        border-radius: 68px;
        transition: all linear 0.3s;
    }
    .activities-box:hover {
        border-color: #fff;
        box-shadow: 0 0 8px #00000030;
    }

    .books-card {
        background: #ffd4b7;
    }

    .routine-card {
        background: #bedadf;
    }

    .member-card {
        background: #f6f3ff;
    }

    .mentor-card {
        background: #ffe8e8;
    }

    .meeting-card {
        background: #d0d8c2;
    }

    .class-test-card {
        background: #fff2ef;
    }

    .attendence-card {
        background: #fbfbfb;
    }

    .member-review-card {
        background: #fff4eb;
    }

    #created-book-list {
        display: none;
    }

    .created-book-list {
        padding: 72px 0 55px;
        box-shadow: 0 0 3px #d3d3d3;
        margin-top: 22px;
        border-radius: 5px;
        cursor: pointer;
    }

    .created-book-list i {
        font-size: 30px;
        border: 1px solid #d3d3d3;
        padding: 15px;
        color: #d3d3d3;
    }

    .created-book-list h3 {
        margin-top: 10px;
    }

    /* book list table part start here */

    .booklist-table {
        margin-top: 30px;
    }

    .booklist-row {
        border-radius: 7px;
    }

    .booklist-table-head {
        padding: 20px 0;
    }

    .left-border {
        position: relative;
    }

    .left-border::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 27px;
        background: #5c8b5c69;
    }

    .user-input-box {
        box-shadow: 0 0 4px #66666675;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 7px;
    }

    .user-input-box input {
        font-size: 18px;
        border: 0;
        height: 60px;
        background: transparent;
        padding-left: 20px;
        text-transform: capitalize;
        text-align: center;
        width: 100%;
    }

    .user-input-box input:focus-visible {
        outline: 0;
    }

    .user-input-box .left-border::after {
        top: 16px;
    }

    .addBtn-group button {
        font-size: 16px;
        border: 0;
        background: #fff;
        font-size: 20px;
        transition: all linear 0.2s;
    }

    .addMore-btn {
        color: #666666;
        margin: 10px 0 30px;
    }

    .addMore-btn img {
        width: 30px;
        margin-right: 7px;
        margin-top: -3px;
    }

    .btn-bootom .cmnBtn {
        color: #fff;
        width: 160px;
        height: 45px;
        background: #e22424;
        border-radius: 5px;
    }

    .btn-bootom .cmnBtn:last-child {
        background: #fff;
        border: 1px solid #e22424;
        color: #e22424;
    }

    .btn-bootom .cmnBtn:last-child:hover {
        background: #e22424;
        color: #fff;
        border-color: #e22424;
    }

    .booklist-table {
        display: none;
    }

    #booklist-edit {
        display: none;
    }
    #routine-edit {
        display: none;
    }

    .user-edit-input {
        margin: 30px 0 -5px;
    }

    .user-edit-input i {
        font-size: 20px;
        color: #666;
        margin: 0 5px;
        cursor: pointer;
    }

    .tableButtonbottom {
        display: none;
    }

    #static-table-value {
        display: none;
    }

    // responsive start here

    @media screen and (min-width: 775px) and (max-width: 892px) {
        .group_card {
            height: 200px !important;
        }
        .meeting_icon {
            margin-top: -1px !important;
        }
        .attendance_icon {
            margin-top: -1px !important;
        }
        .member_review_icon {
            margin-top: -20px !important;
        }
    }

    @media screen and (max-width: 810px) {
        #academic-activities-section {
            width: 97%;
        }
    
    @media screen and (max-width: 576px) {
        .routine_item {
            margin-top: 17px;
        }
        .meeting_item {
            margin-top: -11px;
            margin-bottom: 17px;
        }
    }
`

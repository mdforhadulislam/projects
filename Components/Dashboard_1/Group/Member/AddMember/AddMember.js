import React, { useState } from 'react';
import DutypediaAddUser from './DutypediaAddUser';
import OfflineAddUser from './OfflineAddUser';

import Member from '../Member';
import { useSelector } from 'react-redux';
import backArrow from '../../../../../Assets/images/icons/back.svg';
import styled from 'styled-components';
import { Wrapper } from '../../../../../styles/StyledComponentWrapper';

const AddMember = (props) => {
    const [selectList, setSelectList] = useState(false);
    const [showMemberList, setShowMemberList] = useState(false);
    const selectUser = useSelector((state) => state.groupUserSelect.groupSelectUser);

    const handleDutypediaUser = () => {
        setSelectList(false);
    };

    const handleOfflineUser = () => {
        setSelectList(true);
    };

    return (
        <Wrapper>
            {showMemberList === false && (
                <div>
                    <div className="select_user">
                        {props.memberListShow === true ? (
                            <p
                                className=""
                                style={{ cursor: 'pointer' }}
                                onClick={() => props.setMemberListShow(false)}>
                                <img src={backArrow} alt="" className="back_btn_icon" />{' '}
                                <span className="">Back</span>
                            </p>
                        ) : (
                            <p
                                className=""
                                style={{ cursor: 'pointer' }}
                                onClick={() => props.setCreateMemberList(false)}>
                                <img src={backArrow} alt="" className="back_btn_icon" />{' '}
                                <span className="back_text">Back</span>
                            </p>
                        )}
                        <div className="d-flex user_select">
                            <div
                                className={
                                    selectList === false
                                        ? 'user_item user_active dutypedia_item'
                                        : 'user_item dutypedia_item'
                                }
                                onClick={handleDutypediaUser}>
                                <p
                                    className=""
                                    style={{ color: selectList === false && '#DA1E37' }}>
                                    Dutypedia Users
                                </p>
                            </div>
                            <div
                                className={
                                    selectList === true
                                        ? 'user_item offline_item user_active'
                                        : 'user_item offline_item'
                                }
                                onClick={handleOfflineUser}>
                                <p className="" style={{ color: selectList === true && '#DA1E37' }}>
                                    Offline User
                                </p>
                            </div>
                        </div>
                    </div>

                    {selectList === false && (
                        <DutypediaAddUser
                            setAddUser={props.setAddUser}
                            setMemberListShow={props.setMemberListShow}
                            setShowMemberList={setShowMemberList}
                        />
                    )}
                    {selectList === true && (
                        <OfflineAddUser
                            setAddUser={props.setAddUser}
                            setMemberListShow={props.setMemberListShow}
                            setShowMemberList={setShowMemberList}
                        />
                    )}
                </div>
            )}

            {showMemberList === true && <Member />}
        </Wrapper>
    );
};

export default AddMember;
// const Wrapper = styled('div')`
//     width: 95%;
//     margin: 1rem auto;
//     .select_user {
//         margin-top: 40px;
//     }
//     .user_item {
//         margin-right: 6px;
//         height: 28px;
//         width: 140px;
//         border-bottom: 1px solid rgba(223, 216, 216, 0.836);
//         cursor: pointer;
//     }
//     .user_item p {
//         margin-left: 10px;
//         font-size: 16px;
//         color: rgb(92, 85, 85);
//     }
//     .dutypedia_item p {
//         border-right: 1px solid rgba(223, 216, 216, 0.836);
//     }
//     .offline_item {
//         width: 130px;
//         margin-left: -6px;
//     }
//     .user_active {
//         border-bottom: 1px solid #da1e37;
//     }
// `;

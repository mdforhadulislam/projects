import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Image from 'next/image';
import user1 from '../../../../Assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import DutyPreIcon from '/Assets/images/dashboard/DutyPreIconSmall';
import profile from '/Assets/images/icons/google (2).svg';
import send from '/Assets/images/icons/Send_3_.svg';

const MemberMapList = (props) => {
    const [memberDelete, setMemberDelete] = useState('');
    const [deleteBtnToggle, setDeleteBtnToggle] = useState(false);
    // console.log(props.memberList.id)

    // console.log('open', props.memberList)

    const handleOpenDelete = (id) => {
        setMemberDelete(id);
        // if(memberDelete === )
        setDeleteBtnToggle(!deleteBtnToggle);
    };

    const handleDeleteModal = (id) => {
        props.openModal();
        props.setDeleteId(id);
        props.setMemberListRemoveItem(props.memberList);
    };

    const selectUser = useSelector((state) => state.groupUserSelect.groupSelectUser);
    // console.log(memberDelete);
    return (
        <Wrapper className="member__item" id="member__item1">
            <div className="member__item__details">
                <Image src={user1} width={50} height={50} alt="men 1" className="stu_profile_img" />
                {props.memberList.user === 'dutypedia' && <DutyPreIcon />}

                <div className="member__item__details__personal">
                    <h4
                        className={
                            props.memberList.user === 'dutypedia'
                                ? 'member__item__details-name dutypedia_name'
                                : 'member__item__details-name'
                        }>
                        {props.memberList.name}
                    </h4>
                    {props.memberList.user === 'dutypedia' && (
                        <p className="member__item__details-id">Id : 92973434</p>
                    )}
                </div>
            </div>
            <div className="member__item__online">
                <div className="d-flex align-items-center item_flex">
                    {props.memberList.user === 'dutypedia' && (
                        <div
                            id="ingredients__profile"
                            className="member__item__ingredients_profile">
                            <Image src={profile} alt="profile" />
                        </div>
                    )}
                    {props.memberList.user === 'dutypedia' && (
                        <div
                            id="ingredients__message"
                            className="member__item__ingredients_message">
                            <Image src={send} alt="message" />
                        </div>
                    )}
                </div>

                {/* <div>
          {deleteBtnToggle === true ? (
            <div
              id="DeleteBtn"
              onClick={() => handleDeleteModal(props.memberList.id)}
            >
              Delete
            </div>
          ) : (
            ""
          )}
        </div> */}
                <div class="btn-group dropstart">
                    <div
                        id="ingredients__3dots"
                        class="member__item__ingredients_option"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* Dropstart */}
                    {/* </button> */}
                    <ul class="dropdown-menu delete_item" style={{ minWidth: '5rem' }}>
                        <li
                            className="text-center"
                            style={{ color: '#858585', marginTop: '2px' }}
                            onClick={() => handleDeleteModal(props.memberList.id)}>
                            Delete
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled('div')``;

export default MemberMapList;

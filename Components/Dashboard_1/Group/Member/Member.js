import React, { useState } from 'react';
import Modal from 'react-modal';
import AddMember from './AddMember/AddMember';
import MemberMapList from './MemberMapList';
import { useDispatch, useSelector } from 'react-redux';
import {
    memberListDeleteItemAddToDutypedia,
    memberListDeleteItemAddToOffline,
    userRemoveFromMemberList
} from '../../../../Redux/Dashboard_1/Action/groupUserSelectAction';
import down_arrow from '../../../../Assets/images/common_img/down_arrow.svg';
import addBtn from '../../../../Assets/images/icons/add button.svg';
import styled from 'styled-components';
import Image from 'next/image';
import searchIcon from '/Assets/images/icons/search.svg';
import { Wrapper } from '../../../../styles/StyledComponentWrapper';
const Member = () => {
    const [addUser, setAddUser] = useState(false);
    const [memberListShow, setMemberListShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [memberListRemoveItem, setMemberListRemoveItem] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [select, setSelect] = useState('');
    const dispatch = useDispatch();
    const selectUser = useSelector((state) => state.groupUserSelect.groupSelectUser);
    const memberList = useSelector((state) => state.groupUserSelect.memberList);

    const dutypediaList = memberList?.filter((_d) => _d.user === select);

    const newMemberList = select === '' ? memberList : dutypediaList;

    const searchResult = newMemberList?.filter((search) =>
        search.name.includes(searchInput.charAt(0).toUpperCase())
    );

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%'
        }
    };

    const handlePageShowOff = () => {
        setAddUser(true);
        setMemberListShow(true);
    };

    const deleteItemFromMemberList = () => {
        if (memberListRemoveItem.user === 'dutypedia') {
            dispatch(userRemoveFromMemberList(deleteId));
            dispatch(memberListDeleteItemAddToDutypedia(memberListRemoveItem));
        }
        if (memberListRemoveItem.user === 'offline') {
            dispatch(userRemoveFromMemberList(deleteId));
            dispatch(memberListDeleteItemAddToOffline(memberListRemoveItem));
        }
        closeModal();
    };

    const [memberDelete, setMemberDelete] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        console.log(deleteId);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    // const handleOnClick = () => {
    //   setSelect('dutypedia');
    // }

    return (
        <Wrapper>
            {memberListShow === false && (
                <MemberWrapper>
                    <div id="mentor-listing-section">
                        <div className="memberSearch__container" id="searchAddSection">
                            <div className="input_container">
                                <input
                                    type="text"
                                    className="input_box"
                                    placeholder="Search now"
                                    onChange={handleSearch}
                                />
                                <Image
                                    className="memberSearch__icon"
                                    src={searchIcon}
                                    alt=""
                                    srcset=""
                                />
                            </div>

                            <div className="member__add" onClick={handlePageShowOff}>
                                <p className="member__add-text">Add Member</p>
                                <div className="member__add-icon" id="addMentor">
                                    <Image
                                        className=""
                                        src={addBtn}
                                        alt=""
                                        // style={{height: '20px'}}
                                        srcset=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="member__option">
                            <div></div>
                            <div>
                                <div className="mt-3 ms-5 search_by_date">
                                    <div className="d-flex">
                                        <div>
                                            <div className="btn-group ms-2 mb-4">
                                                <small className="select_date">
                                                    {select || 'Select'}
                                                </small>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger dropdown-toggle dropdown-toggle-split btn_danger"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {/* <Image className='dropdown_icon' src={'/expenses_images/down_arrow.svg'} width={15} height={15} /> */}
                                                    <Image
                                                        className="dropdown_icon"
                                                        src={down_arrow}
                                                        alt="down_arrow"
                                                    />
                                                    {/* <span className="visually-hidden">Toggle Dropdown</span> */}
                                                </button>
                                                <ul className="dropdown-menu member_drop_menu">
                                                    <li onClick={() => setSelect('dutypedia')}>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            // onClick={() => setSelect("Dutypedia")}
                                                            // onClick=""
                                                        >
                                                            Dutypedia
                                                        </a>
                                                    </li>
                                                    <li onClick={() => setSelect('Offline')}>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            // onClick={() => setSelect("offline")}
                                                        >
                                                            Offline
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="member__option-name">Member List</h4>
                        </div>

                        <div className="memberListItem">
                            {searchInput !== '' ? (
                                <div>
                                    {searchResult.map((memberList, index) => (
                                        <MemberMapList
                                            memberList={memberList}
                                            openModal={openModal}
                                            setDeleteId={setDeleteId}
                                            setMemberListRemoveItem={setMemberListRemoveItem}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {newMemberList.map((memberList, index) => (
                                        <MemberMapList
                                            memberList={memberList}
                                            openModal={openModal}
                                            setDeleteId={setDeleteId}
                                            setMemberListRemoveItem={setMemberListRemoveItem}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* modal */}
                        {/* modal */}

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <div className="">
                                <div className="modal-dialog modal-dialog modal-dialog-centered modal popup_text">
                                    <div
                                        // style={{ width: "120%", height: "200px" }}
                                        className="modal-content  modal_content">
                                        <div
                                            className="modal-header modal_delete_header"
                                            style={{ borderBottom: 'none' }}>
                                            <div class="sub_header">
                                                <h6
                                                    className="modal-title  modal_delete_title"
                                                    id="staticBackdropLabel">
                                                    Do You Want To Delete This member List?
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="modal-footer modal_delete_footer">
                                            <button
                                                type="button"
                                                className="modal_delete_yes"
                                                data-bs-dismiss="modal"
                                                onClick={deleteItemFromMemberList}>
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                className="modal_delete_no"
                                                data-bs-dismiss="modal"
                                                onClick={closeModal}>
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        {/* modal */}
                        {/* modal */}
                    </div>
                </MemberWrapper>
            )}
            {memberListShow === true && (
                <AddMember
                    addUser={addUser}
                    setAddUser={setAddUser}
                    setMemberListShow={setMemberListShow}
                    memberListShow={memberListShow}
                />
            )}
        </Wrapper>
    );
};

export default Member;
const MemberWrapper = styled('div')`
    width: 100%;
    margin: 1rem auto;
`;

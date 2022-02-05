import { FaPlus } from 'react-icons/fa';
import React, { useState } from 'react';
import Modal from 'react-modal';
import MentorMapList from './MentorMapList';
import { useDispatch, useSelector } from 'react-redux';

import {
    removeMentorAddToDutypediaAddList,
    removeMentorAddToOfflineAddList,
    removeMentorFromMentorList
} from '../../../../Redux/Dashboard_1/Action/mentorListAction';

import AddMentor from './addMentor/AddMentor';

const Mentor = () => {
    const [addMentor, setAddMentor] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showDataForMentor, setShowDataForMentor] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectMentor, setSelectMentor] = useState([]);
    const [memberListRemoveItem, setMemberListRemoveItem] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const dispatch = useDispatch();

    console.log(memberListRemoveItem.user);

    const mentorList = useSelector((state) => state.mentorReducer.mentorList);
    // const selectUser = useSelector((state) => state.groupSelect.groupSelectUser);;

    const dutypediaAddList = useSelector((state) => state.mentorReducer.dutypediaAddList);

    const searchFilterDutypediaList = mentorList?.filter((search) =>
        search.name.includes(searchInput.charAt(0).toUpperCase())
    );

    // console.log("select item", filterMentorList);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%'
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectMentor([]);
        setSearchInput('');
    };

    const handleAddMentor = () => {
        setAddMentor(true);
        setShowDataForMentor(true);
    };

    const deleteItemFromMemberList = () => {
        dispatch(removeMentorFromMentorList(deleteId));
        {
            memberListRemoveItem.user === 'dutypedia' &&
                dispatch(removeMentorAddToDutypediaAddList(memberListRemoveItem));
        }

        {
            memberListRemoveItem.user === 'offline' &&
                dispatch(removeMentorAddToOfflineAddList(memberListRemoveItem));
        }
        closeModal();
    };

    const handleSelectItemRemove = () => {
        setSelectMentor([]);
        setSearchInput('');
    };

    const handleAddMentorList = () => {};

    return (
        <>
            {addMentor === false && (
                <div id="mentor-listing-section">
                    <div className="memberSearch__container" id="searchAddSection">
                        <input
                            type="text"
                            placeholder="Search Now..."
                            className="memberSearch__input"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <img
                            className="memberSearch__icon"
                            src="../assets/images/icons/search.svg"
                            alt=""
                            srcset=""
                        />
                        <div className="memmber__add" onClick={handleAddMentor}>
                            <p className="member__add-text">Add Member</p>
                            <div className="member__add-icon" id="addMentor">
                                <i className="">
                                    <FaPlus />
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="member__option">
                        <h4 className="member__option-name">Member List</h4>
                        <select className="member__select-option" value="select" name="" id="">
                            <option value="select">select</option>
                            <option value="Member 1">Member 1</option>
                            <option value="Member 2">Member 2</option>
                        </select>
                        <img
                            src="../assets/images/icons/arrow down.svg"
                            className="icon-img"
                            alt=""
                            srcset=""
                        />
                    </div>

                    <div id="onlineAndOffLineMember">
                        <div
                            className="select__mentor text-white p-2 d-flex justify-content-between"
                            style={{ backgroundColor: '#E22424' }}>
                            <h6>Mentor Name</h6>
                            <h6 className="">Role</h6>
                            <h6 className="mr-2"></h6>
                        </div>
                    </div>
                    {/* <div className="member__option">
            <h4 className="member__option-name">Mentor List</h4>
          </div> */}

                    <div id="mentorList">
                        {searchInput !== '' ? (
                            <div>
                                {searchFilterDutypediaList.map((mentorList, index) => (
                                    <MentorMapList
                                        mentorList={mentorList}
                                        openModal={openModal}
                                        setDeleteId={setDeleteId}
                                        setMemberListRemoveItem={setMemberListRemoveItem}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                {mentorList.map((mentorList) => (
                                    <MentorMapList
                                        mentorList={mentorList}
                                        openModal={openModal}
                                        setDeleteId={setDeleteId}
                                        setMemberListRemoveItem={setMemberListRemoveItem}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* modal */}
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        // contentLabel="Example Modal"
                    >
                        <div className="popup-text" id="delete-booklist-popup">
                            <h5 className="text-capitalize">
                                Do You Want To Delete This Book List?
                            </h5>
                            <div className="d-flex justify-content-center btn-bootom">
                                <button
                                    id="confirmDeleteBtn"
                                    className="cmnBtn mr-4 border-0"
                                    onClick={deleteItemFromMemberList}>
                                    Yes
                                </button>
                                <button id="denyBtn" className="cmnBtn" onClick={closeModal}>
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                    {/* modal */}
                </div>
            )}

            {addMentor === true && (
                <AddMentor
                    addMentor={addMentor}
                    setAddMentor={setAddMentor}
                    showDataForMentor={showDataForMentor}
                />
            )}
        </>
    );
};

export default Mentor;

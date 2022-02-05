import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import MemberMapList from "./MemberMapList";

const Member = () => {
  const [memberList, setMemberList] = useState([]);
  const [addUser, setAddUser] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
    },
  };

  useEffect(() => {
    async function fetchApi() {
      const member_list_url = "http://localhost:5000/group-member-list";
      const res = await fetch(member_list_url);
      const data = await res.json();
      setMemberList(data);
    }
    fetchApi();
  }, []);

  const [memberDelete, setMemberDelete] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div id="mentor-listing-section">
        <div className="memberSearch__container" id="searchAddSection">
          <input
            type="text"
            placeholder="Search Now..."
            className="memberSearch__input"
          />
          <img
            className="memberSearch__icon"
            src="../assets/images/icons/search.svg"
            alt=""
            srcset=""
          />
          <div className="memmber__add"  onClick={() => setAddUser(true)}>
            <p className="member__add-text">Add Member</p>
            <div className="member__add-icon" id="addMentor">
              <i className="">
                <FontAwesomeIcon icon={faPlus} />
              </i>
            </div>
          </div>
        </div>

        <div className="member__option">
          <h4 className="member__option-name">Member List</h4>
          <select
            className="member__select-option"
            value="select"
            name=""
            id=""
          >
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

        <div id="mentorList">
          {memberList.map((memberList) => (
            <MemberMapList memberList={memberList} />
          ))}
        </div>

        {/* modal */}
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
              <button id="confirmDeleteBtn" className="cmnBtn mr-4 border-0">
                Yes
              </button>
              <button id="denyBtn" className="cmnBtn" onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </Modal>
        {/* modal */}
        {/* modal */}
      </div>


    </div>
  );
};

export default Member;


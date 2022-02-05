import React from "react";

const MentorMapList = (props) => {

  const handleDeleteModal = (id) => {
    props.openModal();
    props.setDeleteId(id);
    props.setMemberListRemoveItem(props.mentorList);
  };
  return (
    <div className="member__item" id="member__item1">
      <div className="member__item__details">
        <img
          src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
          alt="men 1"
        />
        <img
          id="isOnline"
          src="../assets/images/icons/Group 9059.svg"
          alt="message"
        />
        <div className="member__item__details__personal">
          <h4 className="member__item__details-name">
            {props.mentorList.name}
          </h4>
          <p className="member__item__details-id">Id : 92973434</p>
        </div>
      </div>

      <h6>{props.mentorList.role}</h6>
      <div className="member__item__ingredients">
        {props.mentorList.user === "dutypedia" && (
          <div
            id="ingredients__profile"
            className="member__item__ingredients_profile"
          >
            <img src="../assets/images/icons/google (2).svg" alt="profile" />
          </div>
        )}

        {props.mentorList.user === "dutypedia" && (
          <div
            id="ingredients__message"
            className="member__item__ingredients_message"
          >
            <img src="../assets/images/icons/Send_3_.svg" alt="message" />
          </div>
        )}


{/* <div class="btn-group dropstart">
          <button
            type="button"
            class="dropdown-toggle"
            // id="ingredients__3dots"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </button>
          <ul class="dropdown-menu delete_item" style={{minWidth: '5rem'}}>
            <li className='text-center mt-1' style={{color: '#858585'}} onClick={() => handleDeleteModal(props.mentorList.id)}>
              Delete
            </li>
          </ul>
        </div> */}

        <div class="btn-group dropstart">
            <div id="ingredients__3dots" class="member__item__ingredients_option" type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* Dropstart */}
          {/* </button> */}
          <ul class="dropdown-menu delete_item" style={{ minWidth: '5rem' }}>
            <li className='text-center mt-1' style={{ color: '#858585' }} onClick={() => handleDeleteModal(props.mentorList.id)}>
              Delete
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default MentorMapList;

import React from "react";

const MemberMapList = ({ memberList }) => {
  console.log("memberList data", memberList);
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
          <h4 className="member__item__details-name">Maliha Mouli</h4>
          <p className="member__item__details-id">Id : 92973434</p>
        </div>
      </div>
      <div className="member__item__ingredients">
        {memberList.user === "dutypedia" && (
          <div
            id="ingredients__profile"
            className="member__item__ingredients_profile"
          >
            <img src="../assets/images/icons/google (2).svg" alt="profile" />
          </div>
        )}
        {memberList.user === "dutypedia" && (
          <div
            id="ingredients__message"
            className="member__item__ingredients_message"
          >
            <img src="../assets/images/icons/Send_3_.svg" alt="message" />
          </div>
        )}

        {/* {memberDelete === 1 && (
            <div id="DeleteBtn" onClick={openModal}>Delete</div>
            )} */}
        <div
          id="ingredients__3dots"
          className="member__item__ingredients_option"
          // onClick={() => setMemberDelete(1)}
          onClick={() => console.log("click")}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MemberMapList;


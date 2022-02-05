import React from 'react';

const MemberList = () => {
  return (
    <div id="member-listing-section">
            <div className="memberSearch__container" id="searchAddSection">
              <input type="text" placeholder="Search Now..." className="memberSearch__input" />
              <img className="memberSearch__icon" src="../assets/images/icons/search.svg" alt="" srcset="" />
              <div className="memmber__add">
                <p className="member__add-text">Add Member</p>
                <div className="member__add-icon" id="addMember">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>

            <div className="member__option">
              <h4 className="member__option-name">Member List</h4>
              <select className="member__select-option" value="select" name="" id="">
                <option value="Member 1">Member 1</option>
                <option value="Member 2">Member 2</option>
              </select>
              <img src="../assets/images/icons/arrow down.svg" className="icon-img" alt="" srcset="" />
            </div>

            <div id="memberList">
              <div className="member__item" id="member__item1">
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
                <div className="member__item__ingredients">
                  <div id="ingredients__profile" className="member__item__ingredients_profile">
                    <img src="../assets/images/icons/google (2).svg" alt="profile" />
                  </div>
                  <div id="ingredients__message" className="member__item__ingredients_message">
                    <img src="../assets/images/icons/Send_3_.svg" alt="message" />
                  </div>
                  <div id="DeleteBtn">Delete</div>
                  <div id="ingredients__3dots" className="member__item__ingredients_option">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
                <div className="member__item__ingredients">
                  <div id="DeleteBtn">Delete</div>
                  <div id="ingredients__3dots" className="member__item__ingredients_option">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
                <div className="member__item__ingredients">
                  <div id="DeleteBtn">Delete</div>
                  <div id="ingredients__profile" className="member__item__ingredients_profile">
                    <img src="../assets/images/icons/google (2).svg" alt="profile" />
                  </div>
                  <div id="ingredients__message" className="member__item__ingredients_message">
                    <img src="../assets/images/icons/Send_3_.svg" alt="message" />
                  </div>
                  <div id="ingredients__3dots" className="member__item__ingredients_option">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
                <div className="member__item__ingredients">
                  <div id="DeleteBtn">Delete</div>
                  <div id="ingredients__3dots" className="member__item__ingredients_option">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default MemberList;




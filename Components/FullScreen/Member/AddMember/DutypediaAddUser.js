// import React from 'react';

// const DutypediaAddUser = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default DutypediaAddUser;



import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DutypediaAddUser = () => {
  return (
    <div id="onlineAndOffLineMember">
            <div className="group-btn">
              <button id="member-dutypedia-user" className="text-capitalize px-0 btn-border activeBtn">Dutypedia
                User
              </button>
              <button id="member-offline-user" className="text-capitalize px-0 margin-left">Offline Users
              </button>
            </div>
            <div className="memberSearch__container">
              <input type="text" placeholder="Search Now..." className="memberSearch__input" />
              <img className="memberSearch__icon" src="../assets/images/icons/search.svg" alt="" srcset="" />
              <button className="memberSearch__add-btn"><i className=""><FontAwesomeIcon icon={faUserPlus} /></i> Add Member</button>
            </div>

            <div className="select__member">
              <label for="select-all" className="checkbox-container">Select All
                <input id="select-all" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <h6 className="select__member-text">selected 5 person</h6>
            </div>

            {/* <!-- Item section start here -->
            <!-- Online User start here --> */}
            <div className="member-lists member-list-online">
              <div className="member__item">
                <label for="online" className="checkbox-container">
                  <input id="online" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="member2" className=" checkbox-container">
                  <input id="member2" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="member3" className="checkbox-container">
                  <input id="member3" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="member4" className="checkbox-container">
                  <input id="member4" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="member5" className="checkbox-container">
                  <input id="member5" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="member6" className="checkbox-container">
                  <input id="member6" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                    <p className="member__item__details-id">Id : 92973434</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Online User End Here -->

            <!-- Offline User Start Here --> */}

            <div className="member-lists member-lists-offline">
              <div className="member__item">
                <label for="memberoff1" className="checkbox-container">
                  <input id="memberoff1" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  {/* <!-- <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message"/> --> */}
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="memberoff2" className=" checkbox-container">
                  <input id="memberoff2" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  {/* <!-- <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message"/> --> */}
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="memberoff3" className="checkbox-container">
                  <input id="memberoff3" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  {/* <!-- <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message"/> --> */}
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="memberoff4" className="checkbox-container">
                  <input id="memberoff4" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  {/* <!-- <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message"/> --> */}
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="memberoff5" className="checkbox-container">
                  <input id="memberoff5" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  {/* <!-- <img id="isOnline" src="../assets/images/icons/Group 9059.svg" alt="message"/> --> */}
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
              <div className="member__item">
                <label for="memberoff6" className="checkbox-container">
                  <input id="memberoff6" type="checkbox" />
                  <span className="checkmark checkmark-down"></span>
                </label>
                <div className="member__item__details">
                  <img src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" alt="men 1" />
                  <div className="member__item__details__personal">
                    <h4 className="member__item__details-name">Maliha Mouli</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Offline User End Here -->
            <!-- Item section end here --> */}

          </div>
  );
};

export default DutypediaAddUser;

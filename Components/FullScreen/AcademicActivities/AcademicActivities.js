import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import BookList from '../BookList/BookList';
import Mentor from '../Mentor/Mentor';
import Member from '../Member/Member';
import MemberList from '../MemberList/MemberList';
import Routine from '../Routine/Routine/Routine';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
  }
};
const AcademicActivities = () => {

  const [create, setCreate] = useState("");

  return (
    <>
      <div id="academic-activities-section">
        <div className="container">
          <div className="academic-headline text-center text-capitalize">
            <h3>Rasel Academy </h3>
          </div>
          <div className="academic-activities-inner">
            <div className="row card-margin">
              <div className="col-lg-3">
                <div id="book-list" class={`activities-box books-card text-center ${create === "bookList" && "b"}`} onClick={() => { setCreate("bookList") }}>
                  <img src="../assets/../assets/images/icon png/books.png" alt="books" />
                  <h5>Book List</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div class={`activities-box routine-card text-center ${create === "routine" && "b"}`} onClick={() => { setCreate("routine") }}>
                  <img src="../assets/images/icon png/schedule (1).png" alt="books" />
                  <h5>Routine</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div id="Member-list" class={`activities-box member-card text-center ${create === "member" && "b"}`} onClick={() => { setCreate("member") }}>
                  <img src="../assets/images/icon png/team.png" alt="books" />
                  <h5>Member</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div class={`activities-box mentor-card text-center ${create === "mentor" && "b"}`} onClick={() => { setCreate("mentor") }}>
                  <img src="../assets/images/icon png/presentation.png" alt="books" />
                  <h5>Mentor</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div class={`activities-box meeting-card text-center ${create === "meeting" && "b"}`} onClick={() => { setCreate("meeting") }}>
                  <img src="../assets/images/icon png/hangouts-meet (1).png" alt="books" />
                  <h5>Meeting</h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div class={`activities-box attendence-card text-center ${create === "attendence" && "b"}`} onClick={() => { setCreate("attendence") }}>
                  <img src="../assets/images/icon png/attendance.png" alt="books" />
                  <h5>Attendence </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div class={`activities-box member-review-card height-100 text-center ${create === "memberReview" && "b"}`} onClick={() => { setCreate("memberReview") }}>
                  <img src="../assets/images/icon png/Group 7424.png" alt="books" />
                  <h5>Member Review</h5>
                </div>
              </div>
            </div>
          </div>

          {create === "bookList" && <BookList />}
          {/*
        <!-- add routine(class,diet,workout) section start -->
        <!-- add routine(class,diet,workout) section start -->
        <!-- add routine(class,diet,workout) section start --> */}

{(create === "routine") && <Routine/> }

          {/* <!-- diet routine end here -->
            <!-- diet routine end here -->
            <!-- diet routine end here -->


            <!-- Member section start Here -->
            <!-- Member section start Here -->
            <!-- Member section start Here --> */}
          <MemberList />



          {create === "member" && <Member />}
          {/* <!-- Member section end Here -->
        <!-- Member section end Here -->
        <!-- Member section end Here -->

        <!-- Mentor Section Start Here -->
        <!-- Mentor Section Start Here -->
        <!-- Mentor Section Start Here --> */}

          {create === "mentor" && <Mentor />}

          {/* <!-- Mentor Section end Here -->
        <!-- Mentor Section end Here -->
        <!-- Mentor Section end Here --> */}
        </div>
      </div>
      {/* <!-- add routine(class,diet,workout) section end -->
<!-- add routine(class,diet,workout) section end -->
<!-- add routine(class,diet,workout) section end --> */}
      {/* </div> */}


      {/* <!-- Member List Start Here -->
        <!-- Member List Start Here -->
        <!-- Member List Start Here --> */}



      {/* <!-- Member List Start Here -->
        <!-- Member List Start Here -->
        <!-- Member List Start Here --> */}






      {/* <!-- end user academic-activities-section in  dashboard -->
        <!-- end user academic-activities-section in  dashboard -->
        <!-- end user academic-activities-section in  dashboard --> */}




      


      {/* <!-- delete-member-popup text  start -->
        <!-- delete-member-popup text  start -->
        <!-- delete-member-popup text  start --> */}

      <div id="delete-member-popup" className="popup-text">
        <h5 className="text-capitalize text-center">Do You Want To Delete This Member?</h5>
        <div className="d-flex justify-content-center btn-bootom">
          <button id="confirmDeleteMember" className="cmnBtn mr-4 border-0">Yes</button>
          <button id="cencelDeleteMember" className="cmnBtn">No</button>
        </div>
      </div>

      {/* <!-- delete-member-popup text  end -->
        <!-- delete-member-popup text  end -->
        <!-- delete-member-popup text  end --> */}


      {/* <!-- cancel-routine-popup text  start -->
        <!-- cancel-routine-popup text  start -->
        <!-- cancel-routine-popup text  start --> */}

      <div id="cancel-routine-popup" className="popup-text">
        <h5 className="text-capitalize text-center">Do You Want To Cancel This Routine?</h5>
        <div className="d-flex justify-content-center btn-bootom">
          <button id="yes_CreateRoutine_CancelBtn" className="cmnBtn mr-4 border-0">Yes</button>
          <button id="no_CreateRoutine_Btn" className="cmnBtn">No</button>
        </div>
      </div>

      {/* <!-- cancel-routine-popup text  end -->
        <!-- cancel-routine-popup text  end -->
        <!-- cancel-routine-popup text  end --> */}


      {/* <!-- select mentor Popup  start -->
        <!-- select mentor Popup  start -->
        <!-- select mentor Popup  start --> */}

      <div className="mentor-popup-text" id="select-mentor-popup">
        <h5 className="mentor-popup-greet">Select A Mentor</h5>
        <div className="mentor-popup-input-container">
          <input className="mentor-popup-input" type="text" name="select-mentor" id="select-mentor-input" />
          <img className="mentor-popup-input-search-icon" src="images/icons/search.svg" alt="search" />
        </div>

        <div className="mentor-popup-container">
          <div className="mentor-item-popup" id="mentor1">
            <div className="mentor-popup-img-container">
              <img src="images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="mentor-img-popup" alt="" srcset="" />
              <img className="mentor-popup-online" src="images/icons/Group 9059.svg" alt="message" />
            </div>
            <div className="mentor-popup-details">
              <h4 className="mentor-name-popup selected">Tanjin Tisha</h4>
              <p className="member__item__details-id">Id : 92973434</p>
            </div>
          </div>
          <div className="mentor-item-popup">
            <img src="images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="mentor-img-popup" alt="" srcset="" />
            <h4 className="mentor-name-popup">Tanjin Tisha</h4>
          </div>
          <div className="mentor-item-popup">
            <img src="images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="mentor-img-popup" alt="" srcset="" />
            <h4 className="mentor-name-popup">Tanjin Tisha</h4>
          </div>
          <div className="mentor-item-popup">
            <div className="mentor-popup-img-container">
              <img src="images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="mentor-img-popup" alt="" srcset="" />
              <img className="mentor-popup-online" src="images/icons/Group 9059.svg" alt="message" />
            </div>
            <div className="mentor-popup-details">
              <h4 className="mentor-name-popup selected">Tanjin Tisha</h4>
              <p className="member__item__details-id">Id : 92973434</p>
            </div>
          </div>
          <div className="mentor-item-popup">
            <img src="images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="mentor-img-popup" alt="" srcset="" />
            <h4 className="mentor-name-popup">Tanjin Tisha</h4>
          </div>

        </div>
        <div className="cross-btn">
          X
        </div>
      </div>

      {/* <!-- select mentor Popup  end -->
        <!-- select mentor Popup  end -->
        <!-- select mentor Popup  end --> */}

      {/* <!-- selected Mentor PopUp Start -->
        <!-- selected Mentor PopUp Start -->
        <!-- selected Mentor PopUp Start --> */}

      <div className="mentor-popup-text" id="selected-mentor-popup" >
        <h5 className="mentor-popup-greet">Select A Mentor</h5>
        <div className="mentor-popup-input-container">
          <input className="mentor-selected-popup-input" type="text" name="select-mentor" id="select-mentor-input" />
          <img className="mentor-popup-input-search-icon" src="images/icons/search.svg" alt="search" />
          <div id="selected-mentor">
            <h4>Tanjin Tisha</h4>
            <img className="selected-mentor-btn" src="images/icons/Group 7670.svg" alt="" />
            {/* <!-- <button className="selected-mentor-btn">X</button> --> */}
          </div>
        </div>
        <div className="mentor-popup-btn" >
          <button className="popup-add-btn">Add Mentor</button>
          <button className="popup-cancel-btn">Cancel</button>
        </div>
      </div>

      {/* <!-- selected Mentor PopUp end -->
        <!-- selected Mentor PopUp end -->
        <!-- selected Mentor PopUp end --> */}


      {/* <!-- ===================================================
                        diet routine popup start
        =================================================== --> */}

      <div id="diet-rotine-chooseDay-popup" className="popup-text">
        <h4 className="text-capitalize text-center">Choose Day</h4>
        <div className="d-flex justify-content-between diet-chooseDay-inner">
          <div>
            <div className="d-flex justify-content-between">
              <label for="dietSat" className="checkbox-container text-capitalize">Saturday
                <input id="dietSat" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input id="satardayTime" type="time" className="diet-select-time" />
            </div>
            <div className="d-flex justify-content-between">
              <label for="dietSun" className="checkbox-container text-capitalize">Sunday
                <input id="dietSun" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="sundayTime" className="diet-select-time" />
            </div>
            <div className="d-flex justify-content-between">
              <label for="dietMon" className="checkbox-container text-capitalize">Monday
                <input id="dietMon" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="mondayTime" className="diet-select-time" />
            </div>
            <div className="d-flex justify-content-between">
              <label for="dietTues" className="checkbox-container text-capitalize">Tuesday
                <input id="dietTues" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="tuesdayTime" className="diet-select-time" />
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <label for="dietWed" className="checkbox-container text-capitalize">Wednesday
                <input id="dietWed" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="wednesdayTime" className="diet-select-time" />
            </div>
            <div className="d-flex justify-content-between">
              <label for="dietThurs" className="checkbox-container text-capitalize">Thursday
                <input id="dietThurs" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="thursdayTime" className="diet-select-time" />
            </div>
            <div className="d-flex justify-content-between">
              <label for="dietFri" className="checkbox-container text-capitalize">Friday
                <input id="dietFri" type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <input type="time" id="fridayTime" className="diet-select-time" />
            </div>
          </div>

        </div>
        <div className="d-flex justify-content-end btn-bootom">
          <input id="dietRoutineSave" className="cmnBtn mr-4 border-0" type="submit" value="save" />
          {/* <!-- <button id="dietRoutineSave" className="cmnBtn mr-4 border-0">Save</button> --> */}
          <button id="dietRoutineSaveCancel" className="cmnBtn">Cancel</button>
        </div>
      </div>
      {/* <!-- ===================================================
                        diet routine popup end
        =================================================== --> */}

    </>
  );
};

export default AcademicActivities;

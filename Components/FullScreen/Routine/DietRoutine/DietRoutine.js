import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DietRoutine = () => {

  const [routineName, setRoutineName] = useState(true);
  const [academy, setAcademy] = useState(false);


  return (
    <>
      {routineName &&
        <div id="created-diet-routine" className="created-book-list text-center" onClick={() => setRoutineName(false)} >
          <i className=""><FontAwesomeIcon icon={faPlus} /></i>
          <h3>Create A Diet Routine</h3>
        </div>}

      <div id="diet-routine-section">
        <div className="diet-routine-head">
          { !routineName && !academy &&
            <div className="diet-routine-input">
            <h3 className="routine-headline">Give A Routine Name </h3>
            <div className="get-user-input">
              <input id="routine-name" onchange="handleRoutineName(event)" type="text"
                className="user-input-field text-capitalize" />
            </div>
            <div>
              <h4 className="choose-day">Diet Starting Date</h4>
              <div className="choose-date d-flex">
                <div className="calendar">
                  <img src="../assets/images/icons/calendar-line.svg" alt="calendar-line" />
                </div>

                <div className="select-date-field d-flex">
                  <div>
                    {/* <!-- <img className="left-angel" src="../assets/images/icons/Polygon 15.svg" alt=""/> --> */}
                  </div>
                  <input onchange="handleStartDate(event)" id="selectDate" type="date"
                    className="selectDiet-date" />
                  <div>
                    <img className="right-angel" src="../assets/images/icons/Polygon 14.svg" alt="" />
                  </div>
                </div>
              </div>

            </div>
            <div className="d-flex btn-bootom">
              <button id="dietChoosDateNextBtn" className="cmnBtn border-0 mr-3" onClick={() => setAcademy(true)}>Next</button>
              <button id="dietChoosDateCancelBtn" className="cmnBtn">Cancel</button>
            </div>
          </div>}
        </div>
        <div className="diet-routine-inner text-center after-created-routine-header">
          <div id="diet-routine-edit-section">
            {/* <div className="d-flex justify-content-between diet-routine-edit-section">
              <div className="flex">
                <span className="text-capitalize">ABCD Academy</span>
                <span id="created-new-dietRoutine" className="text-capitalize"> <i
                  className="" aria-hidden="true"><FontAwesomeIcon icon={faPlusCircle}/> </i>created a new routine
                </span>
              </div>

            </div> */}
          </div>

          {/* <!-- routine edit page --> */}
          <div id="routine-edit" className="user-edit-input ">
            <div className="d-flex justify-content-end">
              <i id="edit-input-field" className="fas fa-edit" title="Edit Input"></i>
              <i id="delete-input-field" className="fas fa-trash-alt" title="Remove Row"></i>
            </div>
          </div>

          { academy &&
            <><div id="diet-routine-getuserInput">
            <h5 id="routineName" className="text-left mt-4">ABCD Academy</h5>
            <div className="choose-date d-flex  align-items-center">

              <h4 className="choose-day">Diet Starting Date</h4>
              <div className="calendar">
                <img src="../assets/images/icons/calendar-line.svg" alt="calendar-line" />
              </div>

              <div className="select-date-field d-flex">
                <div>
                  <img className="left-angel" src="../assets/images/icons/Polygon 15.svg" alt="" />
                </div>
                <input id="selectStartDate" type="date" className="selectDiet-date" />
                <div>
                  <img className="right-angel" src="../assets/images/icons/Polygon 14.svg" alt="" />
                </div>
              </div>
            </div>
          </div>



          <div className="diet-routine-section-table">
            <div id="diet-routine-table" className="diet-routine-table">
              <div className="diet-routine-table-head">
                <div className="diet-routine-table-head-caption">
                  <h4>Meals</h4>
                </div>
                <div id="dietTimeAdjust" className="diet-routine-table-head-caption">
                  <h4>Time</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Saturday</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Sunday</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Monday</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Tuesday</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Wednesday</h4>
                </div>
                <div className="diet-routine-table-head-caption">
                  <h4>Thursday</h4>
                </div>
                <div className="diet-routine-table-head-caption last-day">
                  <h4>Friday</h4>
                </div>
                <div className="clear"></div>
              </div>
              <div id="diet-routine-table-body" className="diet-routine-table-body">

              </div>


            </div>
            <button id="addDietRoutineRow" className="addMore-btn border-0 float-left">
              <img src="../assets/images/svg/add more plus.svg" alt="add more plus" />
              Add More
            </button>
          </div>
          <div id="diet-routine-table-btn">
            <div className="d-flex btn-bootom justify-content-end diet-routine-bottom-btn">
              <button id="createDietRoutineBtn" className="cmnBtn border-0 mr-3">Create Now</button>
              <button id="cancelDietRoutineBtn" className="cmnBtn">Cancel</button>
            </div>
            <div className="d-none btn-bootom justify-content-end diet-routine-bottom-btn">
              <button id="afterEditSaveDietRoutineBtn" className="cmnBtn border-0 mr-3">Save</button>
              <button id="cancelEditDietRoutineBtn" className="cmnBtn">Cancel</button>
            </div>
          </div>
          </>}
        </div>
      </div>
    </>
  );
};

export default DietRoutine;

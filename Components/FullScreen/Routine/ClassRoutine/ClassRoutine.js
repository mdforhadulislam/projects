import { faClock, faEdit, faPlus, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
// import clock from '../../../../assets/images/svg/Group 8174.svg'
import './ClassRoutine.css';
import Image from 'next/image';
import '../../../../Assets/CSS/style.css';

Modal.setAppElement('#root');

const ClassRoutine = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
    }
  };

  const [createClassRoutine, setCreateClassRoutine] = useState(true);
  const [academy, setAcademy] = useState(false);
  const [create, setCreate] = useState(false);
  const [add, setAdd] = useState("");
  const [countAdd, setCountAdd] = useState(0);
  const [edit, setEdit] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState([{ subject: "" }]);
  const [submitValues, setSubmitValues] = useState([{ name: "" }]);
  const [date, setDate] = useState([]);

  // handle input check in routine
  const [saturday, setSaturday] = useState(false);  
  const [sunday, setSunday] = useState(false);  
  const [monday, setMonday] = useState(false);  
  const [tuesday, setTuesday] = useState(false);  
  const [wednesday, setWednesday] = useState(false);  
  const [thursday, setThursday] = useState(false);  
  const [friday, setFriday] = useState(false);  

  const [saturdayNew, setSaturdayNew] = useState(false);  
  const [sundayNew, setSundayNew] = useState(false);  
  const [mondayNew, setMondayNew] = useState(false);  
  const [tuesdayNew, setTuesdayNew] = useState(false);  
  const [wednesdayNew, setWednesdayNew] = useState(false);  
  const [thursdayNew, setThursdayNew] = useState(false);  
  const [fridayNew, setFridayNew] = useState(false);  

  const [saveSaturday, setSaveSaturday] = useState(false);  
  const [saveSunday, setSaveSunday] = useState(false);  
  const [saveMonday, setSaveMonday] = useState(false);  
  const [saveTuesday, setSaveTuesday] = useState(false);  
  const [saveWednesday, setSaveWednesday] = useState(false);  
  const [saveThursday, setSaveThursday] = useState(false);  
  const [saveFriday, setSaveFriday] = useState(false);  

  const [dayOne, setDayOne] = useState(0);
  const [dayTwo, setDayTwo] = useState(0);
  const [dayThree, setDayThree] = useState(0);
  const [dayFour, setDayFour] = useState(0);
  const [dayFive, setDayFive] = useState(0);
  const [daySix, setDaySix] = useState(0);
  const [daySeven, setDaySeven] = useState(0);

console.log('save monday',saveMonday);
console.log('save number three',dayThree);
  // handle edit routine and save
  const handleSave = () => {
    setEdit(!edit)
    if(saveSaturday === true){
      setDayOne(dayOne + 1)
    }
    if(saveSunday === true) {
      setDayTwo(dayTwo + 1);
    }
    if(saveMonday === true) {
      setDayThree(dayThree + 1);
    }
    if(saveTuesday === true) {
      setDayFour(dayFour + 1);
    }
    if(saveWednesday === true) {
      setDayFive(dayFive + 1);
    }
    if(saveThursday === true) {
      setDaySix(daySix + 1);
    }
    if(saveFriday === true) {
      setDaySeven(daySeven + 1);
    }
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const deleteYes = () => {
    closeModal();
    setAcademy(false);
    setCreate(false);
    setEdit(false);
    setCreateClassRoutine(true);
    setFormValues([{ subject: "" }]);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { subject: "" }])
    setAdd("add");
    setCountAdd(countAdd+1);
  }

  const count = (i) => {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(formValues);
    setSubmitValues(formValues);
    console.log(formValues);
  }

  const submit = () => {
    setSubmitValues(formValues);
  }

  const handleChange = (e) => {
    setDate([...date, {
      'weekName': e.target.name,
    }]);
  }

// filter week name
const isSaturDay = date.find(week => week.weekName === 'saturday');
const isSunDay = date.find(week => week.weekName === 'sunday');
const isMonDay = date.find(week => week.weekName === 'monday');
const isTueDay = date.find(week => week.weekName === 'tuesday');
const isWedDay = date.find(week => week.weekName === 'wednesday');
const isThudDay = date.find(week => week.weekName === 'thursday');
const isFridDay = date.find(week => week.weekName === 'friday');

const isCheck = true;
const isUncheck = false;

  return (
    <>
      {createClassRoutine &&
        <div id="created-class-routine" className="created-book-list text-center" onClick={() => setCreateClassRoutine(false)} >
          <i className=""><FontAwesomeIcon icon={faPlus} /></i>
          <h3>Create A Class Routine</h3>
        </div>}


      <div>
        {
          !academy &&
          !createClassRoutine &&
            // <form onSubmit={dateSubmit}>
              <div id="routine-user-input">
            <h3 className="routine-headline">Give A Routine Name </h3>
            <div className="get-user-input">
              <input type="text" className="user-input-field text-capitalize" />
            </div>
            <h4 className="choose-day">Choose Day </h4>
            <div className="d-flex chooseday-checkbox">
              <label htmlFor="saturday" className="checkbox-container text-capitalize">Saturday
                <input id="saturday" type="checkbox" name="saturday" idt="sat" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="sunday" className="checkbox-container text-capitalize">sunday
                <input id="sunday" type="checkbox" name="sunday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="monday" className="checkbox-container text-capitalize">monday
                <input id="monday" type="checkbox" name="monday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="tuesday" className="checkbox-container text-capitalize">tuesday
                <input id="tuesday" type="checkbox" name="tuesday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="wednesday" className="checkbox-container text-capitalize">wednesday
                <input id="wednesday" type="checkbox" name="wednesday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="thursday" className="checkbox-container text-capitalize">thursday
                <input id="thursday" type="checkbox" name="thursday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="friday" className="checkbox-container text-capitalize">friday
                <input id="friday" type="checkbox" name="friday" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="d-flex btn-bootom">
              <button id="choosDayNext" className="cmnBtn border-0 mr-3" onClick={() => setAcademy(true)} >Next</button>
              <button id="choosDayCancel" className="cmnBtn" onClick={() => setCreateClassRoutine(true)}>Cancel</button>
            </div>
          </div>
          }


        {/* <!-- class routine table start here -->
            <!-- class routine table start here --> */}
        <div className="routine-table-section">
          <div className="routine-table-inner">
            <form onSubmit={handleSubmit}>
              <div id="class-routine-table-section">
                {academy && !create &&
                  <>
                    <div className="routine-table-head">
                      <h4 className="table-head text-capitalize">Abcd Academy</h4>
                    </div>
                    <div className="d-flex routine-table-body-section">
                      <div className="order-3 routine-coloum">
                        <ul className="mx-0 px-0">
                          <li className="border-handle">
                            <h4 className="selection-day-col mb-0">Select</h4>
                          </li>
                          <li> <span className="d-block select-time-heading text-left">Time</span>
                          </li>
                          {/* {date.map((date, i) =>  ( */}
                          <li >
                            <label htmlFor="sat" className="checkbox-container text-capitalize">saturday
                            { isSaturDay?.weekName === 'saturday' ? (
                              <input 
                                id="sat" 
                                type="checkbox" 
                                name='saturday' 
                                checked={!saturdayNew ? isCheck : isUncheck} 
                                onClick={() => setSaturdayNew(!saturdayNew)}
                              />
                            ) : (
                              <input 
                                id="sat" 
                                type="checkbox" 
                                name='saturday' 
                                checked={saturday ? isCheck : isUncheck} 
                                onClick={() => setSaturday(!saturday)}
                              />
                            )}
                              <span className='checkmark'></span>
                            </label>
                          </li>
                          {/* // ))} */}

                          <li>
                            <label htmlFor="sun" className="checkbox-container text-capitalize">sunday
                            { isSunDay?.weekName === 'sunday' ? <input id="sun" type="checkbox" name='sunday' checked={!sundayNew ? isCheck : isUncheck} onClick={() => setSundayNew(!sundayNew)}/> : <input id="sun" type="checkbox" name='sunday' checked={sunday ? isCheck : isUncheck} onClick={() => setSunday(!sunday)}/>}
                              
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="mon" className="checkbox-container text-capitalize">Monday
                            {isMonDay?.weekName === 'monday' ? <input id="mon" type="checkbox" name='monday' checked={!mondayNew ? isCheck : isUncheck} onClick={() => setMondayNew(!mondayNew)}/> : <input id="mon" type="checkbox" name='monday' checked={monday ? isCheck : isUncheck} onClick={() => setMonday(!monday)}/>}
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="tues" className="checkbox-container text-capitalize">Tuesday
                            {isTueDay?.weekName === 'tuesday' ? <input id="tues" type="checkbox" name='tuesday' checked={!tuesdayNew ? isCheck : isUncheck} onClick={() => setTuesdayNew(!tuesdayNew)}/> : <input id="tues" type="checkbox" name='tuesday' checked={tuesday ? isCheck : isUncheck} onClick={() => setTuesday(!tuesday)}/>}
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="wed"
                              className="checkbox-container text-capitalize">Wednesday
                              {isWedDay?.weekName === 'wednesday' ? <input id="wed" type="checkbox" name='wednesday' checked={!wednesdayNew ? isCheck : isUncheck} onClick={() => setWednesdayNew(!wednesdayNew)}/>: <input id="wed" type="checkbox" name='wednesday' checked={wednesday ? isCheck : isUncheck} onClick={() => setWednesday(!wednesday)}/>}
                              
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="thurs"
                              className="checkbox-container text-capitalize">Thursday
                              {isThudDay?.weekName === 'thursday' ? <input id="thurs" type="checkbox" name='thursday' checked={!thursdayNew  ? isCheck : isUncheck} onClick={() => setThursdayNew(!thursdayNew)}/>: <input id="thurs" type="checkbox" name='thursday' checked={thursday  ? isCheck : isUncheck} onClick={() => setThursday(!thursday)}/>}
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label htmlFor="fr" className="checkbox-container text-capitalize">Friday
                              {isFridDay?.weekName === 'friday' ? <input id="fr" type="checkbox" name='friday' checked={!fridayNew ? isCheck : isUncheck} onClick={() => setFridayNew(!fridayNew)}/> : <input id="fr" type="checkbox" name='friday' checked={friday ? isCheck : isUncheck} onClick={() => setFriday(!friday)}/>}
                              <span className="checkmark"></span>
                            </label> 
                          </li>
                        </ul>
                      </div>
                      {formValues.map((element, i) => (<div className="order-3 routine-coloum">
                        <ul className="mx-0 px-0">
                          <li><input type="text" className="selection-day-col" value={`${count(i + 1)} class`} readOnly /></li>
                          <li>
                            <div className="d-flex time-input-container justify-content-center">
                              <input type="time" className="select-time-input" value="09:30:00" />
                              <span>to</span>
                              <input type="time" className="select-time-input" value="09:30:00" />
                            </div>
                          </li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                          <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                        </ul>
                      </div>))}
                      <div className="order-4 routine-coloum addColoum-margin">
                        <ul className="px-0">
                          <li><input type="button" className="selection-day-col" id="addMore-routine-btn"
                            value="Add More" onClick={addFormFields} /></li>
                          <li><input type="text" className="input-class-subject addMore-btn-input" />
                          </li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                          <li><input type="text" className="input-class-subject" /></li>
                        </ul>
                      </div>
                    </div>
                  </>}

                {/* <!-- static value for user create routine --> */}
                {create &&
                  <div id="after-created-routine">
                    <div className="after-created-routine-header">
                      <div className="d-flex justify-content-between">
                        <div className="flex">
                          <span className="text-capitalize">ABCD Academy</span>
                          <span id="created-new-classRoutine" className="text-capitalize" onClick={() => { setCreateClassRoutine(true) }}> <i
                            className="" aria-hidden="true" ><FontAwesomeIcon icon={faPlusCircle} /></i> created a new
                            routine </span>
                        </div>
                        {create &&
                          <div className="user-edit-input ">
                            <div className="d-flex justify-content-end">
                              <i id="edit-class-routine" className=""
                                title="Edit Input" onClick={() => setEdit(true)} ><FontAwesomeIcon icon={faEdit} /></i>
                              <i id="delete-class-routine" className=""
                                title="Remove Row"
                                onClick={openModal}
                              ><FontAwesomeIcon icon={faTrashAlt} /></i>
                            </div>
                          </div>}
                      </div>
                    </div>
                    <div className="d-flex routine-table-body-section">
                      <div className={`order-3 ${add === "add" ? "routine-coloum" : "routine-col"}`}>
                        <ul className="mx-0 px-0">
                          <li className="border-handle">
                            <h4 className="selection-day-col mb-0">Select</h4>
                          </li>
                          <li> <span className="d-block select-time-heading text-left">Time</span>
                          </li>

                          {/* START OF CREATE AND SAVE ROUTINE LIST */}
                          {edit === true? (
                                <div>
                                  {isSaturDay?.weekName !== 'saturday' && saturdayNew === false && saturday === false ? '' : saveSaturday === true && dayOne > 0 ? '' :  <li>
                                      <label htmlFor="sat" className="checkbox-container text-capitalize">Saturday
                                      <input 
                                        id="sat" 
                                        type="checkbox" 
                                        name='saturday' 
                                        onClick={() => setSaveSaturday(!saveSaturday)}
                                        checked={!saveSaturday ? isCheck : isUncheck} 
                                      />
                                      <span className='checkmark'></span>
                                      </label>
                                     </li>}
                                </div>
                          ) : (
                            <div>
                              {saveSaturday === true ? (
                                  ''
                              ) : (
                              <div>
                              {isSaturDay?.weekName !== 'saturday' && saturdayNew === false && saturday === false ? (
                                ''
                                ) : isSaturDay?.weekName === 'saturday' && saturdayNew === false && saturday === false ? (
                                <li>
                                  <label htmlFor="sat" className="checkbox-container text-capitalize">Saturday
                                  </label>
                                </li> ) : isSaturDay?.weekName === 'saturday' && saturdayNew === true && saveSaturday === false? '' : (
                                  <li>
                                  <label htmlFor="sat" className="checkbox-container text-capitalize">Saturday
                                  </label>
                                </li> 
                                )}
                               </div>
                              )}
                            </div>
                          )}                              
                                  
                          
                          {edit === true ? (
                                <div>
                                  {isSunDay?.weekName !== 'sunday' && sundayNew === false && sunday === false ? '' : saveSunday === true && dayTwo > 0 ? '' : <li>
                                  <label htmlFor="sun" className="checkbox-container text-capitalize">Sunday
                                  <input 
                                    id="sun" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveSunday(!saveSunday)}
                                    checked={!saveSunday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveSunday === true ? (
                                  ''
                              ): (
                              <div>
                                {isSunDay?.weekName !== 'sunday' && sundayNew === false && sunday === false ? (
                                  ''
                                  ) : isSunDay?.weekName === 'sunday' && sundayNew === false && sunday === false ? (
                                  <li>
                                    <label htmlFor="sun" className="checkbox-container text-capitalize">sunday
                                    </label>
                                  </li> ) : isSunDay?.weekName === 'sunday' && sundayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="sun" className="checkbox-container text-capitalize">sunday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                            {edit === true ? (
                                <div>
                                  {isMonDay?.weekName !== 'monday' && mondayNew === false && monday === false ? '' : saveMonday === true && dayThree > 0 ? '' : <li>
                                  <label htmlFor="mon" className="checkbox-container text-capitalize">Monday
                                  <input 
                                    id="mon" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveMonday(!saveMonday)}
                                    checked={!saveMonday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveMonday === true ? (
                                  ''
                              ): (
                              <div>
                                {isMonDay?.weekName !== 'monday' && mondayNew === false && monday === false ? (
                                  ''
                                  ) : isMonDay?.weekName === 'monday' && mondayNew === false && monday === false ? (
                                  <li>
                                    <label htmlFor="mon" className="checkbox-container text-capitalize">monday
                                    </label>
                                  </li> ) : isMonDay?.weekName === 'monday' && mondayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="mon" className="checkbox-container text-capitalize">monday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}
                          
                          {edit === true ? (
                                <div>
                                  {isTueDay?.weekName !== 'tuesday' && tuesdayNew === false && tuesday === false ? '' : saveTuesday === true && dayFour > 0 ? '' : <li>
                                  <label htmlFor="tues" className="checkbox-container text-capitalize">Tuesday
                                  <input 
                                    id="tues" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveTuesday(!saveTuesday)}
                                    checked={!saveTuesday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveTuesday === true ? (
                                  ''
                              ): (
                              <div>
                                {isTueDay?.weekName !== 'tuesday' && tuesdayNew === false && tuesday === false ? (
                                  ''
                                  ) : isTueDay?.weekName === 'tuesday' && tuesdayNew === false && tuesday === false ? (
                                  <li>
                                    <label htmlFor="tues" className="checkbox-container text-capitalize">Tuesday
                                    </label>
                                  </li> ) : isTueDay?.weekName === 'tuesday' && tuesdayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="tues" className="checkbox-container text-capitalize">Tuesday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}
                          
                          {edit === true ? (
                                <div>
                                  {isWedDay?.weekName !== 'wednesday' && wednesdayNew === false && wednesday === false ? '' : saveWednesday === true && dayFive > 0 ? '' : <li>
                                  <label htmlFor="wed" className="checkbox-container text-capitalize">Wednesday
                                  <input 
                                    id="wed" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveWednesday(!saveWednesday)}
                                    checked={!saveWednesday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveWednesday === true ? (
                                  ''
                              ): (
                              <div>
                                {isWedDay?.weekName !== 'wednesday' && wednesdayNew === false && wednesday === false ? (
                                  ''
                                  ) : isWedDay?.weekName === 'wednesday' && wednesdayNew === false && wednesday === false ? (
                                  <li>
                                    <label htmlFor="wed" className="checkbox-container text-capitalize">Wednesday
                                    </label>
                                  </li> ) : isWedDay?.weekName === 'wednesday' && wednesdayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="wed" className="checkbox-container text-capitalize">Wednesday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                              {edit === true ? (
                                <div>
                                  {isThudDay?.weekName !== 'thursday' && thursdayNew === false && thursday === false ? '' : saveThursday === true && dayFive > 0 ? '' : <li>
                                  <label htmlFor="thu" className="checkbox-container text-capitalize">Thursday
                                  <input 
                                    id="thu" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveThursday(!saveThursday)}
                                    checked={!saveThursday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveThursday === true ? (
                                  ''
                              ): (
                              <div>
                                {isThudDay?.weekName !== 'thursday' && thursdayNew === false && thursday === false ? (
                                  ''
                                  ) : isThudDay?.weekName === 'thursday' && thursdayNew === false && thursday === false ? (
                                  <li>
                                    <label htmlFor="thu" className="checkbox-container text-capitalize">Thursday
                                    </label>
                                  </li> ) : isThudDay?.weekName === 'thursday' && thursdayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="thu" className="checkbox-container text-capitalize">Thursday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                              {edit === true ? (
                                <div>
                                  {isFridDay?.weekName !== 'friday' && fridayNew === false && friday === false ? '' : saveFriday === true && dayFive > 0 ? '' : <li>
                                  <label htmlFor="fri" className="checkbox-container text-capitalize">friday
                                  <input 
                                    id="fri" 
                                    type="checkbox" 
                                    name='saturday' 
                                    onClick={() => setSaveFriday(!saveFriday)}
                                    checked={!saveFriday ? isCheck : isUncheck} 
                                  />
                                  <span className='checkmark'></span>
                                  </label>
                                </li>}
                                </div>
                            ) : (
                            <div>
                              {saveFriday === true ? (
                                  ''
                              ): (
                              <div>
                                {isFridDay?.weekName !== 'friday' && fridayNew === false && friday === false ? (
                                  ''
                                  ) : isFridDay?.weekName === 'friday' && fridayNew === false && friday === false ? (
                                  <li>
                                    <label htmlFor="fri" className="checkbox-container text-capitalize">friday
                                    </label>
                                  </li> ) : isFridDay?.weekName === 'friday' && fridayNew === true ? '' : (
                                    <li>
                                    <label htmlFor="fri" className="checkbox-container text-capitalize">friday
                                    </label>
                                  </li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}
                          {/* END OF CREATE AND SAVE ROUTINE LIST */}
                        </ul>
                      </div>
                      {submitValues.map((element, i) => (<div className={`order-3 ${add === "add" ? "routine-coloum" : "routine-col"}`}>
                        <ul className="mx-0 px-0">
                          <li><input type="text" className="selection-day-col" value={`${count(i + 1)} class`} /></li>
                          <li>
                            <div className={`${countAdd === 0 ? "set-routine-input-conditional" : "set-routine-input"}`}>
                              <i className=""><Image src={'../../../../Assets/images/svg/Group 8174.svg'} alt="" /></i>
                              <input className={`${(add === "add" && countAdd > 1) ?"fixed-class-time" : "fixed-class-time-conditional" }`} value="9:30 AM to 9:30 Am" />
                            </div>
                          </li>
                          
                          {/* START OF CLASS ROUTINE SUBJECT NAMES */}
                          {edit === true? (
                                <div>
                                  {isSaturDay?.weekName !== 'saturday' && saturdayNew === false && saturday === false ? '' : saveSaturday === true && dayOne > 0 ? '' : 
                                  <li><input type="text" className="input-class-subject" placeholder="Subject name" /></li>}
                                </div>
                          ) : (
                            <div>
                              {saveSaturday === true ? (
                                  ''
                              ) : (
                              <div>
                              {isSaturDay?.weekName !== 'saturday' && saturdayNew === false && saturday === false ? (
                                ''
                                ) : isSaturDay?.weekName === 'saturday' && saturdayNew === false && saturday === false ? (
                                  <li><input type="text" className="input-class-subject" placeholder="Subject name" /></li> ) : isSaturDay?.weekName === 'saturday' && saturdayNew === true ? '' : (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject name" /></li>
                                )}
                               </div>
                              )}
                            </div>
                          )}
                          
                            {edit === true ? (
                                <div>
                                  {isSunDay?.weekName !== 'sunday' && sundayNew === false && sunday === false ? '' : saveSunday === true && dayTwo > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name sunday" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveSunday === true ? (
                                  ''
                              ): (
                              <div>
                                {isSunDay?.weekName !== 'sunday' && sundayNew === false && sunday === false ? (
                                  ''
                                  ) : isSunDay?.weekName === 'sunday' && sundayNew === false && sunday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name sunday" /></li>
                                    ) : isSunDay?.weekName === 'sunday' && sundayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name sunday" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                            {edit === true ? (
                                <div>
                                  {isMonDay?.weekName !== 'monday' && mondayNew === false && monday === false ? '' : saveMonday === true && dayThree > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveMonday === true ? (
                                  ''
                              ): (
                              <div>
                                {isMonDay?.weekName !== 'monday' && mondayNew === false && monday === false ? (
                                  ''
                                  ) : isMonDay?.weekName === 'monday' && mondayNew === false && monday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                    ) : isMonDay?.weekName === 'monday' && mondayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}

                            {edit === true ? (
                                <div>
                                  {isTueDay?.weekName !== 'tuesday' && tuesdayNew === false && tuesday === false ? '' : saveTuesday === true && dayFour > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveTuesday === true ? (
                                  ''
                              ): (
                              <div>
                                {isTueDay?.weekName !== 'tuesday' && tuesdayNew === false && tuesday === false ? (
                                  ''
                                  ) : isTueDay?.weekName === 'tuesday' && tuesdayNew === false && tuesday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                    ) : isTueDay?.weekName === 'tuesday' && tuesdayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}

                            {edit === true ? (
                                <div>
                                  {isWedDay?.weekName !== 'wednesday' && wednesdayNew === false && wednesday === false ? '' : saveWednesday === true && dayFive > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveWednesday === true ? (
                                  ''
                              ): (
                              <div>
                                {isWedDay?.weekName !== 'wednesday' && wednesdayNew === false && wednesday === false ? (
                                  ''
                                  ) : isWedDay?.weekName === 'wednesday' && wednesdayNew === false && wednesday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                    ) : isWedDay?.weekName === 'wednesday' && wednesdayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                            {edit === true ? (
                                <div>
                                  {isThudDay?.weekName !== 'thursday' && thursdayNew === false && thursday === false ? '' : saveThursday === true && dayFive > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveThursday === true ? (
                                  ''
                              ): (
                              <div>
                                {isThudDay?.weekName !== 'thursday' && thursdayNew === false && thursday === false ? (
                                  ''
                                  ) : isThudDay?.weekName === 'thursday' && thursdayNew === false && thursday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                    ) : isThudDay?.weekName === 'thursday' && thursdayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                            )}

                            {edit === true ? (
                                <div>
                                  {isFridDay?.weekName !== 'friday' && fridayNew === false && friday === false ? '' : saveFriday === true && dayFive > 0 ? '' : <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>}
                                </div>
                            ) : (
                            <div>
                              {saveFriday === true ? (
                                  ''
                              ): (
                              <div>
                                {isFridDay?.weekName !== 'friday' && fridayNew === false && friday === false ? (
                                  ''
                                  ) : isFridDay?.weekName === 'friday' && fridayNew === false && friday === false ? (
                                    <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                    ) : isFridDay?.weekName === 'friday' && fridayNew === true ? '' : (
                                      <li><input type="text" className="input-class-subject" placeholder="Subject Name" /></li>
                                  )}
                               </div>
                              )}
                            </div>
                          )}
                          {/* END OF CLASS ROUTINE SUBJECT NAMES */}

                        </ul>
                      </div>))}
                    </div>
                  </div>}

                <div className="addBtn-group">
                  <div id="create-routine-buitton-container">
                    <div className="d-flex justify-content-end btn-bootom">

                      {academy && !create &&
                        <div id="classroutine-editBtn-top">
                          <button id="createRoutineBtn" className="cmnBtn mr-3" type="submit`" onClick={() => { submit(); setCreate(true) }}>Create
                            Now</button>
                          <button id="cancelCreateRoutineBtn"
                            className="cmnBtn mr-3" onClick={() => setAcademy(false)}>Cancel</button>
                        </div>}

                      {edit &&
                        <div id="classroutine-editBtn-bottom">
                          <button id="afterEditRoutineSaveBtn"
                            className="cmnBtn mr-3" onClick={handleSave}>Save</button>
                          <button id="cancelEditRoutineSaveBtn"
                            className="cmnBtn mr-3" onClick={() => setEdit(false)}>Cancel</button>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        // contentLabel="Example Modal"
        >
          <div id="delete-routine-popup" className="popup-text">
            <h5 className="text-capitalize text-center">Do You Want To Delete This Routine?</h5>
            <div className="d-flex justify-content-center btn-bootom">
              <button id="confirmRoutineDeleteBtn" className="cmnBtn mr-4 border-0" onClick={deleteYes}>Yes</button>
              <button id="cancleRoutineDeleteBtn" className="cmnBtn" onClick={closeModal}>No</button>
            </div>
          </div>
        </Modal>
      </div>

    </>
  );
};

export default ClassRoutine;

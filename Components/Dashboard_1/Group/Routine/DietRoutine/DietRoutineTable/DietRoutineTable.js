import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddMoreIcon from '../../../../../../Assets/icon/add more plus.svg';
import Image from 'next/image';
import dayjs from 'dayjs';
import icon from '../../../../../../Assets/images/resite/calendar-line.svg'
import GrayLeftIcon from '../../../../../../Assets/images/dashboard/GrayLeftIcon';
import RightIcon from '../../../../../../Assets/images/dashboard/RightIcon';
import { useDispatch, useSelector } from 'react-redux';
import { monthIndexAdd, monthIndexRemove } from '../../../../../../Redux/Dashboard_1/Action/expensesAction';

const diet_routine_day = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday'];

const tableRows = [
    {
        id: '0', value: <div>
            <div className="diet-routine-table-row-caption diet-routine-first-column">
                <h5><input type="text" name="" id="" placeholder='Dinner' className='text-center' /></h5>
            </div>
            <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Adjust Time
                </button>
            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="clear"></div>
        </div>
    },
]

const DietRoutineTable = () => {
    const [rows, setRows] = useState(tableRows);
    const [takeRoutineName, setTakeRoutineName] = useState(' ');
    const [hover, setHover] = useState(true);
    const monthIndexData = useSelector((state) => state.expensesReducers.monthIndex);
    const dispatch = useDispatch();

    const handleMonthAdd = () => {
        dispatch(monthIndexAdd());
    };

    const handleMonthRemove = () => {
        dispatch(monthIndexRemove());
    };

    const handleAddMore = e => {
        const addedRow = <div>
            <div className="diet-routine-table-row-caption diet-routine-first-column">
                <h5><input type="text" name="" id="" placeholder='Dinner' className='text-center' /></h5>
            </div>
            <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Adjust Time
                </button>
            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="diet-routine-table-row-caption">

            </div>
            <div className="clear"></div>
        </div>
        const addedId = rows.length;
        const newRow = { id: addedId, value: addedRow }
        const updateRows = [...rows, newRow];
        setRows(updateRows);
    }

    return (
        <Wrapper>
            <div id="diet-routine-getuserInput">
                <h5 id="routineName" className="text-left mt-4 my-3">{takeRoutineName}</h5>
                <div className="d-flex align-items-center my-4 choose-date">
                    <h4 className="choose-day me-4">Diet Starting Date</h4>
                    <HeaderPart>
                        <BoxOfCalender>
                            <button onClick={handleMonthRemove}>
                                <GrayLeftIcon />
                            </button>
                            <h5>{dayjs(new Date(dayjs().year(), monthIndexData)).format('MMMM YYYY')}</h5>
                            <button onClick={handleMonthAdd}>
                                <RightIcon />
                            </button>
                            <DateIcon>
                                <Image src={icon} alt="Calender" />
                            </DateIcon>
                        </BoxOfCalender>
                    </HeaderPart>
                </div>
            </div>
            <div className='diet_routine_table_desktop'>
                <div className="diet-routine-section-table">
                    <div id="diet-routine-table" className="diet-routine-table">

                        {/* table heading row start here */}
                        <div className="diet-routine-table-head diet-routine-heading-position" id='navbar_top'>
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
                            <div className="diet-routine-table-head-caption friday">
                                <h4>Friday</h4>
                            </div>
                            <div className="clear"></div>
                        </div>

                        {/* table body */}
                        <div id="diet-routine-table-body" className="diet-routine-table-body table-input">
                            {/* First row of the talbe */}
                            <div>
                                <div className="diet-routine-table-row-caption diet-routine-first-column">
                                    <h5><input type="text" name="" id="" placeholder='Breakfast' className='text-center' /></h5>
                                </div>
                                <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                                    <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </button>
                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="clear"></div>
                            </div>

                            {/* Second row of the talbe */}
                            <div className="table-input">
                                <div className="diet-routine-table-row-caption diet-routine-first-column">
                                    <h5><input type="text" name="" id="" placeholder='Picked Lunch
                                (Mid- Morning)' className='text-center' /></h5>
                                </div>
                                <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                                    <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </button>
                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="clear"></div>
                            </div>

                            {/* Third row of the talbe */}
                            <div>
                                <div className="diet-routine-table-row-caption diet-routine-first-column">
                                    <h5><input type="text" name="" id="" placeholder='Launch' className='text-center' /></h5>
                                </div>
                                <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                                    <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </button>
                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="clear"></div>
                            </div>

                            {/* Fourth row of the talbe */}
                            <div>
                                <div className="diet-routine-table-row-caption diet-routine-first-column">
                                    <h5><input type="text" name="" id="" placeholder='Evening
                                Snack/ Drink' className='text-center' /></h5>
                                </div>
                                <div id="dietTimeAdjust" className="diet-routine-table-row-caption">
                                    <button className='adjust-time-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </button>
                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="diet-routine-table-row-caption">

                                </div>
                                <div className="clear"></div>

                            </div>

                            {
                                rows?.map(element => element?.value)
                            }
                        </div>
                    </div>
                    <button id="addDietRoutineRow" className="addMore-btn border-0 float-left d-flex justify-content-center align-items-center" onClick={handleAddMore}>
                        <Image src={AddMoreIcon} alt="add more plus" />
                        <span className='ms-2'>Add More</span>
                    </button>
                </div>
            </div>
            <h4 className='text-left my-4 pt-4'>Instruction</h4>
            {/* diet routine accordion */}
            <div
                className="accordion accordion-flush border-0"
                id="accordionFlushExample">
                <div className="accordion-item shadow-sm my-3 border rounded10 col-md-5 px-0">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed rounded10 py-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="true"
                            aria-controls="flush-collapseOne">
                            Meals?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-start">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{' '}
                            <code>.accordion-flush</code> class. This is the first
                            item's accordion body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item shadow-sm border rounded10 my-3 col-md-5 px-0">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button rounded10 collapsed py-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Adjust Time
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-start">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{' '}
                            <code>.accordion-flush</code> class. This is the second
                            item's accordion body. Let's imagine this being filled
                            with some actual content.
                        </div>
                    </div>
                </div>
            </div>

            <div id="diet-routine-table-btn">
                <div className="d-flex btn-bottom justify-content-end diet-routine-bottom-btn">
                    <button id={hover ? ' ' : 'create-now-btn'} className="cmnBtn border-0 mr-3">Create Now</button>
                    <button id="cancelDietRoutineBtn" className="ms-4 cmnBtn cancel-button" onMouseOver={() => setHover(false)} onMouseOut={() => setHover(true)}>Cancel</button>
                </div>
            </div>

            {/* modal code starts here for adjust time button */}
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content adjust-time-modal">
                            <h3 className='text-center mt-5'>Choose Day</h3>
                            <div className='row pt-4'>
                                {
                                    diet_routine_day.map(singleday =>
                                        <div className="d-flex diet-routine-chooseday-checkbox col-6 d-flex justify-content-between align-items-center" key={singleday} style={{ fontFamily: 'Aller', fontSize: '28px' }}>
                                            <label htmlFor={singleday} className="diet-routine-checkbox-container" style={{ fontSize: '18px' }}>{singleday} 
                                                <input id={singleday} type="checkbox" name={singleday} />
                                                <span className="text-right diet-routine-checkmark"></span>
                                            </label>
                                            <div className="d-flex diet-routine-time-input-container justify-content-center me-2">
                                                <input type="time" className="diet-routine-select-time-input" value="09:30:00" />
                                            </div>
                                        </div>)
                                }
                            </div>
                            <div className='diet-routine-btn-container text-right mt-3'>
                                <button id="afterEditSaveDietRoutineBtn" data-bs-dismiss="modal" className="diet-routine-btn border-0 me-2">Save</button>
                                <button id="cancelEditDietRoutineBtn" data-bs-dismiss="modal" className="diet-routine-btn diet-routine-cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal code ends here for adjust time button */}
        </Wrapper>
    );
};

export default DietRoutineTable;

const Wrapper = styled('div')`

width: 85%;
margin: auto;

.diet-routine-section-table {
    overflow: auto;
    height: 400px;
}

.clear {
    clear: both;
}

.diet-routine-table {
    width: 200%;
    text-align: center;
}

.diet-routine-table-head-caption {
    float: left;
    width: 11.34%;
    background: #da1e37;
    padding: 15px 0;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid #00000075;
}

.diet-routine-table-head-caption:first-child {
    border-top-left-radius: 6px;
}

.friday {
    border-top-right-radius: 6px;
}

.diet-routine-table-head-caption:last-child{
    margin-right: 30px;
}

.diet-routine-table-head-caption:nth-child(2),
.diet-routine-table-body-text:nth-child(2) {
    width: 8%;
}

.diet-routine-section-table .addMore-btn {
    background: transparent;
    margin-top: 28px;
    margin-left: 15px;
}

.addMore-btn {
    color: #666666;
    margin: 10px 0 30px;
}

.addMore-btn img {
    width: 30px;
    margin-right: 7px;
    margin-top: -3px;
}

/* scroolbar customization */
.diet-routine-section-table::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.diet-routine-section-table::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

.diet-routine-section-table::-webkit-scrollbar-thumb {
    background: rgb(90, 90, 90);
    border-radius: 10px;
}

.diet-routine-section-table::-webkit-scrollbar-button:single-button {
    background-color: white;
    display: block;
    border-style: solid;
    height: 1.5vw;
    width: 1vw;
}

.diet-routine-section-table::-webkit-scrollbar-button:single-button:horizontal:decrement {
    border-width: 5px;
    border-color: transparent grey transparent transparent;
}

.diet-routine-section-table::-webkit-scrollbar-button:single-button:horizontal:increment {
    border-width: 5px;
    border-color: transparent transparent transparent grey;
}

.diet-routine-section-table::-webkit-scrollbar-button:single-button:vertical:decrement {
    border-width: 0vw .3vw 0.4vw .3vw;
    border-color: transparent transparent #555555 transparent;
}

.diet-routine-section-table::-webkit-scrollbar-button:single-button:vertical:increment {
    border-width: 0vw 0.3vw 0.4vw 0 0.3vw;
    border-color: #555555 transparent transparent transparent;
}

/* table body styles */
.diet-routine-table-row-caption {
    float: left;
    height: 105px;
    width: 11.34%;
    background: white;
    padding: 15px 0;
    text-align: center;
    color: gray;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: #D5D5D5;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.diet-routine-table-row-caption:last-child,
.diet-routine-table-body-text:last-child {
    margin-right: 30px;
}


.diet-routine-table-row-caption:nth-child(2),
.diet-routine-table-body-text:nth-child(2) {
    width: 8%;
}

.diet-routine-first-column{
    border-left: 1px solid #D5D5D5;
}

.adjust-time-modal{
    opacity: 100% !important;
    height: 450px !important;
    width: 700px !important;
    background-color: white;
    overflow: scroll;
    padding-left: 30px;
}

.adjust-time-btn{
    padding: 2px 25px;
    color: white;
    height: 40px;
    background-color: #da1e37;
    border: 0px;
    border-radius: 5px;
}

.diet-routine-heading-position{
    position: sticky;
    top: 0px;
}

.table-input input{
    border: 0px;
}

.diet-routine-btn-container{
    margin-right: 35px !important;
}

.diet-routine-btn {
    color: #fff;
    width: 150px;
    height: 45px;
    background: #da1e37;
    border-radius: 8px;
}

.diet-routine-cancel-btn {
    background: #fff;
    border: 1px solid #da1e37;
    color: #da1e37;
}

.diet-routine-cancel-btn:hover {
    background: #da1e37;
    color: #fff;
    border-color: #da1e37;
}

/* Diet routine accordion styles */
.diet-routine-accordion{
    width: 500px;
    max-width: 100%;
}

.diet-routine-accordion-button{
    border: 0px;
    border-top-left-radius: 8px !important;
    border-top: 1px solid #d6d4d4;
    border-bottom: 1px solid #d6d4d4;
    border-radius: 8px !important;
}

  /* Adjust time modal styles */

.diet-routine-checkbox-container {
    display: block;
    position: relative;
    margin-top: 10px;
    margin-bottom: 12px;
    padding-left: 42px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.diet-routine-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.diet-routine-checkbox-container input:checked~.diet-routine-checkmark {
    background-color: #fff;
    box-shadow: 0 0 3px #da1e37;
}

.diet-routine-checkbox-container input:checked~.diet-routine-checkmark:after {
    display: block;
}

.diet-routine-checkbox-container .diet-routine-checkmark:after {
    left: 2px;
    top: -4px;
    width: 23px;
    height: 26px;
    background-image: url(../../../../../../assets/images/svg/Path\ 4781.svg);
    background-repeat: no-repeat;
    background-position: center;
}

.diet-routine-checkbox-container {
    margin-right: 23px;
    margin-bottom: 12px;
    padding-left: 28px;
    font-size: 14px;
}

.diet-routine-chooseday-checkbox {
    margin-bottom: 5px
}

.diet-routine-checkmark {
    position: absolute;
    top: 4px;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: .5px solid #e22222;
    background-color: #fff;
}

.diet-routine-checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.diet-routine-time-input-container input[type="time"]::-webkit-calendar-picker-indicator {
    background-color: #00f7ff;
    width: 20px;
    height: 100%;
    filter: invert(1);
}

.diet-routine-select-time-input {
    width: 110px !important;
    border: 0;
    margin: 5px 20px;
    padding: 3px 5px;
    padding-right: 0;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid #E22222;
}

.rounded10 {
        border-radius: 10px !important;
    }

    .cmnBtn {
    color: #fff;
    width: 160px;
    height: 45px;
    background: #da1e37;
    border-radius: 5px;
}

.btn-bottom .cmnBtn:last-child {
    background: #fff;
    border: 1px solid #da1e37;
    color: #E22424;
}

.btn-bottom .cmnBtn:last-child:hover {
    background: #da1e37;
    color: #fff;
    border-color: #da1e37;
}

#create-now-btn{
    background-color: white;
    color: #da1e37;
    border: 1px solid #da1e37 !important;
}


@media screen and (max-width: 620px) {
    .diet_routine_table_desktop {
      display: none;
    }
  }
`;

const HeaderPart = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    margin-left: -16px;
`;

const BoxOfCalender = styled('div')`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid red;
    border-radius: 8px;
    padding-left: 4.5rem;
    padding-right: 1rem;
    height: 4rem;
    button {
        border: none;
        background-color: transparent;
    }
    h5 {
        text-align: center;
        width: 185px;
        padding: 0.3rem 1rem;
        margin-bottom: 0;
    }
`;

const DateIcon = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
    width: 4rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    left: 0% !important;
    top: 0%;
    pointer-events: none;
    z-index: 1;
    background: #da1e37;
    background-size: 60%;

    span {
        width: 2rem !important;
        height: 28px !important;
    }
`;
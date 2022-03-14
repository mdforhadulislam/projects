import React from 'react';
import styled from 'styled-components';

const diet_routine_day = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday'];

const dietRoutineTable = [
    {
        table_id: 101,
        day: 'Saturday',
        time: '11:00 AM'
    },
    {
        table_id: 102,
        day: 'Sunday',
        time: '11:00 AM'
    },
    {
        table_id: 103,
        day: 'Monday',
        time: '11:00 AM'
    },
    {
        table_id: 104,
        day: 'Tuesday',
        time: '11:00 AM'
    },
    {
        table_id: 105,
        day: 'Wednesday',
        time: '11:00 AM'
    },
    {
        table_id: 106,
        day: 'Thirsday',
        time: '11:00 AM'
    }
];

const MobileViewTable = () => {
    return (
        <Wrapper >
        <div className='diet_routine_mobile_section'>
            <div className='my-5'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item border-0 shadow accordion-routine-table" style={{ borderRadius: '8px', marginBottom: '20px' }}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={{ padding: '40px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(226, 36, 36)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderEndEndRadius: '10px', borderEndStartRadius: '10px', marginTop: '-5px' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Breakfast
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show p-0" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ fontFamily: 'Aller', paddingX: '0px', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
                                <div id="dietTimeAdjust" className="d-flex justify-content-center align-items-center">
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </p>
                                </div>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-sm-2'>
                                    {
                                        dietRoutineTable.map(singleDay => <div className="card p-0 rounded-0 adjust-time-card">
                                            <div className="card-body">
                                                <p className="text-left" style={{ fontSize: '24px' }}>{singleDay.day}</p>
                                                <div className='row d-flex'>
                                                    <h4 className='text-left col-7'>{singleDay.time}</h4>
                                                    <h4 className='col-5'><i className="far fa-check-circle"></i></h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-sm-1'>
                                    <div className="card py-2 friday rounded-0 border-bottom-0" style={{ paddingY: '25px' }}>
                                        <p className="" style={{ fontSize: '24px' }}>Friday</p>
                                        <div className='row d-flex'>
                                            <h4 className='text-right col-6'>11:00 AM</h4>
                                            <h4 className='text-left col-6 ps-5'><i className="far fa-check-circle"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item border-0 shadow accordion-routine-table" style={{ borderRadius: '8px', marginBottom: '20px' }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={{ padding: '40px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(226, 36, 36)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderEndEndRadius: '10px', borderEndStartRadius: '10px', marginTop: '-5px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Picked Lunch (Mid- Morning)
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show p-0" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ fontFamily: 'Aller', paddingX: '0px', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
                                <div id="dietTimeAdjust" className="d-flex justify-content-center align-items-center">
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </p>
                                </div>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-sm-2'>
                                    {
                                        dietRoutineTable.map(singleDay => <div className="card p-0 rounded-0 adjust-time-card">
                                            <div className="card-body">
                                                <p className="text-left" style={{ fontSize: '24px' }}>{singleDay.day}</p>
                                                <div className='row d-flex'>
                                                    <h4 className='text-left col-7'>{singleDay.time}</h4>
                                                    <h4 className='col-5'><i className="far fa-check-circle"></i></h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-sm-1'>
                                    <div className="card py-2 friday rounded-0 border-bottom-0" style={{ paddingY: '25px' }}>
                                        <p className="" style={{ fontSize: '24px' }}>Friday</p>
                                        <div className='row d-flex'>
                                            <h4 className='text-right col-6'>11:00 AM</h4>
                                            <h4 className='text-left col-6 ps-5'><i className="far fa-check-circle"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item border-0 shadow accordion-routine-table" style={{ borderRadius: '8px', marginBottom: '20px' }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={{ padding: '40px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(226, 36, 36)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderEndEndRadius: '10px', borderEndStartRadius: '10px', marginTop: '-5px' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Lunch
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show p-0" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ fontFamily: 'Aller', paddingX: '0px', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
                                <div id="dietTimeAdjust" className="d-flex justify-content-center align-items-center">
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </p>
                                </div>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-sm-2'>
                                    {
                                        dietRoutineTable.map(singleDay => <div className="card p-0 rounded-0 adjust-time-card">
                                            <div className="card-body">
                                                <p className="text-left" style={{ fontSize: '24px' }}>{singleDay.day}</p>
                                                <div className='row d-flex'>
                                                    <h4 className='text-left col-7'>{singleDay.time}</h4>
                                                    <h4 className='col-5'><i className="far fa-check-circle"></i></h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-sm-1'>
                                    <div className="card py-2 friday rounded-0 border-bottom-0" style={{ paddingY: '25px' }}>
                                        <p className="" style={{ fontSize: '24px' }}>Friday</p>
                                        <div className='row d-flex'>
                                            <h4 className='text-right col-6'>11:00 AM</h4>
                                            <h4 className='text-left col-6 ps-5'><i className="far fa-check-circle"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item border-0 shadow accordion-routine-table" style={{ borderRadius: '8px', marginBottom: '20px' }}>
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" style={{ padding: '40px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(226, 36, 36)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderEndEndRadius: '10px', borderEndStartRadius: '10px', marginTop: '-5px' }} aria-controls="collapseFour">
                                Evening Snack/ Drink
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse show p-0" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ fontFamily: 'Aller', paddingX: '0px', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
                                <div id="dietTimeAdjust" className="d-flex justify-content-center align-items-center">
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </p>
                                </div>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-sm-2'>
                                    {
                                        dietRoutineTable.map(singleDay => <div className="card p-0 rounded-0 adjust-time-card">
                                            <div className="card-body">
                                                <p className="text-left" style={{ fontSize: '24px' }}>{singleDay.day}</p>
                                                <div className='row d-flex'>
                                                    <h4 className='text-left col-7'>{singleDay.time}</h4>
                                                    <h4 className='col-5'><i className="far fa-check-circle"></i></h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-sm-1'>
                                    <div className="card py-2 friday rounded-0 border-bottom-0" style={{ paddingY: '25px' }}>
                                        <p className="" style={{ fontSize: '24px' }}>Friday</p>
                                        <div className='row d-flex'>
                                            <h4 className='text-right col-6'>11:00 AM</h4>
                                            <h4 className='text-left col-6 ps-5'><i className="far fa-check-circle"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border-0 shadow accordion-routine-table" style={{ borderRadius: '8px', marginBottom: '20px' }}>
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" style={{ padding: '40px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(226, 36, 36)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderEndEndRadius: '10px', borderEndStartRadius: '10px', marginTop: '-5px' }} aria-controls="collapseFive">
                                Dinner
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ fontFamily: 'Aller', paddingX: '0px', borderEndStartRadius: '10px', borderEndEndRadius: '10px' }}>
                                <div id="dietTimeAdjust" className="d-flex justify-content-center align-items-center">
                                    <p data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Adjust Time
                                    </p>
                                </div>
                                <div className='row row-cols-1 row-cols-md-2 row-cols-sm-2'>
                                    {
                                        dietRoutineTable.map(singleDay => <div className="card p-0 rounded-0 adjust-time-card">
                                            <div className="card-body">
                                                <p className="text-left" style={{ fontSize: '24px' }}>{singleDay.day}</p>
                                                <div className='row d-flex'>
                                                    <h4 className='text-left col-7'>{singleDay.time}</h4>
                                                    <h4 className='col-5'><i className="far fa-check-circle"></i></h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className='row row-cols-1 row-cols-md-1 row-cols-sm-1'>
                                    <div className="card py-2 friday rounded-0 border-bottom-0" style={{ paddingY: '25px' }}>
                                        <p className="" style={{ fontSize: '24px' }}>Friday</p>
                                        <div className='row d-flex'>
                                            <h4 className='text-right col-6'>11:00 AM</h4>
                                            <h4 className='text-left col-6 ps-5'><i className="far fa-check-circle"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button id="addDietRoutineRow" className="addMore-btn border-0 float-left">
                <img src="../assets/images/svg/add more plus.svg" alt="add more plus" />
                Add More
            </button>

            {/* modal code starts here for adjust time button */}
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content adjust-time-modal">
                            <h3 className='text-center mt-5 mb-3'>Choose Day</h3>
                            <div className='row px-5 pt-5'>
                                {
                                    diet_routine_day.map(singleday =>
                                        <div className="d-flex diet-routine-chooseday-checkbox col-6 d-flex justify-content-between align-items-center mb-0" key={singleday} style={{ fontFamily: 'Aller', fontSize: '28px' }}>
                                            <label htmlFor={singleday} className="diet-routine-checkbox-container text-capitalize" style={{ fontSize: '18px' }}>{singleday}
                                                <input id={singleday} type="checkbox" name={singleday} />
                                                <span className="text-right diet-routine-checkmark"></span>
                                            </label>
                                            <div className="d-flex diet-routine-time-input-container justify-content-center">
                                                <input type="time" className="diet-routine-select-time-input" value="09:30:00" />
                                            </div>
                                        </div>)
                                }
                            </div>
                            <div className='text-right me-5'>
                                <button id="afterEditSaveDietRoutineBtn" data-bs-dismiss="modal" className="cmnBtn border-0 mr-3 ml-5">Save</button>
                                <button id="cancelEditDietRoutineBtn" data-bs-dismiss="modal" className="cmnBtn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal code ends here for adjust time button */}
        </div>
        </Wrapper >
    );
};

export default MobileViewTable;

const Wrapper = styled('div')`
width: 85%;
margin: auto;

.diet_routine_mobile_section{
  display: none;
}

.adjust-time-card:nth-child(odd), .friday{
  border-left: none !important;
}

.adjust-time-card:nth-child(even), .friday{
  border-right: none !important;
}

.adjust-time-modal{
  height: 600px;
  width: 800px;
  background-color: white;
  opacity: 80%;
  overflow: scroll;
}

.adjust-time-modal-body{
  padding: 25px;
  margin: 25px;
  background-color: white;
  width: 500px;
  border-radius: 10px;
  height: 250px;
}

.btn-bootom .cmnBtn {
  color: #fff;
  width: 160px;
  height: 45px;
  background: #E22424;
  border-radius: 8px;
}

.btn-bootom .cmnBtn:last-child {
  background: #fff;
  border: 1px solid #E22424;
  color: #E22424;
}

.btn-bootom .cmnBtn:last-child:hover {
  background: #E22424;
  color: #fff;
  border-color: #E22424;
}

.diet-routine-bottom-btn {
  margin-top: 60px;
}

.cmnBtn {
  color: #fff;
  width: 160px;
  height: 45px;
  background: #E22424;
  border-radius: 5px;
}

.diet-routine-table-body-text .cmnBtn {
  margin: 7px 0;
}

#addDietRoutineRow{
  background-color: white !important;
}

/* Media query */
@media screen and (max-width: 620px) {
    .diet_routine_mobile_section {
      display: block;
    }
  }
`
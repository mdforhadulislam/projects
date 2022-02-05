import React from 'react';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import calender from '/Assets/icon/calendar-line.svg';
import search from '/Assets/icon/search.svg';
import table from '/Assets/icon/search.svg';
import maliha from '/Assets/icon/search.svg';
import Image from 'next/image';
import Link from 'next/link';

const viewDetails = () => {
    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            <div style={{ fontSize: '30px', cursor: 'pointer' }}>
                <i class="fas fa-long-arrow-alt-left"></i>
            </div>
            {/* Search box start */}
            {/* Search box start*/}
            <div className="search">
                <div className="search-input">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search by id or name..."
                    />
                    <Image src={search} alt="" />
                </div>
            </div>
            {/* Search box end */}
            {/* Search box end */}

            {/* Attendence Calculate start */}
            {/* Attendence Calculate start */}
            <h2 className="pt-4 pb-2">Students Details</h2>
            <div className="attendence-calculate py-3">
                <h5>Attendence Calculate</h5>
                <div className="date ms-3">
                    <div className="select-date">
                        <input type="date" className="selectDiet-date" />
                    </div>
                    <div className="attendence-calendar">
                        <Image src={calender} alt="calendar-line" />
                    </div>
                </div>
                <h5 className="mx-3">To</h5>
                <div className="date">
                    <div className="select-date">
                        <input type="date" className="selectDiet-date" />
                    </div>
                    <div className="attendence-calendar">
                        <Image src={calender} alt="calendar-line" />
                    </div>
                </div>
            </div>
            {/* Attendence calculate end */}
            {/* Attendence calculate end */}

            {/* total absence fine start */}
            {/* total absence fine start */}
            <div className="total-fine mt-3">
                <div className="row">
                    <div className="col-md-5 col-6">
                        <div className="student-name-and-id">
                            <Image style={{ width: '40px' }} src={maliha} alt="" />
                            <h5 className="mt-2">Maliha mouly</h5>
                            <small>Id: DP49w-60</small>
                        </div>
                    </div>
                    <div className="col-md-7 col-6">
                        <div className="student-absence-fee active">
                            <img src={table} alt="" />
                            <h5 className="my-2">Total Absence Fine</h5>
                            <h4 className="m-0 mt-md-2">100 &#2547; </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calender year start */}
            {/* Calender year start */}
            <div className="calender-year">
                <div className="year">
                    <div className="caret-left-right">
                        <i class="fas fa-caret-left"></i>
                    </div>
                    <h2 className="mx-3">1999</h2>
                    <div className="caret-left-right">
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
            </div>

            {/* Attendence table for medium devices */}
            {/* Attendence table for medium devices */}
            {/* Attendence table for medium devices */}
            {/* Attendence table for medium devices */}

            <div className="attendence-tables-md d-lg-block d-none">
                {/* details month */}
                {/* details month */}
                {/* details month */}
                {/* details month */}
                <div className="monthly-details">
                    <div className="month-and-fine">
                        <h5>July</h5>
                        <h5>
                            Fine
                            <small style={{ fontWeight: '200', fontSize: '14px' }} className="ps-4">
                                1200 &#2547;
                            </small>
                        </h5>
                    </div>

                    <div className="attendence-in-table">
                        <table className="att-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                    <th>
                                        Sat, 1/06 <small>12:45 pm</small>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Attendence</td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Subject Name</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                    <td>Bangla</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* details month */}
                {/* details month */}
                {/* details month */}
                <div className="monthly-details mt-5">
                    <div className="month-and-fine">
                        <h5>July</h5>
                        <h5>
                            Fine
                            <small style={{ fontWeight: '200', fontSize: '14px' }} className="ps-4">
                                1200 &#2547;
                            </small>
                        </h5>
                    </div>

                    <div className="attendence-in-table">
                        <table className="att-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bangla</td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* attendence in table */}
                {/* attendence in table */}
                {/* attendence in table */}
                {/* attendence in table */}

                <div className="monthly-details mt-5">
                    <div className="month-and-fine">
                        <h5>July</h5>
                        <h5>
                            Fine
                            <small style={{ fontWeight: '200', fontSize: '14px' }} className="ps-4">
                                1200 &#2547;
                            </small>
                        </h5>
                    </div>

                    <div className="attendence-in-table">
                        <table className="att-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                    <th>Sat, 1/06</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bangla</td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                    <td>
                                        <span>P</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Attendence table for small devices */}
            {/* Attendence table for small devices */}
            {/* Attendence table for small devices */}
            {/* Attendence table for small devices */}
            <div className="attendence-tables-sm d-block d-lg-none">
                <div className="attendence-sm-table-accordion">
                    <div class="accordion" id="accordionExample">
                        <p className="m-0 text-end">Point: 00 &#2547;</p>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    January
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="attendence-sm-tables">
                                        <div className="sm-table-container">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* attendence tables in month */}
                        {/* attendence tables in month */}
                        {/* attendence tables in month */}
                        <p className="m-0 text-end">Point: 00 &#2547;</p>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    January
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="attendence-sm-tables">
                                        <div className="sm-table-container">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* attendence table in month */}
                        {/* attendence table in month */}
                        {/* attendence table in month */}

                        <p className="m-0 text-end">Point: 00 &#2547;</p>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    January
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="attendence-sm-tables">
                                        <div className="sm-table-container">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* attendence table in month */}
                        {/* attendence table in month */}
                        {/* attendence table in month */}

                        <p className="m-0 text-end">Point: 00 &#2547;</p>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsFour"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    January
                                </button>
                            </h2>
                            <div
                                id="collapsFour"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="attendence-sm-tables">
                                        <div className="sm-table-container">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm-table-container mt-3">
                                            <div className="sm-table">
                                                <div className="sm-table-head">
                                                    <div className="row">
                                                        <div className="col-5">Day</div>
                                                        <div className="col-7">Subject Name</div>
                                                    </div>
                                                </div>
                                                <div className="sm-table-body">
                                                    <div className="row sm-row table-border-bottom">
                                                        <div className="col-5 table-border-right">
                                                            Sat, 1/01
                                                            <span className="time">12:45PM</span>
                                                        </div>
                                                        <div className="col-7">Banlga</div>
                                                    </div>
                                                    <div className="row sm-row">
                                                        <div className="col-5">Attendence</div>
                                                        <div className="col-7">
                                                            <span className="present">P</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default viewDetails;

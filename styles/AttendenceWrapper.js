import styled from 'styled-components';

export const Wrapper = styled('div')`
    /*------------------------
--------------------------
 attendenceStystem start here 
 ----------------------------
 -----------------------------*/

    .attendence-dates {
        display: flex;
        justify-content: flex-start;
    }
    .attendence-ending-date {
        margin-left: 40px;
    }
    .frequently-question {
        width: 38%;
    }
    .date {
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 4px;
    }
    .per-day {
        margin-bottom: 27px;
        margin-top: 19px;
    }
    .select-date {
        width: calc(100% - 40px);
        padding: 5px 0;
    }
    /* p{
        margin-right: 2rem;
    } */
    .select-date input {
        border: none;
        padding: 5px 10px;
        color: rgb(121, 121, 121);
    }
    .attendence-calendar {
        width: 40px;
        background: rgb(220, 14, 14);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 7px 0;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .attendence-calendar img {
        width: 50%;
    }

    .attendence-days {
        display: flex;
        width: 35%;
        height: 40px;
        padding-left: 40px;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .attendence-per-day-input {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 30px;
        border: 1px solid rgb(220, 14, 14);
        padding-left: 20px;
        margin-right: -1px;
        border-radius: 7px;
    }

    .attendence-per-day-input input {
        width: 80%;
        max-height: 100%;
        border: none;
        background-color: transparent;
        text-align: center;
    }

    .buttons button {
        display: flex;
        width: 5px;
        align-items: center;
        height: 10px;
        justify-content: center;
        font-size: 10px;
        border-radius: 0;
        padding: 7px 19px;
        position: relative;
    }

    .upDown-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .up-btn {
        border-radius: 0px 6px 0px 0px;
        height: 15px;
        background: #e22424;
        border: none;
        margin-bottom: 1px;
    }
    .down-btn {
        border-radius: 0px 0px 6px 0px;
        height: 14px;
        background: #e22424;
        border: none;
    }

    .accordion-button {
        z-index: 3;
        border-color: #86b7fe;
        outline: 0;
        border: 1px solid #bfc3c9;
        /* border-bottom: 0; */
        margin-top: 5px;
    }

    .accordion-item {
        box-shadow: none;
    }
    .accordion-button:not(.collapsed) {
        box-shadow: 0 0 9px 0 #d1d1d1;
        background-color: white;
        color: black;
        border: none;
    }
    .accordion-button .collapsed {
        border: none;
    }
    .accordion-flush .accordion-item .accordion-button {
        border-radius: 3px;
        outline: none;
    }
    .accordion-button:focus {
        outline: unset !important;
    }

    .accordion-body {
        padding: 1rem 1.25rem;
        box-shadow: 0 0 9px 0 #d1d1d1;
        border-radius: 0px 0px 7px 7px;
    }
    .buttons button:first-child {
        border-top-right-radius: 7px;
    }
    .buttons button:nth-child(2) {
        margin-top: 1px;
        border-bottom-right-radius: 7px;
    }

    .hello {
        color: green;
    }

    .disabled-bg {
        background-color: rgb(255 102 102);
    }
    .disabled-border {
        border-color: rgb(255 102 102);
    }
    .disabled-text {
        color: rgb(136, 136, 136);
    }
    .bottom-btns {
        display: flex;
        padding-left: 270px;
        margin-top: 100px;
    }
    .btn-cancel {
        color: rgb(220, 14, 14);
        background-color: #fff;
        border: 1px solid rgb(220, 14, 14);
    }
    .check-boxes {
        display: flex;
    }

    .checkbox-container {
        display: block;
        position: relative;
        padding-left: 42px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 4px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 5px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }

    .checkmark-down {
        top: -4px;
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }
    .checkbox-container input:checked ~ .checkmark {
        background-color: #fff;
        box-shadow: 0 0 3px red;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox-container .checkmark:after {
        left: 2px;
        top: -4px;
        width: 23px;
        height: 26px;
        background-image: url(../images/svg/Path\ 4781.svg);
        background-repeat: no-repeat;
        background-position: center;
    }

    .cmnBtn {
        color: #fff;
        width: 128px;
        height: 40px;
        /* background: #E22424; */
        border-radius: 11px;
    }
    .bottom-btns {
        display: flex;
        padding-left: 200px;
        margin-top: 100px;
    }

    .btn-cancel {
        color: black;
        background-color: #fff;
        border: 1px solid rgb(220, 14, 14);
    }
    .btn-cancel:hover {
        background-color: #e22424;
        color: white;
    }

    .cmnBtn {
        color: #fff;
        width: 128px;
        height: 40px;
        background: #e22424;
        border-radius: 11px;
    }
    .buttons button {
        padding: 6px 17px;
        background: #e22424;
    }

    .check-boxes {
        display: flex;
    }

    .wrapper-width {
        width: 80%;
        margin: auto;
    }

    .select-time-input {
        /* color: white; */
        width: 110px !important;
        border: 0;
        margin: 5px 20px;
        padding: 3px 5px;
        padding-right: 0;
        border-radius: 5px;
        font-size: 14px;
        border: 1px solid #e22222;
    }

    .selection-day-col span {
        margin-top: 5px;
    }

    .time-input-container input[type='time']::-webkit-calendar-picker-indicator {
        background-color: #00f7ff;
        width: 20px;
        height: 100%;
        filter: invert(1);
    }

    .input-class-subject {
        height: 62px;
        padding-left: 20px;
        border: 0;
        border-bottom: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;
        text-align: center;
    }

    .time-input-container {
        padding: 12px 0;
        border-bottom: 1px solid #d3d3d3;
        margin-top: -1;
        border-right: 1px solid #d3d3d3;
    }

    .time-input-container span {
        margin-top: 7px;
    }

    .clock-bg {
        background-color: red;
        color: white;
        padding: 7px 12px;
        position: absolute;
        right: 45px;
        border-radius: 4px;
    }
    .form-select {
        border-right: 0;
        border-radius: 5px;
        border: 1px solid #bfbbbb;
        cursor: pointer;
    }
    .form-select:focus {
        box-shadow: none;
    }
    .form-control {
        background-color: #f9f4ec;
        padding: -0.625rem 0.75rem !important;
        outline: none;
        border: none;
    }
    .form-control:focus {
        box-shadow: none;
        border: none;
        background-color: #f9f4ec;
        /* outline: none; */
    }

    /* -----------------------------------------------------------
------------responsive design for mobile devices---------
--------------------------------------------------------------- */

    @media only screen and (max-width: 576px) {
        .check-boxes {
            display: block;
        }
        .attendence-dates {
            display: block;
        }
        .frequently-question {
            width: 100%;
        }
        .attendence-ending-date {
            margin-left: 0px;
            margin-top: 20px;
        }
        .attendence-days {
            width: auto;
            padding-left: 0;
            margin-bottom: 5px;
        }
        .bottom-btns {
            margin-top: 50px;
            padding-left: 0;
            justify-content: flex-end;
        }
        .btn-next,
        .btn-cancel {
            width: 110px;
            height: 40px;
            font-size: 16px;
        }
    }

    /* attendence weekly (2nd page ) */
    .weekly-attendence label {
        font-size: 14px;
    }
    .subject-name-input {
        width: 228px;
    }
    .border-card {
        box-shadow: 0px 0px 7px 0px #bfbfbf;
        border-radius: 7px;
    }

    /* -----------------------------------------------------------
------------ responsive design for  1024px  ---------
--------------------------------------------------------------- */
    @media only screen and (max-width: 1024px) {
        .attendence-days {
            width: 80%;
            padding-left: 0;
            margin-bottom: 5px;
        }
    }

    /* -----------------------------------------------------------
  ------------ responsive design for medium devices  ---------
  --------------------------------------------------------------- */
    @media only screen and (max-width: 992px) {
        .subject-name-input {
            width: 200px;
        }
        .frequently-question {
            width: 80%;
        }
    }
    @media only screen and (max-width: 768px) {
        .frequently-question {
            width: 100%;
        }
    }
    @media only screen and (max-width: 582px) {
        .frequently-question {
            width: 100%;
        }
    }

    /* -----------------------------------------------------------
  ------------ responsive design for small devices ---------
  --------------------------------------------------------------- */

    @media only screen and (max-width: 576px) {
        /* attendence-system */
        .check-boxes {
            display: block;
        }
        .attendence-dates {
            display: block;
        }
        .attendence-ending-date {
            margin-left: 0px;
            margin-top: 20px;
        }
        .attendence-days {
            width: auto;
            padding-left: 0;
            margin-bottom: 5px;
        }
        .bottom-btns {
            margin-top: 50px;
            padding-left: 0;
            justify-content: flex-end;
        }
        .btn-next,
        .btn-cancel {
            width: 110px;
            height: 40px;
            font-size: 16px;
        }

        /* attendence weekly */

        .subject-name-input {
            width: 100%;
        }
    }
    /* -----------------------------------------------------------
  ------------  responsive design for extra-small devices  ---------
  --------------------------------------------------------------- */
    @media only screen and (max-width: 480px) {
        .weekly-attendence label {
            font-size: 12px;
        }
        .bottom-buttons button {
            width: auto;
            font-size: 12px;
        }
    }

    /*----------------
------------------
create Attendence
------------------
------------------
*/
    .done-btn {
        width: 150px;
    }
    .date {
        width: 200px;
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 4px;
    }
    .select-date {
        width: calc(100% - 40px);
        padding: 5px 0;
    }
    .select-date input {
        border: none;
        padding: 5px 10px;
        color: rgb(121, 121, 121);
        outline: none;
    }
    input {
        outline: none;
    }
    .attendence-calendar {
        width: 40px;
        background: rgb(220, 14, 14);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 7px 7px;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .attendence-calendar img {
        width: 50%;
    }

    .attendence-table-head {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr;
        background-color: rgb(220, 14, 14);
        color: white;
        padding: 10px 20px;
        border-radius: 7px;
        text-align: center;
        align-items: center;
    }

    .attendence-incomplete {
        border: 1px solid rgb(219, 219, 219);
        font-size: 10px;
        padding: 0 3px;
        border-radius: 4px;
        margin-right: 5px;
    }
    .name {
        /* padding: 0px 37px;
        margin-right: 13px; */
        display: flex;
        align-items: center;
    }
    .link-style {
    text-decoration: underline;
    font-size: 15px;
}
.link-style:hover{
    color: black;
}
    .math {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .attendence-table-body {
        width: 100%;
    }
    .alignment-row {
        display: flex;
        justify-content: space-between;
    }
    .table-body-item1 {
        width: 188px;
    }
    .table-body-item2 {
        width: 623px;
    }
    .table-body-item3 {
        width: 194px;
    }

    .attendence-data {
        max-width: 100%;
        box-shadow: 0px 0px 4px 0px #bfbfbf;
        padding: 10px;
        border-radius: 6px;
        margin-left: 1px;
    }
    .pal {
        font-weight: lighter;
        word-spacing: 8px;
    }
    .bottom-right-btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
    }
    /* .called-btn {
  width: auto;
} */
    .btn-cancel {
        color: rgb(220, 14, 14);
        background-color: #fff;
        border: 1px solid rgb(220, 14, 14);
        margin-left: 12px;
    }

    /* ------------------------
attendence done------------
----------------------------
--------------------------- */
.check-mark {
            height: 18px;
            width: 18px;
        }
    .present-btns {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-right: 1px solid rgb(211, 211, 211);
    }
    .present-button {
        background-color: #18cd18;
        height: 26px;
        width: 26px;
        border-radius: 50%;
        color: white;
        margin-right: 14px;
        box-shadow: 0 0 4px 0 gray;
    }

    .date {
        width: 200px;
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 4px;
    }
    .select-date {
        width: calc(100% - 40px);
        padding: 5px 0;
    }
    .select-date input {
        border: none;
        padding: 5px 10px;
        color: rgb(121, 121, 121);
    }
    .attendence-calendar {
        width: 40px;
        background: rgb(220, 14, 14);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 7px 0;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .attendence-calendar img {
        width: 50%;
    }

    .attendence-table-head {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr;
        background-color: rgb(220, 14, 14);
        color: white;
        padding: 10px 20px;
        border-radius: 7px;
        text-align: center;
    }

    .attendance-table-head-new {
    background-color: rgb(220,14,14);
    color: white;
    border-radius: 9px;
    padding: 10px 0;
}

    .attendence-incomplete {
        border: 1px solid rgb(219, 219, 219);
        font-size: 10px;
        padding: 0 3px;
        border-radius: 4px;
        margin-right: 5px;
    }
    /* .name {
        border-right: 1px solid #fff;
    } */
    .attendence-table-body {
        /* width: 100%; */
        /* margin-left: 42px; */
    }

    .attendence-data {
        max-width: 100%;
        box-shadow: 0px 0px 4px 0px #bfbfbf;
        padding: 10px;
        border-radius: 6px;
        margin-left: 1px;
    }
    .pal {
        font-weight: lighter;
        word-spacing: 8px;
    }
    .bottom-right-btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
    }
    .called-btn {
        width: auto;
    }
    .done-btn {
        width: 126px;
    }
    .btn-cancel {
        color: rgb(220, 14, 14);
        background-color: #fff;
        border: 1px solid rgb(220, 14, 14);
    }

    @media only screen and (max-width: 1260px) {
        .attendence-per-day-input {
            width: 98px;
            height: 30px;
            padding-left: 6px;
        }
        .checkbox-container {
            padding-left: 38px;
            font-size: 17px;
        }
    }
    @media only screen and (max-width: 1100px) {
        .checkbox-container {
            padding-left: 27px;
            font-size: 15px;
        }
    }
    @media only screen and (max-width: 1040px) {
        .checkbox-container {
            padding-left: 22px;
            font-size: 15px;
        }
    }

    @media only screen and (max-width: 992px) {
        .present-btns {
            justify-content: flex-start;
            overflow: hidden;
            margin-right: 0;
        }
        .present-button {
            background-color: #18cd18;
            height: 13px;
            width: 5px;
            border-radius: 50%;
            color: white;
            margin-right: 14px;
            box-shadow: 0 0 4px 0 grey;
            padding: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    @media only screen and (max-width: 768px) {
        .present-btns {
            border-right: 0;
        }
        .attendence-per-day-input {
            width: 95px;
            padding-left: 0;
        }
        .check-box-width {
            width: 6px;
        }
        .check-mark {
            height: 18px;
            width: 18px;
        }
        .checkbox-container-adjust-time p {
            font-size: 9px;
        }
        .input {
            font-size: 13px;
        }
    }
    @media only screen and (max-width: 462px) {
        .attendence-per-day-input {
            width: 85px;
            padding-left: 0;
        }
        .check-mark {
            height: 15px;
            width: 15px;
        }
    }

    /*------------------------
--------------------------
---------------------------
viewDetails
---------------------------
---------------------------
--------------------------
*/

    .search-input {
        width: 600px;
        border-radius: 7px;
        position: relative;
    }

    .search-input input {
        padding: 10px 20px;

        border: 1px solid rgb(211, 211, 211);
        outline: none;
        width: 100%;
    }
    .search-input input:focus {
        border-color: rgb(220 14 14);
    }
    .search-input img {
        width: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .caret-left-right {
        font-size: 40px;
        color: rgb(197, 197, 197);
        transition: 0.3s;
    }
    .caret-left-right:hover {
        color: rgb(220 14 14);
        cursor: pointer;
    }
    .attendence-calculate {
        display: flex;
        align-items: center;
    }

    /* total fine */
    .total-fine {
        background: rgb(255, 226, 226);
        border-radius: 15px;
    }
    .student-name-and-id {
        width: 250px;
        height: 100%;
        padding: 20px;
        text-align: center;
    }
    .student-name-and-id.active,
    .student-absence-fee.active {
        border-bottom: 4px solid red;
    }
    .student-name-and-id img {
        width: 100px;
        border-radius: 8px;
    }

    .student-absence-fee {
        width: 250px;
        height: 100%;
        padding: 20px;
        text-align: center;
    }
    .student-absence-fee img {
        width: 50px;
        border-radius: 8px;
    }

    /* Calender year styles start */
    .year {
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* details in month */
    .month-and-fine {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Attendence Table */
    .attendence-in-table {
        overflow-x: scroll;
        border-radius: 10px;
        box-shadow: 0 2px 5px 0 #b3b3b3;
    }
    .att-table {
        text-align: center;
    }
    .att-table thead {
        background-color: rgb(246, 43, 43);
        color: #fff;
    }
    .att-table tr {
        /* overflow-x: scroll; */
        display: flex;
    }
    .att-table tbody tr {
        border-bottom: 2px solid #f4f2f2;
    }
    .att-table tbody tr:last-child {
        border-bottom: none;
    }
    .att-table th,
    td {
        width: 150px;
        padding: 15px 7px;
        margin-left: 20px;
    }

    .att-table td {
        border-right: 2px solid #f4f2f2;
    }
    table.att-table tbody td span {
        padding: 6px 11px;
        background-color: rgb(36, 181, 26);
        color: white;
        border-radius: 100%;
    }
    .att-table th small {
        padding-top: 10px;
        font-size: 8px;
    }

    /* accordian not collapsed styles */
    .attendence-tables-sm
        .attendence-sm-table-accordion
        .accordion
        .accordion-item
        .accordion-header
        .accordion-button:not(.collapsed) {
        padding: 25px 20px;
        background-color: rgb(226, 36, 36);
        color: white;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        outline: none;
        border: none;
    }

    .attendence-tables-sm
        .attendence-sm-table-accordion
        .accordion
        .accordion-item
        .accordion-header
        .accordion-button:not(.collapsed)::after {
        background-image: url('../../../../assets//images/icons/arrow\ down.svg');
    }

    /* accordian collapsed styles */
    .attendence-tables-sm
        .attendence-sm-table-accordion
        .accordion
        .accordion-item
        .accordion-header
        .accordion-button.collapsed {
        padding: 25px 20px;
        background-color: rgb(226, 36, 36);
        color: white;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        outline: none;
        border: none;
    }
    .attendence-tables-sm
        .attendence-sm-table-accordion
        .accordion
        .accordion-item
        .accordion-header
        .accordion-button.collapsed::after {
        background-image: url('../../../../assets//images/icons/arrow\ down.svg');
    }

    /* attendence small table styles */

    .accordion-item {
        border: none;
        margin-bottom: 10px;
        border-radius: 8px;
    }
    .accordion-button {
        box-shadow: none;
    }
    .attendence-sm-tables .sm-table {
        box-shadow: 0 0 9px 0px #676767;
        border-radius: 8px;
        overflow-x: hidden;
    }
    .sm-table-head {
        background: rgb(226, 36, 36);
        padding: 10px 0;
        text-align: center;
        color: #fff;
        font-weight: bold;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .sm-table-body .sm-row {
        text-align: center;
    }
    .sm-table-body .sm-row.table-border-bottom {
        border-bottom: 2px solid #cbc8c8;
    }
    .sm-table-body .sm-row .table-border-right {
        border-right: 2px solid #cbc8c8;
    }
    .sm-table-body .sm-row div {
        padding: 10px 0;
    }
    span.time {
        font-size: 12px;
        position: relative;
        top: 10px;
        left: 10px;
    }
    span.present {
        background: rgb(36, 181, 26);
        width: 30px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 50%;
    }
    /* -------------called attendence------------ */

    /* responsive design for small devices */
    @media only screen and (max-width: 768px) {
        .search-input {
            width: 100%;
        }
        .student-name-and-id {
            width: auto;
        }
        .student-absence-fee.active {
            border: none;
        }
        .total-fine h5 {
            font-size: 14px;
        }
        .total-fine h4,
        .total-fine small {
            font-size: 12px;
        }
        .total-fine img {
            width: 30px;
        }
    }

    @media only screen and (max-width: 768px) {
        .search-input {
            width: 100%;
        }
        .student-name-and-id {
            width: auto;
            padding: 8px 0;
        }
        .student-name-and-id img {
            max-width: 20px;
        }
        .student-absence-fee.active {
            border: none;
        }
        .total-fine h5 {
            font-size: 10px;
            margin: 0;
            padding: 0;
        }
        .total-fine h4,
        .total-fine small {
            font-size: 7px;
            margin: 0;
            padding: 0;
        }
        .total-fine img {
            width: 20px;
        }

        .student-absence-fee {
            width: auto;
            padding: 8px 0;
        }
    }

    /* call attendence */

    .date {
        width: 200px;
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 4px;
    }
    .select-date {
        width: calc(100% - 40px);
        padding: 5px 0;
    }
    .select-date input {
        border: none;
        padding: 5px 10px;
        color: rgb(121, 121, 121);
    }
    .attendence-calendar {
        width: 40px;
        background: rgb(220, 14, 14);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 7px 0;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .attendence-calendar img {
        width: 50%;
    }

    /* attendence table started from here */
    /* attendence table started from here */
    /* attendence table started from here */
    .attendance-table-head-new{
        background-color: rgb(220, 14, 14);
        color: white;
        border-radius: 3px;
    }
    .head-name {
        width: 34%;
    border-right: 1px solid white;
    height: 60px;
}
.head-subject {
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 18px;
}
.head-date {
    width: 18%;
    text-align: center;
    border-left: 1px solid white;
 
    height: 100%;
}
    .attendence-table-head {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 3fr;
        background-color: rgb(220, 14, 14);
        color: white;
        padding: 10px 20px;
        border-radius: 7px;
        text-align: center;
    }
    .attendence-small-thead {
        background-color: rgb(220, 14, 14);
        color: white;
        padding: 10px 20px;
        border-radius: 7px;
        text-align: center;
    }
    .today {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .today button {
        margin: 0 10px;
        width: auto;
        height: auto;
        padding: 0;
        background: none;
        color: #fff;
        font-size: 20px;
    }

    .attendence-incomplete {
        width: 120px;
        border: 1px solid rgb(219, 219, 219);
        font-size: 10px;
        padding: 0 3px;
        border-radius: 4px;
        margin-right: 5px;
    }
    .name{
        border-right: 1px solid #fff;
    }
    .math{
        border-right: 1px solid #fff;
    }
    .attendance-table-head-new .head-name .name1{
        margin-left: 55px;
        margin-top: 2px;
    }
    .attendence-table-body {
        width: 100%;
    }
    .head-name2{
        width: 20%;
    border-right: 1px solid white;
    height: 60px;
    }
    .name2 {
    margin-left: 45px;
}
.head-date2 {
    width: 18%;
    text-align: center;
    border-left: 1px solid white;
    height: 100%;
}
.head-subject2 {
    width: 60%;
    display: flex;
    align-items: center;
    padding-left: 18px;
}
    .attendence-data {
        max-width: 100%;
        box-shadow: 0px 0px 4px 0px #bfbfbf;
        padding: 10px;
        border-radius: 6px;
        margin-left: 1px;
    }
    .pal {
        font-weight: lighter;
        word-spacing: 8px;
    }
    .point-and-percentage {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
    }
    .bottom-right-btns {
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
    }
    .called-btn {
        width: auto;
    }
    .btn-cancel {
        color: rgb(220, 14, 14);
        background-color: #fff;
        border: 1px solid rgb(220, 14, 14);
    }

    /* responsive attendence tables design */
    @media only screen and (max-width: 1200px) {
        .att-time {
            font-size: 13px;
        }
    }
    @media only screen and (max-width: 992px) {
        .attendence-data {
            height: auto;
            padding: 15px;
        }
        .att-table-row {
            margin-top: 8px;
            margin-bottom: 8px;
            box-shadow: 0px 0px 4px 0px #bfbfbf;
            padding: 10px 20px;
            border-radius: 7px;
            height: auto;
        }
        .att-table-row .pal {
            font-size: 16px;
        }
        .att-table-row p {
            margin: 0;
            padding: 0;
        }
        .att-table-row h3,
        .att-table-row p {
            font-size: 20px;
        }
        .att-table-row .stu-name {
            font-size: 14px;
        }
        .att-table-row small {
            font-size: 13px;
        }
        .student-absence-fee.active {
    border-bottom: none;
}


    }

    @media only screen and (max-width: 576px) {
        .student-absence-fee.active {
    border-bottom: none;
}


        .attendence-small-thead {
            padding: 10px;
        }
        .att-table-row p {
            font-size: 16px;
        }
        .attendence-small-thead p,
        .attendence-small-thead small {
            font-size: 8px;
        }
        .attendence-small-thead sup {
            font-size: 8px;
        }
        .attendence-incomplete {
            font-size: 8px;
            width: auto;
        }
        .today span {
            font-size: 8px;
        }
        .today button {
            font-size: 15px;
        }
        span.attStutas {
            font-size: 10px;
            padding: 6px 9px;
        }
    }
    @media only screen and (max-width: 480px) {
        .attendence-small-thead {
            padding: 24px;
        }
        .attendence-incomplete {
            font-size: 6px;
        }
        .att-table-row {
            padding: 6px;
        }
        .att-table-row .stu-name {
            font-size: 12px;
        }

        .att-table-row h3,
        .att-table-row p {
            font-size: 12px;
            margin: 0;
            padding: 0;
        }
        .att-table-row p {
            margin: 0;
            padding: 0;
        }
        .att-table-row small {
            font-size: 10px;
        }
        .att-table-row .pal {
            font-size: 8px;
        }
    }

    /* ----------------
    attendenceDetails---
    --------------------
    -------------------- */

    .view-all-link a {
        font-size: 12px;
        cursor: pointer;
    }
    .plus-btns-sm {
        margin-top: -30px;
    }
    .attendence-year span.active {
        color: #6f6f6f;
        border: none;
    }
    .search-input {
        width: 600px;
        border-radius: 7px;
        position: relative;
    }

    .search-input input {
        padding: 10px 20px;

        border: 1px solid rgb(211, 211, 211);
        outline: none;
        width: 100%;
    }
    .search-input input:focus {
        border-color: rgb(220 14 14);
    }
    .search-input img {
        width: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .caret-left-right {
        font-size: 40px;
        color: rgb(197, 197, 197);
        transition: 0.3s;
    }
    .caret-left-right:hover {
        color: rgb(220 14 14);
        cursor: pointer;
    }
    .attendence-calculate {
        display: flex;
        align-items: center;
    }

    /* total fine */
    .total-fine {
        background: rgb(255, 226, 226);
        border-radius: 15px;
    }
    .student-name-and-id {
        width: 250px;
        height: 100%;
        padding: 20px;
        text-align: center;
    }
    .student-name-and-id.active,
    .student-absence-fee.active {
        border-bottom: 4px solid red;
    }
    .student-name-and-id img {
        width: 100px;
        border-radius: 8px;
    }

    .student-absence-fee {
        width: 250px;
        height: 100%;
        padding: 20px;
        text-align: center;
    }
    .student-absence-fee img {
        width: 50px;
        border-radius: 8px;
    }

    /* Calender year styles start */
    .year {
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* details in month */
    .month-and-fine {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Attendence Table */
    .attendence-in-table {
        overflow-x: scroll;
        border-radius: 10px;
        box-shadow: 0 2px 5px 0 #b3b3b3;
    }
    .att-table {
        text-align: center;
    }
    .att-table thead {
        background-color: rgb(246, 43, 43);
        color: #fff;
    }
    .att-table tr {
        /* overflow-x: scroll; */
        display: flex;
    }
    .att-table tbody tr {
        border-bottom: 2px solid #f4f2f2;
    }
    .att-table tbody tr:last-child {
        border-bottom: none;
    }
    .att-table th,
    td {
        width: 150px;
        padding: 15px 7px;
        margin-left: 20px;
    }

    .att-table td {
        border-right: 2px solid #f4f2f2;
    }
    table.att-table tbody td span {
        padding: 6px 11px;
        background-color: rgb(36, 181, 26);
        color: white;
        border-radius: 100%;
    }
    .att-table th small {
        padding-top: 10px;
        font-size: 8px;
    }
    .view-all a {
        text-align: center;
        padding-right: 100px;
    }
    /* attendence year style */
    .attendence-year {
        margin-top: 30px;
    }
    .attendence-year span {
        color: #6f6f6f;
    }
    .attendence-year span.active {
        color: rgb(220, 14, 14);
        border-bottom: 1px solid rgb(220, 14, 14);
    }
    button.prev-next-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding: 0;
        background: transparent;
        color: #5f5f5f;
        border: 1px solid #5f5f5f;
        transition: 0.3s;
    }
    button.prev-next-btn:hover {
        background-color: rgb(220, 14, 14);
        color: #fff;
        border-color: rgb(220, 14, 14);
    }
    .btn-plus {
        width: 37px;
        height: 37px;
        padding: 0;
        border-radius: 50%;
        font-size: 18px;
        border: none;
        background: #e22424;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-menu {
        width: auto;
        height: auto;
        padding: 0;
        background-color: transparent;
        color: black;
        font-size: 30px;
    }
    .attendence-head {
        max-width: 100%;
        background-color: rgb(220, 14, 14);
        color: white;
        padding: 10px 20px;
        border-radius: 7px;
        text-align: center;
    }
    .attendence-info {
        max-width: 100%;
        box-shadow: 0px 0px 4px 0px #bfbfbf;
        padding: 10px;
        border-radius: 6px;
        margin-left: -8px;
    }
    .attendence-completed {
        border: 1px solid rgb(219, 219, 219);
        font-size: 10px;
        padding: 0 3px;
        border-radius: 4px;
        margin-right: 5px;
    }

    .attendence-person-details {
        display: flex;
        justify-content: space-between;
    }
    .border-right-black {
        border-right: 1px solid rgb(61, 61, 61);
    }
    .border-right-white {
        border-right: 1px solid rgb(253, 253, 253);
    }
    .attendence-time-and-sub {
        display: flex;
        justify-content: space-around;
    }
    .attStutas {
        box-shadow: 0px 0px 6px 0px #bfbfbf;
        padding: 7px 12px;
        margin: 0 6px;
        border-radius: 100%;
    }

    .attStutas.active:first-child {
        background-color: rgb(220, 14, 14);
        color: #fff;
    }
    .attStutas.active:nth-child(2) {
        background-color: rgb(36, 181, 26);
        color: #fff;
    }
    .attStutas.active:last-child {
        background-color: rgb(0, 111, 255);
        color: #fff;
    }

    @media only screen and (max-width: 992px) {
        .attendence-year span.active {
            color: #6f6f6f;
            border: none;
        }
    }
    @media only screen and (max-width: 768px) {
        .attendence-year span {
            font-size: 10px;
        }
        button.prev-next-btn {
            width: 20px;
            height: 20px;
            font-size: 10px;
            border-radius: 50%;
            padding: 3px 5px;
            background: transparent;
            color: #5f5f5f;
            border: 1px solid #5f5f5f;
            transition: 0.3s;
        }
    }
    @media only screen and (max-width: 480px) {
        .view-all-link a {
            font-size: 9px;
        }
        .ps-xsm {
            margin-left: 4px;
        }
    }

    /* .attendence-table-head{
        display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    }
    .special-math {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -99px;
} */
`;

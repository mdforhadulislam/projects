import styled from 'styled-components';

export const DropdownIcon = styled('div')`
    width: 25px;
    height: 38px;
    background-color: #fff;
    pointer-events: none;
    margin-left: -30px;
    margin-top: 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    img {
        width: 25px !important;
    }
`;
//workout date customization
export const DateBox = styled('div')`
    height: 40px;
    max-height: 40px;
    .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
        width: 127%;
    }
    .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
        width: 76%;
    }

    input,
    .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
        height: 40px;
    }
    .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
        width: 2.5rem;
        span {
            width: 1.2rem !important;
            height: 20px !important;
        }
    }
    @media (max-width: 768px) {
        input {
            padding-left: 10px;
            width: 100%;
        }
    }
    @media (max-width: 600px) {
        .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
            width: 100%;
        }
    }
    @media (max-width: 350px) {
        .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
            width: 100%;
        }
    }
`;

// input number for workout customization
export const InputNumber = styled('div')`
    /* number input box customization */
    .InputNumberBoxEdit__InputNumberBox-sc-3p9v36-1 {
        width: 85px;
        height: 40px;
        border-radius: 5px 0 0 5px;
        input {
            width: 50px;
            height: auto;
        }
        .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
            width: 70%;
        }
        .InputNumberBoxEdit__ButtonGroupBox-sc-3p9v36-0 {
            border-radius: 0;
            height: 38px;
            background: #e22424;
            border-left: 4px solid #e22424;
            border-right: 4px solid #e22424;
            button {
                /* height: 20px; */
            }
            button:first-child {
                margin-top: 0 !important;
            }
            button img {
                width: 18px;
            }
        }
    }
`;
export const WhiteBg = styled('div')`
    background: #fff;
    border-radius: 0 0 29px 29px;
    padding: 0px 20px 40px;
    /* padding-bottom: 80px; */
    margin-bottom: 20px;
    @media (max-width: 768px) {
        padding: 0px 5px 45px;
    }
`;

// wrapper styled
export const Wrapper = styled('div')`
    /* background: #fff; */
    padding: 20px 0;
    .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
        width: 127%;
        input {
            padding-left: 10px;
        }
    }
    .rounded10 {
        border-radius: 10px !important;
    }
    //button style for bottom
    .group-btn {
        display: flex;
        justify-content: center;
    }
    .btn-bootom .cmnBtn {
        color: #fff;
        width: 160px;
        height: 45px;
        background: #e22424;
        border-radius: 8px;
    }
    .btn-bootom .cmnBtn:last-child:hover {
        background: #e22424;
        color: #fff;
        border-color: #e22424;
    }
    .btn-bootom .cmnBtn:last-child {
        background: #fff;
        border: 1px solid #e22424;
        color: #e22424;
    }
    //button for table
    .button {
        background-color: #e22424;
        border: 0;
        height: 30px;
        padding: 0 25px 2px 25px;
        color: white;
    }
    .add-more-icon {
        background: none;
    }
    .add-more-icon img {
        width: 32px !important;
        padding-left: 8px !important;
    }
    .group-btn {
        display: flex;
        justify-content: center;
    }
    //create plus icon style
    .created-book-list {
        padding: 72px 0 55px;
        box-shadow: 0 0 3px #d3d3d3;
        margin-top: 22px;
        border-radius: 5px;
        cursor: pointer;
    }
    .created-book-list i {
        font-size: 30px;
        border: 1px solid #d3d3d3;
        padding: 15px;
        color: #d3d3d3;
    }
    .created-book-list h3 {
        margin-top: 20px;
    }
    //create plus icon End
    i.singleMemberRoutine {
        font-size: 24px;
        margin-left: -50px;
        font-weight: 400;
    }
    input.singleMember {
        background: #ececec;
        height: 60px;
        margin: 15px 0 30px;
        padding-left: 20px;
        border: 0;
        border-radius: 10px;
        width: 470px;
        max-width: 100%;
        font-size: 20px;
    }
    input.selectMemberInput {
        width: 600px;
        height: 50px;
        max-width: 100%;
    }

    /*first disable default dropdown*/
    select.select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
    }
    /* add font awesome dropdown */
    select + i.fa {
        pointer-events: none;
        padding-right: 5px;
        position: absolute;
        right: 26%;
        bottom: 30%;
        font-size: 24px;
    }
    .slider-arrow {
        background-color: #fff;
        padding: 5px 8px;
        border-radius: 50%;
        color: #666;
    }
    .slider-arrow:hover {
        background-color: #e22424;
        color: #fff;
    }
    /* ----------------------
Routine 39 style
----------------------*/
    .singleMemberProfile img {
        width: 72px;
        height: 72px;
        border: 0.5px solid red;
        border-radius: 5px;
    }
    .workout-routine-operation button {
        background: none;
    }
    .workout-routine-operation button,
    .workout-routine-operation span {
        font-size: 18px;
        color: rgb(102, 102, 102);
    }
    .workout-routine-operation .fa-plus {
        border-radius: 50%;
        border: 2px solid rgb(102, 102, 102);
        opacity: 0.29;
        padding: 4px;
    }
    .routine-chart-table thead {
        background-color: rgb(226, 36, 36);
        color: #fff;
        font-size: 27px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    /* after creating routine styles start */
    .workout-table {
        margin-bottom: 40px;
        margin-right: 15px;
        color: #666;
    }
    .workout-table th {
        color: #fff;
        white-space: nowrap;
        border-radius: 15px 15px 0 0;
        font-size: 18px;
        position: sticky;
        top: 0;
    }
    .workout-table th td {
        padding: 12px 20px;
        background-color: #e22424;
        height: 60px;
    }
    .workout-table th td:first-child {
        border-top-left-radius: 15px;
    }
    .workout-table th td:last-child {
        border-top-right-radius: 15px;
    }
    .workout-table th td,
    .workout-table tr td {
        width: 221px;
        display: inline-block;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .workout-table tr td input {
        background: none;
    }
    .workout-table tr:first-child {
        border-top: none;
    }
    .workout-table tr:first-child td {
        padding: 5px;
        height: 50px;
        border: 1px solid #ececec;
        border-color: collapse;
        border-top: none;
    }
    .workout-table tr:first-child td:first-child {
        border-bottom: none;
    }
    .workout-table tr:nth-child(2) td:first-child {
        border-top: none;
    }
    .workout-table tr td {
        border: 1px solid #ececec;
        border-collapse: collapse;
        font-size: 16px;
        height: 90px;
        padding: 5px;
        display: inline-flex;
        align-items: center;
    }
    i {
        color: #666;
    }

    /* workout 11 / adjust time style start */
    .modal-content-adjust-time {
        /* width: 800px;
        max-width: 100%; */
    }
    .workout-name-input input {
        border: none;
        background-color: #f5f5f5;
        border-radius: 8px;
        width: 409px;
        max-width: 100%;
        height: 50px;
        margin-bottom: 15px;
        padding-left: 15px;
    }
    /* date icon customization */
    .input-date {
        border: 1px solid rgb(226, 36, 36);
        border-radius: 5px;
        margin-bottom: 10px;
        text-align: left;
        margin-left: 0;
        padding-left: 0;
    }
    /* check box style */
    .adjust-time .checkbox-container-adjust-time {
        margin-right: 10px;
        padding-left: 30px;
        display: inline-block;
        position: relative;
    }
    .checkbox-container-adjust-time input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .adjust-time .check-mark {
        position: absolute;
        top: 4px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 5px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }

    /* When the checkbox is checked, add a blue background */
    .checkbox-container-adjust-time input:checked ~ .check-mark {
        background-color: #fff;
    }

    /* Create the check-mark/indicator (hidden when not checked) */
    .adjust-time .check-mark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the check-mark when checked */
    .checkbox-container-adjust-time input:checked ~ .check-mark:after {
        display: inline-block;
    }

    /* Style the check-mark/indicator */
    .checkbox-container-adjust-time .check-mark:after {
        left: 9px;
        top: -8px;
        width: 9px;
        height: 23px;
        border: solid #2eb598;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    /* end adjust time styles */

    /* workOut 7 */
    .table-checkBox {
        border-radius: 50%;
    }
    /** rounded bottom corner  */
    .rounded-bottom8 {
        border-radius: 0 0 8px 8px;
    }

    //view all page start
    .viewAll a {
        text-decoration: underline;
    }
    .viewAll a:hover,
    .link:hover {
        color: #da1e37 !important;
    }
    .shadow-all {
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    }
    .link {
        text-decoration: underline;
    }
    .accordion-item {
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
        border: none;
    }
    .accordion-button {
        border-radius: 10px !important;
        border: 1px solid #ececec;
    }
    .accordion-button[aria-expanded='true'] {
        border-radius: 10px 10px 0 0 !important;
    }
    /** accordion button active color */
    .accordion-button:not(.collapsed) {
        color: #da1e37;
        background-color: #ffc9c9;
        box-shadow: 0 0 10px 0 #ececec;
    }
    .accordion-button:focus {
        border-color: #da1e37;
        box-shadow: 0 0 0 1px #da1e37;
    }
    /* responsive query */
    @media (max-width: 768px) {
        select + i.fa {
            right: 10%;
        }
        #order-1 {
            order: 1;
        }
        div#order-2 {
            order: 3;
        }
        div#order-3 {
            order: 2;
        }
    }
    @media screen and (max-width: 810px) {
        .modal-content-adjust-time {
            width: 100%;
        }
    }
    @media (max-width: 600px) {
        .u-name {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 476px) {
    }
    @media screen and (max-width: 400px) {
    }
    @media screen and (max-width: 350px) {
    }
`;

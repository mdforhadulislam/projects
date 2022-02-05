import styled from 'styled-components';

export const Wrapper = styled('div')`
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
    input.singleMember,
    select.singleMember {
        background: #ececec;
        height: 65px;
        margin: 15px 0 30px;
        padding-left: 20px;
        border: 0;
        border-radius: 10px;
        width: 470px;
        max-width: 100%;
        font-size: 20px;
    }
    /* select dropdown icon */
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
        width: 176px;
        display: inline-block;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .workout-table tr:first-child {
        border-top: none;
    }
    .workout-table tr:first-child td {
        padding: 5px;
        height: 40px;
        border: 1px solid #c7c7c7;
        border-top: none;
    }
    .workout-table tr:first-child td:first-child {
        border-bottom: none;
    }
    .workout-table tr:nth-child(2) td:first-child {
        border-top: none;
    }
    .workout-table tr td {
        border: 1px solid #c7c7c7;
        height: 70px;
        padding: 5px;
        display: inline-flex;
        align-items: center;
    }
    .workout-table tr td:first-child {
        border-left: 2px solid #c7c7c7;
    }
    .workout-table tr td:last-child {
        border-right: 2px solid #c7c7c7;
    }
    .workout-table tr:last-child td {
        border-bottom: 2px solid #c7c7c7;
    }

    /* scroll bar styling custom table */
    .custom-table-container {
        margin: 40px 0;
        height: 600px;
        overflow: auto;
    }
    .custom-table-container::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    .custom-table-container::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    .custom-table-container::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: 5px;
    }
    .custom-table-container::-webkit-scrollbar-button:single-button {
        background-color: #f1f1f1;
        display: block;
        background-size: 10px;
        background-repeat: no-repeat;
    }

    /* Up */
    .custom-table-container::-webkit-scrollbar-button:single-button:vertical:decrement {
        border-radius: 5px 5px 0 0;
        height: 16px;
        width: 16px;
        background-position: center 4px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(102, 102, 102)'><polygon points='50,00 0,50 100,50'/></svg>");
    }
    /* Down */
    .custom-table-container::-webkit-scrollbar-button:single-button:vertical:increment {
        border-radius: 0px 0px 5px 5px;
        height: 16px;
        width: 16px;
        background-position: center 4px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(102, 102, 102)'><polygon points='0,0 100,0 50,50'/></svg>");
    }

    /* Left */
    .custom-table-container::-webkit-scrollbar-button:single-button:horizontal:decrement {
        border-radius: 5px 0px 0 5px;
        height: 12px;
        width: 12px;
        background-position: 0px 0px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(102, 102, 102)'><polygon points='0,50 50,100 50,0'/></svg>");
    }

    /* Right */
    .custom-table-container::-webkit-scrollbar-button:single-button:horizontal:increment {
        border-radius: 0 5px 5px 0;
        height: 12px;
        width: 12px;
        background-position: 0px 0px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(102, 102, 102)'><polygon points='0,0 0,100 50,50'/></svg>");
    }
    /* End scroll bar modify */

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

    /* responsive query */
    @media screen AND (max-width: 767px) {
        select + i.fa {
            right: 10%;
        }
    }
    @media screen and (max-width: 810px) {
        .modal-content-adjust-time {
            width: 100%;
        }
    }
    @media screen and (max-width: 556px) {
    }
    @media screen and (max-width: 476px) {
    }
    @media screen and (max-width: 400px) {
    }
    @media screen and (max-width: 350px) {
    }
`;

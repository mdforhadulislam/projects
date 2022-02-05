import styled from "styled-components";

export const Wrapper = styled("div")`

/* attendenceStystem start here */

.attendence-dates {
  display: flex;
  justify-content: flex-start;
}
.attendence-ending-date {
  margin-left: 200px;
}
.date {
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

.attendence-days {
  display: flex;
  width: 35%;
  height: 40px;
  padding-left: 40px;
  justify-content: space-between;
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

.buttons button:first-child {
  border-top-right-radius: 7px;
}
.buttons button:nth-child(2) {
  margin-top: 1px;
  border-bottom-right-radius: 7px;
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
  padding-left: 200px;
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
    font-size: 18px;
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
    border: .5px solid #e22222;
    background-color: #fff;
}

.checkmark-down {
    top: -4px
}


.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkbox-container input:checked~.checkmark {
    background-color: #fff;
    box-shadow: 0 0 3px red;
}

.checkbox-container input:checked~.checkmark:after {
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
    width: 160px;
    height: 45px;
    /* background: #E22424; */
    border-radius: 5px;
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
    background-color: #E22424;
    color: white;
}

.cmnBtn {
    color: #fff;
    width: 160px;
    height: 45px;
    background: #E22424;
    border-radius: 5px;
}
.buttons button{
  padding: 6px 17px;
    background: #E22424;
}

.check-boxes {
    display: flex;
}

.wrapper-width{
  width: 80%;
  margin: auto;
}

/* .attendenceWrapper__Wrapper-sc-1a4duxq-0.kkodUb.wrapper-width.bg-white.p-4 {
    width: 90%;
    margin: auto;
} */

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
  .attendence-ending-date {
    margin-left: 0px;
    margin-top: 20px;
  }
  .attendence-days {
    width: auto;
    padding-left: 0;
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



/*----------------
------------------
create Attendence
------------------
------------------
*/

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

.attendence-incomplete {
  border: 1px solid rgb(219, 219, 219);
  font-size: 10px;
  padding: 0 3px;
  border-radius: 4px;
  margin-right: 5px;
}
.name,
.math {
  border-right: 1px solid #fff;
}
.attendence-table-body {
  width: 100%;
}

.attendence-data {
  max-width: 100%;
  box-shadow: 0px 0px 7px 0px #bfbfbf;
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
.btn-cancel {
  color: rgb(220, 14, 14);
  background-color: #fff;
  border: 1px solid rgb(220, 14, 14);
  margin-left: 12px;
}



`
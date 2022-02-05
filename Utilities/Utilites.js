import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DownIcon from '../Assets/images/dashboard/DownIcon';
import UpIcon from '../Assets/images/dashboard/UpIcon';
import StyleSheet from './Utilites.module.css';


export function MemberCheckbox({ name, title, actions, value }) {
    return (
        <div className={StyleSheet.checkboxs__container}>
            <div className={StyleSheet.checkboxs__container__input}>
                <input
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                    onChange={(e) => {
                        actions(e.target.checked);
                    }}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title}
                </label>
            </div>
        </div>
    );
}
export function Name({ title, actions, value }) {
    return (
        <div className={StyleSheet.name__container}>
            <div className={StyleSheet.name__container__title}>{title}</div>
            <input
                type="text"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}
export function Gender({ title, actions, value }) {
    return (
        <div className={StyleSheet.gender__container}>
            <div className={StyleSheet.gender__container__title}>{title}</div>
            <div className={StyleSheet.gender__container__box}>
                <select
                    name="gender"
                    className={StyleSheet.gender__container__box__selecte__box}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className={StyleSheet.gender__container__box__icon}></div>
            </div>
        </div>
    );
}
export function BloodGroup({ title, actions, value }) {
    return (
        <div className={StyleSheet.Blood__group__container}>
            <div className={StyleSheet.Blood__group__container__title}>{title}</div>
            <div className={StyleSheet.Blood__group__container__box}>
                <select
                    name="bloodGroup"
                    className={StyleSheet.Blood__group__container__box__selecte__box}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <div className={StyleSheet.Blood__group__container__selected__box__icon}></div>
            </div>
        </div>
    );
}
export function DateOfBirth({ title, actions, value }) {
    return (
        <div className={StyleSheet.date__of__birth__container}>
            <div className={StyleSheet.date__of__birth__container__title}>{title}</div>
            <div className={StyleSheet.date__of__birth__container__date__box}>
                <DatePicker
                    id="datePicker"
                    className={StyleSheet.date__of__birth__container__date__box__input}
                    selected={value}
                    onChange={(date) => {
                        actions(date);
                    }}
                />
                <label htmlFor="datePicker">
                    <div className={StyleSheet.date__of__birth__container__date__box__icon}></div>
                </label>
            </div>
        </div>
    );
}
export function Religion({ title, actions, value }) {
    function Dropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Islam
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Hindu
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Christan
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);
    return (
        <div className={StyleSheet.religion__container}>
            <div className={StyleSheet.religion__container__title}>{title}</div>
            <div className={StyleSheet.religion__container__input__box}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        actions(e.target.value);
                        if (e.target.value === '') {
                            setDropDownState(true);
                        }
                        if (e.target.value !== '') {
                            setDropDownState(false);
                        }
                    }}
                    onClick={(e) => {
                        if (e.target.value === '') {
                            setDropDownState(true);
                        }
                        dropDownSate ? setDropDownState(false) : setDropDownState(true);
                    }}
                />
                <div className={StyleSheet.religion__container__input__box__dropdown}>
                    {dropDownSate && <Dropdrown />}
                </div>
            </div>
        </div>
    );
}
export function Nationality({ title, actions, value }) {
    function PositionDropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Bangladeshi
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);

    return (
        <div className={StyleSheet.nationlity__container}>
            <div className={StyleSheet.nationlity__container__title}>{title}</div>
            <input
                type="text"
                onClick={(e) => {
                    if (e.target.value === '') {
                        setDropDownState(true);
                    }
                    dropDownSate ? setDropDownState(false) : setDropDownState(true);
                }}
                onChange={(e) => {
                    actions(e.target.value);
                    if (e.target.value === '') {
                        setDropDownState(true);
                    }
                    if (e.target.value !== '') {
                        setDropDownState(false);
                    }
                }}
                value={value}
            />
            <div className={StyleSheet.nationlity__container__dropdown}>
                {dropDownSate && <PositionDropdrown />}
            </div>
        </div>
    );
}
export function Email({ title, actions, value }) {
    return (
        <div className={StyleSheet.email__container}>
            <div className={StyleSheet.email__container__title}>{title}</div>
            <input
                type="text"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}
export function MobileNo({ title, actions, value }) {
    return (
        <div className={StyleSheet.mobile__no__container}>
            <div className={StyleSheet.mobile__no__container__title}>{title}</div>
            <input
                type="number"
                onChange={(e) => {
                    actions(e.target.value);
                }}
                value={value}
            />
        </div>
    );
}

// dutypedia user add from
export function Position({ actions, value }) {
    function PositionDropdrown() {
        return (
            <ul>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    CEO
                </li>
                <li
                    onClick={(e) => {
                        actions(e.target.innerText);
                        setDropDownState(false);
                    }}>
                    Marketing Officer
                </li>
            </ul>
        );
    }
    let [dropDownSate, setDropDownState] = useState(false);

    return (
        <div className={StyleSheet.position__container}>
            <p className={StyleSheet.position__container__heading}>Position</p>
            <div className={StyleSheet.position__container__input__box}>
                <div className={StyleSheet.position__container__input__box__input}>
                    <input
                        type="text"
                        onClick={(e) => {
                            if (e.target.value === '') {
                                setDropDownState(true);
                            }
                            dropDownSate ? setDropDownState(false) : setDropDownState(true);
                        }}
                        onChange={(e) => {
                            actions(e.target.value);
                            if (e.target.value === '') {
                                setDropDownState(true);
                            }
                            if (e.target.value !== '') {
                                setDropDownState(false);
                            }
                        }}
                        value={value}
                        placeholder="Position"
                    />
                </div>
                <div className={StyleSheet.position__container__input__box__dropdrown}>
                    {dropDownSate && <PositionDropdrown />}
                </div>
            </div>
        </div>
    );
}
export function JoiningDate({ actions, value }) {
    return (
        <div className={StyleSheet.Joining__date__container}>
            <div className={StyleSheet.Joining__date__container__title}>Joining Date</div>
            <div className={StyleSheet.Joining__date__container__box}>
                <DatePicker
                    id="datePicker"
                    className={StyleSheet.Joining__date__container__date}
                    selected={value}
                    onChange={(date) => {
                        actions(date);
                    }}
                />

                <label htmlFor="datePicker">
                    <div className={StyleSheet.Joining__date__container__icon}></div>
                </label>
            </div>
        </div>
    );
}
export function SalaryAmount({ actions, value }) {
    return (
        <div className={StyleSheet.salary__amounts__container}>
            <div className={StyleSheet.salary__amounts__container__title}>Salary Ammount</div>
            <div className={StyleSheet.salary__amounts__container__input__box}>
                <input
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    type="number"
                    value={value}
                    placeholder="500000.."
                />

                <span className={StyleSheet.salary__amounts__container__input__box__icon}>
                    <button
                        type="button"
                        onClick={() => {
                            actions(Number(value) + 1);
                        }}
                        className={StyleSheet.salary__amounts__container__input__box__icon__top}>
                        {/* <img src={UpIcon} alt="" /> */}
                        <UpIcon />
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            value > 0 ? actions(Number(value) - 1) : actions(0);
                        }}
                        className={StyleSheet.salary__amounts__container__input__box__icon__bottom}>
                        {/* <img src={DownIcon} alt="" /> */}
                        <DownIcon />
                    </button>
                </span>
            </div>
        </div>
    );
}
export function SalaryType({ actions, value }) {
    return (
        <div className={StyleSheet.salary__type__container}>
            <div className={StyleSheet.salary__type__container__title}>Salary Type</div>

            <select
                onChange={(e) => {
                    actions(e.target.value);
                }}
                name="salaryType"
                value={value}
                className={StyleSheet.salary__type__container__selected__box}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>

            <div className={StyleSheet.salary__type__container__icon}></div>
        </div>
    );
}
export function SalaryDateEveryDay({ actions, value }) {
    return (
        <div className={StyleSheet.salary__date__every__day__container}>
            <div className={StyleSheet.salary__date__every__day__container__title}>
                Salary Date Every Day
            </div>

            <div className={StyleSheet.salary__date__every__day__container__input__box}>
                <input
                    type="time"
                    value={value}
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                />

                <div
                    className={
                        StyleSheet.salary__date__every__day__container__input__box__icon
                    }></div>
            </div>
        </div>
    );
}
export function clockTimer(timeString) {
    var hour = Number(timeString.split(':')[0]);
    var minute = Number(timeString.split(':')[1]);

    var prepand = hour >= 12 ? ' PM ' : ' AM ';

    hour = hour >= 12 ? hour - 12 : hour;

    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0) {
            hour = 12;
            prepand = ' Noon';
        } else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }
    return (hour < 10 ? "0" + hour : hour) + ' : ' + (minute < 10 ? "0" + minute : minute) + prepand;
}
export function SalaryDateEveryMonth({ actions, value }) {
    return (
        <div className={StyleSheet.salary__date__every__month__container}>
            <div className={StyleSheet.salary__date__every__month__container__title}>
                Salary Date Every Month
            </div>
            <div className={StyleSheet.salary__date__every__month__container__selected__box}>
                <select
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}
                    className={
                        StyleSheet.salary__date__every__month__container__selected__box__select
                    }>
                    <option value="1-10">1st To 10th</option>
                    <option value="10-20">10th To 20ty</option>
                    <option value="20-31">20ty To 31</option>
                </select>
                <div className={StyleSheet.salary__date__every__month__container__icon}></div>
            </div>
        </div>
    );
}
export function SalaryDateEveryWeek({ actions, value }) {
    return (
        <div className={StyleSheet.salary__date__every__week__container}>
            <div className={StyleSheet.salary__date__every__week__container__title}>
                Salary Date Every Week
            </div>
            <div className={StyleSheet.salary__date__every__week__container__selected__box}>
                <select
                    onChange={(e) => {
                        actions(e.target.value);
                    }}
                    value={value}
                    className={
                        StyleSheet.salary__date__every__week__container__selected__box__select
                    }>
                    <option value="6">Saturday</option>
                    <option value="0">Sunday</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednestday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                </select>
                <div className={StyleSheet.salary__date__every__week__container__icon}></div>
            </div>
        </div>
    );
}
export function CheckBox({ name, title, actions, value }) {
    return (
        <div className={StyleSheet.checkbox__container}>
            <div
                className={StyleSheet.checkbox__container__input}
                style={name === 'noAccess' ? { width: '20vw' } : { width: '13vw' }}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title && title}
                </label>
            </div>
        </div>
    );
}
export function CircleCheckBox({ name, title, actions, value, style }) {
    return (
        <div className={StyleSheet.circle__checkbox__container} style={style}>
            <div className={StyleSheet.circle__checkbox__container__input}>
                <input
                    onChange={(e) => actions(e.target.checked)}
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.circle__checked : StyleSheet.circle__unchecked}>
                    {title && title}
                </label>
            </div>
        </div>
    );
}

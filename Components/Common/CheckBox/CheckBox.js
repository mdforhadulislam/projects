import React from 'react';
import styled from 'styled-components';

const CheckBox = ({ name}) => {
 
    return (
        <Wrapper >
            <label className="checkbox-container-adjust-time text-capitalize">
                <p>{name ? name : ''}</p>

                <input type="checkbox" name={`${name ? name : ''}`} />
                <span className="check-mark"></span>
            </label>
        </Wrapper>
    );
};

export default CheckBox;
const Wrapper = styled('div')`
    .checkbox-container-adjust-time {
        margin-right: 10px;
        padding-left: 30px;
        display: inline-block;
        position: relative;
        line-height: 35px;
    }
    .checkbox-container-adjust-time input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .check-mark {
        position: absolute;
        top: 7px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 5px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }
    .checkbox-container-adjust-time input:checked ~ .check-mark {
        background-color: #fff;
    }
    .check-mark:after {
        content: '';
        position: absolute;
        display: none;
    }
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
`;

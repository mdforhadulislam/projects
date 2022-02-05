import React from 'react';
import styled from 'styled-components';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import dropUp from '../../../Assets/images/icons/Path 18806.svg';
import dropdown from '../../../Assets/images/icons/Path 18807.svg';
import whiteLine from '../../../Assets/images/icons/Group 7509.svg';

const InputNumberBoxComp = ({ setNumberInc, numberInc, name, handleOnChange }) => {
    return (
        <InputNumberBox>
            <input
                type="number"
                name={name}
                onChange={(e) =>
                    parseInt(e.target.value) === NaN
                        ? setNumberInc(0)
                        : setNumberInc(parseInt(e.target.value))
                }
                value={numberInc}
            />
            <ButtonGroupBox>
                <button onClick={() => setNumberInc(numberInc + 1)}>
                    <Image src={dropUp} alt="" />
                </button>

                <button onClick={() => (numberInc > 0 ? setNumberInc(numberInc - 1) : 0)}>
                    <Image src={dropdown} alt="" />
                </button>
            </ButtonGroupBox>
        </InputNumberBox>
    );
};

export default InputNumberBoxComp;
const ButtonGroupBox = styled('div')`
    display: flex;
    flex-direction: column;
    background-color: #dc3545;

    justify-content: center;
    position: absolute;
    width: 57px;
    height: 60px;
    border-radius: 0.4rem;
    right: -0.2%;

    button {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 15px;
    }
    button:first-child {
        border-bottom: 1px solid white;
        margin-top: 1px !important;
    }
    button:last-child span {
        margin-top: 2px !important;
    }
`;
const InputNumberBox = styled('div')`
    border: 1px solid red;
    width: 328px;
    display: flex;
    height: 60px;
    border-radius: 0.4rem;
    margin-bottom: 6rem;
    position: relative;

    input {
        border: none;
        width: 16rem;
        margin-left: 25px;
        border-radius: 5px;

        height: 3.5rem;
        margin-bottom: 2rem;

        :focus {
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;

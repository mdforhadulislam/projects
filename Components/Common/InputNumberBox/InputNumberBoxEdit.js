import React from 'react';
import styled from 'styled-components';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import dropUp from '../../../Assets/images/icons/Path 18806.svg';
import dropdown from '../../../Assets/images/icons/Path 18807.svg';

const InputNumberBoxEdit = ({ setNumberInc, numberInc }) => {
    return (
        <InputNumberBox>
            <input
                type="number"
                value={numberInc}
                onChange={(e) =>
                    parseInt(e.target.value) === NaN
                        ? setNumberInc(0)
                        : setNumberInc(parseInt(e.target.value))
                }
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

export default InputNumberBoxEdit;
const ButtonGroupBox = styled('div')`
    display: flex;
    flex-direction: column;
    background-color: #dc3545;
    justify-content: center;

    width: 46px;
    height: 41px;
    border-radius: 0.4rem;

    button {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 15px;
    }
    button:first-child {
        border-bottom: 1px solid white;
        margin-top: 4px !important;
    }
    button:last-child span {
        margin-top: 2px !important;
    }
`;
const InputNumberBox = styled('div')`
    border: 1px solid red;
    width: 206px;
    display: flex;
    height: 41px;
    border-radius: 0.4rem;

    input {
        border: none;
        width: 169px;
        padding-left: 10px;
        border-radius: 5px;

        height: 38px;

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

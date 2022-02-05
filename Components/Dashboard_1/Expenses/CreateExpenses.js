import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import search from '../../../Assets/images/icons/search.svg';
import icon from '../../../Assets/images/icons/Group 5696.svg';
import dropdown from '../../../Assets/images/resite/arrow4.svg';
import { useRouter } from 'next/router';
const CreateExpenses = () => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push('/dashboard_1/expenses/create_expenses');
    };
    return (
        <Wrapper>
            <HeaderBox>
                <FilterBox>
                    <h6>Filtered By</h6>
                    <InputSearchByDate>
                        <select>
                            <option value="1">Last 1 day</option>
                            <option value="7">Last 7</option>
                            <option value="30">Last 1 Month</option>
                        </select>
                        <div className="select-style">
                            <Image src={dropdown} alt="" />
                        </div>
                    </InputSearchByDate>
                </FilterBox>
                <div className="notice_input_search">
                    <input type="text" placeholder="Search Now" />
                    <Image src={search} alt="" />
                </div>
            </HeaderBox>
            <CreateAddBox>
                <button onClick={handleClick}>
                    <Image src={icon} alt="" />
                </button>
                <h3>Create A Expencess List</h3>
            </CreateAddBox>
        </Wrapper>
    );
};

export default CreateExpenses;
const Wrapper = styled('div')`
    width: 80.3%;
    margin: 3rem auto;
    background-color: white;
    height: 48rem;
    padding: 3rem 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    @media screen and (max-width: 600px) {
        width: 88.3%;
        margin: 4rem 2rem;
    }
`;
const HeaderBox = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    .notice_input_search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 21rem;
        border: none;
        border-radius: 0.4rem;
        display: flex;
        padding: 0.2% 1%;
        border: 1px solid lightgray;
    }
    .notice_input_search input {
        border: none;
        height: 2.5rem;

        background-color: transparent;
    }
    .notice_input_search input::placeholder {
        font-size: 1rem;
    }
    .notice_input_search span {
        width: 2rem !important;
    }
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem;
        .notice_input_search {
            width: 18.438rem;
            margin-top: 1rem;
        }
        .notice_input_search input {
            border: none;
            height: 32px;

            background-color: transparent;
        }
        .notice_input_search input::placeholder {
            font-size: 12px;
        }
        .notice_input_search span {
            width: 32px !important;
            height: 16px !important;
        }
    }
`;
const CreateAddBox = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 2rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    height: 45%;

    button {
        border: none;
        background-color: white;
        width: 7rem;
        height: 6rem;
        span {
            width: 80% !important;
            height: 5rem !important;
        }
    }
    @media screen and (max-width: 600px) {
        height: 20%;
        h3 {
            font-size: 18px;
        }
        button {
            height: 4rem;
            span {
                width: 80% !important;
                height: 2rem !important;
            }
        }
    }
`;

const InputSearchByDate = styled('div')`
    display: flex;
    justify-content: space-around;

    padding: 0rem 2rem 0rem 2rem;

    div:nth-child(1) {
        display: grid;
        align-items: center;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
    select {
        font-size: 14px;
        height: 28px;
        width: 130px;
        position: relative;
        border: 1px solid red;
        border-radius: 6px;
        outline: none;
        background-color: white;
    }
    .select-style {
        height: 28px;
        width: 27px;
        background: #dc3545;
        position: absolute;
        pointer-events: none;
        z-index: 10;
        padding-left: 6px;
        border-radius: 4px;
        /* border-top-right-radius: 0.4vw;
    border-bottom-right-radius: 0.4vw; */
        transform: translateX(5.6rem);
        margin-right: 76px;
    }
    .select-style img {
        height: 100%;
        width: 100%;
    }

    /* select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: white;
    border: 1px solid red;
    border-radius: 0.3rem;

    width: 9rem;
  } */
    @media screen and (max-width: 600px) {
        padding: 0rem 1rem 0rem 1rem;
        select {
            font-size: 11px;
            height: 19px;
            width: 79px;
            border-radius: 4px;
        }
        .select-style {
            height: 19px;
            width: 21px;
            padding-left: 5px;
            border-radius: 5px;
            margin-right: 122px;
        }
    }
`;
const FilterBox = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h6 {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    @media screen and (max-width: 600px) {
        justify-content: start;
        h6 {
            font-size: 11px;
            margin-top: 0.5rem;
        }
    }
`;

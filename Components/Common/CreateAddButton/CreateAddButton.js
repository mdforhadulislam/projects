import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import icon from '/Assets/images/icons/Group 5696.svg';

const CreateAddButton = ({ name }) => {
    return (
        <CreateAddBox>
            <button>
                <Image src={icon} alt="" />
            </button>
            <h3>{name ? name : ''}</h3>
        </CreateAddBox>
    );
};

export default CreateAddButton;
const CreateAddBox = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 2rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    height: 300px;
    padding: 1rem 1rem;

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

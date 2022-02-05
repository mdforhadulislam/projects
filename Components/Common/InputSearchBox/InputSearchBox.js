import React from 'react';
import styled from 'styled-components';

import SearchIcon from './SearchIcon';

const InputSearchBox = ({
    setIsDropDownTrue,
    userAdd,
    isInputValueClicked,
    setIsInputValueClick,
    setUserAdd
}) => {
    const handleDropDown = () => {
        setIsDropDownTrue(true);
    };
    const handleCross = () => {
        setIsInputValueClick(false);
        setUserAdd([]);
    };
    return (
        <Wrapper>
            {isInputValueClicked ? (
                ''
            ) : (
                <input
                    onClick={userAdd ? () => handleDropDown() : () => console.log('click')}
                    type="text"
                    placeholder="Search Now"
                />
            )}

            {userAdd?.map((user) => (
                <React.Fragment key={user.id}>
                    <h6>
                        {user.name} <p onClick={handleCross}>x</p>
                    </h6>
                </React.Fragment>
            ))}
            <SearchIcon />
        </Wrapper>
    );
};

export default InputSearchBox;
const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 21rem;
    border: none;
    border-radius: 0.4rem;
    display: flex;
    padding: 0.2% 1%;
    border: 1px solid lightgray;
    h6 {
        position: relative;
        margin-bottom: 0;
        background-color: rgb(236, 236, 236);
        padding: 1%;
        border-radius: 8px;
        margin-left: 2%;
        p {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: -5px;
            right: -5px;
            background-color: red;
            color: white;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
    input {
        border: none;
        height: 2.5rem;

        background-color: transparent;
        :focus {
            outline: none;
        }
    }
    input::placeholder {
        font-size: 1rem;

        svg {
            width: 2rem;
        }
    }
    @media screen and (max-width: 920px) {
        h6 {
            p {
                width: 15px;
                height: 15px;
                font-size: 13px;
            }
        }
    }
`;

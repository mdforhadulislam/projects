import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import user1 from '../../../../../Assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import DutyPreIconSmall from '../../../../../Assets/images/dashboard/DutyPreIconSmall';
import tik from '../../../../../Assets/images/svg/Path 4781.svg';

const DutypediaAddMapList = (props) => {
    const { _id } = props.addMember;
    const [itemIsCheck, setItemIsCheck] = useState(false);
    const [newCheck, setNewCheck] = useState(false);

    const handleItemClick = () => {
        setItemIsCheck(!itemIsCheck);
    };

    const handleNewCheck = (id) => {
        setNewCheck(!newCheck);
    };

    useEffect(() => {
        setNewCheck(true);
    }, [props.allCheck === false]);

    const check = true;
    const notCheck = false;
    return (
        <Wrapper>
            <div className="member-lists member-list-online">
                <div className="member__item">
                    {props.allCheck === true && (
                        <label for={_id} className="checkbox-container">
                            <input
                                id={_id}
                                type="checkbox"
                                checked={newCheck ? check : notCheck}
                                onClick={handleNewCheck}
                                onChange={() =>
                                    props.handleAllSelectCount(props.addMember, newCheck)
                                }
                            />
                            <span className="checkmark checkmark-down"></span>
                        </label>
                    )}

                    {props.allCheck === false && (
                        <label for={_id} className="checkbox-container">
                            <input
                                id={_id}
                                type="checkbox"
                                checked={itemIsCheck ? check : notCheck}
                                onClick={handleItemClick}
                                onChange={() => props.handleCount(props.addMember)}
                            />
                            <span className="checkmark checkmark-down"></span>
                        </label>
                    )}

                    {/* // )} */}

                    <div className="member__item__details">
                        <div className="member__item__user">
                            <Image src={user1} alt="men 1" />
                            <DutyPreIconSmall />
                        </div>
                        <div className="member__item__details__personal">
                            <h4 className="member__item__details-name dutypedia_name">
                                {props.addMember.name}
                            </h4>
                            <p className="member__item__details-id">Id : 92973434</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default DutypediaAddMapList;
const Wrapper = styled('div')`
    .member__item {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        padding: 0 20px;
        border-radius: 8px;
        margin: 10px 0;
        min-height: 85px;

        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    }
    .member__item__details {
        flex: 1 1 50%;

        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;
    }

    .member__item__details__personal {
        margin-top: 10px;
    }

    .member__item__details-name {
        font-size: 18px;
    }

    .member__item__details-id {
        font-size: 15px;
        color: rgb(136, 136, 136);
        font-weight: 500;
    }

    .member__item__details .member__item__user span {
        width: 50px !important;
        height: 50px !important;
        border-radius: 8px !important;
        position: relative !important;
    }
    .member__item__details .member__item__user svg {
        width: 20px;
        height: 20px;
        margin-left: -5px;
    }
    .checkmark {
        position: absolute;
        top: 4px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 2px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }

    .checkmark-down {
        top: -4px;
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }
    .checkbox-container input:checked ~ .checkmark {
        background-color: #fff;
        box-shadow: 0 0 3px red;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox-container .checkmark:after {
        left: 2px;
        top: -4px;
        width: 23px;
        height: 26px;
        background-image: url(${tik});
        background-repeat: no-repeat;
        background-position: center;
    }
`;

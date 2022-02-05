import { FaUserPlus } from 'react-icons/fa';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    dutypediaUserAddToMemberList,
    userRemoveFromDutypediaList
} from '../../../../../Redux/Dashboard_1/Action/groupUserSelectAction.js';

import DutypediaAddMapList from './DutypediaAddMapList';
import addUser from '../../../../../Assets/images/icons/adduser.svg';
import styled from 'styled-components';
import Image from 'next/image';
import search from '../../../../../Assets/images/icons/search.svg';
import tik from '../../../../../Assets/images/svg/Path 4781.svg';
import { Wrapper } from '../../../../../styles/StyledComponentWrapper.js';
const DutypediaAddUser = (props) => {
    const [allCheck, setAllCheck] = useState(false);
    // const [dutypediaAddUserData, setDutypediaAddUserData] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [selectItemId, setSelectItemId] = useState([]);
    const [selectItemTwo, setSelectItemTwo] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    // data get from redux
    const dutypediaAddUserData = useSelector((state) => state.groupUserSelect.dutypediaAddList);
    const newSelectId = selectItemTwo.map((id) => id.id);
    const searchResult = dutypediaAddUserData?.filter((search) =>
        search.name.includes(searchInput.charAt(0).toUpperCase())
    );

    const handleCount = (id) => {
        setSelectItem([...selectItem, id]);
        setSelectItemId([...selectItemId, id.id]);
        const idFilterArray = selectItem.find((e_id) => e_id === id);
        if (idFilterArray) {
            const newIndex = selectItem.indexOf(idFilterArray);
            if (newIndex > -1) {
                const newData = [...selectItem];
                newData.splice(newIndex, 1);
                setSelectItem(newData);
            }
        }
    };

    const handleAllSelectCount = (id, isTrue) => {
        setSelectItemTwo([...selectItemTwo, id]);
        const allFilterCheck = selectItemTwo.find((e_id) => e_id === id);
        if (allFilterCheck && isTrue === true) {
            const allCheckIndex = selectItemTwo.indexOf(allFilterCheck);
            if (allCheckIndex > -1) {
                const newData = [...selectItemTwo];
                newData.splice(allCheckIndex, 1);
                setSelectItemTwo(newData);
            }
        }
    };

    const handleAddMember = () => {
        dispatch(dutypediaUserAddToMemberList(selectItem));
        dispatch(userRemoveFromDutypediaList(selectItemId));

        // props.setAddUser(false);
        props.setShowMemberList(true);
    };

    const handleAddMemberAllSelect = () => {
        dispatch(dutypediaUserAddToMemberList(selectItemTwo));
        dispatch(userRemoveFromDutypediaList(newSelectId));

        // props.setAddUser(false);
        props.setShowMemberList(true);
    };

    const handleAllSelect = () => {
        setAllCheck(!allCheck);
        setSelectItemTwo(dutypediaAddUserData);
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <Wrapper>
            <div id="onlineAndOffLineMember">
                <div className="">
                    <div className="dutypedia_container" id="searchAddSection">
                        <div className="input_container">
                            <input
                                type="text"
                                className="input_box"
                                placeholder="Search now..."
                                onChange={handleSearch}
                            />
                            <Image className="memberSearch__icon" src={search} alt="" srcset="" />
                        </div>

                        <div className="member_add_new">
                            {allCheck === true ? (
                                <button
                                    className="memberSearch__add_btn"
                                    onClick={handleAddMemberAllSelect}>
                                    <Image
                                        className="member__add_icon"
                                        src={addUser}
                                        alt=""
                                        srcset=""
                                    />
                                    <span className="add_btn_text">Add Member</span>
                                </button>
                            ) : selectItem.length === 0 ? (
                                <button className="memberSearch__add_btn disabled_btn" disabled>
                                    <Image
                                        className="member__add_icon"
                                        src={addUser}
                                        alt=""
                                        srcset=""
                                    />
                                    <span className="add_btn_text">Add Member</span>
                                </button>
                            ) : (
                                <button className="memberSearch__add_btn" onClick={handleAddMember}>
                                    <Image
                                        className="member__add_icon"
                                        src={addUser}
                                        alt=""
                                        srcset=""
                                    />
                                    <span className="add_btn_text">Add Member</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="select__member">
                    <label for="select-all" className="checkbox-container ml-2">
                        Select All
                        <input id="select-all" type="checkbox" onClick={handleAllSelect} />
                        <span className="checkmark"></span>
                    </label>
                    {allCheck === true ? (
                        <h6 className="select__member-text">
                            Selected {selectItemTwo.length} Person
                        </h6>
                    ) : (
                        <h6 className="select__member-text">Selected {selectItem.length} Person</h6>
                    )}
                </div>

                <div className="memberListItem">
                    {searchInput !== '' ? (
                        <div>
                            {searchResult.map((addMember, index) => (
                                <DutypediaAddMapList
                                    handleCount={handleCount}
                                    allCheck={allCheck}
                                    addMember={addMember}
                                    handleAllSelectCount={handleAllSelectCount}
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            {dutypediaAddUserData.map((addMember, index) => (
                                <DutypediaAddMapList
                                    handleCount={handleCount}
                                    allCheck={allCheck}
                                    addMember={addMember}
                                    handleAllSelectCount={handleAllSelectCount}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default DutypediaAddUser;
// const Wrapper = styled('div')`
//     #onlineAndOffLineMember {
//         margin: 0 15px;
//     }
//     .dutypedia_container {
//         margin-top: 20px;
//         margin-bottom: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 97.5%;
//     }
//     .input_box {
//         border: unset !important;
//         background-color: transparent;
//         width: 90%;
//         padding-left: 10px;
//     }
//     .input_container {
//         background-color: rgba(240, 233, 233, 0.5);
//         padding: 8px;
//         border-radius: 5px;
//         width: 100%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
//     .memberSearch__icon {
//         height: 18px;
//         margin-right: 10px;
//     }
//     .member__add_icon {
//         height: 16px;
//         margin-right: 10px;
//     }
//     .btn_container {
//         z-index: 3;
//     }
//     .btn_search {
//         box-shadow: unset !important;
//         background-color: unset !important;
//         border-color: transparent;
//         margin-left: -50px;
//     }
//     .btn_search:focus {
//         border: transparent !important;
//     }

//     .input_group {
//         padding-top: 14px;
//     }

//     .memberListItem {
//         overflow-y: scroll;
//         height: 400px;
//         padding-bottom: 3px;
//     }

//     .member__item__online {
//         display: flex;
//     }
//     .item_flex {
//         margin-right: 15px;
//     }
//     #ingredients__profile {
//         margin-right: 10px;
//     }
//     .select_user {
//         margin-top: 40px;
//     }
//     .user_item {
//         margin-right: 6px;
//         height: 28px;
//         width: 140px;
//         border-bottom: 1px solid rgba(223, 216, 216, 0.836);
//         cursor: pointer;
//     }
//     .user_item p {
//         margin-left: 10px;
//         font-size: 16px;
//         color: rgb(92, 85, 85);
//     }
//     .dutypedia_item p {
//         border-right: 1px solid rgba(223, 216, 216, 0.836);
//     }
//     .offline_item {
//         width: 130px;
//         margin-left: -6px;
//     }
//     .user_active {
//         border-bottom: 1px solid #da1e37;
//     }
//     .memberSearch__add_btn {
//         padding: 3px 17px;
//         height: 40px;
//         border-radius: 7px;
//         background-color: #da1e37;
//         border: none;
//     }
//     .member_add_new {
//         transform: translate(2px, 0);
//         display: flex;
//         justify-content: right;
//         align-items: center;
//         cursor: pointer;
//         width: 200px;
//         /* transform: translate(7px, 0); */
//     }
//     .dutypedia_container {
//         margin-top: 20px;
//         margin-bottom: 20px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 97.5%;
//     }
//     .disabled_btn {
//         opacity: 0.3;
//     }
//     .back_btn_icon {
//         height: 32px;
//     }
//     .select__member {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .select__member-text {
//         color: #858585;
//     }
//     .add_btn_text {
//         color: white;
//     }
//     .checkmark {
//         position: absolute;
//         top: 4px;
//         left: 0;
//         height: 20px;
//         width: 20px;
//         border-radius: 2px;
//         border: 0.5px solid #e22222;
//         background-color: #fff;
//     }

//     .checkmark-down {
//         top: -4px;
//     }

//     .checkmark:after {
//         content: '';
//         position: absolute;
//         display: none;
//     }
//     .checkbox-container input:checked ~ .checkmark {
//         background-color: #fff;
//         box-shadow: 0 0 3px red;
//     }

//     .checkbox-container input:checked ~ .checkmark:after {
//         display: block;
//     }

//     .checkbox-container .checkmark:after {
//         left: 2px;
//         top: -4px;
//         width: 23px;
//         height: 26px;
//         background-image: url(${tik});
//         background-repeat: no-repeat;
//         background-position: center;
//     }
// `;

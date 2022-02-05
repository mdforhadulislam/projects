import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    offlineUserAddToMemberList,
    userRemoveFromOfflineList
} from '../../../../../Redux/Dashboard_1/Action/groupUserSelectAction';
import Member from '../Member';
import OfflineAddUserMapList from './OfflineAddUserMapLIst';
import addUser from '../../../../../Assets/images/icons/adduser.svg';
import Image from 'next/image';
import searchIcon from '/Assets/images/icons/search.svg';
const OfflineAddUser = (props) => {
    const [allCheck, setAllCheck] = useState(false);
    // const [dutypediaAddUserData, setDutypediaAddUserData] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [selectItemId, setSelectItemId] = useState([]);
    const [selectItemTwo, setSelectItemTwo] = useState([]);
    const [itemIsClick, setItemIsClick] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    console.log('check my item', selectItemTwo);
    // console.log('check my item', selectItemId)

    // data get from redux
    const offlineAddUserData = useSelector((state) => state.groupUserSelect.offlineAddList);
    const newSelectId = selectItemTwo.map((id) => id.id);
    const searchResult = offlineAddUserData?.filter((search) =>
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
        console.log('my new id', id, 'is true', isTrue);
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
        dispatch(offlineUserAddToMemberList(selectItem));
        dispatch(userRemoveFromOfflineList(selectItemId));

        props.setShowMemberList(true);
    };

    const handleAddMemberAllSelect = () => {
        dispatch(offlineUserAddToMemberList(selectItemTwo));
        dispatch(userRemoveFromOfflineList(newSelectId));

        props.setShowMemberList(true);
    };

    const handleAllSelect = () => {
        setAllCheck(!allCheck);
        setSelectItemTwo(offlineAddUserData);
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div id="onlineAndOffLineMember">
            <div className="dutypedia_container" id="searchAddSection">
                <div className="input_container">
                    <input
                        type="text"
                        className="input_box"
                        placeholder="Search now..."
                        onChange={handleSearch}
                    />
                    <Image className="memberSearch__icon" src={searchIcon} alt="" srcset="" />
                </div>

                <div className="member_add_new">
                    {allCheck === true ? (
                        <button
                            className="memberSearch__add_btn"
                            onClick={handleAddMemberAllSelect}>
                            <img className="member__add_icon" src={addUser} alt="" srcset="" />
                            <span className="add_btn_text">Add Member</span>
                        </button>
                    ) : selectItem.length === 0 ? (
                        <button className="memberSearch__add_btn disabled_btn">
                            <img className="member__add_icon" src={addUser} alt="" srcset="" />
                            <span className="add_btn_text">Add Member</span>
                        </button>
                    ) : (
                        <button className="memberSearch__add_btn" onClick={handleAddMember}>
                            <img className="member__add_icon" src={addUser} alt="" srcset="" />
                            <span className="add_btn_text">Add Member</span>
                        </button>
                    )}
                </div>
            </div>

            <div className="select__member">
                <label for="select-all" className="checkbox-container ml-2">
                    Select All
                    <input id="select-all" type="checkbox" onClick={handleAllSelect} />
                    <span className="checkmark"></span>
                </label>
                {allCheck === true ? (
                    <h6 className="select__member-text">selected {selectItemTwo.length} person</h6>
                ) : (
                    <h6 className="select__member-text">selected {selectItem.length} person</h6>
                )}
            </div>

            <div className="memberListItem">
                {searchInput !== '' ? (
                    <div>
                        {searchResult.map((addMember, index) => (
                            <OfflineAddUserMapList
                                handleCount={handleCount}
                                allCheck={allCheck}
                                addMember={addMember}
                                handleAllSelectCount={handleAllSelectCount}
                            />
                        ))}
                    </div>
                ) : (
                    <div>
                        {offlineAddUserData.map((addMember, index) => (
                            <OfflineAddUserMapList
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
    );
};

export default OfflineAddUser;

import React, { useEffect, useState } from 'react';

import { FaUserPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import DutypediaAddUserMapList from './DutypediaAddUserMapList';
import {
    addMentorOfflineToMentorList,
    removeMentorFromOfflineAddList
} from '../../../../../Redux/Dashboard_1/Action/mentorListAction.js';
import OfflineAddUserMapList from './OfflineAddUserMapList';

const OfflineAddUserList = (props) => {
    const [showStuffPartner, setShowStuffPartner] = useState(false);
    const [allCheck, setAllCheck] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectItem, setSelectItem] = useState([]);
    const [selectItemId, setSelectItemId] = useState([]);
    const [selectItemTwo, setSelectItemTwo] = useState([]);
    const [selectRole, setSelectRole] = useState('');
    const dispatch = useDispatch();

    console.log('select item all', selectItemTwo);
    console.log('select item all', selectItemId);
    console.log('select item', selectItem);

    const mentorList = useSelector((state) => state.mentorReducer.mentorList);
    const offlineAddList = useSelector((state) => state.mentorReducer.offlineAddList);
    const searchResult = offlineAddList?.filter((search) =>
        search.name.includes(searchInput.charAt(0).toUpperCase())
    );
    const newSelectId = selectItemTwo.map((id) => id.id);

    const handleMentorRole = (role, id) => {
        setSelectRole(role);
        console.log(role);
        const idFilterArray = selectItem.find((e_id) => e_id.id === id.id);
        console.log('my id', idFilterArray?.role);
        if (idFilterArray?.role === '') {
            const newIndex = selectItem.indexOf(idFilterArray);
            // const setRole = selectRole
            // console.log("new Check", role);
            const newData = [...selectItem];
            newData[newIndex].role = role;
            setSelectItem(newData);
        } else {
            console.log('empty');
        }

        const idFilterAllArray = selectItemTwo.find((e_id) => e_id.id === id.id);
        console.log('my id two', idFilterArray);
        if (idFilterAllArray?.role === '') {
            const newAllIndex = selectItemTwo.indexOf(idFilterAllArray);
            // const setRole = selectRole
            console.log('new Check', role);
            const newAllData = [...selectItemTwo];
            newAllData[newAllIndex].role = role;
            setSelectItemTwo(newAllData);
        } else {
            console.log('empty');
        }
    };

    const handleCount = (id) => {
        setSelectItem([...selectItem, id]);
        // setSelectItem([...selectItem, id])
        setSelectItemId([...selectItemId, id.id]);
        setSelectRole('');
        const idFilterArray = selectItem.find((e_id) => e_id.id === id.id);
        console.log(idFilterArray);
        if (idFilterArray) {
            const newIndex = selectItem.indexOf(idFilterArray);
            console.log(newIndex);
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
        const allFilterCheck = selectItemTwo.find((e_id) => e_id.id === id.id);
        if (allFilterCheck && isTrue === true) {
            const allCheckIndex = selectItemTwo.indexOf(allFilterCheck);
            if (allCheckIndex > -1) {
                const newData = [...selectItemTwo];
                newData.splice(allCheckIndex, 1);
                setSelectItemTwo(newData);
            }
        }
    };

    const handleSelectItem = () => {
        props.setSelectMentor(props.addItem);
    };

    const handleItemAddToMentorList = () => {
        dispatch(addMentorOfflineToMentorList(selectItem));
        dispatch(removeMentorFromOfflineAddList(selectItemId));

        props.setShowMentorList(true);
    };

    const handleAllItemAddToMentorList = () => {
        dispatch(addMentorOfflineToMentorList(selectItemTwo));
        dispatch(removeMentorFromOfflineAddList(newSelectId));

        props.setShowMentorList(true);
    };

    const handleAllSelect = () => {
        setAllCheck(!allCheck);
    };

    const handelAddStuffPartner = () => {
        setShowStuffPartner(true);
    };
    useEffect(() => {
        setSelectItemTwo(offlineAddList);
    }, []);

    return (
        <div id="onlineAndOffLineMember">
            <div className="memberSearch__container">
                <input
                    type="text"
                    placeholder="Search Now..."
                    className="memberSearch__input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <img
                    className="memberSearch__icon"
                    src="../assets/images/icons/search.svg"
                    alt=""
                    srcset=""
                />

                <div>
                    <button
                        className="mentorAdd"
                        mentorAdd
                        onClick={
                            allCheck === false
                                ? handleItemAddToMentorList
                                : handleAllItemAddToMentorList
                        }>
                        <i className="">
                            <FaUserPlus icon={faUserPlus} />
                        </i>{' '}
                        Add Member
                    </button>
                </div>
            </div>

            <div className="member-lists text-center">
                {props.showDataForMentor !== undefined ? (
                    <div id="onlineAndOffLineMember">
                        <div
                            className="select__mentor text-white p-2 d-flex justify-content-between"
                            style={{ backgroundColor: '#E22424' }}>
                            <label for="select-all" className="checkbox-container mt-2">
                                Select All
                                <input id="select-all" type="checkbox" onClick={handleAllSelect} />
                                <span className="checkmark"></span>
                            </label>
                            <h6 className="">Role</h6>
                            <h6 className="mr-2">selected 5 person</h6>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* {showStuffPartner === true && ( */}
                        <div id="onlineAndOffLineMember">
                            <div
                                className="select__mentor text-white p-2 d-flex justify-content-between"
                                style={{ backgroundColor: '#E22424' }}>
                                <label for="select-all" className="checkbox-container mt-2">
                                    Select All
                                    <input
                                        id="select-all"
                                        type="checkbox"
                                        onClick={handleAllSelect}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <h6 className="">Role</h6>
                                <h6 className="mr-2">selected 5 person</h6>
                            </div>
                        </div>
                        {/* // )} */}
                    </div>
                )}

                {props.showDataForMentor !== undefined ? (
                    <div>
                        {searchInput !== '' ? (
                            <div>
                                {searchResult.map((addItem, index) => (
                                    <OfflineAddUserMapList
                                        handleCount={handleCount}
                                        allCheck={allCheck}
                                        addItem={addItem}
                                        handleAllSelectCount={handleAllSelectCount}
                                        handleMentorRole={handleMentorRole}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                {offlineAddList.map((addItem, index) => (
                                    <OfflineAddUserMapList
                                        handleCount={handleCount}
                                        allCheck={allCheck}
                                        addItem={addItem}
                                        handleAllSelectCount={handleAllSelectCount}
                                        handleMentorRole={handleMentorRole}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {/* {showStuffPartner === true && ( */}
                        <div>
                            {searchInput !== '' ? (
                                <div>
                                    {searchResult.map((addItem, index) => (
                                        <OfflineAddUserMapList
                                            handleCount={handleCount}
                                            allCheck={allCheck}
                                            addItem={addItem}
                                            handleAllSelectCount={handleAllSelectCount}
                                            handleMentorRole={handleMentorRole}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {offlineAddList.map((addItem, index, array) => (
                                        <OfflineAddUserMapList
                                            handleCount={handleCount}
                                            allCheck={allCheck}
                                            addItem={addItem}
                                            handleAllSelectCount={handleAllSelectCount}
                                            handleMentorRole={handleMentorRole}
                                            handleAllSelect={handleAllSelect}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* )} */}

                        {/* {showStuffPartner === false && (
              <div>
                <h4 className="">
                  You Did Not Add Any Mentor In Your Staff And Partner (Offline
                  User) List
                </h4>
                <button
                  className="mentorAddStuff btn btn-lg mt-4"
                  style={{ border: "1px solid gray", paddingBottom: "20px" }}
                  onClick={handelAddStuffPartner}
                >
                  Add stuff and Partner
                </button>
              </div>
            )} */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OfflineAddUserList;

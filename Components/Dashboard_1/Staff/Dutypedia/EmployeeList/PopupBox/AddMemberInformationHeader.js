import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import {
    user_email,
    user_first_name,
    user_id,
    user_image,
    user_last_name,
    user_middle_name,
    user_mobile_no
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/index';
import { SearchBox } from '../../../../../../Utilities/Utilites';
import UserData from '../../../UserData.json';

function AddMemberInformationHeader({ setHiddenPopupFrom }) {
    let [clickBox, setClickBox] = useState(false);
    let [searchValue, setSearchValue] = useState('');
    let [pickData, setPickData] = useState(true);

    function searchHendeler(e) {
        e.preventDefault();
        setSearchValue(e.target.value);
        e.target.value === '' ? setClickBox(false) : setClickBox(true);
        e.target.value === '' ? setHiddenPopupFrom(true) : setHiddenPopupFrom(false);
        setPickData(true);
    }

    return (
        <>
            {/* <div className={StyleSheet.add__member__imformation__header__container__input}>
                <div
                    className={
                        StyleSheet.add__member__imformation__header__container__input__search__box
                    }>
                    <input
                        type="text"
                        id="userSearch"
                        placeholder="Search by user...."
                        onChange={searchHendeler}
                    />

                    <label htmlFor="userSearch">
                        <Image src={SearchIcon} alt="" />
                    </label>
                </div>
            </div> */}

            <SearchBox
                action={searchHendeler}
                name="userSearch"
                value={searchValue}
                placeholder={'Search by user....'}
            />

            {clickBox && (
                <SearchOutput
                    searchValue={searchValue}
                    setHiddenPopupFrom={setHiddenPopupFrom}
                    pickData={pickData}
                    setPickData={setPickData}
                />
            )}
        </>
    );
}

// another function
function SearchOutput({ searchValue, setHiddenPopupFrom, pickData, setPickData }) {
    const dispatch = useDispatch();

    const boxClickHendeler = (name, user) => {
        setHiddenPopupFrom(true);
        setPickData(false);
        dispatch(user_first_name(name.length <= 3 ? name[0] : name[0]));
        dispatch(user_middle_name(name.length === 3 && name.length < 4 ? name[1] : ''));
        dispatch(user_last_name(name.length === 2 && name.length >= 2 ? name[1] : name[2]));
        dispatch(user_id(user.id));
        dispatch(user_mobile_no(user.mobileNo));
        dispatch(user_email(user.email));
        dispatch(user_image(user.image));
    };

    return (
        <div className="w-full h-[370px] mt-[20px] pr-[13px] pl-[4px] overflow-auto scrollbar">
            {setHiddenPopupFrom
                ? pickData
                    ? UserData.filter((user) => {
                          if (user.name.toLowerCase().includes(searchValue.toLowerCase())) {
                              return user;
                          }
                          return false;
                      }).map((user, index) => {
                          let name = user.name.split(' ');
                          return (
                              <div
                                  key={index}
                                  onClick={() => boxClickHendeler(name, user)}
                                  className="w-full h-[80px] relative mt-[6px] mb-[13px]">
                                  <div className="w-full h-[80px] grid align-middle justify-start pt-[8px] pb-[8px] pl-[13px] pr-[13px] shadow-3xl rounded-[7px] grid-cols-5 grid-rows-2 ">
                                      <div className="w-full col-start-1 col-end-1 row-span-2 relative">
                                          <Image
                                              className="w-full h-full rounded-[5px]"
                                              width={68}
                                              height={58}
                                              src={user.image}
                                              alt={user.name}
                                          />
                                          <div className="w-[22px] h-[22px] absolute inline-block top-[70%] left-[68%]">
                                              <DutyPreIcon height={'22'} width={'22'} />
                                          </div>
                                      </div>
                                      <div className="col-start-2 col-end-6 row-start-1 row-end-3">
                                          <div className="w-full h-auto text-[21px] text-[#666666]">
                                              {user.name}
                                          </div>
                                          <div className="w-full h-auto text-[14.5px] pt-[3px] text-[#bcbcbc]">
                                              Id: DP0324-23{user.id}
                                          </div>
                                      </div>
                                  </div>
                                  <div
                                      className="w-full h-[80px] absolute top-0 left-0"
                                      onClick={(e) => {
                                          e.target.parentElement.parentElement.style.height = '0vw';
                                      }}></div>
                              </div>
                          );
                      })
                    : ''
                : ''}
        </div>
    );
}

export default React.memo(AddMemberInformationHeader);

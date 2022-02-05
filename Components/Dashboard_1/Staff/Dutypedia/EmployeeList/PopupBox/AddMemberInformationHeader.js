import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '../../../../../../Assets/icon/search.svg';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import {
    user_email,
    user_first_name,
    user_id,
    user_image,
    user_last_name,
    user_middle_name,
    user_mobile_no
} from '../../../../../../Redux/Dashboard_1/Action/Dutypedia/index';
import UserData from '../../../UserData.json';
import StyleSheet from '../PopupBoxStyle/AddMemberInformationHeader.module.css';


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
            <div className={StyleSheet.add__member__imformation__header__container__input}>
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
            </div>

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
        <div className={StyleSheet.add__member__imformation__header__container__output}>
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
                                  className={StyleSheet.user__about__main}>
                                  <div className={StyleSheet.user__about__container}>
                                      <div className={StyleSheet.user__about__container__image}>
                                          <Image width={"82%"} height={"82%"} src={user.image} alt={user.name} />
                                          <DutyPreIcon/>
                                      </div>
                                      <div className={StyleSheet.user__about__container__name__id}>
                                          <div
                                              className={
                                                  StyleSheet.user__about__container__name__id__name
                                              }>
                                              {user.name}
                                          </div>
                                          <div
                                              className={
                                                  StyleSheet.user__about__container__name__id__id
                                              }>
                                              Id: DP0324-23{user.id}
                                          </div>
                                      </div>
                                  </div>
                                  <div
                                      className={StyleSheet.main__click__box}
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

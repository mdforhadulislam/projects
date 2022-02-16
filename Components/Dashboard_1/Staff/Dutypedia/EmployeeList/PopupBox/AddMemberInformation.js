import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    first_name,
    last_name,
    middle_name,
    //     removed_user_documents,
    user_blood_group,
    user_date_of_birth,
    user_gender,
    //     user_documents,
    user_nationality,
    //     user_permanent_address_address,
    //     user_permanent_address_area,
    //     user_permanent_address_city,
    //     user_permanent_address_region,
    //     user_present_address_address,
    //     user_present_address_area,
    //     user_present_address_city,
    //     user_present_address_region,
    user_religion
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/index';
import Address from '../../../../../../Utilities/Address';
import {
    BloodGroup,
    DateOfBirth,
    Gender,
    MemberCheckbox,
    Name,
    Nationality,
    Religion
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/AddMemberInformation.module.css';
import AddMemberInformationHeader from './AddMemberInformationHeader';

function AddMemberInformation({ setAddInformationPopup, setCreateEmployeePopup }) {
    const [hiddenPopupFrom, setHiddenPopupFrom] = useState(true);

    const [joinAs, setJoinAs] = useState({ staff: false, member: false });

    const dispatch = useDispatch();

    // const member_and_staff = useSelector((state) => state.dutypedia.member_and_staff);
    const firstName = useSelector((state) => state.dutypedia.first_name);
    const middleName = useSelector((state) => state.dutypedia.middle_name);
    const lastName = useSelector((state) => state.dutypedia.last_name);
    const userGender = useSelector((state) => state.dutypedia.gender);
    const bloodGroup = useSelector((state) => state.dutypedia.blood_group);
    const dateOfBirth = useSelector((state) => state.dutypedia.date_of_birth);
    const religion = useSelector((state) => state.dutypedia.religion);
    const nationality = useSelector((state) => state.dutypedia.nationality);

    // const presentAddressRegion = useSelector((state) => state.dutypedia.presentAddress.region);
    // const presentAddressCity = useSelector((state) => state.dutypedia.presentAddress.city);
    // const presentAddressArea = useSelector((state) => state.dutypedia.presentAddress.area);
    // const presentAddressAddress = useSelector((state) => state.dutypedia.presentAddress.address);

    // const permanentAddressRegion = useSelector((state) => state.dutypedia.permanentAddress.region);
    // const permanentAddressCity = useSelector((state) => state.dutypedia.permanentAddress.city);
    // const permanentAddressArea = useSelector((state) => state.dutypedia.permanentAddress.area);
    // const permanentAddressAddress = useSelector(
    //     (state) => state.dutypedia.permanentAddress.address
    // );

    // const uploadeFile = useSelector((state) => state.dutypedia.uploadingFile.user_documentes);

    const fromSubmitHendeler = (e) => {
        e.preventDefault();
        setCreateEmployeePopup(true);
        setAddInformationPopup(false);
    };

    return (
        <div className={StyleSheet.information__container}>
            <form
                className={StyleSheet.information__container__from__box}
                onSubmit={fromSubmitHendeler}>
                <div className={StyleSheet.information__container__from__box__search__box}>
                    <AddMemberInformationHeader setHiddenPopupFrom={setHiddenPopupFrom} />
                </div>
                {hiddenPopupFrom ? (
                    <>
                        <div
                            className={
                                StyleSheet.information__container__from__box__joining__checkBox
                            }>
                            <div
                                className={
                                    StyleSheet.information__container__from__box__joining__checkBox__title
                                }>
                                Join
                            </div>
                            <div
                                className={
                                    StyleSheet.information__container__from__box__joining__checkBox__box
                                }>
                                <MemberCheckbox
                                    title="As A Member"
                                    name="as_a_member"
                                    actions={(value) => {
                                        setJoinAs((prev) =>
                                            prev.member
                                                ? { ...prev, staff: true, member: false }
                                                : { ...prev, staff: false, member: true }
                                        );
                                    }}
                                    value={joinAs.member}
                                />
                                <MemberCheckbox
                                    title="As A Staff"
                                    name="as_a_staff"
                                    actions={(value) => {
                                        setJoinAs((prev) =>
                                            prev.staff
                                                ? { ...prev, staff: false, member: true }
                                                : { ...prev, staff: true, member: false }
                                        );
                                    }}
                                    value={joinAs.staff}
                                />
                            </div>
                        </div>
                        <div className={StyleSheet.information__container__from__box__name__box}>
                            <Name
                                title="First Name"
                                actions={(value) => dispatch(first_name(value))}
                                value={firstName}
                            />
                            <Name
                                title="Middle Name"
                                actions={(value) => dispatch(middle_name(value))}
                                value={middleName}
                            />

                            <Name
                                title="Last Name"
                                actions={(value) => dispatch(last_name(value))}
                                value={lastName}
                            />
                        </div>
                        <div className={StyleSheet.information__container__from__box__select__box}>
                            <div
                                className={
                                    StyleSheet.information__container__from__box__select__box__row__one
                                }>
                                <Gender
                                    title="Gender"
                                    actions={(value) => dispatch(user_gender(value))}
                                    value={userGender}
                                />
                                <BloodGroup
                                    title="Blood  Group"
                                    actions={(value) => dispatch(user_blood_group(value))}
                                    value={bloodGroup}
                                />
                            </div>
                            <div
                                className={
                                    StyleSheet.information__container__from__box__select__box__row__two
                                }>
                                <DateOfBirth
                                    title="Date Of Birth"
                                    actions={(value) => dispatch(user_date_of_birth(value))}
                                    value={dateOfBirth}
                                />
                                <Religion
                                    title="Religion"
                                    actions={(value) => dispatch(user_religion(value))}
                                    value={religion}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                StyleSheet.information__container__from__box__nationality__box
                            }>
                            <Nationality
                                title="Nationality"
                                actions={(value) => dispatch(user_nationality(value))}
                                value={nationality}
                            />
                        </div>
                        <div
                            className={
                                StyleSheet.information__container__from__box__present__address
                            }>
                            <Address
                                title="Present Address:"
                                present={true}
                                permanent={false}
                                regionAction={(value) =>
                                    dispatch(user_present_address_region(value))
                                }
                                cityAction={(value) => dispatch(user_present_address_city(value))}
                                areaAction={(value) => dispatch(user_present_address_area(value))}
                                addressAction={(value) =>
                                    dispatch(user_present_address_address(value))
                                }
                            />
                        </div>
                        <div
                            className={
                                StyleSheet.information__container__from__box__permanent__address
                            }>
                            <Address
                                title="Permanent Address:"
                                present={false}
                                permanent={true}
                                regionAction={(value) =>
                                    dispatch(user_permanent_address_region(value))
                                }
                                cityAction={(value) => dispatch(user_permanent_address_city(value))}
                                areaAction={(value) => dispatch(user_permanent_address_area(value))}
                                addressAction={(value) =>
                                    dispatch(user_permanent_address_address(value))
                                }
                            />
                        </div>
                        <div
                            className={
                                StyleSheet.information__container__from__box__upload__documents__box
                            }>
                            {/* <UploadingFile
                            uploadeFile={uploadeFile}
                            actions={(value) => dispatch(user_documents(value))}
                            deleteActions={(value) => {
                                dispatch(removed_user_documents(value));
                            }}
                            /> */}
                        </div>
                        <div
                            className={
                                StyleSheet.information__container__from__box__next__and__cencel__btn
                            }>
                            <button
                                type="submit"
                                className={
                                    StyleSheet.information__container__from__box__next__and__cencel__btn__next__btn
                                }>
                                Next
                            </button>
                            <button
                                type="button"
                                className={
                                    StyleSheet.information__container__from__box__next__and__cencel__btn__cencel__btn
                                }
                                onClick={() => {
                                    setAddInformationPopup(false);
                                }}>
                                Cencel
                            </button>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </form>
        </div>
    );
}

export default React.memo(AddMemberInformation);

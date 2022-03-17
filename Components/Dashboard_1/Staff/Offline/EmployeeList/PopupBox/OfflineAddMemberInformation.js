import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    offline_user_add_documentes,
    offline_user_as_a_member,
    offline_user_as_a_staff,
    offline_user_blood_group,
    offline_user_date_of_birth,
    offline_user_email,
    offline_user_first_name,
    offline_user_gender,
    offline_user_last_name,
    offline_user_middle_name,
    offline_user_mobile_no,
    offline_user_nationality,
    offline_user_permanent_address_address,
    offline_user_permanent_address_area,
    offline_user_permanent_address_city,
    offline_user_permanent_address_region,
    offline_user_present_address_address,
    offline_user_present_address_area,
    offline_user_present_address_city,
    offline_user_present_address_region,
    offline_user_profile_image,
    offline_user_religion,
    offline_user_removed_documentes
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Offline/index';
import Address from '../../../../../../Utilities/Address';
import UploadingFile from '../../../../../../Utilities/UploadingFile';
import UploadProfileImage from '../../../../../../Utilities/UploadProfileImage';
import {
    BloodGroup,
    Email,
    Gender,
    MemberCheckbox,
    MobileNo,
    Name,
    Nationality,
    Religion,
    SetDate
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/OfflineAddMemberInformation.module.css';

function OfflineAddMemberInformation({
    setOfflineAddMemberInformationPopup,
    setOfflineCreateMemberPopup
}) {
    const {
        name,
        email_and_mobile_no,
        mamber_and_staff,
        gender_and_blood_group,
        birthDate_and_religion,
        upload_image_and_nationality,
        user_documentes,
        presentAddress,
        permanentAddress
    } = useSelector((state) => state.offline);

    const dispatch = useDispatch();

    return (
        <div className={StyleSheet.offline__add__member__information}>
            <form
                className={StyleSheet.offline__add__member__information__container}
                onSubmit={(e) => {
                    e.preventDefault();
                    setOfflineAddMemberInformationPopup(false);
                    setOfflineCreateMemberPopup(true);
                }}>
                <div
                    className={
                        StyleSheet.offline__add__member__information__container__profile__container
                    }>
                    <UploadProfileImage
                        value={upload_image_and_nationality.user_profile_image}
                        actions={(value) => {
                            dispatch(offline_user_profile_image(value));
                        }}
                        decprition="Upload Photo 2Mb At Lest"
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__one}>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__one__title
                        }>
                        Join
                    </div>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__one__checkBox
                        }>
                        <MemberCheckbox
                            title="As A Member"
                            name="as_a_member"
                            value={mamber_and_staff.user_as_a_member}
                            actions={(value) => dispatch(offline_user_as_a_member(value))}
                        />

                        <MemberCheckbox
                            title="As A  Staff"
                            name="as_a_staff"
                            value={mamber_and_staff.user_as_a_staff}
                            actions={(value) => dispatch(offline_user_as_a_staff(value))}
                        />
                    </div>
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__two}>
                    <Name
                        title="First Name"
                        actions={(value) => dispatch(offline_user_first_name(value))}
                        value={name.user_first_name}
                    />
                    <Name
                        title="Middle Name"
                        actions={(value) => dispatch(offline_user_middle_name(value))}
                        value={name.user_middle_name}
                    />
                    <Name
                        title="Last Name"
                        actions={(value) => dispatch(offline_user_last_name(value))}
                        value={name.user_last_name}
                    />
                </div>

                <div
                    className={StyleSheet.offline__add__member__information__container__row__three}>
                    <Gender
                        title="Gender"
                        value={gender_and_blood_group.user_gender}
                        actions={(value) => dispatch(offline_user_gender(value))}
                    />
                    <BloodGroup
                        title="Blood  Group"
                        value={gender_and_blood_group.user_blood_group}
                        actions={(value) => dispatch(offline_user_blood_group(value))}
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__four}>
                    <SetDate
                        title="Date Of Birth"
                        value={birthDate_and_religion.user_date_of_birth}
                        actions={(value) => dispatch(offline_user_date_of_birth(value))}
                    />
                    <Religion
                        title="Religion"
                        value={birthDate_and_religion.user_religion}
                        actions={(value) => dispatch(offline_user_religion(value))}
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__five}>
                    <Nationality
                        title="Nationality"
                        value={upload_image_and_nationality.user_nationality}
                        actions={(value) => dispatch(offline_user_nationality(value))}
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__six}>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__six__left
                        }>
                        <MobileNo
                            title="Mobile No"
                            value={email_and_mobile_no.user_mobile_no}
                            actions={(value) => {
                                dispatch(offline_user_mobile_no(value));
                            }}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__six__right
                        }>
                        (Not Required, Optional)
                    </div>
                </div>

                <div
                    className={StyleSheet.offline__add__member__information__container__row__seven}>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__seven__left
                        }>
                        <Email
                            title="Email"
                            value={email_and_mobile_no.user_email}
                            actions={(value) => {
                                dispatch(offline_user_email(value));
                            }}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.offline__add__member__information__container__row__seven__right
                        }>
                        (Not Required, Optional)
                    </div>
                </div>

                <div
                    className={StyleSheet.offline__add__member__information__container__row__eight}>
                    <Address
                        title="Present Address:"
                        present={true}
                        permanent={false}
                        regionValue={presentAddress.region}
                        cityValue={presentAddress.city}
                        areaValue={presentAddress.area}
                        addressValue={presentAddress.address}
                        regionAction={(value) =>
                            dispatch(offline_user_present_address_region(value))
                        }
                        cityAction={(value) => dispatch(offline_user_present_address_city(value))}
                        areaAction={(value) => dispatch(offline_user_present_address_area(value))}
                        addressAction={(value) =>
                            dispatch(offline_user_present_address_address(value))
                        }
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__nine}>
                    <Address
                        title="Permanent Address:"
                        present={false}
                        permanent={true}
                        regionValue={permanentAddress.region}
                        cityValue={permanentAddress.city}
                        areaValue={permanentAddress.area}
                        addressValue={permanentAddress.address}
                        regionAction={(value) =>
                            dispatch(offline_user_permanent_address_region(value))
                        }
                        cityAction={(value) => dispatch(offline_user_permanent_address_city(value))}
                        areaAction={(value) => dispatch(offline_user_permanent_address_area(value))}
                        addressAction={(value) =>
                            dispatch(offline_user_permanent_address_address(value))
                        }
                    />
                </div>

                <div className={StyleSheet.offline__add__member__information__container__row__ten}>
                    <UploadingFile
                        uploadeFile={user_documentes.user_documentes}
                        actions={(value) => {
                            dispatch(offline_user_add_documentes(value));
                        }}
                        deleteActions={(value) => {
                            dispatch(offline_user_removed_documentes(value));
                        }}
                    />
                </div>

                <div
                    className={
                        StyleSheet.offline__add__member__information__container__row__eleven
                    }>
                    <button
                        type="submit"
                        className={
                            StyleSheet.offline__add__member__information__container__row__eleven__next__btn
                        }>
                        Next
                    </button>
                    <button
                        type="button"
                        className={
                            StyleSheet.offline__add__member__information__container__row__eleven__cancel__btn
                        }
                        onClick={() => {
                            setOfflineAddMemberInformationPopup(false);
                        }}>
                        Cencel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default React.memo(OfflineAddMemberInformation);

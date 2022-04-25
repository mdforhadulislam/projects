import React from 'react';
import { useDispatch } from 'react-redux';
import {
    edit_offline_user_add_file,
    edit_offline_user_as_a_member,
    edit_offline_user_as_a_staff,
    edit_offline_user_blood_group,
    edit_offline_user_date_of_birth,
    edit_offline_user_email,
    edit_offline_user_gender,
    edit_offline_user_mobile_no,
    edit_offline_user_name,
    edit_offline_user_nationality,
    edit_offline_user_permanent_address_address,
    edit_offline_user_permanent_address_area,
    edit_offline_user_permanent_address_city,
    edit_offline_user_permanent_address_region,
    edit_offline_user_present_address_address,
    edit_offline_user_present_address_area,
    edit_offline_user_present_address_city,
    edit_offline_user_present_address_region,
    edit_offline_user_profile_image,
    edit_offline_user_religion,
    edit_offline_user_removed_file
} from '../../../../../../Redux/Actions/multiple_dashboard/Staff_And_Partner/Offline/offlineEditHendeler';
import Address from '../../../../../../Utilities/Address';
import UploadingFile from '../../../../../../Utilities/UploadingFile';
import UploadProfileImage from '../../../../../../Utilities/UploadProfileImage';
import {
    BloodGroup,
    DateOfBirth,
    Email,
    Gender,
    MemberCheckbox,
    MobileNo,
    Name,
    Nationality,
    Religion
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditMemberInformation.module.css';

function EditMemberInformation({ user, setEditMemberInformation, setEditCreateMember }) {
    const dispatch = useDispatch();
    return (
        <div className={StyleSheet.offline__edit__member__information}>
            <form
                className={StyleSheet.offline__edit__member__information__container}
                onSubmit={(e) => {
                    e.preventDefault();
                    setEditMemberInformation(false);
                    setEditCreateMember(true);
                }}>
                <div
                    className={
                        StyleSheet.offline__edit__member__information__container__profile__container
                    }>
                    <UploadProfileImage
                        value={user.user_image}
                        actions={(value) => {
                            dispatch(edit_offline_user_profile_image({ id: user.user_id, value }));
                        }}
                        decprition="Upload Photo 2Mb At Lest"
                    />
                </div>

                <div className={StyleSheet.offline__edit__member__information__container__row__one}>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__one__title
                        }>
                        Join
                    </div>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__one__checkBox
                        }>
                        <MemberCheckbox
                            title="As A Member"
                            name="as_a_member"
                            value={user.user_as_a_member}
                            actions={(value) => {
                                dispatch(
                                    edit_offline_user_as_a_member({
                                        id: user.user_id,
                                        value: user.user_as_a_member ? false : true
                                    })
                                );
                            }}
                        />
                        <MemberCheckbox
                            title="As A  Staff"
                            name="as_a_staff"
                            value={user.user_as_a_staff}
                            actions={(value) => {
                                dispatch(
                                    edit_offline_user_as_a_staff({
                                        id: user.user_id,
                                        value: user.user_as_a_staff ? false : true
                                    })
                                );
                            }}
                        />
                    </div>
                </div>

                <div className={StyleSheet.offline__edit__member__information__container__row__two}>
                    <Name
                        title="First Name"
                        actions={(value) => {
                            dispatch(
                                edit_offline_user_name({
                                    id: user.user_id,
                                    first_name: value,
                                    middle_name: user.name.split(' ')[1],
                                    last_name: user.name.split(' ')[2]
                                })
                            );
                        }}
                        value={user.name.split(' ')[0]}
                    />
                    <Name
                        title="Middle Name"
                        actions={(value) => {
                            dispatch(
                                edit_offline_user_name({
                                    id: user.user_id,
                                    first_name: user.name.split(' ')[0],
                                    middle_name: value,
                                    last_name: user.name.split(' ')[2]
                                })
                            );
                        }}
                        value={user.name.split(' ')[1]}
                    />
                    <Name
                        title="Last Name"
                        actions={(value) => {
                            dispatch(
                                edit_offline_user_name({
                                    id: user.user_id,
                                    first_name: user.name.split(' ')[0],
                                    middle_name: user.name.split(' ')[1],
                                    last_name: value
                                })
                            );
                        }}
                        value={user.name.split(' ')[2]}
                    />
                </div>

                <div
                    className={
                        StyleSheet.offline__edit__member__information__container__row__three
                    }>
                    <Gender
                        title="Gender"
                        value={user.user_gender}
                        actions={(value) => {
                            dispatch(edit_offline_user_gender({ id: user.user_id, value }));
                        }}
                    />
                    <BloodGroup
                        title="Blood  Group"
                        value={user.user_blood_group}
                        actions={(value) => {
                            dispatch(edit_offline_user_blood_group({ id: user.user_id, value }));
                        }}
                    />
                </div>

                <div
                    className={StyleSheet.offline__edit__member__information__container__row__four}>
                    <DateOfBirth
                        title="Date Of Birth"
                        value={user.user_date_of_birth}
                        actions={(value) => {
                            dispatch(edit_offline_user_date_of_birth({ id: user.user_id, value }));
                        }}
                    />
                    <Religion
                        title="Religion"
                        value={user.user_religion}
                        actions={(value) => {
                            dispatch(edit_offline_user_religion({ id: user.user_id, value }));
                        }}
                    />
                </div>

                <div
                    className={StyleSheet.offline__edit__member__information__container__row__five}>
                    <Nationality
                        title="Nationality"
                        value={user.user_nationality}
                        actions={(value) => {
                            dispatch(edit_offline_user_nationality({ id: user.user_id, value }));
                        }}
                    />
                </div>

                <div className={StyleSheet.offline__edit__member__information__container__row__six}>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__six__left
                        }>
                        <MobileNo
                            title="Mobile No"
                            value={user.user_mobile_no}
                            actions={(value) => {
                                dispatch(edit_offline_user_mobile_no({ id: user.user_id, value }));
                            }}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__six__right
                        }>
                        (Not Required, Optional)
                    </div>
                </div>

                <div
                    className={
                        StyleSheet.offline__edit__member__information__container__row__seven
                    }>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__seven__left
                        }>
                        <Email
                            title="Email"
                            value={user.user_email}
                            actions={(value) => {
                                dispatch(edit_offline_user_email({ id: user.user_id, value }));
                            }}
                        />
                    </div>
                    <div
                        className={
                            StyleSheet.offline__edit__member__information__container__row__seven__right
                        }>
                        (Not Required, Optional)
                    </div>
                </div>

                <div
                    className={
                        StyleSheet.offline__edit__member__information__container__row__eight
                    }>
                    <Address
                        title="Present Address:"
                        present={true}
                        permanent={false}
                        regionValue={user.presentAddress.region}
                        cityValue={user.presentAddress.city}
                        areaValue={user.presentAddress.area}
                        addressValue={user.presentAddress.address}
                        regionAction={(value) => {
                            dispatch(
                                edit_offline_user_present_address_region({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                        cityAction={(value) => {
                            dispatch(
                                edit_offline_user_present_address_city({ id: user.user_id, value })
                            );
                        }}
                        areaAction={(value) => {
                            dispatch(
                                edit_offline_user_present_address_area({ id: user.user_id, value })
                            );
                        }}
                        addressAction={(value) => {
                            dispatch(
                                edit_offline_user_present_address_address({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                    />
                </div>

                <div
                    className={StyleSheet.offline__edit__member__information__container__row__nine}>
                    <Address
                        title="Permanent Address:"
                        present={false}
                        permanent={true}
                        regionValue={user.permanentAddress.region}
                        cityValue={user.permanentAddress.city}
                        areaValue={user.permanentAddress.area}
                        addressValue={user.permanentAddress.address}
                        regionAction={(value) => {
                            dispatch(
                                edit_offline_user_permanent_address_region({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                        cityAction={(value) => {
                            dispatch(
                                edit_offline_user_permanent_address_city({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                        areaAction={(value) => {
                            dispatch(
                                edit_offline_user_permanent_address_area({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                        addressAction={(value) => {
                            dispatch(
                                edit_offline_user_permanent_address_address({
                                    id: user.user_id,
                                    value
                                })
                            );
                        }}
                    />
                </div>

                <div className={StyleSheet.offline__edit__member__information__container__row__ten}>
                    <UploadingFile
                        uploadeFile={user.user_documentes}
                        actions={(value) => {
                            dispatch(edit_offline_user_add_file({ id: user.user_id, value }));
                        }}
                        deleteActions={(value) => {
                            dispatch(edit_offline_user_removed_file({ id: user.user_id, value }));
                        }}
                    />
                </div>

                <div
                    className={
                        StyleSheet.offline__edit__member__information__container__row__eleven
                    }>
                    <button
                        type="submit"
                        className={
                            StyleSheet.offline__edit__member__information__container__row__eleven__next__btn
                        }>
                        Next
                    </button>
                    <button
                        type="button"
                        className={
                            StyleSheet.offline__edit__member__information__container__row__eleven__cancel__btn
                        }
                        onClick={() => {
                            setEditMemberInformation(false);
                        }}>
                        Cencel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default React.memo(EditMemberInformation);

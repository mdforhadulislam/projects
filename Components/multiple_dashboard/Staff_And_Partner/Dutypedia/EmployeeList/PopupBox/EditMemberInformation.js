import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import {
    user_blood_group_edit,
    user_date_of_birth_edit,
    user_gender_edit,
    user_mamber_edit,
    user_name_edit,
    user_nationality_edit,
    user_permanent_address_address_edit,
    user_permanent_address_area_edit,
    user_permanent_address_city_edit,
    user_permanent_address_region_edit,
    user_present_address_address_edit,
    user_present_address_area_edit,
    user_present_address_city_edit,
    user_present_address_region_edit,
    user_religion_edit,
    user_staff_edit,
    user_uploading_file_delete_edit,
    user_uploading_file_edit
} from '../../../../../../Redux/Actions/multiple_dashboard/Staff_And_Partner/Dutypedia/editHeandeler';
import Address from '../../../../../../Utilities/Address';
import UploadingFile from '../../../../../../Utilities/UploadingFile';
import {
    BloodGroup,
    DateOfBirth,
    Gender,
    MemberCheckbox,
    Name,
    Nationality,
    Religion
} from '../../../../../../Utilities/Utilites';
import StyleSheet from '../PopupBoxStyle/EditMemberInformation.module.css';


function EditMemberInformation({
    user,
    setRenderEditMemberInformation,
    setRenderEditCreateEmployee
}) {
    const dispatch = useDispatch();

    return (
        <div className={StyleSheet.edit__member__information}>
            <div className={StyleSheet.edit__member__information__container}>
                <div className={StyleSheet.edit__member__information__container__checkbox}>
                    <div
                        className={
                            StyleSheet.edit__member__information__container__checkbox__title
                        }>
                        Join
                    </div>
                    <div
                        className={
                            StyleSheet.edit__member__information__container__checkbox__container
                        }>
                        <MemberCheckbox
                            title="As A Member"
                            name="as_a_member"
                            actions={(value) =>
                                dispatch(
                                    user_mamber_edit({
                                        id: user.user_id,
                                        user_as_a_member: user.user_as_a_member ? false : true
                                    })
                                )
                            }
                            value={user.user_as_a_member}
                        />
                        <MemberCheckbox
                            title="As A Staff"
                            name="as_a_staff"
                            actions={(value) =>
                                dispatch(
                                    user_staff_edit({
                                        id: user.user_id,
                                        user_as_a_staff: user.user_as_a_staff ? false : true
                                    })
                                )
                            }
                            value={user.user_as_a_staff}
                        />
                    </div>
                </div>

                <div className={StyleSheet.edit__member__information__container__name__container}>
                    <Name
                        title="First Name"
                        value={user.name.split(' ')[0]}
                        actions={(value) =>
                            dispatch(
                                user_name_edit({
                                    id: user.user_id,
                                    firstName: value,
                                    middleName: user.name.split(' ')[1],
                                    lastName: user.name.split(' ')[2]
                                })
                            )
                        }
                    />
                    <Name
                        title="Middle Name"
                        value={user.name.split(' ')[1]}
                        actions={(value) =>
                            dispatch(
                                user_name_edit({
                                    id: user.user_id,
                                    middleName: value,
                                    firstName: user.name.split(' ')[0],
                                    lastName: user.name.split(' ')[2]
                                })
                            )
                        }
                    />
                    <Name
                        title="Last Name"
                        value={user.name.split(' ')[2]}
                        actions={(value) =>
                            dispatch(
                                user_name_edit({
                                    id: user.user_id,
                                    lastName: value,
                                    middleName: user.name.split(' ')[1],
                                    firstName: user.name.split(' ')[0]
                                })
                            )
                        }
                    />
                </div>

                <div
                    className={
                        StyleSheet.edit__member__information__container__gender__blood_group
                    }>
                    <Gender
                        title="Gender"
                        value={user.user_gender}
                        actions={(value) =>
                            dispatch(user_gender_edit({ id: user.user_id, user_gender: value }))
                        }
                    />

                    <BloodGroup
                        title="Blood Group"
                        value={user.user_blood_group}
                        actions={(value) =>
                            dispatch(
                                user_blood_group_edit({ id: user.user_id, user_blood_group: value })
                            )
                        }
                    />
                </div>

                <div
                    className={
                        StyleSheet.edit__member__information__container__date__of__birth__religion
                    }>
                    <DateOfBirth
                        title="Date Of Birth"
                        value={user.user_date_of_birth}
                        actions={(value) =>
                            dispatch(
                                user_date_of_birth_edit({
                                    id: user.user_id,
                                    user_date_of_birth: value
                                })
                            )
                        }
                    />

                    <Religion
                        title="Religion"
                        value={user.user_religion}
                        actions={(value) =>
                            dispatch(user_religion_edit({ id: user.user_id, user_religion: value }))
                        }
                    />
                </div>

                <Nationality
                    title="Nationality"
                    actions={(value) =>
                        dispatch(
                            user_nationality_edit({ id: user.user_id, user_nationality: value })
                        )
                    }
                    value={user.user_nationality}
                />

                <div className={StyleSheet.edit__member__information__container__present__address}>
                    <Address
                        title="Present Address:"
                        present={true}
                        permanent={false}
                        regionValue={user.presentAddress.region}
                        cityValue={user.presentAddress.city}
                        areaValue={user.presentAddress.area}
                        addressValue={user.presentAddress.address}
                        regionAction={(value) =>
                            dispatch(
                                user_present_address_region_edit({
                                    id: user.user_id,
                                    region: value
                                })
                            )
                        }
                        cityAction={(value) =>
                            dispatch(
                                user_present_address_city_edit({ id: user.user_id, city: value })
                            )
                        }
                        areaAction={(value) =>
                            dispatch(
                                user_present_address_area_edit({ id: user.user_id, area: value })
                            )
                        }
                        addressAction={(value) =>
                            dispatch(
                                user_present_address_address_edit({
                                    id: user.user_id,
                                    address: value
                                })
                            )
                        }
                    />
                </div>

                <div
                    className={StyleSheet.edit__member__information__container__permanent__address}>
                    <Address
                        title="Permanent Address:"
                        present={false}
                        permanent={true}
                        regionValue={user.permanentAddress.region}
                        cityValue={user.permanentAddress.city}
                        areaValue={user.permanentAddress.area}
                        addressValue={user.permanentAddress.address}
                        regionAction={(value) =>
                            dispatch(
                                user_permanent_address_region_edit({
                                    id: user.user_id,
                                    region: value
                                })
                            )
                        }
                        cityAction={(value) =>
                            dispatch(
                                user_permanent_address_city_edit({ id: user.user_id, city: value })
                            )
                        }
                        areaAction={(value) =>
                            dispatch(
                                user_permanent_address_area_edit({ id: user.user_id, area: value })
                            )
                        }
                        addressAction={(value) =>
                            dispatch(
                                user_permanent_address_address_edit({
                                    id: user.user_id,
                                    address: value
                                })
                            )
                        }
                    />
                </div>

                <div className={StyleSheet.edit__member__information__container__upoding__file}>
                    <UploadingFile
                        uploadeFile={user.user_documentes}
                        actions={(value) =>
                            dispatch(user_uploading_file_edit({ id: user.user_id, file: value }))
                        }
                        deleteActions={(value) => {
                            dispatch(
                                user_uploading_file_delete_edit({ id: user.user_id, fileId: value })
                            );
                        }}
                    />
                </div>

                <div className={StyleSheet.edit__member__information__container__button}>
                    <button
                        className={
                            StyleSheet.edit__member__information__container__button__save__btn
                        }
                        type="button"
                        onClick={() => {
                            setRenderEditMemberInformation(false);
                            setRenderEditCreateEmployee(true);
                        }}>
                        Next
                    </button>
                    <button
                        className={
                            StyleSheet.edit__member__information__container__button__cancel__btn
                        }
                        type="button"
                        onClick={() => {
                            setRenderEditMemberInformation(false);
                        }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
export default React.memo(EditMemberInformation);

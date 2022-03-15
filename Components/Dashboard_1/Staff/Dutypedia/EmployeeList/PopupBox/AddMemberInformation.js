import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    first_name,
    join_as,
    last_name,
    middle_name,
    removed_user_documents,
    user_blood_group,
    user_date_of_birth,
    user_documents,
    user_gender,
    user_nationality,
    user_permanent_address_address,
    user_permanent_address_area,
    user_permanent_address_city,
    user_permanent_address_region,
    user_present_address_address,
    user_present_address_area,
    user_present_address_city,
    user_present_address_region,
    user_religion,
    user_remove_data
} from '../../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/index';
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
import {
    deleteEmployeeDocumentsURL,
    getEmployeeJoinTypeURL,
    postEmployeeDocumentsURL
} from '../../../api/apiUrl';
import { deleteApiCall, getApiCall, postApiCall } from '../../../api/onlineEmployeeListApi';
import AddMemberInformationHeader from './AddMemberInformationHeader';

function AddMemberInformation({ setAddInformationPopup, setCreateEmployeePopup }) {
    const [hiddenPopupFrom, setHiddenPopupFrom] = useState(true);

    const [joinAs, setJoinAs] = useState({ staff: false, member: false });
    const [uploadeFile, setUploadeFile] = useState([]);
    const [ApiResJoinType, setApiResJoinType] = useState([]);

    const dispatch = useDispatch();

    const firstName = useSelector((state) => state.dutypedia.first_name);
    const middleName = useSelector((state) => state.dutypedia.middle_name);
    const lastName = useSelector((state) => state.dutypedia.last_name);
    const userGender = useSelector((state) => state.dutypedia.gender);
    const bloodGroup = useSelector((state) => state.dutypedia.blood_group);
    const dateOfBirth = useSelector((state) => state.dutypedia.date_of_birth);
    const religion = useSelector((state) => state.dutypedia.religion);
    const nationality = useSelector((state) => state.dutypedia.nationality);

    const presentAddressRegion = useSelector((state) => state.dutypedia.pres_region);
    const presentAddressCity = useSelector((state) => state.dutypedia.pres_city);
    const presentAddressArea = useSelector((state) => state.dutypedia.pres_area);
    const presentAddressAddress = useSelector((state) => state.dutypedia.pres_address);

    const permanentAddressRegion = useSelector((state) => state.dutypedia.perm_region);
    const permanentAddressCity = useSelector((state) => state.dutypedia.perm_city);
    const permanentAddressArea = useSelector((state) => state.dutypedia.perm_area);
    const permanentAddressAddress = useSelector((state) => state.dutypedia.perm_address);

    useEffect(() => {
        getApiCall(getEmployeeJoinTypeURL)
            .then((response) => {
                setApiResJoinType(response);
            })
            .catch((error) => {
                console.log(`Error ${error}`);
            });
    }, []);

    const fromSubmitHendeler = (e) => {
        e.preventDefault();
        setCreateEmployeePopup(true);
        setAddInformationPopup(false);
    };

    return (
        <div
            className="w-full min-h-[100%] absolute pt-[40px] pb-[40px] top-0 left-0 flex justify-center align-top"
            style={{ background: 'rgba(255, 255, 255, 0.5)', backdropFilter: ' blur(0.5vw)' }}>
            <form
                className="w-[525px] h-auto bg-white p-[33px] shadow-4xl relative rounded-[13px]"
                onSubmit={fromSubmitHendeler}>
                <div className="w-full h-auto">
                    <AddMemberInformationHeader setHiddenPopupFrom={setHiddenPopupFrom} />
                </div>
                {hiddenPopupFrom ? (
                    <>
                        <div className="w-full h-auto pt-[13px]">
                            <div className="text-[17.5px] text-[#313131]">Join</div>
                            <div className="w-full h-auto flex align-middle justify-start flex-row">
                                <MemberCheckbox
                                    title="As A Member"
                                    name="as_a_member"
                                    actions={(value) => {
                                        setJoinAs((prev) =>
                                            prev.member
                                                ? { ...prev, staff: true, member: false }
                                                : { ...prev, staff: false, member: true }
                                        );

                                        joinAs.member
                                            ? ApiResJoinType.filter(
                                                  (item) => item.title === 'Member'
                                              ).map((item) => dispatch(join_as(item.id)))
                                            : ApiResJoinType.filter(
                                                  (item) => item.title === 'Staff'
                                              ).map((item) => dispatch(join_as(item.id)));
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
                                        joinAs.staff
                                            ? ApiResJoinType.filter(
                                                  (item) => item.title === 'Staff'
                                              ).map((item) => dispatch(join_as(item.id)))
                                            : ApiResJoinType.filter(
                                                  (item) => item.title === 'Member'
                                              ).map((item) => dispatch(join_as(item.id)));
                                    }}
                                    value={joinAs.staff}
                                />
                            </div>
                        </div>
                        <div className="w-full h-auto">
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
                        <div className="w-full h-auto">
                            <div className="w-full h-auto flex justify-between align-middle">
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
                            <div className="w-full h-auto flex justify-between align-middle flex-row">
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
                        <div className="w-full h-auto pt-[8px] pb-[8px]">
                            <Nationality
                                title="Nationality"
                                actions={(value) => dispatch(user_nationality(value))}
                                value={nationality}
                            />
                        </div>
                        <div className="w-full h-auto pt-[6.5px] pb-[6.5px]">
                            <Address
                                title="Present Address:"
                                present={true}
                                permanent={false}
                                regionValue={presentAddressRegion}
                                cityValue={presentAddressCity}
                                areaValue={presentAddressArea}
                                addressValue={presentAddressAddress}
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
                        <div className="w-full h-auto pb-[6px]">
                            <Address
                                title="Permanent Address:"
                                present={false}
                                permanent={true}
                                regionValue={permanentAddressRegion}
                                cityValue={permanentAddressCity}
                                areaValue={permanentAddressArea}
                                addressValue={permanentAddressAddress}
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
                        <div className="w-full h-auto pb-[20px]">
                            <UploadingFile
                                uploadeFile={uploadeFile}
                                actions={(formData, progress, file, title, id) => {
                                    setUploadeFile([
                                        ...uploadeFile,
                                        { id, file: file, title: title }
                                    ]);
                                    postApiCall(postEmployeeDocumentsURL, formData, progress)
                                        .then((res) => {
                                            setTimeout(() => {
                                                dispatch(user_documents({ id: res?.id }));
                                            }, 1000);
                                        })
                                        .catch((err) => {
                                            console.log(`Error ${err}`);
                                        });
                                }}
                                deleteActions={(value) => {
                                    dispatch(removed_user_documents(value));
                                    setUploadeFile(uploadeFile.filter((item) => item.id !== value));
                                    setTimeout(() => {
                                        deleteApiCall(deleteEmployeeDocumentsURL(value)).then(
                                            (res) => {
                                                console.log('Sucessfully Deleted');
                                            }
                                        );
                                    }, 2000);
                                }}
                            />
                        </div>
                        <div className="w-full h-auto flex align-middle">
                            <button
                                type="submit"
                                className="w-[155px] h-auto p-[11px] text-[15px] rounded-[3.5px] border-none bg-[#da1e37] text-white mr-[9px] cursor-pointer outline-none">
                                Next
                            </button>
                            <button
                                type="button"
                                className="w-[155px] h-auto p-[10px] text-[15px] rounded-[3.5px] border-[1.5px] bg-white border-[#da1e37] text-[#da1e37] ml-[9px] cursor-pointer outline-none"
                                onClick={() => {
                                    setAddInformationPopup(false);
                                    dispatch(
                                        user_remove_data({
                                            join_as: [],
                                            first_name: '',
                                            middle_name: '',
                                            last_name: '',
                                            gender: '',
                                            blood_group: '',
                                            date_of_birth: new Date(),
                                            religion: '',
                                            nationality: '',

                                            pres_region: '',
                                            pres_city: '',
                                            pres_area: '',
                                            pres_address: '',

                                            perm_region: '',
                                            perm_city: '',
                                            perm_area: '',
                                            perm_address: '',

                                            file_uplaod: [],

                                            user: null,
                                            position: '',
                                            joining_date: new Date(),
                                            no_salary: false,
                                            salary_amount: '',
                                            salary_type: '',
                                            salary_date_every_day: '',
                                            salary_date_every_month: '',
                                            salary_date_every_week: '',
                                            access: []
                                        })
                                    );
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

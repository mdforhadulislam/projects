import React, { useState } from 'react';
import DeleteMember from '../../../../../Utilities/DeleteMember';
import AttendenceHeader from './BoxAndDeatils/AttendenceHeader';
import AttendenceListHeader from './BoxAndDeatils/AttendenceListHeader';
import BoxDeatils from './BoxAndDeatils/BoxDeatils';
import MainCreateButton from './BoxAndDeatils/MainCreateButton';
import MemberDeatils from './BoxAndDeatils/MemberDeatils';
import AttendenceEditPopup from './PopupBox/AttendenceEditPopup';
import AttendenceEmployee from './PopupBox/AttendenceEmployee';
import AttendencePopupForm from './PopupBox/AttendencePopupForm';

function EmployeeAttendence() {
    const [attendencePopupForm, setAttendencesPopupForm] = useState(false);
    const [attendenceEmployee, setAttendenceEmployee] = useState(false);
    const [attendenceEditPopup, setAttendenceEditPopup] = useState(false);
    const [attendenceDeletePopup, setAttendenceDeletePopup] = useState(false);
    const [attendenceMemberDeatils, setAttendenceMemberDeatils] = useState(false);

    return (
        <>
            <MainCreateButton setAttendencesPopupForm={setAttendencesPopupForm} />

            {attendencePopupForm && (
                <AttendencePopupForm
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    attendencePopupForm={attendencePopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                />
            )}

            {attendenceEmployee && (
                <AttendenceEmployee
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                    attendenceEmployee={attendenceEmployee}
                />
            )}

            {attendenceEditPopup && (
                <AttendenceEditPopup
                    attendenceEditPopup={attendenceEditPopup}
                    setAttendenceEditPopup={setAttendenceEditPopup}
                />
            )}
            {attendenceDeletePopup && (
                <DeleteMember
                    setDeleteMember={setAttendenceDeletePopup}
                    deleteMember={attendenceDeletePopup}
                    actions={() => {}}
                />
            )}
            {attendenceMemberDeatils && (
                <MemberDeatils setAttendenceMemberDeatils={setAttendenceMemberDeatils} />
            )}

            <div className="w-full h-auto">
                <AttendenceHeader
                    selectedEmployee={setAttendenceEmployee}
                    timeSetPopup={setAttendencesPopupForm}
                />

                <div className="w-full h-auto pt-[6px] overflow-auto scrollbar">
                    <div>
                        <div className="w-[1165px] h-auto">
                            <AttendenceListHeader />

                            <div className="w-full h-auto py-[10px] px-[3px]">
                                <BoxDeatils
                                    setAttendenceEditPopup={setAttendenceEditPopup}
                                    setAttendenceDeletePopup={setAttendenceDeletePopup}
                                    setAttendenceMemberDeatils={setAttendenceMemberDeatils}
                                />
                                <BoxDeatils />
                                <BoxDeatils />
                                <BoxDeatils />
                                <BoxDeatils />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(EmployeeAttendence);

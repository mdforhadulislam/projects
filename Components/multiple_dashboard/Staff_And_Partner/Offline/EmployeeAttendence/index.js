import React, { useState } from 'react';
import DeleteMember from '../../../../../Utilities/DeleteMember';
import EmployeeAttendenceBody from './DeatilsAndBox/EmployeeAttendenceBody';
import MainCreateBox from './DeatilsAndBox/MainCreateBox';
import OfflineCreateAttendenceHeader from './DeatilsAndBox/OfflineCreateAttendenceHeader';
import OfflineMemberDeatils from './DeatilsAndBox/OfflineMemberDeatils';
import AddAttendenceEmployee from './PopupBox/AddAttendenceEmployee';
import AddAttendencePopup from './PopupBox/AddAttendencePopup';
import IsEditAttendence from './PopupBox/IsEditAttendence';

function index() {
    const [createAttendence, setCreateAttendence] = useState(false);
    const [addAttendenceEmployee, setAddAttendenceEmployee] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isViewDeatils, setViewDeatils] = useState(false);

    return (
        <>
            <MainCreateBox setCreateAttendence={setCreateAttendence} />
            {createAttendence && (
                <AddAttendencePopup
                    createAttendence={createAttendence}
                    setCreateAttendence={setCreateAttendence}
                    setAddAttendenceEmployee={setAddAttendenceEmployee}
                />
            )}
            {addAttendenceEmployee && (
                <AddAttendenceEmployee
                    addAttendenceEmployee={addAttendenceEmployee}
                    setAddAttendenceEmployee={setAddAttendenceEmployee}
                    setCreateAttendence={setCreateAttendence}
                />
            )}

            {isEdit && <IsEditAttendence isEdit={isEdit} setIsEdit={setIsEdit} />}

            {isViewDeatils && <OfflineMemberDeatils setViewDeatils={setViewDeatils} />}

            {isDelete && (
                <DeleteMember
                    setDeleteMember={setIsDelete}
                    deleteMember={isDelete}
                    actions={() => {}}
                />
            )}

            <div>
                <OfflineCreateAttendenceHeader
                    setCreateAttendence={setCreateAttendence}
                    setAddAttendenceEmployee={setAddAttendenceEmployee}
                />
                <EmployeeAttendenceBody
                    setViewDeatils={setViewDeatils}
                    setIsDelete={setIsDelete}
                    setIsEdit={setIsEdit}
                />
            </div>
        </>
    );
}

export default index;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BigAddIcon from '../../../../../Assets/images/dashboard/BigAddIcon';
import { delete_user } from '../../../../../Redux/Dashboard_1/Action/Staff/Dutypedia/editHeandeler';
import CanceledRequest from '../../../../../Utilities/CanceledRequest';
import DeleteMember from '../../../../../Utilities/DeleteMember';
import IsEmployeeHeader from '../../../../../Utilities/IsEmployeeHeader';
import QrCodePopup from '../../../../../Utilities/QrCodePopup';
// import { getEmployeeList } from '../../api/onlineEmployeeListApi';
import EmployeeListHeader from './BoxAndDeatils/EmployeeListHeader';
import MemberDeatils from './BoxAndDeatils/MemberDeatils';
import SingelEmployeeBox from './BoxAndDeatils/SingelEmployeeBox';
import StyleSheet from './Main.module.css';
import AddMemberInformation from './PopupBox/AddMemberInformation';
import CreateEmployee from './PopupBox/CreateEmployee';
import EditCreateEmployee from './PopupBox/EditCreateEmployee';
import EditManageAccess from './PopupBox/EditManageAccess';
import EditMemberInformation from './PopupBox/EditMemberInformation';
import SuccessfullyDone from './PopupBox/SuccessfullyDone';
import ViewAllInformation from './PopupBox/ViewAllInformation';

function EmployList() {
    // this state doing render components
    const [qrCodePopup, setQrCodePopup] = useState(false);
    const [successfullyDonePopup, setSuccessfullyDonePopup] = useState(false);
    const [addMemberInformationPopup, setAddInformationPopup] = useState(false);
    const [createEmployeePopup, setCreateEmployeePopup] = useState(false);
    const [deleteMember, setDeleteMember] = useState(false);
    const [canceledRequest, setCanceledRequested] = useState(false);
    const [id, setId] = useState('');
    const [renderMemberDeatiles, setRenderMemberDeatiles] = useState(false);
    const [renderManageAccess, setRenderManageAccess] = useState(false);
    const [renderEditMemberInformation, setRenderEditMemberInformation] = useState(false);
    const [renderViewAllInformation, setRenderViewAllInformation] = useState(false);
    const [renderEditCreateEmployee, setRenderEditCreateEmployee] = useState(false);

    const allUser = useSelector((state) => state.onlineUser.user);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            getEmployeeList().then((res) => console.log(res));
        } catch {
            console.log('Have an  error');
        }
    });

    return (
        <>
            {allUser.length ? (
                ''
            ) : (
                <div className={StyleSheet.employee__list__container}>
                    <div className={StyleSheet.employee__list__container__body}>
                        <div className={StyleSheet.employee__list__container__body__create__button}>
                            <div
                                className={
                                    StyleSheet.employee__list__container__body__create__button__image
                                }
                                onClick={() => setQrCodePopup(true)}>
                                <BigAddIcon />
                            </div>
                        </div>

                        <div className={StyleSheet.employee__list__container__body__title}>
                            <h1>Create Employee List</h1>
                        </div>
                    </div>
                </div>
            )}

            {allUser.length ? <IsEmployeeHeader setQrCodePopup={setQrCodePopup} /> : ''}

            {allUser.length ? (
                <div className={StyleSheet.employee__container}>
                    <EmployeeListHeader />
                    <div className={StyleSheet.employee__container__body}>
                        {allUser.map((userData) => {
                            return (
                                <SingelEmployeeBox
                                    key={userData.user_id}
                                    setDeleteMember={setDeleteMember}
                                    setId={setId}
                                    setRenderManageAccess={setRenderManageAccess}
                                    setRenderMemberDeatiles={setRenderMemberDeatiles}
                                    setCanceledRequested={setCanceledRequested}
                                    userData={userData}
                                    setRenderEditMemberInformation={setRenderEditMemberInformation}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                ''
            )}

            {renderManageAccess &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditManageAccess
                                key={user.user_id}
                                userData={user}
                                setRenderManageAccess={setRenderManageAccess}
                                renderManageAccess={renderManageAccess}
                            />
                        );
                    })}

            {renderMemberDeatiles &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <MemberDeatils
                                key={user.user_id}
                                userData={user}
                                setRenderMemberDeatiles={setRenderMemberDeatiles}
                                setRenderViewAllInformation={setRenderViewAllInformation}
                            />
                        );
                    })}

            {renderEditMemberInformation &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditMemberInformation
                                key={user.user_id}
                                user={user}
                                setRenderEditMemberInformation={setRenderEditMemberInformation}
                                setRenderEditCreateEmployee={setRenderEditCreateEmployee}
                            />
                        );
                    })}

            {renderViewAllInformation &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <ViewAllInformation
                                key={user.user_id}
                                user={user}
                                setRenderViewAllInformation={setRenderViewAllInformation}
                                renderViewAllInformation={renderViewAllInformation}
                                setRenderEditMemberInformation={setRenderEditMemberInformation}
                            />
                        );
                    })}

            {renderEditCreateEmployee &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditCreateEmployee
                                key={user.user_id}
                                user={user}
                                setRenderEditCreateEmployee={setRenderEditCreateEmployee}
                                setRenderEditMemberInformation={setRenderEditMemberInformation}
                            />
                        );
                    })}

            {qrCodePopup && (
                <QrCodePopup
                    qrCodePopup={qrCodePopup}
                    setQrCodePopup={setQrCodePopup}
                    setAddInformationPopup={setAddInformationPopup}
                />
            )}

            {addMemberInformationPopup && (
                <AddMemberInformation
                    setAddInformationPopup={setAddInformationPopup}
                    setCreateEmployeePopup={setCreateEmployeePopup}
                />
            )}

            {createEmployeePopup && (
                <CreateEmployee
                    setAddInformationPopup={setAddInformationPopup}
                    setCreateEmployeePopup={setCreateEmployeePopup}
                    setSuccessfullyDonePopup={setSuccessfullyDonePopup}
                />
            )}

            {successfullyDonePopup && (
                <SuccessfullyDone
                    successfullyDonePopup={successfullyDonePopup}
                    setSuccessfullyDonePopup={setSuccessfullyDonePopup}
                />
            )}

            {deleteMember && (
                <DeleteMember
                    setDeleteMember={setDeleteMember}
                    actions={() => {
                        dispatch(delete_user(id));
                    }}
                    deleteMember={deleteMember}
                />
            )}

            {canceledRequest && (
                <CanceledRequest
                    setCanceledRequested={setCanceledRequested}
                    actions={() => {
                        dispatch(delete_user(id));
                    }}
                    canceledRequest={canceledRequest}
                />
            )}
        </>
    );
}

export default React.memo(EmployList);

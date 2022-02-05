import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BigAddIcon from '../../../../../Assets/images/dashboard/BigAddIcon';
import { delete_offline_user } from '../../../../../Redux/Dashboard_1/Action/Offline';
import DeleteMember from '../../../../../Utilities/DeleteMember';
import IsEmployeeHeader from '../../../../../Utilities/IsEmployeeHeader';
import QrCodePopup from '../../../../../Utilities/QrCodePopup';
import StyleSheet from './Main.module.css';
import EditMemberInformation from './PopupBox/EditMemberInformation';
import EditOfflineCreateMember from './PopupBox/EditOfflineCreateMember';
import EmployeeListHeader from './PopupBox/EmployeeListHeader';
import MemberDetails from './PopupBox/MemberDetails';
import OfflineAddMemberInformation from './PopupBox/OfflineAddMemberInformation';
import OfflineCreateMember from './PopupBox/OfflineCreateMember';
import SingelEmployeeBox from './PopupBox/SingelEmployeeBox';
import SuccessfullyDone from './PopupBox/SuccessfullyDone';
import ViewAllInformation from './PopupBox/ViewAllInformation';

function EmployList() {
    const dispatch = useDispatch();

    // this state doing render components
    const [offlineQrCodePopup, setOfflineQrCodePopup] = useState(false);
    const [offlineAddMemberInformationPopup, setOfflineAddMemberInformationPopup] = useState(false);
    const [offlineCreateMemberPopup, setOfflineCreateMemberPopup] = useState(false);
    const [successfullDonePopup, setSuccessfullDonePopup] = useState(false);
    const [id, setId] = useState('');
    const [deleteMember, setDeleteMember] = useState(false);
    const [editMemberInformation, setEditMemberInformation] = useState(false);
    const [editCreateMember, setEditCreateMember] = useState(false);
    const [viewMemberDetails, setViewMemberDetails] = useState(false);
    const [viewMemberAllInformation, setViewMemberAllInformation] = useState(false);

    // all offline user value
    const allUser = useSelector((state) => state.offlineUser.offline_user);

    return (
        <>
            {allUser.length ? (
                ''
            ) : (
                <div className={StyleSheet.create__employee__list__container}>
                    <div className={StyleSheet.create__employee__list__container__body}>
                        <div className={StyleSheet.create__employee__list__container__body__button}>
                            <div  onClick={() => setOfflineQrCodePopup(true)}>
                                <BigAddIcon />
                            </div>
                        </div>
                        <div className={StyleSheet.create__employee__list__container__body__title}>
                            <h1>Create Employee List</h1>
                        </div>
                    </div>
                </div>
            )}

            {allUser.length ? (
                <IsEmployeeHeader setQrCodePopup={setOfflineQrCodePopup} />
            ) : (
                ''
            )}

            {allUser.length ? (
                <div className={StyleSheet.employee__container}>
                    <EmployeeListHeader />
                    <div className={StyleSheet.employee__container__body}>
                        {allUser.map((userData) => {
                            return (
                                <SingelEmployeeBox
                                    key={userData.user_id}
                                    userData={userData}
                                    setId={setId}
                                    setDeleteMember={setDeleteMember}
                                    setEditMemberInformation={setEditMemberInformation}
                                    setViewMemberDetails={setViewMemberDetails}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                ''
            )}

            {viewMemberDetails &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <MemberDetails
                                userData={user}
                                key={user.user_id}
                                setViewMemberDetails={setViewMemberDetails}
                                setViewMemberAllInformation={setViewMemberAllInformation}
                            />
                        );
                    })}

            {editMemberInformation &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditMemberInformation
                                key={user.user_id}
                                user={user}
                                setEditMemberInformation={setEditMemberInformation}
                                setEditCreateMember={setEditCreateMember}
                            />
                        );
                    })}

            {editCreateMember &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <EditOfflineCreateMember
                                key={user.user_id}
                                user={user}
                                setEditMemberInformation={setEditMemberInformation}
                                setEditCreateMember={setEditCreateMember}
                                editCreateMember={editCreateMember}
                            />
                        );
                    })}

            {viewMemberAllInformation &&
                allUser
                    .filter((user) => user.user_id === id)
                    .map((user) => {
                        return (
                            <ViewAllInformation
                                key={user.user_id}
                                userData={user}
                                setViewMemberAllInformation={setViewMemberAllInformation}
                                setEditMemberInformation={setEditMemberInformation}
                                viewMemberAllInformation={viewMemberAllInformation}
                            />
                        );
                    })}

            {offlineQrCodePopup && (
                <QrCodePopup
                    qrCodePopup={offlineQrCodePopup}
                    setQrCodePopup={setOfflineQrCodePopup}
                    setAddInformationPopup={setOfflineAddMemberInformationPopup}
                />
            )}

            {offlineAddMemberInformationPopup && (
                <OfflineAddMemberInformation
                    setOfflineAddMemberInformationPopup={setOfflineAddMemberInformationPopup}
                    setOfflineCreateMemberPopup={setOfflineCreateMemberPopup}
                />
            )}

            {offlineCreateMemberPopup && (
                <OfflineCreateMember
                    offlineCreateMemberPopup={offlineCreateMemberPopup}
                    setOfflineCreateMemberPopup={setOfflineCreateMemberPopup}
                    setOfflineAddMemberInformationPopup={setOfflineAddMemberInformationPopup}
                    setSuccessfullDonePopup={setSuccessfullDonePopup}
                />
            )}

            {successfullDonePopup && (
                <SuccessfullyDone
                    setSuccessfullDonePopup={setSuccessfullDonePopup}
                    successfullDonePopup={successfullDonePopup}
                />
            )}

            {deleteMember && (
                <DeleteMember
                    setDeleteMember={setDeleteMember}
                    deleteMember={deleteMember}
                    actions={() => {
                        dispatch(delete_offline_user(id));
                    }}
                />
            )}
        </>
    );
}

export default React.memo(EmployList);

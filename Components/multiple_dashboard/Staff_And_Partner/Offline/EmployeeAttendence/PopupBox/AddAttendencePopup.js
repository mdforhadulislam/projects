import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import {
    AttendenceName,
    BrackTimer,
    DayCheckBox,
    DutyTimer
} from '../../../../../../Utilities/Utilites';

Modal.setAppElement('#__next');
function AddAttendencePopup({ createAttendence, setCreateAttendence, setAddAttendenceEmployee }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -41%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };

    const [offlineAttendanceName, setOfflineAttendanceName] = useState('');
    const [offlineBrackTime, setOfflineBrackTime] = useState('');
    const [offlneDayStartAndEndTime, setOfflneDayStartAndEndTime] = useState({
        dayStartTime: '10:00:00',
        dayEndTime: '10:00:00'
    });
    const [offlineHoliday, setOfflineHoliday] = useState({
        saturday: false,
        sunday: false,
        monday: false,
        tuesday: false,
        wednestday: false,
        thursday: false,
        friday: false
    });

    return (
        <Modal isOpen={createAttendence} style={customStyles}>
            <form
                className="w-[550px] h-auto p-[20px] bg-white shadow-3xl rounded-[10px]"
                onSubmit={(e) => e.preventDefault()}>
                <div
                    className="w-full h-auto flex align-middle justify-start"
                    style={{ alignItems: 'center' }}>
                    <div
                        onClick={() => setCreateAttendence(false)}
                        className="cursor-pointer text-[#313131]">
                        <div className=" inline-block mr-[8px]">
                            <ArrowBackIcon width={'23'} height={'18'} />
                        </div>
                        Back
                    </div>
                </div>
                <div className="w-full h-auto">
                    <div className="w-[265px] h-auto m-auto pb-[12px]">
                        <AttendenceName
                            title="Attendence Name"
                            placeholder={'Staff Of Dutypedia...|'}
                            value={offlineAttendanceName}
                            action={(value) => setOfflineAttendanceName(value)}
                        />
                    </div>
                    <div className="w-full h-auto">
                        <div className="w-full h-auto flex justify-around pb-[10px]">
                            <DutyTimer
                                title="Duty Starting Time"
                                value={offlneDayStartAndEndTime.dayStartTime}
                                action={(value) =>
                                    setOfflneDayStartAndEndTime({
                                        ...dayStartAndEndTime,
                                        dayStartTime: value
                                    })
                                }
                            />
                            <DutyTimer
                                title="Duty Ending Time"
                                value={offlneDayStartAndEndTime.dayEndTime}
                                action={(value) =>
                                    setOfflneDayStartAndEndTime({
                                        ...dayStartAndEndTime,
                                        dayEndTime: value
                                    })
                                }
                            />
                        </div>
                        <div className="w-full h-auto flex justify-center pt-[6px] pb-[15px]">
                            <BrackTimer
                                title="Break Time"
                                action={(value) => setOfflineBrackTime(value)}
                                value={offlineBrackTime}
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <div className="text-[17.5px]">Holiday</div>
                        <div className="w-full h-auto">
                            <DayCheckBox
                                title={'Saturday'}
                                name={'Saturday'}
                                style={{ width: '9vw', display: 'inline-block' }}
                                value={offlineHoliday.saturday}
                                actions={() =>
                                    offlineHoliday.saturday
                                        ? setOfflineHoliday({ ...offlineHoliday, saturday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, saturday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Sunday'}
                                name={'Sunday'}
                                style={{ width: '8vw', display: 'inline-block' }}
                                value={offlineHoliday.sunday}
                                actions={() =>
                                    offlineHoliday.sunday
                                        ? setOfflineHoliday({ ...offlineHoliday, sunday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, sunday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Monday'}
                                name={'Monday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={offlineHoliday.monday}
                                actions={() =>
                                    offlineHoliday.monday
                                        ? setOfflineHoliday({ ...offlineHoliday, monday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, monday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Tuesday'}
                                name={'Tuesday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={offlineHoliday.tuesday}
                                actions={() =>
                                    offlineHoliday.tuesday
                                        ? setOfflineHoliday({ ...offlineHoliday, tuesday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, tuesday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Wednestday'}
                                name={'Wednestday'}
                                style={{ width: '11vw', display: 'inline-block' }}
                                value={offlineHoliday.wednestday}
                                actions={() =>
                                    offlineHoliday.wednestday
                                        ? setOfflineHoliday({
                                              ...offlineHoliday,
                                              wednestday: false
                                          })
                                        : setOfflineHoliday({ ...offlineHoliday, wednestday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Thursday'}
                                name={'Thursday'}
                                style={{ width: '9vw', display: 'inline-block' }}
                                value={offlineHoliday.thursday}
                                actions={() =>
                                    offlineHoliday.thursday
                                        ? setOfflineHoliday({ ...offlineHoliday, thursday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, thursday: true })
                                }
                            />
                            <DayCheckBox
                                title={'Friday'}
                                name={'Friday'}
                                style={{ width: '8.5vw', display: 'inline-block' }}
                                value={offlineHoliday.friday}
                                actions={() =>
                                    offlineHoliday.friday
                                        ? setOfflineHoliday({ ...offlineHoliday, friday: false })
                                        : setOfflineHoliday({ ...offlineHoliday, friday: true })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto flex justify-end">
                    <button
                        className="w-[120px] h-auto p-[6px] text-[16px] outline-none border-none rounded-[6px] mt-[13px] cursor-pointer bg-[#da1e37] text-white "
                        type="submit"
                        onClick={() => {
                            setCreateAttendence(false);
                            setAddAttendenceEmployee(true);
                        }}>
                        Next
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default AddAttendencePopup;

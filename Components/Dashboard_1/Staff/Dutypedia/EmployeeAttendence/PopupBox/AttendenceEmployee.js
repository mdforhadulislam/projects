import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import { CheckBox, SearchBox } from '../../../../../../Utilities/Utilites';
import Data from '../../../UserData.json';
import SingleEmployeeBox from '../BoxAndDeatils/SingleEmployeeBox';

Modal.setAppElement('#__next');
function AttendenceEmployee({
    attendenceEmployee,
    setAttendencesPopupForm,
    setAttendenceEmployee
}) {
    const customStyles = {
        content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };
    return (
        <Modal isOpen={attendenceEmployee} style={customStyles}>
            <div className="w-[550px] h-auto p-[20px] pt-[15px] bg-white shadow-3xl rounded-[13px]">
                <div className="w-full h-auto flex align-middle justify-start mb-[10px] text-[17px] text-[#313131]">
                    <div
                        className="w-[20px] h-[13px] mr-[6.5px] cursor-pointer"
                        onClick={() => {
                            setAttendencesPopupForm(true);
                            setAttendenceEmployee(false);
                        }}>
                        <ArrowBackIcon width={'20'} height={'15'} />
                    </div>
                    Back
                </div>
                <div className="w-full h-auto mb-[6px]">
                    <div className="text-[17px] mb-[6px] ml-[13px] text-[#313131] ">
                        Select Your Employee For Attendence
                    </div>
                    <div className="w-full h-auto">
                        <SearchBox placeholder={'Search Users......'} />
                    </div>
                </div>
                <div className="">
                    <div className="ml-[12px]">
                        <CheckBox title="Select All" />
                    </div>

                    <div className="w-full h-[270px] pr-[8px] pl-[6px] overflow-auto mb-[13px] scrollbar">
                        {Data?.map((user) => {
                            return <SingleEmployeeBox key={user.id} user={user} />;
                        })}
                    </div>
                </div>
                <div className="w-full h-auto flex justify-end">
                    <button
                        className="w-[120px] h-auto p-[6px] px-[8px] text-[16px] rounded-[4px] ml-[8px] cursor-pointer border-none bg-[#da1e37] mr-[10px] text-white"
                        onClick={() => {
                            setAttendencesPopupForm(false);
                            setAttendenceEmployee(false);
                        }}>
                        {' '}
                        Create Now
                    </button>
                    <button
                        className="w-[120px] h-auto p-[6px] px-[10px] text-[16px] rounded-[4px] ml-[8px] cursor-pointer border-[1px] border-[#da1e37]  text-[#313131] bg-white"
                        onClick={() => {
                            setAttendencesPopupForm(true);
                            setAttendenceEmployee(false);
                        }}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(AttendenceEmployee);

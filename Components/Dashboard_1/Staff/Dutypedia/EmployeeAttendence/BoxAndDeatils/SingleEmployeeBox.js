import React from 'react';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import { CheckBox } from '../../../../../../Utilities/Utilites';

function SingleEmployeeBox({ user }) {
    return (
        <div className="w-full h-auto p-[7px] shadow-3xl rounded-[6px] mt-[8px] mb-[12px] ">
            <div
                className="w-full h-auto flex flex-row align-middle"
                style={{ alignItems: 'center' }}>
                <div className="mt-[-21px]">
                    <CheckBox style={{ width: '3vw', marginTop: '-.1.5vw' }} />
                </div>
                <div
                    className="w-full h-auto flex  justify-start align-middle"
                    style={{ alignItems: 'center' }}>
                    <div className="w-[72px] h-[60px] relative">
                        <div
                            className="w-[55px] h-[50px] rounded-[6px]"
                            style={{
                                background: `url(${user.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        <div className="w-[20px] h-[20px] absolute top-[60%] right-[10%]">
                            <DutyPreIcon width={'20'} height={'20'} />
                        </div>
                    </div>
                    <div className="">
                        <div className="text-[19px] text-[#313131]">{user.name}</div>
                        <div className="text-[16px] text-[#666666]">Id: 9297343{user.id}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(SingleEmployeeBox);

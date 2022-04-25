import React from 'react';
import { CheckBox } from '../../../../../../Utilities/Utilites';

function SearchEmployeeBox({ user }) {
    console.log(user);
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
                    <div
                        className="w-[55px] h-[50px] rounded-[6px]"
                        style={{
                            background: `url(${user.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                    <div className="text-[19px] text-[#313131] ml-[10px]">{user.name}</div>
                </div>
            </div>
        </div>
    );
}

export default SearchEmployeeBox;

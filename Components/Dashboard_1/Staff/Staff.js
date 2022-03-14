import React, { useState } from 'react';
import Dutypedia from './Dutypedia/Dutypeadia';
import Offline from './Offline/Offline';

function Staff() {
    let [reanderDutypedia, setStateRenderDutypedia] = useState(true);
    let [reanderOffline, setStateRenderOffline] = useState(false);

    let clickDutypedia = (e) => {
        setStateRenderDutypedia(true);
        setStateRenderOffline(false);
    };

    let clickOffline = (e) => {
        setStateRenderDutypedia(false);
        setStateRenderOffline(true);
    };

    return (
        <div className="w-full h-auto bg-none inline-block p-[35px] pl-[95px] transition-all ease-linear relative">
            <div className="w-full min-h-[430px] bg-white p-[26px] shadow-3xl rounded-[16px]">
                <div className=" w-full h-auto pb-[20px]">
                    <div className="w-full h-auto flex justify-center align-middle text-[#313131]">
                        <div
                            onClick={clickDutypedia}
                            className="w-[158px] text-[26px] pr-[20px] pb-[6.5px] pl-[20px] cursor-pointer border-b-[1px] border-[#da1e37]"
                            style={
                                reanderDutypedia
                                    ? {
                                          color: '#da1e37',
                                          borderBottom: '0.1vw solid #da1e37'
                                      }
                                    : {
                                          color: '#313131',
                                          borderBottom: '0.1vw solid #313131'
                                      }
                            }>
                            Dutypedia
                        </div>

                        <div className="w-[.66px] h-[26px] mt-[8px] bg-[#313131] cursor-pointer"></div>

                        <div
                            onClick={clickOffline}
                            className="w-[158px] text-[26px] pr-[20px] pb-[6.5px] pl-[20px] cursor-pointer border-b-[1px] border-[#da1e37]"
                            style={
                                reanderOffline
                                    ? {
                                          color: '#da1e37',
                                          borderBottom: '0.1vw solid #da1e37'
                                      }
                                    : {
                                          color: '#313131',
                                          borderBottom: '0.1vw solid #313131'
                                      }
                            }>
                            Offline
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto">
                    {reanderDutypedia && <Dutypedia />}
                    {reanderOffline && <Offline />}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Staff);

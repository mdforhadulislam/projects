import Image from "next/image";
import React from "react";
import SubCard from "./SubCard";

const MeetingCard = ({ meeting }) => {
    const { user, meetingInfo, isActive, isCancel } = meeting || {};

    return (
        <SubCard shadow className="relative grid grid-cols-3">
            <div className="col-span-3 md:col-span-1 flex space-x-3 cursor-pointer">
                <div className="relative">
                    <Image
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={user?.img}
                        alt={user?.name}
                        width={50}
                        height={50}
                    />
                    {isActive && !isCancel && (
                        <div className={`absolute -right-2 -bottom-2`}>
                            <Image
                                src="/iconActive.svg"
                                width={25}
                                height={25}
                                alt="active icon"
                            />
                        </div>
                    )}
                </div>
                <div className="text-[#666666]">
                    <div className="text-sm md:text-xl mb-2">{user?.name}</div>
                    <div className="text-[10px] md:text-xs">id: {user?.id}</div>
                </div>
            </div>

            <div className="text-[8px] md:text-[16px] col-span-2 md:col-span-1 md:text-center flex flex-col md:items-center justify-center h-full space-y-1 mt-3 md:mt-0">
                <p className="text-[#313131]">{meetingInfo.time}</p>
                <p className="text-[#666666]">{meetingInfo.details}</p>
            </div>

            <div className="text-right content-end items-center">
                {isCancel ? (
                    <p className="text-[#E22424] flex items-center text-[10px] md:text-[16px] justify-end h-full">
                        Appointment Canceled
                    </p>
                ) : (
                    <div className="flex justify-end items-center h-full space-x-4">
                        <div className="flex space-x-2">
                            <div className="contact">
                                <div
                                    className={`cursor-pointer rounded-full shadow-md flex items-center justify-center h-8  w-8 md:h-[40px] md:w-[40px]`}
                                >
                                    <Image
                                        src="/iconContact.svg"
                                        width={40}
                                        height={40}
                                        alt="contact icon"
                                    />
                                </div>
                            </div>
                            {isActive && (
                                <div
                                    className={`cursor-pointer rounded-full shadow-md flex items-center justify-center h-8  w-8 md:h-[40px] md:w-[40px]`}
                                >
                                    <Image
                                        src="/iconSend.svg"
                                        width={40}
                                        height={40}
                                        alt="contact icon"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="absolute top-1 right-2 md:static">
                            <div
                                className={`cursor-pointer rounded-full shadow-md flex items-center justify-center h-8  w-8 md:h-[40px] md:w-[40px]`}
                            >
                                <Image
                                    src="/iconLine.svg"
                                    width={25}
                                    height={25}
                                    alt="contact icon"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </SubCard>
    );
};

export default MeetingCard;

import Image from "next/image";
import SubCard from "./SubCard";

const RequestCard = ({ request }) => {
    const { user, requestInfo, isCancel } = request || {};
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
                    <div className={`absolute -right-2 -bottom-2`}>
                        <Image
                            src="/iconActive.svg"
                            width={25}
                            height={25}
                            alt="active icon"
                        />
                    </div>
                </div>
                <div className="text-[#666666]">
                    <div className="text-sm md:text-xl mb-2">{user?.name}</div>
                    <div className="text-[10px] md:text-xs">id: {user?.id}</div>
                </div>
            </div>

            <div className="text-[8px] md:text-[16px] col-span-2 md:col-span-1 md:text-center flex flex-col md:items-center justify-center h-full space-y-1 mt-3 md:mt-0">
                <p className="text-[#313131]">{requestInfo.time}</p>
                <p className="text-[#666666]">{requestInfo.details}</p>
            </div>

            <div className="text-right content-end items-center">
                {isCancel ? (
                    <p className="text-[#E22424] flex items-center text-[10px] md:text-[22px] justify-center h-full">
                        Canceled
                    </p>
                ) : (
                    <div className="flex justify-end items-center h-full space-x-2 md:space-x-4">
                        <button className="text-[10] md:text-[16px] px-2 md:px-10 border-solid border-[1px] border-[#E22624] bg-[#E22424] py-1 md:py-2 rounded md:rounded-lg text-white cursor-pointer">
                            Accept
                        </button>
                        <button className="text-[10] md:text-[16px] px-2 md:px-10 border-solid border-[1px] border-[#E22424] bg-transparent text-[#E22424] py-1 md:py-2 rounded md:rounded-lg cursor-pointer">
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </SubCard>
    );
};

export default RequestCard;

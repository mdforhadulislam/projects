import Image from "next/image";
import Link from "next/link";
import Classes from "../../styles/Header.module.css";
import TextField from "../utils/TextField";
import SubCard from "./SubCard";

const Header = ({ tab }) => (
    <SubCard>
        <h2 className="text-[#313131] text-[35px] font-normal text-center border-2 border-red-200">
            Appointment
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-5">
            <div className="my-5 md:w-4/5">
                <TextField
                    placeholder="Search User....."
                    icon={"/search.svg"}
                />
            </div>
            <div className="ml-auto w-full flex items-center justify-center">
                <h3 className="ml-auto mr-4 font-normal text-xs md:text-2xl text-[#313131]">
                    Filter By
                </h3>

                <div className="flex w-[150px] h-[40px] md:h-[50px] md:w-[250px]">
                    <span className="inline-flex items-center px-4 py-3 text-sm text-gray-900 bg-[#E22424] rounded-l-md">
                        <Image
                            src="/calendar-line.svg"
                            width={27}
                            height={27}
                            alt="icon"
                        />
                    </span>
                    <input
                        type="text"
                        id="website-admin"
                        className="rounded-none rounded-r-lg border-2 border-red-500 outline-none border-l-0 text-gray-700 block flex-1 min-w-0 w-full text-sm px-4 focus:outline-none focus:border-[#E22424]  focus:shadow-outline-red"
                        placeholder="Date"
                    />
                </div>
            </div>
        </div>

        {/* tabs */}
        <div className="flex w-full ite justify-center mt-4">
            <div className="block md:hidden mr-auto cursor-pointer">
                <Image
                    className="block md:hidden cursor-pointer"
                    src="/arrowDim.svg"
                    width={25}
                    height={25}
                    alt="arrow dim"
                />
            </div>

            <div
                className={`w-full flex items-center justify-between text-[10px]  md:text-xl text-center text-[#666666]`}
            >
                <Link href="/appointment/upcoming">
                    <a
                        className={`${Classes.border} ${
                            tab === "upcoming" && Classes.borderRed
                        } mb-6 p-3 w-full`}
                    >
                        Upcoming
                    </a>
                </Link>

                <Link href="/appointment/previous">
                    <a
                        className={`${Classes.border} ${
                            tab === "previous" && Classes.borderRed
                        } mb-6 p-3 w-full`}
                    >
                        Previous
                    </a>
                </Link>

                <Link href="/appointment/request">
                    <a
                        className={`${Classes.border} ${
                            tab === "request" && Classes.borderRed
                        } mb-6 p-3 w-full`}
                    >
                        Request
                    </a>
                </Link>
            </div>

            <div className="block md:hidden ml-auto cursor-pointer">
                <Image src="/arrow.svg" width={25} height={25} alt="arrow" />
            </div>
        </div>
    </SubCard>
);

export default Header;

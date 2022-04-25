import React from "react";
import Classes from "../../styles/Header.module.css";

const RequestHeader = () => {
    return (
        <div className="w-full flex items-center justify-center mb-2">
            <div className="grid grid-cols-2 divide-x w-[300px] ">
                <div className={`text-center ${Classes.border} py-3`}>Sent</div>
                <div
                    className={`text-center ${Classes.border} ${Classes.borderRed} py-3`}
                >
                    Received
                </div>
            </div>
        </div>
    );
};

export default RequestHeader;

import React from "react";

const SubCard = ({ children, shadow, className }) => (
    <div
        className={`${
            shadow && "shadow-subCard hover:shadow-md"
        } border p-4 py-6 rounded-xl transition-all ${className} `}
    >
        {children}
    </div>
);

export default SubCard;

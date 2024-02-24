import React from "react";

function Select({ className, children, ...props }) {
    return (
        <select
            {...props}
            className={`select select-bordered w-full ${className}`}
        >
            {children}
        </select>
    );
}

export default Select;

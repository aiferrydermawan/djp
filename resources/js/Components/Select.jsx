import React from "react";

function Select({ className, children, ...props }) {
    return (
        <select
            {...props}
            className={`input input-bordered w-full ${className}`}
        >
            {children}
        </select>
    );
}

export default Select;

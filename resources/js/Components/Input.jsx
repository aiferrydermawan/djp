import React from "react";

function Input({ className, ...props }) {
    return (
        <input
            {...props}
            className={`input input-bordered w-full ${className}`}
        />
    );
}

export default Input;

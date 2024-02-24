import React from "react";

function Validation({ className, children, ...props }) {
    return (
        <div {...props} className={`label ${className}`}>
            <span className={`label-text-alt text-error`}>{children}</span>
        </div>
    );
}

export default Validation;

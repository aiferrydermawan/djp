import React from "react";

function Label({ className, name, ...props }) {
    return (
        <div {...props} className={`label ${className}`}>
            <span className={`label-text`}>{name}</span>
        </div>
    );
}

export default Label;

import React from "react";
import {
    IconCircleCheck,
    IconCircleX,
    IconInfoCircle,
    IconInfoTriangle,
} from "@tabler/icons-react";

function Alert({ status, className, children, ...props }) {
    let classNameAlert;
    let AlertIcon;
    switch (status) {
        case "success":
            classNameAlert = "alert-success";
            AlertIcon = IconCircleCheck;
            break;
        case "warning":
            classNameAlert = "alert-warning";
            AlertIcon = IconInfoTriangle;
            break;
        case "error":
            classNameAlert = "alert-error";
            AlertIcon = IconCircleX;
            break;
        default:
            classNameAlert = "";
            AlertIcon = IconInfoCircle;
    }
    return (
        <div role="alert" className={`alert ${classNameAlert} ${className}`}>
            <AlertIcon className={`h-6 w-6 shrink-0 stroke-current`} />
            <span>{children}</span>
        </div>
    );
}

export default Alert;

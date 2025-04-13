import React, { useState } from "react";

function NPWPInput({ value, className, ...props }) {
    const formatNPWP = (value) => {
        const numbers = value.replace(/\D/g, "");
        const match = numbers.match(
            /(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1})(\d{0,3})(\d{0,4})/,
        );
        if (match) {
            return `${match[1]}${match[2] ? "." + match[2] : ""}${match[3] ? "." + match[3] : ""}${match[4] ? "." + match[4] : ""}${match[5] ? "-" + match[5] : ""}${match[6] ? "." + match[6] : ""}`;
        }
        return "";
    };

    const handleChange = (event) => {
        const formattedNPWP = formatNPWP(event.target.value);
        // Panggil props.onChange jika ada, dan kirimkan nilai yang sudah diformat
        if (props.onChange) {
            props.onChange(formattedNPWP);
        }
    };

    return (
        <input
            {...props} // Menyebar semua props ke input element, membuatnya lebih fleksibel
            value={value}
            onChange={handleChange}
            placeholder="XX.XXX.XXX.X-XXX.XXX"
            className={`input input-bordered w-full ${className}`}
        />
    );
}

export default NPWPInput;

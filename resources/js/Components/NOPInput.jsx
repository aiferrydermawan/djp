import React, { useState } from "react";

function NOPInput({ value, className, ...props }) {
    const formatNOP = (value) => {
        const numbers = value.replace(/\D/g, ""); // Hapus karakter non-angka
        // Sesuaikan regex berikut dengan format NOP yang diinginkan
        const match = numbers.match(
            /(\d{0,2})(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,1})/,
        );
        if (match) {
            // Kembali format menjadi XX.XX.XXX.XXX.XXX-XXXX.X
            return `${match[1]}${match[2] ? "." + match[2] : ""}${match[3] ? "." + match[3] : ""}${match[4] ? "." + match[4] : ""}${match[5] ? "." + match[5] : ""}${match[6] ? "-" + match[6] : ""}${match[7] ? "." + match[7] : ""}`;
        }
        return "";
    };

    const handleChange = (event) => {
        const formattedNOP = formatNOP(event.target.value);
        // Panggil props.onChange jika ada, dan kirimkan nilai yang sudah diformat
        if (props.onChange) {
            props.onChange(formattedNOP);
        }
    };

    return (
        <input
            {...props} // Menyebar semua props ke input element, membuatnya lebih fleksibel
            value={value}
            onChange={handleChange}
            placeholder="XX.XX.XXX.XXX.XXX-XXXX.X"
            className={`input input-bordered w-full ${className}`}
        />
    );
}

export default NOPInput;

import React, { useState } from "react";

function NumberInput({ value, className, ...props }) {
    const formatNumber = (value) => {
        const numbers = value.replace(/\D/g, ""); // Hapus karakter non-angka
        return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Tambahkan titik setiap tiga digit
    };

    const handleChange = (event) => {
        const formattedNumber = formatNumber(event.target.value);
        // Panggil props.onChange jika ada, dan kirimkan nilai yang sudah diformat
        if (props.onChange) {
            props.onChange(formattedNumber);
        }
    };

    return (
        <input
            {...props} // Menyebar semua props ke input element, membuatnya lebih fleksibel
            value={value}
            onChange={handleChange}
            className={`input input-bordered w-full ${className}`}
        />
    );
}

export default NumberInput;

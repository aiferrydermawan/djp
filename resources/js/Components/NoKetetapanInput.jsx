import React, { useState } from "react";

function NoKetetapanInput({ value, className, ...props }) {
    const formatNoKetetapan = (value) => {
        const numbers = value.replace(/\D/g, "");
        // Sesuaikan regex untuk mengekstrak bagian yang sesuai dengan format baru
        const match = numbers.match(
            /(\d{1,5})?(\d{1,3})?(\d{1,2})?(\d{1,3})?(\d{1,2})?/,
        );
        if (match) {
            // Menggunakan '/' sebagai pemisah dan memastikan setiap grup diikuti oleh pemisah jika grup tersebut ada
            return `${match[1] ? match[1] : ""}${match[2] ? "/" + match[2] : ""}${match[3] ? "/" + match[3] : ""}${match[4] ? "/" + match[4] : ""}${match[5] ? "/" + match[5] : ""}`;
        }
        return "";
    };

    const handleChange = (event) => {
        const formattedNPWP = formatNoKetetapan(event.target.value);
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
            placeholder="XXXXX/XXX/XX/XXX/XX"
            className={`input input-bordered w-full ${className}`}
        />
    );
}

export default NoKetetapanInput;

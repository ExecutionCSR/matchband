"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Input({ nome, titulo, tipo, width, tamanho }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="p-2 flex">
            <label className="text-center text-black text-[30px] font-bold" htmlFor={nome}>
                {titulo}
            </label>
            <input maxLength={tamanho || 500} className={"ml-7 rounded-xl border-black border-2 p-1 " + (width || 'w-[40%]')} name={nome} type={tipo == "password" ? (showPassword ? 'text' : 'password') : (tipo || "text")} />
            {tipo == "password" &&
                <span
                    onClick={handleTogglePassword}
                    className="cursor-pointer self-center p-2"
                >
                    {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                </span>
            }
        </div>
    )
}
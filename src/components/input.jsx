

export default function Input({ nome, titulo, tipo, width, tamanho }) {
    return (
        <div className="p-2">
            <label className="  text-center text-black text-[30px] font-bold" htmlFor={nome}>
                {titulo}
            </label>
            <input maxLength={tamanho || 500} className={"ml-7 rounded-xl border-black border-2 p-1 " + (width || 'w-[40%]')} name={nome} type={tipo || "text"} />
        </div>
    )
}
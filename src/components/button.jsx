
export default function Button({ classe, icone, titulo }) {
    return (
        <button className={classe || "border border-black p-1 rounded"}>
            {icone}
            {titulo || "Clique"}
        </button>
    )
}
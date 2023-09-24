

export default function Button(props) {
    return (
        <button className={props.class || "border border-black p-1 rounded"}>
            {props.icone}
            {props.titulo || "Clique"}
        </button>
    )
}
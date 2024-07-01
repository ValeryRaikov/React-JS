export default function Square({ initial, value, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {initial === '' ? value : initial}
        </button>
    );
}

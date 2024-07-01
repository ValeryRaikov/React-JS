import Square from './Square';

export default function BoardRow(props) {
    return (
        <div className="board-row">
            {props.initials.map((initial, index) => (
                <Square 
                    key={index} 
                    initial={initial} 
                    value={props.values[index]} 
                    onClick={() => props.onClick(index)} 
                />
            ))}
        </div>
    );
}

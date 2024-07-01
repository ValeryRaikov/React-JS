import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board(props) {
    const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    function handleClick(row, col) {
        if (winner || squares[row][col] || props.readonly) return;

        const newSquares = squares.map(arr => arr.slice());
        newSquares[row][col] = isXNext ? "X" : "O";

        setSquares(newSquares);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newSquares);
        if (winner) {
            setWinner(winner);
        }
    }

    function calculateWinner(squares) {
        const lines = [
            // Horizontal lines
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Vertical lines
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonal lines
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [[a, b], [c, d], [e, f]] = lines[i];
            if (squares[a][b] && squares[a][b] === squares[c][d] && squares[a][b] === squares[e][f]) {
                return squares[a][b];
            }
        }
        return null;
    }

    return (
        <div className="board">
            {props.initials.map((row, rowIndex) => (
                <BoardRow 
                    key={rowIndex} 
                    initials={row} 
                    values={squares[rowIndex]} 
                    onClick={(colIndex) => handleClick(rowIndex, colIndex)} 
                />
            ))}
            {winner && <h2>{winner} wins!</h2>}
        </div>
    );
}

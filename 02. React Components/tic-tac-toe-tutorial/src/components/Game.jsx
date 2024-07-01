import Board from "./Board";

export default function Game() {
    const initialBoardValues = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const emptyBoardValues = [
        Array(3).fill(''),
        Array(3).fill(''),
        Array(3).fill(''),
    ];

    return (
        <>
            <h1>This is how the board should look like</h1>
            <Board initials={initialBoardValues} readonly={true} />
            <h1>Now you are ready to play...</h1>
            <Board initials={emptyBoardValues} />
        </>
    );
}

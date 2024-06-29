import BookTableData from "./BookTableData";

export default function BookTable(props) {
    const booksData = [
        { title: 'The Kite Runner', author: 'Khaled Hosseini', url: 'https://en.wikipedia.org/wiki/The_Kite_Runner' },
        { title: 'The Harry Potter Series', author: 'J. K. Rowling', url: 'https://en.wikipedia.org/wiki/Harry_Potter' },
        { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', url: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings' },
        { title: 'The Alchemist', author: 'Paulo Coelho', url: 'https://en.wikipedia.org/wiki/The_Alchemist_(novel)' },
    ];

    return (
        <>
            <h1>{props.name}</h1>

            <table>
                <thead>
                    <tr>
                        <th>Book URL:</th>
                        <th>Book Title:</th>
                        <th>Book Author:</th>
                    </tr>
                </thead>
                <tbody>
                    {booksData.map((book, index) => (
                            <BookTableData key={index} url={book.url} title={book.title} author={book.author}>
                                {props.children}
                            </BookTableData>
                        ))}
                </tbody>
            </table>
        </>
    );
}
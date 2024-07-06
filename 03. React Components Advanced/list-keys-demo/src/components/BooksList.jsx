import { useState } from "react";

const booksList = [
    {
        title: 'Journey to the center of the earth',
        author: 'Jules Verne',
        genre: 'adventure',
    },
    {
        title: 'Night Flyer',
        author: 'Tiya Miles',
        genre: 'historical',
    },
    {
        title: 'The Work of Art',
        author: 'Adam Moss',
        genre: 'sci-fi',
    },
];

export default function BooksList(props) {
    const [books, setBooks] = useState(booksList);

    return (
        <>
            <h1>{props.heading}</h1>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

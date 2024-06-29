import BookListItem from "./BookListItem";

export default function BookList(props) {
    const books = [
        'The Kite Runner',
        'The Harry Potter Series',
        'The Lord of the Rings',
        'The Alchemist',
    ];

    return (
        <>
            <h1>{props.name}</h1>

            <ul>
                <BookListItem url="https://en.wikipedia.org/wiki/The_Kite_Runner" title={books[0]} author="Khaled Hosseini" >{props.children}</BookListItem>
                <BookListItem url="https://en.wikipedia.org/wiki/Harry_Potter" title={books[1]} author="J. K. Rowling" >{props.children}</BookListItem>
                <BookListItem url="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings" title={books[2]} author="J. R. R. Tolkien" >{props.children}</BookListItem>
                <BookListItem url="https://en.wikipedia.org/wiki/The_Alchemist_(novel)" title={books[3]} author="Paulo Coelho" >{props.children}</BookListItem>
            </ul>
        </>
    );
}
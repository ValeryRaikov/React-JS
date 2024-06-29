export default function BookListItem(props) {
    return (
        <li>
            <a href={props.url} target="_blank">Title: {props.title} - Author: {props.author}</a>
        </li>
    );
}
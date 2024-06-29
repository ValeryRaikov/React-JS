export default function BookTableData(props) {
    return (
        <tr>
            <td>{props.url}</td>
            <td>{props.title}</td>
            <td>{props.author}</td>
        </tr>
    );
}
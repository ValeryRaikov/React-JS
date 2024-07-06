export default function TodoItem(props) {
    const classes = ['todo'];

    props.isCompleted ? classes.push('is-completed'): classes

    return (
        <tr className={classes.join(' ')}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? 'Completed' : 'Not Completed'}</td>
            <td className="todo-action">
            <button className="btn todo-btn" onClick={() => props.onStatusChange(props.id)}>Change status</button>
            </td>
        </tr>
    );
}
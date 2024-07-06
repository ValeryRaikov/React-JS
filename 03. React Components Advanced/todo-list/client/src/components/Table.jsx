import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import LoadingSpinner from "./LoadingSpinner";

const baseUrl = 'http://localhost:3030/jsonstore/todos';

export default function Table(props) {
    const [todos, setTodos] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(result => {
            const data = Object.values(result);
            setTodos(data);
            setPending(false);
        })
        .catch(err => {
            return <h3>Error fecthing data! {err}</h3>
        });
    }, [props.setTodos]);

    const changeStatusHandler = (todoId) => {
        setTodos(prevTodos => prevTodos.map(
            todo => todo._id === todoId 
                ? {...todo, isCompleted: !todo.isCompleted,}
                : todo
        ));
    }   

    return (
        <div className="table-wrapper">
            {pending && <LoadingSpinner />}

            <table className="table">
                <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo =>
                        <TodoItem 
                            key={todo._id}
                            id={todo._id}
                            text={todo.text}
                            isCompleted={todo.isCompleted} 
                            onStatusChange={changeStatusHandler}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}
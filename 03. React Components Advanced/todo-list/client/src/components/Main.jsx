import { useState } from "react";
import Table from "./Table";

const baseUrl = 'http://localhost:3030/jsonstore/todos';

export default function Main() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!newTodo) return;

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: newTodo, isCompleted: false }),
        });

        if (!response.ok) {
            return <h3>Error fecthing data!</h3>
        }

        const createdTodo = await response.json();

        setTodos((prevTodos) => [...prevTodos, createdTodo]);
        setNewTodo("");
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <main className="main">
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
            <button className="btn" onClick={toggleFormVisibility}>
                {isFormVisible ? "- Hide Form" : "+ Add new Todo"}
            </button>
            </div>

            {isFormVisible && (
                <form className="input-form" onSubmit={handleFormSubmit}>
                    <input className="input-field"
                        type="text" 
                        value={newTodo} 
                        onChange={handleInputChange} 
                        placeholder="Enter new todo"
                    />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            )}

            <Table todos={todos} setTodos={setTodos} />
        </section>
    </main>
    );
}
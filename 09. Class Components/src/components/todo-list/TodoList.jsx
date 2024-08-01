import React from "react";
import { Fragment } from "react";

import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
        }

        this.todoClickHandler = this.todoClickHandler.bind(this);
        this.todoRemoveHandler = this.todoRemoveHandler.bind(this);
    }

    todoClickHandler(todoId) {
        console.log(todoId);

        this.setState({todos: this.state.todos.map(todo => 
            todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo
        )});
    }

    todoRemoveHandler(todoId) {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== todoId)});
    }

    render () {
        return (
            <Fragment>
                <h1>First Class Component...</h1>

                <ul>
                    {this.state.todos.map(todo => 
                        <TodoListItem 
                            key={todo.id} 
                            {...todo} 
                            clickHandler={this.todoClickHandler}
                            removeHandler={this.todoRemoveHandler}
                        />
                    )}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
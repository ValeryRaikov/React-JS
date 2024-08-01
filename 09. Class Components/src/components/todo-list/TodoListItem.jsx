import React from "react";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li 
                style={this.props.isDone 
                    ? {textDecoration: 'line-through', cursor: 'pointer'} 
                    : {cursor: 'pointer'}}
                onClick={() => this.props.clickHandler(this.props.id)}
            >
                <span>{`Task: ${this.props.task} - Status: ${this.props.isDone ? 'done' : 'pending'}`}</span>
                <button onClick={(e) => {
                    e.stopPropagation();
                    this.props.removeHandler(this.props.id);
                }}>Remove</button>
            </li>
        );
    }
}

export default TodoListItem;
import React, { Component } from "react";
import ToDoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {

  markComplete(e, id) {
    this.props.markComplete(e, id)
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos.map(item => (
          <div key={item.id}>
            <ToDoItem todo={item} markComplete={(e, id) => this.markComplete(e,id)}/>
          </div>
        ))}
      </div>
    );
  }
}

Todos.PropTypes = {
  todos: PropTypes.array.isRequired
}

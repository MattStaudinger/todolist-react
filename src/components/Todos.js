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
        {this.props.todos.map(item => (
          <div key={item.id}>
            <ToDoItem todo={item} deleteItem={(id)=> this.props.deleteItem(id)} markComplete={(e, id) => this.markComplete(e,id)}/>
          </div>
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

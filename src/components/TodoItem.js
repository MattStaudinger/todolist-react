import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class TodoItem extends Component {


  getStyle = () => {
  return {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: this.props.todo.completed ? "line-through" : "none" }
  }

  markComplete(e, id) {
    this.props.markComplete(e, id)
  }

  render() {
    const {title,id: idTodo} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={(e, id) => this.markComplete(e,idTodo)} /> {" "}
        
        {title}</p>
      </div>
    )
  }
}

TodoItem.PropTypes = {
  todo: PropTypes.array.isRequired
}

//
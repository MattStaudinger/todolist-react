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

  markComplete(e) {
    this.props.markComplete(e)
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" name={this.props.todo.id} onChange={(e) => this.markComplete(e)} /> {" "}
        
        {this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.PropTypes = {
  todo: PropTypes.array.isRequired
}

//
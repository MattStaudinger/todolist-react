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
        
        {title}
        
        <button style = {btnStyle} onClick={() => this.props.deleteItem(idTodo)}>x</button>
        
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}

//
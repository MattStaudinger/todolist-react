import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          title: "Take out the trash",
          completed: false
        },
        {
          id: 1,
          title: "Dinner with dog",
          completed: false
        },
        {
          id: 2,
          title: "Lunch with mum",
          completed: false
        }
      ]
    };
  }

  markComplete(e, id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deleteItem(id) {
    this.setState({
      todos: this.state.todos.filter(todo => (todo.id === id ? false : true))
    });
  }

  addTodo(title) {
    this.setState({
      todos: [...this.state.todos, 
      {
        id: this.state.todos[this.state.todos.length-1].id + 1,
        title,
        completed: false
      }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={(title) => this.addTodo(title)}/>
          <Todos
            todos={this.state.todos}
            markComplete={(e, id) => this.markComplete(e, id)}
            deleteItem={id => this.deleteItem(id)}
          />
        </div>
      </div>
    );
  }
}

export default App;

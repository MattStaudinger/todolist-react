import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

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

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={(e, id) => this.markComplete(e, id)}
        />
      </div>
    );
  }
}

export default App;

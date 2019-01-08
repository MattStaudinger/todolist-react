import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
import About from './components/pages/About'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
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
        id: uuid.v4(),
        title,
        completed: false
      }
      ]
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={(title) => this.addTodo(title)}/>
              <Todos
                todos={this.state.todos}
                markComplete={(e, id) => this.markComplete(e, id)}
                deleteItem={id => this.deleteItem(id)}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => {
    this.setState({
      todos: res.data
    })
  })
  }
}

export default App;

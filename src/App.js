import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'House cleaning' },
      { id: 2, content: 'New teeth brushes'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo];
      this.setState({
        todos //when key and value have the same name.
      })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Passover Tasks</h1>
        <h2 className="center blue-text">Once done click to delete</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

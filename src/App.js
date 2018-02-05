import React, { Component } from 'react';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  addTodo = (event) => {
    const newTodo = {description: this.state.description, date: this.state.date};
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
}

  deleteTodo = (event) => {
    const index = +event.target.id;
    event.preventDefault();
    this.setState({
        todos: this.state.todos.filter((todo, i) => i !== index)
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Simple ToDo List</h2>
        </header>

        <br />

        <div className="App-todo">
          <div className="App-todo-p">
            <p>Add to do:</p>
          </div>
          
          <div className="App-todo-input">
            <form className="App-todo-input-form" onSubmit={this.addTodo}>
              <p>Description: </p>
              <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
              <p>Date: </p>
              <input type="date" name="date" onChange={this.inputChanged} value={this.state.date}/>
              <input type="submit" value="Add"/>
            </form>
          </div>   
        </div>     

        <TodoTable todos={this.state.todos} onClick = {this.deleteTodo}/>

      </div>
    );
  }
}

export default App;

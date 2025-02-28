import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

// useRef
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        showCompleted: true,
        todos: [],
        input: '',
      }
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      name: this.state.input,
      id: this.randomNum(1, 1000000000000),
      completed: false,
      visible: true,
    }
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      input: '',
    }), () => {
      console.log(this.state.todos);
    });
  }

  handleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => {
        if (todo.completed !== true) {
          return todo.id === id ? { ...todo, completed: true } : todo
        } else {
          return todo.id === id ? { ...todo, completed: false } : todo
        }
      })
    }), () => {
      console.log(this.state.todos);
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleHideCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id && todo.completed === true) {
          return { ...todo, visible: false };
        }
        return todo;
      }),
      showCompleted: prevState.showCompleted ? false : true,
    }))
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList 
        propsArray={this.state.todos} 
        propsComp={this.handleCompleted}
        propsVisible={this.state.todos.visible}
        showCompleted={this.state.showCompleted}
        />
        <Form 
        propsSubmit={this.handleSubmit} 
        propsInput={this.handleInputChange} 
        propsValue={this.state.input}
        propsEnter={this.handleEnter}
        propsHide={this.handleHideCompleted}
        showCompleted={this.state.showCompleted}
        />
      </div>
    )
  }
}

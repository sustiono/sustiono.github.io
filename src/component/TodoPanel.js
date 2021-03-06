import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../css/todos.css';

class TodoPanel extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {todos: []};

	  this.addTodos = this.addTodos.bind(this);
	  this.removeTodos = this.removeTodos.bind(this);
	}

	addTodos(todo) {
		let todos = [...this.state.todos];
		todos.push(todo);
		this.setState({todos});
	}

	removeTodos(index) {
		let todos = [...this.state.todos];
		if (!Array.isArray(index)) {
			todos.splice(index, 1);
			this.setState({todos});
		} else {
			if (index.length === todos.length) {
				this.setState({todos: []});
			} else {
				todos = todos.filter((todo, idx) => !index.includes(idx));
				this.setState({todos});
			}
		}
	}

  editTodo(value, index) {
    let todos = [...this.state.todos]
    todos[index] = value
    this.setState({todos})
  }

	render() {
		return (
			<div className="todo-panel">
				<div className="todo-form">
					<TodoForm addTodos={this.addTodos} />
				</div>
				<div className="todo-list">
					<TodoList
            todos={this.state.todos}
            removeTodos={this.removeTodos}
            editTodo={(value, index) => this.editTodo(value, index)}
          />
				</div>
			</div>
		);
	}
}

export default TodoPanel;
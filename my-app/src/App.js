import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Hit the Skreets',
                completed: false
            },{
                id: 2,
                title: 'Give old lady a suck job',
                completed: true
            },{
                id: 3,
                title: 'Try PCP for first time',
                completed: false
            },
        ]
    }
    // Toggle complete off and on
    toggleComplete = (id) => {
        this.setState( {todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })} );
    }

    // Delete Todo
    deleteTodo = (id) => {
        this.setState({ todos:[...this.state.todos.filter(todo => todo.id
            !== id)] });
    }
    
    render() {
        return (
            <div className="App">
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
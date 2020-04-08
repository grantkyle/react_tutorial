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
                completed: false
            },{
                id: 3,
                title: 'Try PCP for first time',
                completed: false
            },
        ]
    }

    render() {
        return (
            <div className="App">
                <Todos />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import TestComponent from './TestComponent';
import DateSelector from './components/DateSelector';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Валютный калькулятор</h1>
                <Calculator/>
                <br/>
                <DateSelector/>
                <br/>
                <TestComponent/>
            </div>
        );
    }
}

export default App;

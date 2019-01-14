import React, { Component } from 'react';
import Calculator from './components/Calculator';
import DateSelector from './components/DateSelector';
import "./App.css" ;

class App extends Component {

    render() {
        return (
            <div className="card mx-auto App" style={{maxWidth:"500px"}}>
                <h5 className="card-header">Валютный калькулятор</h5>
                <div className="card-body">
                    <Calculator/>
                    <br/>
                    <DateSelector/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default App;

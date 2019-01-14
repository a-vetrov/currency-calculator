import React, { Component } from 'react';
//import './App.css';

class Calculator extends Component {

    currencyAmountChange = (event) => {
        console.log("Currency amount changed to " + event.target.value)
    } ;

    currencyTypeChanged = (event) => {
        console.log("Currency type changed to " + event.target.value)
    } ;

    render() {

        const roubles = 1224.5 ;

        return (
            <div className="Calculator">
                <input type="text" size="10" value={1} onChange={this.currencyAmountChange}/>

                <select onChange={this.currencyTypeChanged}>
                    <option>Пункт 1</option>
                    <option>Пункт 2</option>
                </select> = {roubles.toFixed(2)} рублей
            </div>
        );
    }
}

export default Calculator;

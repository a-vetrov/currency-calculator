import React, { Component } from 'react';
import { connect } from "react-redux";
import {changeAmount} from '../actions/index' ;
//import './App.css';

const mapStateToProps = state => {
    return { amount: state.amount, currency:state.currency };
};

function mapDispatchToProps(dispatch) {
    return {
        changeAmount: amount => dispatch(changeAmount(amount))
    };
}

class ConnectedCalculator extends Component {

    currencyAmountChange = (event) => {
        this.props.changeAmount(parseFloat(event.target.value)) ;
    } ;

    currencyTypeChanged = (event) => {
        console.log("Currency type changed to " + event.target.value)
    } ;

    render() {

        const ratio = 30 ;
        const roubles = this.props.amount * ratio ;

        return (
            <div className="Calculator">
                <input type="text" size="10" onChange={this.currencyAmountChange} value={this.props.amount}/>

                <select onChange={this.currencyTypeChanged}>
                    <option>Пункт 1</option>
                    <option>Пункт 2</option>
                </select> = {roubles.toFixed(2)} рублей
            </div>
        );
    }
}

const Calculator = connect(mapStateToProps,mapDispatchToProps)(ConnectedCalculator);
export default Calculator;

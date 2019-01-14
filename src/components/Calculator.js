import React, { Component } from 'react';
import { connect } from "react-redux";
import {changeAmount} from '../actions/index' ;
//import './App.css';

const mapStateToProps = state => {
    return { amount: state.amount, currency:state.currency, data:state.data };
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

                {this.createSelect()}

                 = {roubles.toFixed(2)} рублей
            </div>
        );
    }

    createSelect = () => {
        if (!this.props.data) return null ;
        let options = this.props.data.map((value, index) => <option value={value.ratio} key={index}>{value.charCode}</option>) ;
        return <select onChange={this.currencyTypeChanged}> {options} </select> ;
    }
}

const Calculator = connect(mapStateToProps,mapDispatchToProps)(ConnectedCalculator);
export default Calculator;

import React, { Component } from 'react';
import { connect } from "react-redux";
import {changeAmount} from '../actions/index' ;
import {changeCurrency} from '../actions/index' ;
//import './App.css';

const mapStateToProps = state => {
    return { amount: state.amount, currency:state.currency, data:state.data, ratio:state.ratio };
};

function mapDispatchToProps(dispatch) {
    return {
        changeAmount: amount => dispatch(changeAmount(amount)),
        changeCurrency: currency => dispatch(changeCurrency(currency))
    };
}

class ConnectedCalculator extends Component {

    currencyAmountChange = (event) => {
        this.props.changeAmount(parseFloat(event.target.value)) ;
    } ;

    currencyTypeChanged = (event) => {
        this.props.changeCurrency(event.target.value) ;
    } ;

    render() {
        const ratio = this.getRatio() ;
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
        let options = this.props.data.map((value, index) => <option value={value.charCode} key={index}>{value.charCode}</option>) ;
        let hiddenOptiom = <option value="" disabled hidden>...</option>  ;
        let value = this.props.currency || "" ;
        return <select onChange={this.currencyTypeChanged} value={value}>
                    {hiddenOptiom}
                    {options}
                </select> ;
    } ;

    getRatio = () => {
        if (!this.props.data) return 0 ;
        const ratio = this.props.data.filter((value) => value.charCode === this.props.currency) ;
        return ratio.length ? ratio[0].ratio : 0 ;
    }
}

const Calculator = connect(mapStateToProps,mapDispatchToProps)(ConnectedCalculator);
export default Calculator;

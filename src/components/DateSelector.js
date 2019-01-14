import React, { Component } from 'react';
import { connect } from "react-redux";
import {changeDate} from "../actions";
import {getData} from "../actions";
//import './App.css';


function mapDispatchToProps(dispatch) {
    return {
        changeDate: date => dispatch(changeDate(date)),
        getData: date => dispatch(getData(date))
    };
}


class ConnectedDateSelector extends Component {

    onDateChanged = (event) => {
        let newDate = event.target.value ;
        newDate = newDate.split("-").reverse().join('/') ;
        console.log(newDate) ;
        this.props.changeDate(newDate) ;
        this.props.getData(newDate)
    } ;

    componentDidMount = () => this.props.getData(null) ;

    render() {

        return (
            <div>
                Дата :
                <input type="date" onChange={this.onDateChanged}/>
            </div>
        );
    }
}

const DateSelector = connect(null, mapDispatchToProps)(ConnectedDateSelector);
export default DateSelector;

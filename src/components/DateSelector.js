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
        this.props.changeDate(newDate) ;
        this.props.getData(newDate)
    } ;

    componentDidMount = () => this.props.getData(null) ;

    render() {

        return (
            <div className="form-inline">
                <span className="card-text">Дата : &nbsp;</span>
                <input type="date" onChange={this.onDateChanged} className="form-control" style={{width:"10em"}}/>
            </div>
        );
    }
}

const DateSelector = connect(null, mapDispatchToProps)(ConnectedDateSelector);
export default DateSelector;

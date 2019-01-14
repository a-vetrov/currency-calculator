import React, { Component } from 'react';
import './App.css';

class App extends Component {

    componentDidMount = () => {
        console.log("App started") ;

        fetch('http://www.cbr.ru/scripts/XML_daily.asp')
            .then(function(response) {
                console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                console.log(response.status); // 200

                return response.text();
            })
            .then(function(data) {
                console.log(data) ;
            })
            .catch( alert );
    } ;

    render() {
        return (
            <div className="App">
                <h1>Валютный калькулятор</h1>
            </div>
        );
    }
}

export default App;

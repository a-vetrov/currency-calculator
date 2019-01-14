import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {

    componentDidMount = () => {
        console.log("App started") ;

        fetch('http://localhost/proxy.php')
            .then(function(response) {
                console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                console.log(response.status); // 200

                return response.text();
            })
            .then(function(data) {
                //console.log(data) ;
            })
            .catch( function(message) {
                //console.log(message) ;
            } );
    } ;

    render() {
        return (
            <div className="App">
                <h1>Валютный калькулятор</h1>
                <Calculator/>
            </div>
        );
    }
}

export default App;

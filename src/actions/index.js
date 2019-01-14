import { CHANGE_CURRENCY } from "./action-types";
import { CHANGE_AMOUNT } from "./action-types";
import { CHANGE_DATE } from "./action-types";
import { DATA_LOADED } from "./action-types";

export function changeCurrency(currency) {
    return { type: CHANGE_CURRENCY, currency }
};

export function changeAmount(amount) {
    return { type: CHANGE_AMOUNT, amount }
};

export function getData(date) {
    //const url = date ? "http://localhost/proxy.php?date_req=" + date : "http://localhost/proxy.php" ;
    const url = date ? "./proxy.php?date_req=" + date : "./proxy.php" ;

    let parseData = (data) => {
        let result = [] ;
        let xmlDoc = (new DOMParser()).parseFromString(data,"text/xml");
        let nodeList = xmlDoc.getElementsByTagName("Valute") ;

       for (let i=0; i< nodeList.length; i++) {
           let node = nodeList[i] ;
           let charCode = node.getElementsByTagName("CharCode")[0].childNodes[0].nodeValue ;
           let ratio = parseFloat(node.getElementsByTagName("Value")[0].childNodes[0].nodeValue.replace(',','.')) ;
           result.push({ratio, charCode}) ;
       }

        return result ;
    } ;

    return function(dispatch) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                dispatch({ type: DATA_LOADED, data:parseData(data) });
            })
            .catch( message => console.log(message) );
    };
};

export function changeDate(date) {
    return {type:CHANGE_DATE, date} ;
}


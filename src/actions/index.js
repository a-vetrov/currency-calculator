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
    const url = date ? "http://localhost/proxy.php?date_req=" + date : "http://localhost/proxy.php" ;
    return function(dispatch) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                console.log(data) ;
                dispatch({ type: DATA_LOADED, data });
            })
            .catch( message => console.log(message) );
    };
};

export function changeDate(date) {
    return {type:CHANGE_DATE, date} ;
}


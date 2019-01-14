import { CHANGE_CURRENCY } from "../actions/action-types";
import { CHANGE_AMOUNT } from "../actions/action-types";
import { CHANGE_DATE } from "../actions/action-types";

const initialState = {
    currency:null,
    amount:1,
    date:null
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_CURRENCY : return { ...state, currency: action.currency } ;
        case CHANGE_AMOUNT : return { ...state, amount: action.amount } ;
        case CHANGE_DATE : return { ...state, date: action.date } ;
        default : return state;
    }

};


export default rootReducer;
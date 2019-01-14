import { CHANGE_CURRENCY } from "../actions/action-types";
import { CHANGE_AMOUNT } from "../actions/action-types";
import { CHANGE_DATE } from "../actions/action-types";
import { DATA_LOADED } from "../actions/action-types";

const initialState = {
    currency:null,
    amount:1,
    date:null,
    data:null
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_CURRENCY : return { ...state, currency: action.currency } ;
        case CHANGE_AMOUNT : return { ...state, amount: action.amount } ;
        case CHANGE_DATE : return { ...state, date: action.date } ;
        case DATA_LOADED : return { ...state, data: action.data } ;
        default : return state;
    }

};


export default rootReducer;
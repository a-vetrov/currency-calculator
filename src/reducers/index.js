import { CHANGE_CURRENCY } from "../actions/action-types";

const initialState = {
    currency:null,
    amount:1
};

function rootReducer(state = initialState, action) {
    switch (action) {
        case CHANGE_CURRENCY : return { ...state, currency: action.currency } ;
        default : return state;
    }

};

export default rootReducer;
import { CHANGE_CURRENCY } from "./action-types";

export function changeCurrency(currency) {
    return { type: CHANGE_CURRENCY, currency }
};
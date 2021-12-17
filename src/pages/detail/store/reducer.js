import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    title: "",
    content:""
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}
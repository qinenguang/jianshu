import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalpage: 1,
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.FOCUS:
            return state.set('focused', true);
        case actionTypes.BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalpage: action.totalpage
            })
            //state.set('list', action.data).set('totalpage',action.totalpage);
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}
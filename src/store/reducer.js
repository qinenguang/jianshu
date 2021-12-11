import { combineReducers } from "redux-immutable"
//import headerReducer from "../common/header/store/reducer"
import {reducer as headerReducer} from "../common/header/store"
// redux-immutable

const reducer = combineReducers({
    header: headerReducer
})

export default reducer
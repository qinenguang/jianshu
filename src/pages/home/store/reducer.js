import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    writerList:[]    
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                recommendList: fromJS(action.recommendList),
                articleList: fromJS(action.articleList),
                writerList: fromJS(action.writerList)
            })
            //state.set('topicList', fromJS(action.topicList)).set
            //console.log(action)

        default:
            return state;
    }
}
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
        writerList: fromJS(action.writerList)
    })
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case actionTypes.ADD_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        case actionTypes.TOGGLE_SCROLL:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}
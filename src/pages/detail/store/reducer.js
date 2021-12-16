import { fromJS } from "immutable";
//import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
    title: "衡水中学",
    content:'<img alt="" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" /><p><b>清华</b></p><p>清华</p><p>清华</p><p>清华</p>'
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
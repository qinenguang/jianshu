import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    //data:data
    data: fromJS(data),
    totalpage:Math.ceil(data.length / 10)
})

export const Focus = () => ({
    type:actionTypes.FOCUS
})

export const Blur = () => ({
    type:actionTypes.BLUR
})

export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error');
        })
    }
}
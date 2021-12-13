import { fromJS } from "immutable";
const defaultState = fromJS({
    topicList: [{
        id:1,
        title:"社会热点",
        imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
    },{
        id:2,
        title:"手绘",
        imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg" 
    }],
    articleList: [{
        id:1,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"
    },{
        id:2,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    },{
        id:3,
        title:"《白鹿原》：一本有点颜色的书？",
        desc:"初二时，在图书馆借了《白鹿原》，我后桌一名男生看到后，怪笑一声，然后用一种神秘的口吻对我说：“哇，你也看这书啊！我看了不到四章，我爸就不让我看了...",   
        imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1074417518,1198280004&fm=26&gp=0.jpg"    
    }]    
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
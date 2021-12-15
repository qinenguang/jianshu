import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;        
    width: 625px;
    float:left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    background:#f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        width:32px;
        height:32px;
        dispaly: block;
        float:left;
        margin-right: 10px;
        
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;    
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:125px;
        height:100px;
        float: right;
        border-raduis: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color:#999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    height:50px;
    width: 280px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;

export const WriterHeader = styled.div`
    font-size: 14px;
    color: #969696;
    margin-bottom: 18px;    
`;

export const WriterSwitch = styled.div`
    float: right;
    font-size: 14px;
    color: #969696;
`;

export const WriterItem = styled.div`
    width: 285px;
    overflow: hidden;
    .head {
        width: 50px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }    
`;

export const WriterInfo = styled.div`
    overflow: hidden;
    width: 230px;
    margin-top: 4px;
    margin-left: 60px;
    margin-bottom: 20px;    
`;

export const WriterName = styled.div`
    font-size: 14px;
    color: #333;    
`;

export const WriterDesc = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: #969696;    
`;

export const WriterFocus = styled.div`
    float: right;
    margin-right: 10px;
    font-size: 13px;
    color: #42c02e;    
`;

export const AllWriter = styled.div`
    position: absolute;
    width: 258px;
    padding: 7px 7px 7px 12px;
    right: 240px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;    
`;

export const LoadMore = styled.div`
    width: 100%;
    heighjt: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom:100px;
    width: 60px;
    height:60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`
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
    width: 240px;
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
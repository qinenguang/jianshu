import React, { Component } from "react";
import { connect } from "react-redux";
import { WriterHeader, WriterSwitch, WriterItem, WriterInfo, WriterName, WriterDesc, WriterFocus, AllWriter } from "../style";
class Writer extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                <WriterHeader>推荐作者
                    <WriterSwitch>换一批</WriterSwitch>
                </WriterHeader>
                {
                    list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img className="head" src={item.get("imgUrl")}
                                    alt="" />
                                <WriterInfo>
                                    <WriterName>梅拾璎</WriterName>
                                    <WriterDesc>{item.get('desc')}</WriterDesc>
                                    <WriterFocus>+关注</WriterFocus>
                                </WriterInfo>
                            </WriterItem>
                            
                    )
                })}        
                    <AllWriter>查看全部</AllWriter>
                

            </div>

        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)
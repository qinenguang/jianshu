import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
    render() {
        const {list} = this.props
        return (
            <TopicWrapper>
                {list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                className="topic-pic"
                                src={item.get('imgUrl')} 
                                alt="" />
                            {item.get('title')}
                        </TopicItem>
                    )
                })
                }
                <div>更多热门专题</div>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','topicList'])
})

export default connect(mapState, null)(Topic)
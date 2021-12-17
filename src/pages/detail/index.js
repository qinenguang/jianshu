import React, {Component} from "react";
import {DetailWrapper, Header, Content} from "./style";
import {connect} from "react-redux";
import { actionCreator} from "./store"

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail()
    }
}
const mapState = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
})

const mapDispatch = (dispatch) => ({
    getDetail () {
        dispatch(actionCreator.getDetail())
    }
})
export default connect(mapState,mapDispatch)(Detail)
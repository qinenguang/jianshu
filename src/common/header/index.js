import React, { Component } from "react";
import { connect } from "react-redux"
import { CSSTransition } from 'react-transition-group';
import {
    HeadWrapper, Logo, Nav, NavItem, Navsearch, Addition,
    Button, SearchWrapper, SearchInfo, SearchInfoTitle,
    SearchInfoSwitch, SearchInfoItem, SearchInfoList,
} from './style'

import * as actionCreator from "./store/actionCreator"

class Header extends Component {
    getListArea() {
        const { focused, list, page, mouseIn,
             handleMouseEnter, handleMouseLeave, totalpage, handleChangePage} =this.props;
        const jsList = list.toJS()
        const pageList = []
        if (jsList.length) {
            for (let i = (page*10); i < (page + 1)*10; i++) {
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>    
            )
        }
        }   
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalpage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur} = this.props
        return (
            <HeadWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Navsearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </Navsearch>
                        </CSSTransition>
                        <span
                            className={focused ? 'focused iconfont' : 'iconfont'}
                        >&#xe614;</span>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='write'>
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeadWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        //state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalpage: state.getIn(['header', 'totalpage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.Focus())
        },
        handleInputBlur() {
            dispatch(actionCreator.Blur())
        },
        handleMouseEnter () {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage (page,totalpage) {
            if (page < totalpage-1) {
                dispatch(actionCreator.changePage(page + 1))
            }else{
                dispatch(actionCreator.changePage(0))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
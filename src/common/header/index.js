import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HeaderWrapper, SearchInfo } from './style'

const Header = (props) => {
  const { focused, list, page, mouseIn, totalPage } = props;
  const newList = list.toJS();
  const pageList = [];
  if (newList.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <li key={newList[i]}><a href="#">{newList[i]}</a></li>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className='nav cl'>
        <div className='logo-box'>
          <a href="/" className='logo fl'></a>
        </div>
        <div className='right-btn'>
          <a className='log-in'>登录</a>
          <a className='sign-up'>注册</a>
          <a className='write'>
            <i className='iconfont'>&#xe6e5;</i>
              写文章
              </a>
        </div>
        <div className='navbar'>
          <div className='nav-link'>
            <a href="/" className='link-list'>
              <i className='iconfont'>&#xe60c;</i>
              <span>首页</span>
            </a>
            <a href="/" className='link-list'>
              <i className='iconfont'>&#xe652;</i>
              <span>下载APP</span>
            </a>
            <div className='seek'>
              <input
                className={focused ? 'focused' : ''}
                onFocus={() => props.handleInputFocus(list)}
                onBlur={props.handleInputBlur}
                placeholder="搜索" type="text"
              />
              <i
                className={focused ? 'iconfont seek-icon Icon' : 'iconfont seek-icon'}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              >&#xe60d;</i>
              <SearchInfo
                onMouseEnter={props.hendleMouseEnter}
                onMouseLeave={props.hendleMouseLeave}
              >
                <div className={focused || mouseIn ? 'search-hot cl hot-show' : 'search-hot cl'}>
                  <span>热门搜索</span>
                  <span onClick={() => props.hendleChangePage(page, totalPage)} className='ri'>换一批</span>
                  <div className='crux'>
                    <ul className='cl'>
                      {pageList}
                    </ul>
                  </div>
                </div>
              </SearchInfo>
            </div>
            <div className='style-mode'>
              <a>
                <i className='iconfont'>&#xe636;</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispath(actionCreators.getList())
      dispath(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispath(actionCreators.searchBlur())
    },
    hendleMouseEnter () {
      dispath(actionCreators.mouseEnter())
    },
    hendleMouseLeave () {
      dispath(actionCreators.mouseLeave())
    },
    hendleChangePage (page, totalPage) {
      if (page < totalPage) {
        dispath(actionCreators.changePage(page + 1))
      } else {
        dispath(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
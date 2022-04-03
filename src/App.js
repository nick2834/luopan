import React, { Component } from 'react'
import { Router as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/sidebar'
import Basic from './Basic'
import Login from './views/login'
import Homepage from './views/homepage/homepage'
import Qualification from './views/qualification'
import Shops from './views/Shops'
import tyf from './views/tyf'
import Shfx from './views/Shfx'
import liveList from './views/live-list'
import Feedback from './components/feedback'
import './App.less';
const creatHistory = require("history").createHashHistory;
const history = creatHistory();
export class App extends Component {
  componentDidMount = () => {
    console.log(this.props)
  }
  render() {
    return (
      <HashRouter history={history}>
        <div className="App">
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Redirect from="/" exact to="login"></Redirect>
            <Route path='/homepage' exact component={Homepage} onEnter={() => document.title = "首页"}></Route>
            <Route path='/qualification' exact component={Qualification} onEnter={() => document.title = "资质中心"}></Route>
            <div className='compass--QcMj1'>
              <div className="headerWrapper--7HYa6">
                <div className='headerContainer--1j3-v'>
                  <div className="logo--1sudJ">
                    <img className="logoImg--1h9Bh" src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/77d5d7153ffd4630a49e44b7a1e6ce70~tplv-n15nrygpm8-image.image" />
                    <div className="ecom-dropdown-trigger roleDropDown--1yrD5">
                      <div>商家视角</div>
                      <img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/25b4e7b217064575b89f100a3ad4c54f~tplv-n15nrygpm8-image.image" width="16" height="16" />
                    </div>
                  </div>
                  <div className="menuList--1bgAA"></div>
                  <div className="headerTools--TX8PU"><div><div className="wrapper--P6luG">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDI2YzMuMzE0IDAgNi4zMTQtMS4zNDMgOC40ODUtMy41MTVBMTEuOTYyIDExLjk2MiAwIDAgMCAyNiAxNGMwLTMuMzE0LTEuMzQzLTYuMzE0LTMuNTE1LTguNDg1QTExLjk2MyAxMS45NjMgMCAwIDAgMTQgMmExMS45NjIgMTEuOTYyIDAgMCAwLTguNDg1IDMuNTE1QTExLjk2MiAxMS45NjIgMCAwIDAgMiAxNGMwIDMuMzE0IDEuMzQzIDYuMzE0IDMuNTE1IDguNDg1QTExLjk2MiAxMS45NjIgMCAwIDAgMTQgMjZ6IiBmaWxsPSIjQzRDNUNDIi8+PGNpcmNsZSBjeD0iMTQiIGN5PSIxMSIgcj0iNCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNOCAyMWExIDEgMCAxIDAgMiAwSDh6bTEwIDBhMSAxIDAgMSAwIDIgMGgtMnptLTggMGE0IDQgMCAwIDEgNC00di0yYTYgNiAwIDAgMC02IDZoMnptNC00YTQgNCAwIDAgMSA0IDRoMmE2IDYgMCAwIDAtNi02djJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" className="icon--387nV" />
                    <span className="label--H2X4F">个人中心</span></div></div><div className="link--38tYA">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi40ODUgMjIuNDg1QTExLjk2MiAxMS45NjIgMCAwIDEgMTQgMjZhMTEuOTYyIDExLjk2MiAwIDAgMS04LjQ4NS0zLjUxNUExMS45NjMgMTEuOTYzIDAgMCAxIDIgMTRjMC0zLjMxNCAxLjM0My02LjMxNCAzLjUxNS04LjQ4NUExMS45NjIgMTEuOTYyIDAgMCAxIDE0IDJjMy4zMTQgMCA2LjMxNCAxLjM0MyA4LjQ4NSAzLjUxNUExMS45NjIgMTEuOTYyIDAgMCAxIDI2IDE0YzAgMy4zMTQtMS4zNDMgNi4zMTQtMy41MTUgOC40ODV6TTkuNzUgMTEuMjEyQzkuNzUgOC44NzMgMTEuNjY1IDcgMTQgN2MyLjMzMyAwIDQuMjQ4IDEuODczIDQuMjQ4IDQuMjEyIDAgMS45NS0xLjMzMiAzLjU3Ny0zLjEyOSA0LjA2M3YxLjA5YTEuMTIgMS4xMiAwIDAgMS0yLjI0IDB2LTIuMDYyYzAtLjYxOC41MDItMS4xMiAxLjEyLTEuMTIgMS4xMjIgMCAyLjAxLS44OTUgMi4wMS0xLjk3MXMtLjg4OC0xLjk3Mi0yLjAxLTEuOTcyYy0xLjEyMiAwLTIuMDA5Ljg5Ni0yLjAwOSAxLjk3MmExLjEyIDEuMTIgMCAxIDEtMi4yNCAwek0xNCAyMWMuNzIgMCAxLjMwNC0uNTc3IDEuMzA0LTEuMjg4IDAtLjcxMi0uNTg0LTEuMjg4LTEuMzA0LTEuMjg4LS43MiAwLTEuMzA0LjU3Ni0xLjMwNCAxLjI4OCAwIC43MTEuNTg0IDEuMjg4IDEuMzA0IDEuMjg4eiIgZmlsbD0iI0M0QzVDQyIvPjwvc3ZnPg==" className="icon--2mqJk" /><span>帮助</span></div>
                  </div>
                  <div className="userCenter--3bzPS"><div className="ecom-dropdown-trigger userDropDown--2Ze9h">
                    <img className="avatar--159h2" src="https://p3-aio.ecombdimg.com/obj/temai/16140930867415d9be36094e35c41b82e4b33af9f331daeffd" alt="" />
                    <div className="userName--3zxHI">昆仑石记</div>
                    <img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/25b4e7b217064575b89f100a3ad4c54f~tplv-n15nrygpm8-image.image" />
                  </div>
                  </div>
                </div>
              </div>
              <div className='compassWrapper--19hSB'>
                <Navbar />
                <Route path='/shop' exact component={Basic}></Route>
                <Route path='/product-analysis' exact component={Shops}></Route>
                <Route path='/tyf' exact component={tyf}></Route>
                <Route path='/shfx' exact component={Shfx}></Route>
                <Route path='/live-list' exact component={liveList}></Route>
              </div>
              <Feedback />
            </div>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
// 引入前面创建的Index组件
import Index from "../pages/index/index"

export default class Router extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/index" />)} />
        <Route path="/index" component={Index} />
      </Switch>
    )
  }
} 
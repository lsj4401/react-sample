import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RandomQuestionView from './view/question/RandomQuestionView';
import WrongAnswerQuestionView from './view/question/WrongAnswerQuestionView';
import TestView from './view/question/TestView';
import AddQuestionView from './view/question/AddQuestionView';
import MyInfoView from './view/info/MyInfoView';
import LoginView from './view/login/LoginView';
import MenuWrap from './view/menu/MenuWrap';
import Header from './view/menu/Header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuWrap />
          <Header />
          <div>
            <Switch>
              <Route path='/question/random' component={RandomQuestionView} />
              <Route path='/question/wrong-answer' component={WrongAnswerQuestionView} />
              <Route path='/question/test' component={TestView} />
              <Route path='/question/add' component={AddQuestionView} />
              <Route path='/my-info' component={MyInfoView} />
              <Route path='/login' component={LoginView} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

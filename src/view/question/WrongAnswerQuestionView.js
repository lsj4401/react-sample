import React, { Component } from 'react';
import ajax from 'axios'
import URLS from '../../server/urlConstants';
import QuestionView from './QuestionView'

class WrongAnswerQuestionView extends Component {
  state = {
    userId: 1,
    title: 'Wrong Answer Question',
    questionCategory: 'Question',
    question: '문제를 읽어오는 중입니다...',
    selections: []
  };

  getQuestion = () => {
    ajax.get(URLS.psService('/question/wrong'))
      .then((res) => {
        this.setState({
          questionCategory: res.data.questionCategory.name,
          questionId: res.data.questionId,
          content: res.data.content,
          selections: res.data.selections
        })
      })
  };

  componentWillMount() {
    this.getQuestion();
  }

  render() {
    return <QuestionView getQuestion={this.getQuestion}
                         userId={this.state.userId}
                         title={this.state.title}
                         category={this.state.questionCategory}
                         questionId={this.state.questionId}
                         content={this.state.content}
                         selections={this.state.selections} />
  }
}

export default WrongAnswerQuestionView;

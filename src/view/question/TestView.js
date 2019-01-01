import React, { Component } from 'react';
import ajax from 'axios'
import URLS from '../../server/urlConstants';
import QuestionView from './QuestionView'
import Selection from './Selection';

class WrongAnswerQuestionView extends Component {
  state = {
    title: 'Test',
    questionCategory: 'Question',
    question: '문제를 읽어오는 중입니다...',
    selections: []
  };

  getQuestion = () => {
    ajax.get(URLS.psService('/question'))
      .then((res) => {
        this.setState({
          questionCategory: res.data.questionCategory.name,
          question: res.data.content,
          selections: res.data.selections.map(
            selection => (<Selection key={selection.selectionId} selection={selection} requestEmail={this.props.requestEmail}/>)
          )
        })
      })
  };

  componentWillMount() {
    this.getQuestion();
  }

  render() {
    return <QuestionView getQuestion={this.getQuestion}
                         title={this.state.title}
                         category={this.state.questionCategory}
                         question={this.state.question}
                         selections={this.state.selections}/>
  }
}

export default WrongAnswerQuestionView;

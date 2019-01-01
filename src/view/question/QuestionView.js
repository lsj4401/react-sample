import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Selection from './Selection';
import ajax from 'axios';
import URLS from '../../server/urlConstants';

class QuestionView extends Component {
  static defaultProps = {
    title: 'Random Question',
    category: 'Question',
    content: '문제를 읽어오는 중입니다...',
    selections: []
  };

  state = {
    selections: []
  };

  isFirst = true;

  getQuestion = () => {
    this.isFirst = true;
    this.props.getQuestion();
  };

  select = (correct) => {
    if (this.isFirst) {
      this.isFirst = false;
      ajax.post(URLS.psService('/question/solve'), {
        userId: this.props.userId,
        questionId: this.props.questionId,
        correct: correct
      }, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      }).then((res) => {
      })
    }
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      selections: nextProps.selections.map(
        (selection, index) => (<Selection key={index} content={selection.content} correct={selection.correct} select={this.select} />)
      )
    });
  }

  render() {
    const nextBtnStyle = {
      marginTop: '-7px',
      cssFloat: 'right'
    };

    return (
      <Container>
        <div className="alert alert-primary" role="alert" style={{ marginTop: '10px' }}>
          {this.props.title}
          <button onClick={this.getQuestion} className='btn btn-success' style={nextBtnStyle}>NEXT</button>
        </div>
        <div className="card">
          <div className="card-header">
            {this.props.category}
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.content}</p>
            {this.state.selections}
          </div>
        </div>
      </Container>
    )
  }
}

export default QuestionView;

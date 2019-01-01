import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import AddSelection from './AddSelections';
import ajax from 'axios';
import URLS from '../../server/urlConstants';

class RandomQuestionView extends Component {
  addSelections = [{}, {}, {}, {}];
  state = {
    userId: 1,
    category: 'category',
    content: '',
  };

  changeAddSelection = (addSelection) => {
    this.addSelections[addSelection.index] = {
        content: addSelection.content,
        correct: addSelection.correct === 'on'
      }
  };

  changeContent = (event) => {
    console.log(event.target.value);
    this.setState({
      content: event.target.value
    })
  };

  addQuestion = () => {
    ajax.post(URLS.psService('/question/add'), {
      category: this.state.category,
      content: this.state.content,
      selectionsDto: this.addSelections
    }, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    }).then((res) => {
      alert("등록 되었습니다.");
    })
  };

  render() {
    return (
      <Container>
        <div className="alert alert-primary" role="alert" style={{ marginTop: '10px' }}>
          Add Question
          <Button className='btn btn-success' style={{
            marginTop: '-7px',
            cssFloat: 'right'
          }} onClick={this.addQuestion}>ADD</Button>
        </div>
        <div className="card">
          <div className="card-header">
            <textarea style={{ width: '100%' }} placeholder='Please enter the content of the question'
                      onChange={this.changeContent}>{this.state.defaultValue}</textarea>
          </div>
          <div className="card-body">
            <AddSelection index={0} changeAddSelection={this.changeAddSelection} />
            <AddSelection index={1} changeAddSelection={this.changeAddSelection} />
            <AddSelection index={2} changeAddSelection={this.changeAddSelection} />
            <AddSelection index={3} changeAddSelection={this.changeAddSelection} />
          </div>
        </div>
      </Container>
    )
  }
}

export default RandomQuestionView;

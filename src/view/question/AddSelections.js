import React, { Component } from 'react';

export default class AddSelection extends Component {
  state = {
    content: '',
    correct: false
  };

  changeCorrect = (event) => {
    this.setState({
      ...this.state,
      correct: event.target.value
    });
    this.props.changeAddSelection({
      index: this.props.index,
      content: this.state.content,
      correct: event.target.value
    });
  };

  changeContent = (event) => {
    this.setState({
      ...this.state,
      content: event.target.value
    });
    this.props.changeAddSelection({
      index: this.props.index,
      content: event.target.value,
      correct: this.state.correct
    });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" style={{width:'20px', height:'20px'}} onChange={this.changeCorrect} />
          </div>
        </div>
        <input type="text" className="form-control" placeholder={this.props.index} onChange={this.changeContent} />
      </div>
    )
  }
}

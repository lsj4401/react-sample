import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Selection extends Component {
  static defaultProps = {
    selection: {
      content: '',
      correct: false
    }
  };

  state = {
    buttonColor: 'primary'
  };

  select = () => {
    this.props.select(this.props.correct);
    if (this.props.correct) {
      this.setState({
        buttonColor: 'success'
      });
    } else {
      this.setState({
        buttonColor: 'danger'
      })
    }
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      content: nextContext.content,
      buttonColor: 'primary'
    })
  }

  render() {
    return (
      <span className='input-group mb-1'>
        <Button onClick={this.select} color={this.state.buttonColor}>{this.props.content}</Button>{' '}
      </span>
    )
  }
}

export default Selection;

import React, { Component } from 'react';
import { Container } from 'reactstrap';

class LoginView extends Component {
  state = {
    email: 'xxx@xxx.com'
  };

  render() {
    return (
      <Container>
        {this.state.email}
      </Container>
    )
  }
}

export default LoginView;



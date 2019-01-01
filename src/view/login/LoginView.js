import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class LoginView extends Component {
  render() {
    const facebookStyle = {
      'overflow': 'hidden',
      'textAlign': 'center',
      'marginTop': '50px'
    };

    const responseFacebook = (response) => {
      this.props.getQuestionView(response.email);
    };

    const componentClicked = () => {

    };

    return (
      <div style={facebookStyle}>
        <FacebookLogin
          appId='2151678241739137'
          fields='email'
          onClick={componentClicked}
          callback={responseFacebook}
          autoLoad={false}
          icon="fa-facebook-square"
          textButton={'Log in with Facebook'}
        />
      </div>
    )
  }
}

export default LoginView;



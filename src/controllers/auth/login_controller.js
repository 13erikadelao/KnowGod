import React, { Component } from 'react';
import { connect } from 'react-redux';

//customs
import Login from '../../screens/auth/login';

//actions
import { INIT_SESSION } from '../../actions/auth';

class LoginController extends Component {

  onPressLogin = () => {
    const { dispatch } = this.props;

    dispatch({
      type: INIT_SESSION,
      payload: {
        authorize: true
      }
    });
  }

  render() {
    return (
      <Login
        onPressLogin={() => this.onPressLogin()}
      />
    );
  }
}

export default connect()(LoginController);
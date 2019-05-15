import React, { Component } from 'react';
import { connect } from 'react-redux';

//customs
import Home from '../../screens/app/home';

//actions
import { DESTROY_SESSION } from '../../actions/auth';

class HomeController extends Component {
  onDestroySession = () => {
    const { dispatch } = this.props;

    dispatch({
      type: DESTROY_SESSION,
      payload: {}
    });
  }

  render() {
    return (
      <Home
        onDestroySession={() => this.onDestroySession()}
      />
    );
  }
}

export default connect()(HomeController);
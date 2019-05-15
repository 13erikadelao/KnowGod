import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';

//routes
import AuthNavigation from '../routes/auth';
import AppNavigation from '../routes/app';

class SplashController extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { authorize } = this.props;

    if (!authorize) {
      return <AuthNavigation />
    }

    return <AppNavigation />
  }
}

const mapStateToProps = (state) => ({
  authorize: state.auth.authorize
});

export default connect(mapStateToProps)(SplashController);
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import { store, persistor } from './store';
import './src/utils/network_debugger';

import SplashController from './src/controllers/splash_controller';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <Root>
            <SplashController />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
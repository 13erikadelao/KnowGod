import { createAppContainer, createStackNavigator } from 'react-navigation';

// controllers
import Login from '../controllers/auth/login_controller';

const authStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const authNavigator = createAppContainer(authStackNavigator);

export default authNavigator;
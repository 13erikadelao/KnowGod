import { createAppContainer, createStackNavigator } from 'react-navigation';

// controllers
import Home from '../controllers/app/home_controller';

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const appNavigator = createAppContainer(appStackNavigator);

export default appNavigator;
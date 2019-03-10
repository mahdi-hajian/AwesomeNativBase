// remove node_modules
// npm install
// npm install --save react-navigation
// npm install --save react-native-gesture-handler
// react-native link

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './components/Home';

const RootNavigation = createStackNavigator({
    Home: { screen: Home },
},
{
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal'
}
);
const Container = createAppContainer(RootNavigation);
export default Container; 

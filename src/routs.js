import { createStackNavigator } from 'react-navigation';
import { Home } from './components/Home';

const RootNavigation = createStackNavigator({
    Home: { screen: Home },
},
{
    headerMode: 'none',
    mode: 'modal'
}
);

export { RootNavigation };

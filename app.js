import Exponent from 'exponent';
import { StackNavigator } from 'react-navigation';
import ListScreen from './src/screens/ListScreen';
import LocationDetailScreen from './src/screens/LocationDetailScreen';

const App = StackNavigator({
  Home: { screen: ListScreen },
  Detail: { screen: LocationDetailScreen }
});


Exponent.registerRootComponent(App);

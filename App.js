import { createStackNavigator } from 'react-navigation';

// Page Route 
import HomePage from './page/HomePage'
import DetailsPage from './page/DetailsPage'
import SearchPage from './page/SearchPage'

const RootStack = createStackNavigator(
  {
    Home: HomePage,
    Details: DetailsPage,
    Search: SearchPage
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
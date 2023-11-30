import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Store } from './src/redux/store';
import Home from './src/components/Home';
import AddUser from './src/components/AddUser';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

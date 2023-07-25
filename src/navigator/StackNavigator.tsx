import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonScreen from '../screens/PersonScreen';

export type RouteStackParams = {
  Page1: undefined,
  Page2: undefined,
  Page3: undefined,
  Person: { id: number, name: string }
}

const Stack = createStackNavigator<RouteStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Page1" options={{ title: 'Home' }} component={Page1Screen} />
      <Stack.Screen name="Page2" options={{ title: 'About' }} component={Page2Screen} />
      <Stack.Screen name="Page3" options={{ title: 'Settings' }} component={Page3Screen} />
      <Stack.Screen name="Person" options={{ title: 'Person' }} component={PersonScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator


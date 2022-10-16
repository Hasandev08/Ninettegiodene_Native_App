import AccountScreen from './app/screens/AccountScreen'
import LoginScreen from './app/screens/LoginScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import SignUpScreen from './app/screens/SignUpScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Account' component={AccountScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

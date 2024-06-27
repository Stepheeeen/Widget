// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GitHubStreakWidget from "./src/component/GithubWidget";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={GitHubStreakWidget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

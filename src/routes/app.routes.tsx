import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import AddToDo from '../pages/AddToDo';

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#7159C1' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Details" component={Details} />
      <App.Screen name="AddToDo" component={AddToDo} />
    </App.Navigator>
  );
}
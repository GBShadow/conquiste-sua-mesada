import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import AddToDo from "../pages/AddToDo";
import KidProfile from "../pages/KidProfile";
import AddKid from "../pages/AddKid";
import EditProfile from "../pages/EditProfile";
import Success2 from "../pages/Success2";

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#7159C1" },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Details" component={Details} />
      <App.Screen name="AddToDo" component={AddToDo} />
      <App.Screen name="AddKid" component={AddKid} />
      <App.Screen name="KidProfile" component={KidProfile} />
      <App.Screen name="EditProfile" component={EditProfile} />
      <App.Screen name="Success2" component={Success2} />
    </App.Navigator>
  );
}

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppRoutes from "./app.routes";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContentOptions={{
        activeBackgroundColor: "#8D79CD",
        activeTintColor: "#fff",
        labelStyle: {
          fontSize: 19,
          padding: 10,
          color: "#fff",
        },
      }}
      drawerStyle={{
        backgroundColor: "#4D3795",
        width: 190,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={AppRoutes}
        options={{
          title: "Dino",
        }}
      />
    </Drawer.Navigator>
  );
}

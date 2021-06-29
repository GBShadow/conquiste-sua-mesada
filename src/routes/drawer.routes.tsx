import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent";

import AppRoutes from "./app.routes";
import { useAuth } from "../hooks/auth";

const Drawer = createDrawerNavigator();

export default function App() {
  const { user } = useAuth();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent user={user} props={{ ...props }} />
      )}
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
        width: 210,
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

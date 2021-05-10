import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab'

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular, 
    RobotoSlab_500Medium, 
    RobotoSlab_600SemiBold, 
    RobotoSlab_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#7159c1' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  )
};

export default App;
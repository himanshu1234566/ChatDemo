import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <NavigationContainer> */}
        <PaperProvider>
          {/* <AuthProvider> */}
            <Route />
          {/* </AuthProvider> */}
        </PaperProvider>
      {/* </NavigationContainer> */}
    </SafeAreaView>
  );
};

export default App;
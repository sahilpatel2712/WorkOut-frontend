import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import {makeStore} from './redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
 
  return (
    <Provider store={makeStore()}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;

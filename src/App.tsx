import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import {makeStore} from './redux/store';

const App = () => {
  return (
    <Provider store={makeStore()}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

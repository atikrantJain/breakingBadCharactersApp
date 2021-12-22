import React from 'react';
import {Provider} from 'react-redux';
import {MainStack} from './src/navigations';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <MainStack />
    </Provider>
  );
};

export default App;

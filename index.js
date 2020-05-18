import {AppRegistry} from 'react-native';
import React from 'react';

import {name as appName} from './app.json';

/* Redux */
import {Provider} from 'react-redux';
import {store} from './src/redux';

import Navigator from './src/navigation';

const myAppWithStore = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => myAppWithStore);

import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// components
import Header from './components/Header';
import Personajes from './components/Personajes';

import ModalProvider from './context/ModalContext';

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Header></Header>
        <Personajes></Personajes>
      </ModalProvider>
    </Provider>
  );
}

export default App;

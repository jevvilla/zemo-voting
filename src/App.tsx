import React from 'react';

import { Home } from './screens/Home';
import { Header, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

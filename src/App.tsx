import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home, HowItWorks } from './screens';
import { Header, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howitworks" component={HowItWorks} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

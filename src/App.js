import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { IndexPage } from './filings/IndexPage';
import { AddPage } from './filings/AddPage';
import { Header } from './components/Header';

function App() {
  return (
      <BrowserRouter>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route path="/" exact="true">
              <IndexPage />
            </Route>
            <Route path="/add" exact="true">
              <AddPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
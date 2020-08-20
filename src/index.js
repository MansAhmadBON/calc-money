import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Calc, TextPage } from './pages';
import { Header } from './components';

import './sass/index.scss';

const App = () => (
    <BrowserRouter>
        <>
            <Header/>
            <Switch>
                <Route path="/" render={() => <Calc/>} exact/>
                <Route path="/text" render={() => <TextPage/>}/>
            </Switch>
        </>
    </BrowserRouter>
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
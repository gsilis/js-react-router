import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';

const Pages = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path={ '/about' } component={ About } />
        <Route path={ '/contact' } component={ Contact } />
        <Route path={ '/' } component={ Home } />
      </Switch>
    </Fragment>
  );
};

export default Pages;

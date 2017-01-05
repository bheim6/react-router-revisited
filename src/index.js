import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'

import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Destination from './destination'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/about" component={About} />
        <Match pattern="/about/:destination" component={Destination} />
        <Match pattern="/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

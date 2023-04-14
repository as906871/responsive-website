import React from 'react';

import { Footer, Possibility, Blog, Features, Header } from './containers';
import { Brand, CTA, Navbar } from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <CTA />
    <Blog />
    <Possibility />
    <Brand />
    <Footer />
  </div>
);

export default App;

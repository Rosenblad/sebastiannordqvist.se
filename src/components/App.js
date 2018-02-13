/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { hot } from 'react-hot-loader';

import '../styles/styles.css';

import AnimatedCode from './Sections/AnimatedCode';
import Intro from './Sections/Intro';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Competence from './Sections/Competence';
import AboutMe from './Sections/AboutMe';
import Footer from './Sections/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AnimatedCode />
        <div className="content">
          <div className="container-fluid">
            <Intro />
            <Projects />
            <Experience />
            <Competence />
            <AboutMe />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);

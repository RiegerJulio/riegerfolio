import React, { Component } from 'react'

import About from '../components/About';
import Form from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Projects />
        <About />
        <Form />
      </div>
    )
  }
}

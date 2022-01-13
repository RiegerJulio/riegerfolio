import React, { Component } from 'react'
import M from 'materialize-css';

export default class Projects extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, {});
    });
  }

  render() {
    return (
      <div>
         <div className="slider">
    <ul className="slides">
      <li>
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="teste" /> 
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="teste" /> 
        <div className="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="teste" /> 
        <div className="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="teste" /> 
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
        <button><a href="https://github.com/riegerjulio">Veja meu repositório Completo de Projetos</a></button>
        <h1>Kit de Habilidades</h1>
        <ul>
          <li>- HTML 5</li>
          <li>- CSS 3</li>
          <li>- Flexbox e Grid Layout</li>
          <li>- Layout Responsivo - Mobile First</li>
          <li>- Materialize CSS e Bootstrap</li>
          <li>- Javascript ES6</li>
          <li>- Fetch API</li>
          <li>- React</li>
          <li>- Jest e RTL(TDD)</li>
          <li>- Versionamento com Git</li>
        </ul>
      </div>
    )
  }
}

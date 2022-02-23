import React, { Component } from 'react';
import M from 'materialize-css';

import projeto1 from '../images/tryunfo_demo.png';

export default class Projects extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, {});
      // var elems2 = document.querySelectorAll('.materialboxed');
      // var instances2 = M.Materialbox.init(elems2, {});
    });
  }

  render() {
    return (
      <section>
        <div className="slider-container">
          <div class="slider">
            <ul class="slides">
              <li>
                <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="projeto1" />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  <div className="slider-button-container">
                    <button className="button-slider">Preview</button>
                    <button className="button-slider">Repositório</button>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="projeto1"/>
                <div class="caption center-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  <div className="slider-button-container">
                    <button className="button-slider">Preview</button>
                    <button className="button-slider">Repositório</button>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="projeto1"/>
                <div class="caption center-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  <div className="slider-button-container">
                    <button className="button-slider">Preview</button>
                    <button className="button-slider">Repositório</button>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="projeto1"/>
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  <div className="slider-button-container">
                    <button className="button-slider">Preview</button>
                    <button className="button-slider">Repositório</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="button-container">
          <a href="https://github.com/riegerjulio" target="_blank" rel="noreferrer">
            <button className="button-git">Veja meu repositório Completo de Projetos</button>
          </a>
        </div>
        <h1>Kit de Habilidades</h1>
        <div className="skills-container">
          <div>
            <h2>Front-End</h2>
            <ul>
              <li>- HTML 5</li>
              <li>- CSS 3</li>
              <li>- Flexbox e Grid Layout</li>
              <li>- Layout Responsivo - Mobile First</li>
              <li>- Materialize CSS e Bootstrap</li>
              <li>- Javascript ES6</li>
              <li>- Fetch API</li>
              <li>- React</li>
              <li>- Redux</li>
              <li>- Hooks e Context API</li>
              <li>- Jest</li>
              <li>- React Testing Library(TDD)</li>
              <li>- Versionamento com Git</li>
            </ul>
          </div>
          <div>
            <h2>Back-End</h2>
            <ul>
              <li>- Docker</li>
              <li>- MySQL</li>
              <li>- Carregando...</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

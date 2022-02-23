import React, { Component } from 'react';
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
      <section>
        <div className="slider-container">
          <div class="slider">
            <ul class="slides">
              <li className="slider-img-1">
                <div class="caption center-align">
                  <h3>Projeto Trivia</h3>
                  <h5 class="light grey-text text-lighten-3">Jogo de Perguntas e Respostas.</h5>
                  <div className="slider-button-container">
                    <a href="https://riegertrivia.netlify.app/" target="_blank" rel="noreferrer">
                      <button className="button-slider">Preview</button>
                    </a>
                    <a href="https://github.com/RiegerJulio/TriviaGame" target="_blank" rel="noreferrer">
                      <button className="button-slider">Repositório</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="slider-img-2">
                <div class="caption center-align">
                  <h3>Rieger Wallet</h3>
                  <h5 class="light grey-text text-lighten-3">Carteira Virtual</h5>
                  <div className="slider-button-container">
                    <a href="https://riegerwallet.netlify.app" target="_blank" rel="noreferrer">
                      <button className="button-slider">Preview</button>
                    </a>
                    <a href="https://github.com/RiegerJulio/CryptoWallet" target="_blank" rel="noreferrer">
                      <button className="button-slider">Repositório</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="slider-img-3">
                <div class="caption center-align">
                  <h3>RiegerFy</h3>
                  <h5 class="light grey-text text-lighten-3">Um clone do Itunes</h5>
                  <div className="slider-button-container">
                   <a href="https://clonetunes.netlify.app" target="_blank" rel="noreferrer">
                      <button className="button-slider">Preview</button>
                    </a>
                    <a href="https://github.com/RiegerJulio/CloneTunes" target="_blank" rel="noreferrer">
                      <button className="button-slider">Repositório</button>
                    </a>
                  </div>
                </div>
              </li>
              <li className="slider-img-4">
                <div class="caption center-align">
                  <h3>LuneDev</h3>
                  <h5 class="light grey-text text-lighten-3">Um site para uma Startup</h5>
                  <div className="slider-button-container">
                    <a href="https://lunedev.netlify.app" target="_blank" rel="noreferrer">
                      <button className="button-slider">Preview</button>
                    </a>
                    <a href="https://github.com/RiegerJulio/LuneDevSite" target="_blank" rel="noreferrer">
                      <button className="button-slider">Repositório</button>
                    </a>
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
        <h1 id="portfolio">Kit de Habilidades</h1>
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

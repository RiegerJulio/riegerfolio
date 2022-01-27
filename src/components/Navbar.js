import React, { Component } from 'react';
import M from 'materialize-css';

export default class Navbar extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {edge: 'right'});
    });
  }
  
  render() {
    return (
    <>
      <nav>
        <div className="nav-wrapper amber">
          <a to="#" className="brand-logo left indigo-text text-darken-4">RiegerFolio</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a to="#portfolio">Portfólio</a></li>
            <li><a to="#sobremim">Sobre Mim</a></li>
            <li><a to="#">Contato</a></li>
          </ul>
        </div>
      </nav>   

      <ul id="slide-out" className="sidenav amber">
        <div className="sidenav-item">
          <li><a href="#!" className="sidenav-close indigo-text text-darken-4">Home</a></li>
        </div>
        <div className="sidenav-item">
          <li><a href="#!" className="sidenav-close indigo-text text-darken-4">Portfólio</a></li>
        </div>
        <div className="sidenav-item">
          <li><a href="#!" className="sidenav-close indigo-text text-darken-4">Sobre Mim</a></li>
        </div>
        <div className="sidenav-item">
          <li><a href="#!" className="sidenav-close indigo-text text-darken-4">Contato</a></li>
        </div>
      </ul>
      <a href="#" data-target="slide-out" className="right sidenav-trigger hide-on-large-only btn-floating pulse indigo darken-4"><i className="medium material-icons">menu</i></a>    
    </>
    )
  }
}

// falta acertar o comportamento do botão sidenav e acertar o padding na versão web
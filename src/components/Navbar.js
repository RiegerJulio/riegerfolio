import React, { Component } from 'react'
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
      <div className="nav-wrapper">
        <a to="#" className="brand-logo">RiegerFolio</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a to="#">Portfólio</a></li>
          <li><a to="#">Sobre Mim</a></li>
          <li><a to="#">Contato</a></li>
        </ul>
      </div>
    </nav>   

    <ul id="slide-out" className="sidenav">
      <li><a href="#!" className="sidenav-close">Home</a></li>
      <li><a href="#!" className="sidenav-close">Portfólio</a></li>
      <li><a href="#!" className="sidenav-close">Sobre Mim</a></li>
      <li><a href="#!" className="sidenav-close">Contato</a></li>
    </ul>
    <a href="#" data-target="slide-out" className="right sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></a>    
    </>
    )
  }
}

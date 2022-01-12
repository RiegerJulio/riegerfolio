import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">RiegerFolio</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Portfólio</a></li>
          <li><a href="#">Sobre Mim</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>       
    )
  }
}

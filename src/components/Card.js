import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="https://ca.slack-edge.com/TMDDFEPFU-U02FHMLRYN4-f4157b50ecae-512" alt="img-gero"/>
            <span class="card-title">Card Title</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

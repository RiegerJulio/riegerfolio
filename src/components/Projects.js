import React, { Component } from 'react'
import Card from "./Card"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <button><a href="https://github.com/riegerjulio">Veja meu repositório Completo de Projetos</a></button>
        <h1>Kit de Habilidades</h1>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Flexbox e Grid Layout</li>
          <li>Layout Responsivo - Mobile First</li>
          <li>Materialize CSS e Bootstrap</li>
          <li>Javascript ES6</li>
          <li>Fetch API</li>
          <li>React</li>
          <li>Jest e RTL(TDD)</li>
          <li>Versionamento com Git</li>
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <h2>"Chega de me stalkear, Vamos nos conectar." - Julio Rieger</h2>
        <form id="userForm">
            <label htmlFor="userName">
              Nome
            </label>
              <input
                onChange={this.handleChange}
                type="text"
                name="userName"
                id="userName"
                required
              />
            <label htmlFor="userEmail">
              Email
            </label>
              <input
                onChange={this.handleChange}
                type="email"
                name="userEmail"
                id="userEmail"
                required
              />
            <label htmlFor="userText" className="message">
              Como podemos te ajudar?
            </label>
              <textarea
                onChange={this.handleChange}
                name="userText"
                id="userText"
                form="userForm"
                required
              />
            <button type="submit">Enviar</button>
          </form>
      </div>
    )
  }
}

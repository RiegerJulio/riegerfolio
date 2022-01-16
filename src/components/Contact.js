import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <section>
        <h2>"Chega de me stalkear, Vamos nos conectar." - Julio Rieger</h2>
     <div className="row">
    <form>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">Nome</label>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Mensagem</label>
        </div>
        <button class="btn waves-effect waves-light btn-submit" type="submit" name="action">Enviar
          <i class="material-icons right">send</i>
        </button>
      </div>

    </form>
    </div>
      </section>
    )
  }
}

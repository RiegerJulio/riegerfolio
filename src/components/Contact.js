import React, { Component } from 'react'
import emailjs from '@emailjs/browser';

export default class Form extends Component {
  render() {

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_sljkuf9', 'template_4e4ipfa', e.target, 'user_FGKdgSmLEbSxK5iXzWV0s').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
    };

    return (
      <section>
        <h2>"Chega de me stalkear, Vamos nos conectar." - Julio Rieger</h2>
     <div className="row">
    <form onSubmit={sendEmail}>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" name="name"/>
          <label for="first_name">Nome</label>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" class="validate" name="email"/>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" name="message"></textarea>
          <label for="textarea1">Mensagem</label>
        </div>
        <button class="btn waves-effect waves-light btn-submit indigo darken-4" type="submit" name="action">Enviar
          <i class="material-icons right">send</i>
        </button>
      </div>

    </form>
    </div>
      </section>
    )
  }
}

// resolver bug de apertar o botão varias vezes
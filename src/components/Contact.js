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
      <section id="contact">
        <h2>"Chega de me stalkear, Vamos nos conectar." - Julio Rieger</h2>
      <div className="row">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate" name="name"/>
              <label for="first_name"><span className="form-field">Nome</span></label>
            </div>
            <div className="input-field col s12">
              <input id="email" type="email" class="validate" name="email"/>
              <label for="email"><span className="form-field">Email</span></label>
            </div>
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" name="message"></textarea>
              <label for="textarea1"><span className="form-field">Mensagem</span></label>
            </div>
            <button class="btn-submit" type="submit" name="action">
              <span>Enviar</span>
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
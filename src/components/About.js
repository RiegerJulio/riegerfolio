import React, { Component } from 'react'
import riegerIMG from "../images/icon_julio.png"
import {FaGithubAlt, FaLinkedinIn} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

export default class About extends Component {
  render() {
    return (
      <article>
         <h2>"Eu prefiro ser temido ou amado? Fácil, ambos. Quero que as pessoas tenham medo do quanto elas me amam  ." - Michael Scott.</h2>
        <div className="social-container">         
          <img className="rieger-img" src={ riegerIMG } alt="rieger"/>
          <h2>Julio Rieger</h2>
          <div className="social-icons">
            <a href="https://github.com/riegerJulio/" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
            <a href="https://www.linkedin.com/in/juliorieger/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:riegerproducoes@gmail.com"><FiMail /></a>
          </div>
        </div>
        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos </p>
      </article>
    )
  }
}

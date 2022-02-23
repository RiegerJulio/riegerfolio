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
          <div className="name-and-social">      
            <img className="rieger-img" src={ riegerIMG } alt="rieger"/>
            <h2>Julio Rieger</h2>
            <div className="social-icons">
              <a href="https://github.com/riegerJulio/" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
              <a href="https://www.linkedin.com/in/juliorieger/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="mailto:riegerproducoes@gmail.com"><FiMail /></a>
            </div>
          </div>
        <p>Meu nome é Rieger, tenho 28 anos e sou do Rio de Janeiro - RJ.
Desde novo, tenho paixão pela área artistica e comecei a carreira de músico aos 12 anos. Durante a vida adulta, acabei me apaixonando por multimídia e formei em na área de produção musical. Além disso, fiz comédia Stand-up por quase 2 anos.
Mas você pode estar se perguntando agora: O porque você decidiu ser desenvolvedor web?
Durante uma conversa com um amigo sobre os rumos da minha vida, fui apresentado ao mundo do desenvolvimento. No inicio eu dizia "isso nao é pra mim, eu pertenço a arte" mas logo vi que não passava de medo de conquistar novos horizontes. Medo de sair da zona de conforto. Desde então, resolvi mergulhar fundo na área de desenvolvimento e comecei um curso de  Desenvolvimento Full Stack na Trybe. Minha vida mudou completamente, agora eu percebo que programação também é arte. É dar vida aos sonhos, desejos e vontades de outras pessoas, é me expressar e ser criativo através de linhas de código. Hoje posso dizer que é isso que eu quero pro resto da minha vida. Gerar impacto através dos meus códigos.
</p>
        </div>
      </article>
    )
  }
}

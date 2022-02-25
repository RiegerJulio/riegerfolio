import React, { Component } from 'react'
import riegerIMG from "../images/Rieger_IMG.png"
import {FaGithubAlt, FaLinkedinIn} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

export default class About extends Component {
  render() {
    return (
      <article id="about-me">
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
          <p><strong>Meu nome é Rieger, tenho 28 anos e sou do Rio de Janeiro - RJ.</strong>
            <br />
            <br />
          Desde novo, tenho paixão pela área artística e comecei a carreira de músico aos 12 anos. Durante a vida adulta, acabei me apaixonando por multimídia e formei em na área de produção musical. Além disso, fiz comédia Stand-up por quase 2 anos, que é uma das minhas maiores paixões
            <br />
            <br />
          Mas você pode estar se perguntando agora: <strong>Por que você decidiu ser desenvolvedor web?</strong>
            <br />
            <br />
          Durante uma conversa com um amigo sobre os rumos da minha vida, fui apresentado ao mundo do desenvolvimento. No início eu dizia "isso nao é pra mim, eu pertenço a arte" mas logo vi que não passava de medo de conquistar novos horizontes e de sair da zona de conforto. Desde então, resolvi mergulhar fundo na área de desenvolvimento e comecei um curso de  Desenvolvimento Full Stack na <strong>Trybe</strong>. Desde então, vida mudou completamente e agora eu percebo que <strong>programação também é arte.</strong> É dar vida aos sonhos, desejos e vontades de outras pessoas, é me expressar e ser criativo através de linhas de código. Hoje posso dizer que é isso que eu quero pro resto da minha vida. <strong>Gerar impacto através dos meus códigos.</strong>
          </p>
        </div>
      </article>
    )
  }
}

import React, { Component } from 'react'
import {FaGithubAlt, FaLinkedinIn} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

export default class Footer extends Component {
  render() {
    return (
      <div>
          <footer className="page-footer amber">
          <p>© 2022, Julio Rieger</p>
          <div className="social-icons-footer">
            <a href="https://github.com/riegerJulio/" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
            <a href="https://www.linkedin.com/in/juliorieger/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:riegerproducoes@gmail.com"><FiMail /></a>
          </div>
          </footer>
      </div>
    )
  }
}

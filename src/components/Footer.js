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
            <a href="#"><FaGithubAlt/></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FiMail /></a>
          </div>
          </footer>
      </div>
    )
  }
}

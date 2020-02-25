import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import '../styles/layout.scss'

const Footer = (props)=> (
    <footer className={props.styles}>
        <a href="https://github.com/Diegodlt" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.diegodlt.info" target="_blank" rel="noopener noreferrer">
            © {new Date().getFullYear()}
        </a>
    </footer>
)

export default Footer
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">
          <main>{children}</main>
        </div>
        <footer>
          <a href="https://github.com/Diegodlt" target="_blank" rel="noopener">
            <FaLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener">
            <FaGithub />
          </a>
          <div>
            © {new Date().getFullYear()}
          </div>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

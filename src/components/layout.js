/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener">
            <i className="fab fa-linkedin"></i>
          </a>
          © {new Date().getFullYear()}
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

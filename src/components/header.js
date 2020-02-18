import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/layout.scss"

const Header = ({ siteTitle }) => (
  <div className="nav-wrapper">
    <header>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
        <p>Full Stack Developer</p>
    </header>
    <nav>
      <Link to="/">Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

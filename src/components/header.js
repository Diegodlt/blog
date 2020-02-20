import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from '@reach/router'

import "../styles/layout.scss"

const Header = (props) => {

const mainHeader = `
  <div className="nav-wrapper">
`
return(
  <Location>
      {({location})=>{
        const { pathname } = location;
        if(pathname === '/' || pathname === '/about'){
          return(
            <div className="nav-wrapper">
              <header>
                <h1>
                  <Link
                    to="/"
                  >
                    {props.siteTitle}
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
        }else{
          return(
            <div className="nav-warpper">
              <header className="secondary-header">
                <h2>
                  <Link
                    to="/"
                  >
                    {props.siteTitle}
                  </Link>
                </h2>
              </header>
            </div>
          )
        }
      }}   
  </Location>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

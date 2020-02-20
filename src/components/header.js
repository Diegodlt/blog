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
        if(location.pathname === '/'){
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
                <Link to="/page-2">About</Link>
              </nav>
            </div>
          )
        }else{
          return(
            <div className="nav-warpper">
              <header>
                <h1>
                  <Link
                    to="/"
                  >
                    {props.siteTitle}
                  </Link>
                </h1>
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

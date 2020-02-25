import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from '@reach/router'

import "../styles/layout.scss"
import { FaBookOpen, FaUser } from 'react-icons/fa'

const Header = (props) => {
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
                <Link to="/" activeClassName="active-link">
                  <div className="nav-icons">
                    <FaBookOpen />
                  </div>
                  <div>
                    Blog
                  </div>
                </Link>
                <Link to="/about" activeClassName="active-link">
                  <div className="nav-icons">
                    <FaUser />
                  </div>
                  <div>
                    About
                  </div>
                </Link>
              </nav>
            </div>
          )
        }else{
          return(
            <div className="no-nav-wrapper">
              <header>
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

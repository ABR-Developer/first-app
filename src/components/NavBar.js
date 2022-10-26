// (rfc + tab ) ES7 extension snippet : following code will be generated
// import React from 'react'

// export default function NavBar() {
  //   return (
  //     <div>
        
  //     </div>
  //   )
  // }
import React from 'react'

// (impt + tab) ES7 extension snippet : following code will be generated
  //import PropTypes from 'prop-types'
  import PropTypes from 'prop-types'                  // importing propTypes 
  import {Link} from 'react-router-dom'
  export default function NavBar(props) {
    return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>     {/*adding template literal*/}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> {props.aboutText} </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/text-form"> Text Form </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className='form-check-input' onClick={props.colorModeHandler} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor='flexSwitchCheckDefault'>{`Enable ${props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

// (Pts + tab) ES7 extension snippet : following code will be generated
  // PropTypes.string
  NavBar.propTypes = {
  title : PropTypes.string,
  aboutText : PropTypes.string
  // aboutText : PropTypes.string.isRequired                           // for required prop 
}

NavBar.defaultProps = {
  title : "Enter Title Here",
  aboutText : "Enter about text here"
}
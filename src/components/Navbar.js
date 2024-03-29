import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        id="navbar"
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container is-max-widescreen" style={{ padding: "5px 0px" }}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img className="logo" src={logo} alt="Kaldi" style={{ maxHeight: '60px'}} />
              {/* <i>Beatrice Lundquist - skräddare</i> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-hidden-touch">Tjänster</a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/tjanster/brollop-fest">
                    Bröllop & Festklänningar
                  </Link>
                  <Link className="navbar-item" to="/tjanster/barn">
                    Barn
                  </Link>
                  <Link className="navbar-item" to="/tjanster/askpasar">
                    Askpåsar
                  </Link>
                  <Link className="navbar-item" to="/tjanster/ovriga-uppdrag">
                    Övriga uppdrag
                  </Link>
                </div>
              </div>
                <Link className="navbar-item" to="/blogg">
                  Bloggen
                </Link>
                <Link className="navbar-item" to="/om-mig">
                  Om mig
                </Link>
                <Link className="navbar-item" to="/kontakt">
                  Kontakta mig
                </Link>
                <span className="navbar-item nav-description"> | 0736-63 10 82 |
                </span>
              </div>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar

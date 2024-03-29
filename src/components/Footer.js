import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" style={{ backgroundColor: "#333"}}>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em' }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter" style={{ backgroundColor: "#333"}}>
          <div className="container has-text-white-ter" style={{ paddingBottom: "3rem" }}>
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/om-mig">
                        Om mig
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blogg">
                        Bloggen
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakta mig
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/tjanster/brollop-fest">
                        Bröllop & Festklänningar
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tjanster/barn">
                        Barn
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tjanster/askpasar">
                        Askpåsar
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tjanster/ovriga-uppdrag">
                        Övriga uppdrag
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/Skr%C3%A4ddare-BeatriceL-88565934414">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/skraddarebeatricel/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

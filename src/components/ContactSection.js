import React from 'react'

const ContactSection = ({bgColor}) => {

  return (
    <div className="columns" style={{backgroundColor: bgColor, padding: '4rem 0rem' }}>
      <div className="column is-12">
        <div className="content">
          <div className="container has-text-centered">
          <h3 className="has-text-weight-semibold is-size-2 myfont">
            Funderar du över något?
            </h3>
            <a href="/kontakt" className="btn-outlined">
              kontakta mig
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import ContactSection from '../../components/ContactSection'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
      className="full-width-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(/img/kontakta-mig.jpg)`,
        backgroundPosition: `center center`,
        // backgroundAttachment: `fixed`,
        maxHeight: "500px",
        paddingTop: "75px",
      }}
    >
    <h1
      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen myfont"
      style={{
        // boxShadow:
        //   'rgb(191, 155, 48) 0.5rem 0px 0px, rgb(191, 155, 48) -0.5rem 0px 0px',
        // backgroundColor: 'rgb(191, 155, 48)',
        color: 'white',
        lineHeight: '1',
        padding: '0.25em',
      }}
    >
      Bloggen
    </h1>
    </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        <ContactSection />
      </Layout>
    )
  }
}

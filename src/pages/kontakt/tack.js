import React from 'react'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <div
      className="full-width-image"
      style={{
        // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(/img/silk.jpg)`,
        // backgroundPosition: `center 10%`,
        // backgroundAttachment: `fixed`,
        backgroundColor: "#f7f3ea",
        maxHeight: "800px",
        paddingTop: "75px",
      }}
    >
    <h1
      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen myfont"
      style={{
        // boxShadow:
        //   'rgb(191, 155, 48) 0.5rem 0px 0px, rgb(191, 155, 48) -0.5rem 0px 0px',
        // backgroundColor: 'rgb(191, 155, 48)',
        color: '#333',
        lineHeight: '1',
        padding: '0.25em',
      }}
    >
      Tack för ditt mail!
    </h1>
    </div>
  </Layout>
)

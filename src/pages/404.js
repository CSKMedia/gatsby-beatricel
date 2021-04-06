import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
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
      Sidan finns inte!
    </h1>
    </div>
    {/* <div className="container">
      <h1>Sidan finns inte</h1>
      <p>Tyvärr finns inte sidan du försöker besöka. Se över URL:en</p>
    </div> */}
  </Layout>
)

export default NotFoundPage

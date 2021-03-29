import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
// import { ary } from 'lodash'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        // backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
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
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen myfont"
          style={{
            // boxShadow:
            //   'rgb(191, 155, 48) 0.5rem 0px 0px, rgb(191, 155, 48) -0.5rem 0px 0px',
            // backgroundColor: 'rgb(191, 155, 48)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
        <div style={{display: "flex", marginTop: "2rem"}}>
          <a href="#" className="btn">Kontakta mig</a>
        </div>
      </div>
    </div>
    <section className="section section--gradient" style={{ padding: '3rem 0rem'}}>
        <div className="columns">
          <div className="column is-12">
            {/* <div className="content" style={{backgroundColor: '#f7f7f7' }}>
              <div class="container">
                <div className="tile">
                  <h1 className="title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{mainpitch.description}</h3>
                </div>
              </div>
            </div> */}
            <div className="columns" >
              <div className="column is-12">
                <div className="content" style={{backgroundColor: '#fefefe' }}>
                  <div className="container">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered myfont m-6">
                      {heading}
                    </h3>
                    {/* <p>{description}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="content" style={{ paddingBottom: "3rem"}}>
              <Features gridItems={intro.blurbs} />
            </div>
            {/* <div className="columns" style={{padding: '3rem 0rem'}}>
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  See all products
                </Link>
              </div>
            </div> */}

            <div className="columns" style={{backgroundColor: '#fff', padding: '3rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container has-text-centered">
                    <a href="#" className="btn-outlined">
                      kontakta mig
                    </a>
                  </div>
                </div>
              </div>
            </div>



            <div className="columns" style={{backgroundColor: '#fbf8f0', padding: '3rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container-fluid">
                    <div className="container">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered myfont m-6">
                      Om mig
                    </h3>
                    <div className="columns">
                      <div className="column is-6">
                      <p>
                      Jag heter Beatrice Lundqvist, är 32 år gammal och bor i Orkesta/Lindholmen (Vallentuna) där jag har min ateljé.
                      <br /> <br />
                      Mellan HT-1999 och VT 2002 läste jag ”hantverk/skrädderi (gymnasie).
                      Jag har praktiserat på stadsteatern (uppsättning ´Greta Garbo ´) och i Dublin. Där hjälpte jag till att sy till ´Riverdance´.
                      <br /> <br />
                      Jag hjälpte även till att sy kostym för en medeltida teateruppsättning och kläder till musikvideo.
                      <br /> <br />
                      VT2003 – VT2004 flyttade jag till Borås för att gå utbildningen ´Klänning/Skrädderi´.
                      <br /> <br />
                      Jag har de senaste åren från och till jobbat på stadsteatern och nu operan för olika uppsättningar.
                      </p>
                      </div>
                      <div className="column is-6 has-text-centered">
                        <img src="img/beatrice.jpg" style={{objectFit: "cover", border: "7px solid #bf9b30"}}/>
                      </div>
                    </div>
                    <div className="column is-12 has-text-centered">
                      <Link className="btn-outlined" to="/blog">
                        Läs mer om mig
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="columns" style={{backgroundColor: '#fff', padding: '3rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered myfont m-6">
                      Från bloggen
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn-filled" to="/blog">
                        Läs mer från bloggen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import ServiceGrid from '../components/ServiceGrid'
// import { ary } from 'lodash'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
}) => (
  <div>
    <div
      className="full-width-image bgPos"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        // backgroundPosition: `top left`,
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
            textAlign:'center',
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
            textAlign:'center',
          }}
        >
          {subheading}
        </h3>
        <div style={{display: "flex", marginTop: "2rem", justifyContent: "center"}}>
          <a href="/kontakt" className="btn" style={{ textAlign: "center"}}>Kontakta mig</a>
        </div>
      </div>
    </div>
    <section className="section section--gradient" style={{ padding: '3rem 0rem 0rem 0rem'}}>
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
              {/* <Features gridItems={intro.blurbs} /> */}
              <ServiceGrid />
            </div>
            {/* <div className="columns" style={{padding: '3rem 0rem'}}>
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  See all products
                </Link>
              </div>
            </div> */}



<div className="columns" style={{backgroundColor: '#f7f3ea' }}>
              <div className="column is-12" style={{padding: 0 }}>
                <div className="content">
                  <div className="container-fluid">
                    {/* <h3 className="has-text-weight-semibold is-size-2 has-text-centered myfont m-6">
                      Om mig
                    </h3> */}
                    <div className="columns is-gapless">
                      <div className="column is-6 has-text-centered" style={{lineHeight: "0px"}}>
                        <img src="img/mikaela-fix.jpg" style={{objectFit: "cover"}}/>
                      </div>
                      <div className="column is-6" style={{ minHeight: "100%", display:"flex", alignItems: "center"}}>
                        <div className="myfont" style={{padding: "0em 2em"}}>
                          <p className="is-italic quote-paragraph">
                          <span style={{fontSize: "1.45em"}}>" </span>
                          Med Beatrice känner man sig lugn och trygg ifrån första stund.
                            Hon är lyhörd för dina önskemål och öppen för det mesta men kommer samtidigt med de där kreativa tipsen som gör det där lilla extra.
                            <br />
                            <br />
                            Allt var perfekt; tygvalen, måtten, snitten och sist men inte minst - servicenivån som är något utöver det vanliga. Man kände hela vägen att Beatrice ville att man skulle vara mer än nöjd, endast det bästa är gott nog för Beatrice, det märks!
                            <span style={{fontSize: "1.45em"}}> "</span>
                          </p>
                          <span style={{display:"block", padding: "1.5rem 2rem", fontSize: "1.45em"}}> - Mikaela</span>
                          </div>
                      </div>
                    </div>
                    {/* <div className="column is-12 has-text-centered">
                      <Link className="btn-outlined" to="/blog">
                        Läs mer om mig
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="columns" style={{backgroundColor: '#fff', padding: '4rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container has-text-centered">
                  <h3 className="has-text-weight-semibold is-size-2 myfont">
                    Funderar du över något?
                    </h3>
                    <a href="#" className="btn-outlined">
                      kontakta mig
                    </a>
                  </div>
                </div>
              </div>
            </div>




            {/* <div className="columns" style={{backgroundColor: '#f7f3ea', padding: '4rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container-fluid">
                    <div className="container">
                    <div className="columns">
                      <div className="column is-6 has-text-centered">
                        <img src="img/beatrice.jpg" style={{objectFit: "cover", border: "7px solid #bf9b30"}}/>
                      </div>
                      <div className="column is-6">
                        <h3 className="has-text-weight-semibold is-size-2 myfont">
                      Skräddare Beatrice Lundquist
                    </h3>
                    <h5 className="myfont" style={{color: "#bf9b30"}}>Exklusiva textiler </h5>
                      <p className="pb-4">
                      Jag hjälper dig med alla tänkbara textiljobb!
                      Allt från barn -och festkläder till gardiner och kuddar,
                      Oavsett hur annorlunda eller speciell din förfrågan är så antar jag utmaningen med öppet sinne.
                      </p>
                      <Link className="btn-outlined" to="/blog">
                        Läs mer om mig
                      </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="columns" style={{backgroundColor: '#f7f3ea', padding: '3rem 0rem' }}>
              <div className="column is-12">
                <div className="content">
                  <div className="container">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered myfont m-6">
                      Senaste från bloggen
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn-filled" to="/blogg">
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
      }
    }
  }
`

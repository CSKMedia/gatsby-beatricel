import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery'

export const SinglePageTemplate = ({ title, image, gallery, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <div
      className="full-width-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
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
      {title}
    </h1>
    </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light myfont">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <Gallery galleryItems={gallery.images} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SinglePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SinglePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SinglePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        gallery={post.frontmatter.gallery}
        content={post.html}
      />
    </Layout>
  )
}

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SinglePage

export const singlePageQuery = graphql`
  query SinglePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gallery {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

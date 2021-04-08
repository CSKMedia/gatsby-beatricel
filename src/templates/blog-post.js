import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ContactSection from '../components/ContactSection'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {helmet || ''}
      <div
      className="full-width-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(/img/silk.jpg)`,
        backgroundPosition: `center 10%`,
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
    <section className="section" style={{ padding: '3rem 0rem 0rem 0rem'}}>
      <div className="container">
        <div className="columns" style={{ paddingBottom: "3rem"}}>
          <div className="column is-10 is-offset-1 pb-4">
            <div style={{ paddingBottom: 15 }}>
            {image ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image,
                          // alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                  ) : null}
            </div>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {/* <p>{description}</p> */}
            <PostContent content={content} />
          </div>
        </div>
      </div>
      <ContactSection bgColor="#f7f3ea"/>
      </section>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.featuredimage}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

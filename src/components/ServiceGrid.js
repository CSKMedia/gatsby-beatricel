import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ServiceGrid = ({ data }) => {

  console.log("data", data)

  return (
  <div className="container is-fluid">
    <div className="columns is-multiline">
      {data && data.allMarkdownRemark.edges.sort().map((item, index) => (
        <div key={index} className="column is-4">
          <div className="container">
            <div className="has-text-centered">
              <a href={item.node.fields.slug}>
              <div
                className="img-hover-zoom"
                style={{
                  width: '100%',
                  maxHeight: '300px', // remove on mobile
                  display: 'inline-block',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#000',
                }}
              >
                {/* <PreviewCompatibleImage imageInfo={item.node.frontmatter.image}/> */}
                <img
                  src={item.node.frontmatter.image.childImageSharp.fluid.src}
                  style={{
                    objectFit: "cover",
                    height: 300,
                    width: "100%",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.85) 100%)",
                    webkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.85) 100%)"
                }}/>
                <div className="center-text myfont">
                  <h2 style={{color: '#fff', padding: 0, margin:0 }}>{item.node.frontmatter.title}</h2>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

// ServiceGrid.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }


export default () => (
  <StaticQuery
    query={graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "single-page"}}}, sort: {fields: id}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              path
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}
    render={(data, count) => <ServiceGrid data={data} count={count} />}
  />)
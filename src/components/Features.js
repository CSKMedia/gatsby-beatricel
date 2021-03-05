import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="container is-fluid">
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.text} className="column is-4">
          <div className="container">
            <div className="has-text-centered">
              <a href="#">
              <div
                className="img-hover-zoom"
                style={{
                  width: '100%',
                  height: '350px', // remove on mobile
                  display: 'inline-block',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <PreviewCompatibleImage imageInfo={item}/>
                <div className="center-text myfont">
                  <h2 style={{color: '#fff', padding: 0, margin:0 }}>Bröllop</h2>
                </div>
              </div>
              </a>
              {/* <p>{item.text}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid

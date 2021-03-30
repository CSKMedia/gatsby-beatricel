import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Gallery = ({ galleryItems }) => {

  console.log("galleryItems", galleryItems)
  return (
  <div className="container is-fluid" style={{padding: "4rem 0"}}>
    <h2 className="title is-size-3 has-text-weight-bold is-bold-light myfont" style={{ borderBottom: "5px solid #bf9b30"}}>
      Galleri
    </h2>
    <div className="columns is-multiline">
      {galleryItems.map((item, index) => (
        <div key={index} className="column is-4" style={{minHeight: 300}}>
          <PreviewCompatibleImage style={{ objectFit: "cover", height:200}} imageInfo={item}/>
        </div>
      ))}
    </div>
  </div>
)
}

Gallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

export default Gallery

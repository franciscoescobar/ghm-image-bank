import React from "react"
import ContentLoader from "react-content-loader" 

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={475}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="475" height="350" />
  </ContentLoader>
)

export default ImageLoader;
import React from "react"
import ContentLoader from "react-content-loader" 

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={340}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="365" height="300" />
  </ContentLoader>
)

export default ImageLoader;
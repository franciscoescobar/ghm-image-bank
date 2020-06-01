import React from "react"
import ContentLoader from "react-content-loader" 

const ImageLoader = () => (
  <ContentLoader
    style={{width: "20rem"}}
    speed={2}
    width={300}
    height={320}
    viewBox="0 0 300 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="20rem" height="300" />
  </ContentLoader>
)

export default ImageLoader;
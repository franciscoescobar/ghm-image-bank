import React from "react"
import ContentLoader from "react-content-loader" 

const CategoryLoader = () => (
  <ContentLoader 
    speed={2}
    width={100}
    height={30}
    viewBox="0 0 70 25"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
     <rect x="0" y="5" rx="0" ry="0" width="75" height="15" /> 
  </ContentLoader>
)

export default CategoryLoader;
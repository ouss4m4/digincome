import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FluidImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )

      if (!image) return null

      const imageFluid = image.node.childImageSharp.fluid
      return (
        <Img
          className="rounded"
          style={{ height: "100%" }}
          alt={alt}
          fluid={imageFluid}
        />
      )
    }}
  />
)

export default FluidImg

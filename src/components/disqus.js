import React from "react"
import { useStaticQuery } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const DiscusArea = ({ id, title, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
  const siteUrl = data.site.siteMetadata?.siteUrl
  let disqusConfig = {
    url: `${siteUrl + location.pathname}`,
    identifier: id,
    title: title,
  }

  return (
    <>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DiscusArea

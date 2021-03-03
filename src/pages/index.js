import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FluidImg from "../components/Images/FluidIMG"
import "../styles/index.css"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="inner">
        <ol className="articles-wrap" style={{ listStyle: `none` }}>
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li
                key={post.fields.slug}
                className={
                  index % 2 === 0 ? "post-list-item even" : "post-list-item odd"
                }
              >
                <Link to={post.fields.slug} itemProp="url">
                  <article itemScope itemType="http://schema.org/Article">
                    <header>
                      <div className="heroimage">
                        <FluidImg filename={post.frontmatter.heroimage} />
                      </div>

                      <h2 className="headline">
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small className="date">{post.frontmatter.date}</small>
                    </header>
                    {/* <section className="description">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section> */}
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          heroimage
        }
      }
    }
  }
`

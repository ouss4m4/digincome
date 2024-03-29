import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FluidImg from "../components/Images/FluidIMG"

const AffiliatePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Affiliate Marketing Guides" />
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

export default AffiliatePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Affiliate marketing" } } }
    ) {
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

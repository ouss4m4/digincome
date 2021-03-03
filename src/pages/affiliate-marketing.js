import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FluidImg from "../components/Images/FluidIMG"
import "../styles/topic.css"

const AffiliatePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Affiliate Marketing Guides & Articles" />
      <div className="inner">
        <ol
          itemProp="list"
          className="topic-list"
          style={{ listStyle: `none` }}
        >
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug} className="topic-item">
                <Link
                  className="topic-link"
                  to={post.fields.slug}
                  itemProp="url"
                >
                  <article itemScope itemType="http://schema.org/Article">
                    <header>
                      <div className="topic-image">
                        <FluidImg filename={post.frontmatter.heroimage} />
                      </div>

                      <h2 className="topic-headline">
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small itemProp="date" className="date">{post.frontmatter.date}</small>
                    </header>
                    <section className="description">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
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

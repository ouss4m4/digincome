import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const logo = data?.logo?.childImageSharp?.fixed

  return (
    <header id="header" role="banner">
      <div className="inner" role="navigation">
        <div className="site-logo">
          <Link className="url" to="/">
            {" "}
            Digital Income
          </Link>
        </div>
        <nav role="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/affiliate-marketing">Affiliate Marketing</Link>
            </li>
            <li className="nav-item">
              <Link to="/ecom">eCommerce</Link>
            </li>
            <li className="nav-item">
              <Link to="/trading">Day Trading</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

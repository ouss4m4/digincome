import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          <a className="url" href="https://digincome.com/">
            Digital Income
          </a>
        </div>
        <nav role="navigation">
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Affiliate Marketing</a></li>
            <li className="nav-item"><a href="#">eCommerce</a></li>
            <li className="nav-item"><a href="#">Day Trading</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

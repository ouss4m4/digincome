import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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

  const [expanded, toggleExpanded] = useState(false)
  //const logo = data?.logo?.childImageSharp?.fixed
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="more"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleExpanded(!expanded)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <ul
            className={
              expanded ? "nav-list-secondary expanded" : "nav-list-secondary"
            }
          >
            <li className="nav-item-second">
              <Link to="/affiliate-marketing">Affiliate Marketing</Link>
            </li>
            <li className="nav-item-second">
              <Link to="/ecom">eCommerce</Link>
            </li>
            <li className="nav-item-second">
              <Link to="/trading">Day Trading</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

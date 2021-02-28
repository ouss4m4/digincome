import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
      <Header />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Blog by
          {` `}
          <a href="https://www.digincome.com">Digital Income</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

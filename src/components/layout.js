import React from "react"
import Header from "./header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

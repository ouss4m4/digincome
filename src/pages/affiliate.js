import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AffiliatePolicy = ({ location }) => (
  <Layout location={location} title="Digital Income Affiliate Policy">
    <SEO title="Affiliate Policy" />
    <h2 id="affiliate-policy">AFFILIATE POLICY</h2>
    <p>
      Occasionally on Digital Income websites you’ll find links to buy products
      from other partners. If you click on these links, you’ll find that the URL
      includes a small extra piece of text which identifies that the click came
      from our website. This text is an affiliate code, and it means that we get
      a small percentage of the money you spend if you choose to buy that
      product, or, in some cases, other products from the site soon after.
    </p>
    <p>
      These affiliate links help pay the costs of producing our websites and
      ensure that the content is free to you. However, it doesn’t mean that we
      are in any way indebted to any company. Nor do they or any other company
      have any influence over editorial coverage, how we rate products
    </p>
  </Layout>
)

export default AffiliatePolicy

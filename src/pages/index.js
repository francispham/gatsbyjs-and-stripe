import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Product from "../components/product"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Product Listings</h1>
    <Product />
    <Product />
    <Product />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

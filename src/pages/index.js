import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_powbTm7SuxCdQafatiw61KQm")
  // debugger
  
  const placeOrder = sku => {
    stripe
      .redirectToCheckout({
        items: [{ sku, quantity: 1 }],
  
        successUrl: `http://localhost:8000/success`,
        cancelUrl: `http://localhost:8000/cancel`,
      })
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <article>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <h3>Spring Rolls</h3>
          <button onClick={() => placeOrder("sku_HLZ7gmqJvWLMTd")}>
            Buy Me
          </button>
        </article>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

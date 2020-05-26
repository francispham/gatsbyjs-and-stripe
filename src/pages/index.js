import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background: var(--purp);
  margin: 1rem;
  padding: 10px 40px;
  color: var(--xtraPurp);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--darkPurp);
    color: var(--bg);
  }
`

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
          <Button onClick={() => placeOrder("sku_HLZ7gmqJvWLMTd")}>
            Buy Me
          </Button>
        </article>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
